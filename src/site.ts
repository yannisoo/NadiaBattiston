import { useHead, useSeoMeta } from "@unhead/vue";

export const SITE_URL = "https://www.nadia-battiston.fr";

export const CONTACT = {
  phone: "06 12 79 13 07",
  phoneHref: "tel:+33612791307",
  email: "n.battiston@outlook.fr",
  instagram: "@battistonnadia",
  instagramUrl: "https://www.instagram.com/battistonnadia/",
};

interface PageSeo {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}

// Title, description, canonical URL and social preview tags for one page
export function usePageSeo({ title, description, path, noindex }: PageSeo) {
  const url = SITE_URL + path;
  useSeoMeta({
    title,
    description,
    robots: noindex ? "noindex" : "index, follow, max-image-preview:large",
    ogType: "website",
    ogSiteName: "Nadia Battiston",
    ogLocale: "fr_FR",
    ogTitle: title,
    ogDescription: description,
    ogUrl: url,
    ogImage: `${SITE_URL}/og-image.jpg`,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: "Nadia Battiston, comédienne voix off",
    twitterCard: "summary_large_image",
  });
  if (!noindex) {
    useHead({ link: [{ rel: "canonical", href: url }] });
  }
}

export function useJsonLd(data: object) {
  useHead({
    script: [{ type: "application/ld+json", innerHTML: JSON.stringify(data) }],
  });
}

export const PERSON_ID = `${SITE_URL}/#nadia-battiston`;

export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Nadia Battiston – Comédienne voix off",
      inLanguage: "fr-FR",
      publisher: { "@id": PERSON_ID },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Nadia Battiston",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/images/photos/4-640.webp`,
      jobTitle: "Comédienne voix off",
      description:
        "Comédienne voix off depuis plus de 20 ans : publicité TV, radio et internet, documentaire, doublage et film institutionnel.",
      email: `mailto:${CONTACT.email}`,
      telephone: "+33612791307",
      sameAs: [CONTACT.instagramUrl],
      knowsLanguage: "fr",
      knowsAbout: [
        "Voix off",
        "Doublage",
        "Publicité TV et radio",
        "Narration de documentaire",
        "Film institutionnel",
      ],
    },
  ],
};
