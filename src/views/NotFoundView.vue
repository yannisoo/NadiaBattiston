<script setup lang="ts">
import { RouterLink } from "vue-router";
import { usePageSeo } from "@/site";

usePageSeo({
  title: "Page introuvable | Nadia Battiston",
  description: "Cette page n'existe pas ou a été déplacée.",
  path: "/404",
  noindex: true,
});
</script>

<template>
  <div class="container page not-found">
    <p class="eyebrow">Erreur 404</p>
    <h1>Page introuvable</h1>
    <p class="lead">Cette page n'existe pas ou a été déplacée.</p>
    <RouterLink to="/" class="btn btn-primary">Retour à l'accueil</RouterLink>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  min-height: 60vh;
  justify-content: center;
  text-align: center;
}
</style>
