<script setup lang="ts">
import { RouterView } from "vue-router";
import { useHead } from "@unhead/vue";
import AppBar from "./components/AppBar.vue";
import AppFooter from "./components/AppFooter.vue";
import CookieBanner from "./components/CookieBanner.vue";
import { siteSchema, useJsonLd } from "./site";

useHead({
  htmlAttrs: { lang: "fr" },
  titleTemplate: (title) => title ?? "Nadia Battiston – Comédienne voix off",
});
useJsonLd(siteSchema);
</script>

<template>
  <a class="skip-link" href="#contenu">Aller au contenu</a>
  <AppBar />
  <main id="contenu">
    <RouterView />
  </main>
  <AppFooter />
  <CookieBanner />
</template>
