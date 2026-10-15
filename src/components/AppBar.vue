<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { useHead } from "@unhead/vue";
import AppIcon from "./AppIcon.vue";

const route = useRoute();
const expanded = ref(false);

const links = [
  { to: { path: "/", hash: "#extraits" }, label: "Extraits" },
  { to: "/studio", label: "Studio" },
  { to: "/photos", label: "Photos" },
  { to: "/a-propos", label: "À propos" },
];

watch(() => route.fullPath, () => (expanded.value = false));

useHead({
  bodyAttrs: { class: computed(() => (expanded.value ? "no-scroll" : "")) },
});

const closeOnEscape = (event: KeyboardEvent) => {
  if (event.key === "Escape") expanded.value = false;
};
onMounted(() => window.addEventListener("keydown", closeOnEscape));
onBeforeUnmount(() => window.removeEventListener("keydown", closeOnEscape));
</script>

<template>
  <header class="app-bar">
    <div class="container inner">
      <RouterLink to="/" class="brand" aria-label="Nadia Battiston, accueil">
        <span class="brand-name">Nadia Battiston</span>
        <span class="brand-role">Comédienne voix off</span>
      </RouterLink>

      <nav id="navigation" class="nav" :class="{ open: expanded }" aria-label="Navigation principale">
        <ul role="list">
          <li v-for="link in links" :key="link.label">
            <RouterLink :to="link.to" class="nav-link">{{ link.label }}</RouterLink>
          </li>
        </ul>
        <RouterLink :to="{ path: '/a-propos', hash: '#contact' }" class="btn btn-primary nav-cta">
          Me contacter
        </RouterLink>
      </nav>

      <button
        class="burger"
        :aria-expanded="expanded"
        aria-controls="navigation"
        @click="expanded = !expanded"
      >
        <AppIcon :name="expanded ? 'close' : 'menu'" :size="24" />
        <span class="sr-only">{{ expanded ? "Fermer le menu" : "Ouvrir le menu" }}</span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.app-bar {
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--header-height);
  border-bottom: 1px solid var(--line);
}

/* The blur lives on a pseudo-element: backdrop-filter on the header itself
   would trap the fixed mobile menu inside the header's box. */
.app-bar::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: rgba(11, 11, 13, 0.72);
  backdrop-filter: saturate(160%) blur(16px);
  -webkit-backdrop-filter: saturate(160%) blur(16px);
}

.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  height: 100%;
}

.brand {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.brand-name {
  font-family: var(--font-serif);
  font-size: 1.6rem;
}

.brand-role {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.nav {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav ul {
  display: flex;
  gap: 28px;
}

.nav-link {
  position: relative;
  font-size: 0.95rem;
  color: var(--text-muted);
  transition: color 0.2s ease;
}

.nav-link:hover,
.nav-link.router-link-exact-active {
  color: var(--text);
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -6px;
  height: 1px;
  background: var(--accent);
  transform: scaleX(0);
  transition: transform 0.25s ease;
}

.nav-link:hover::after,
.nav-link.router-link-exact-active:not([href*="#"])::after {
  transform: scaleX(1);
}

.nav-cta {
  min-height: 42px;
  padding: 0 20px;
}

.burger {
  display: none;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: -10px;
}

@media (max-width: 860px) {
  .burger {
    display: inline-flex;
  }

  .nav {
    position: fixed;
    inset: var(--header-height) 0 0 0;
    flex-direction: column;
    align-items: stretch;
    gap: 32px;
    padding: 32px var(--gutter);
    background: var(--bg);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-8px);
    transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s;
  }

  .nav.open {
    opacity: 1;
    visibility: visible;
    transform: none;
  }

  .nav ul {
    flex-direction: column;
    gap: 0;
  }

  .nav-link {
    display: block;
    padding: 14px 0;
    border-bottom: 1px solid var(--line);
    font-family: var(--font-serif);
    font-size: 2rem;
    color: var(--text);
  }

  .nav-link::after {
    display: none;
  }
}
</style>
