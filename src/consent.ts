import { ref } from "vue";

// Google Analytics is only loaded once the visitor has accepted it (CNIL rules):
// no tag, no request to Google and no cookie before that.
const GA_ID = "G-B1WFK5F13B";
const STORAGE_KEY = "cookie-consent";
// The CNIL recommends asking again after 6 months
const CHOICE_MAX_AGE = 1000 * 60 * 60 * 24 * 182;
// ...and caps analytics cookies at 13 months (GA defaults to 2 years)
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 395;

type Consent = "granted" | "denied";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    [gaDisable: `ga-disable-${string}`]: boolean;
  }
}

export const cookieBannerOpen = ref(false);

let analyticsLoaded = false;

function readConsent(): Consent | null {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null");
    if (saved && Date.now() - saved.date < CHOICE_MAX_AGE) return saved.value;
  } catch {
    // Storage unavailable (private mode…): ask again
  }
  return null;
}

function saveConsent(value: Consent) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, date: Date.now() }));
  } catch {
    // The choice simply won't be remembered
  }
}

function loadAnalytics() {
  if (analyticsLoaded) return;
  analyticsLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js expects the `arguments` object itself
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { cookie_expires: COOKIE_MAX_AGE_SECONDS });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

function deleteAnalyticsCookies() {
  const domains = ["", location.hostname, `.${location.hostname.replace(/^www\./, "")}`];
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0].trim();
    if (name !== "_ga" && !name.startsWith("_ga_")) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
    }
  }
}

// Called once on the client: applies a previous choice or shows the banner
export function initConsent() {
  const consent = readConsent();
  if (consent === "granted") {
    loadAnalytics();
  } else {
    // Also clears cookies left by the old site, which loaded GA without asking
    deleteAnalyticsCookies();
  }
  cookieBannerOpen.value = consent === null;
}

export function acceptCookies() {
  saveConsent("granted");
  cookieBannerOpen.value = false;
  loadAnalytics();
}

export function refuseCookies() {
  saveConsent("denied");
  cookieBannerOpen.value = false;
  if (analyticsLoaded) {
    // Consent withdrawn: stop gtag.js first, otherwise it rewrites its cookies
    // while the page unloads, then remove them and reload without it
    window[`ga-disable-${GA_ID}`] = true;
    window.gtag("consent", "update", { analytics_storage: "denied" });
    deleteAnalyticsCookies();
    location.reload();
  }
}

export function openCookieSettings() {
  cookieBannerOpen.value = true;
}
