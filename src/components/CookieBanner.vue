<script setup lang="ts">
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import { acceptCookies, cookieBannerOpen, initConsent, refuseCookies } from "@/consent";

onMounted(initConsent);
</script>

<template>
  <section
    v-if="cookieBannerOpen"
    class="cookie-banner"
    role="dialog"
    aria-labelledby="cookie-title"
    aria-describedby="cookie-text"
  >
    <p id="cookie-title" class="title">Cookies</p>
    <p id="cookie-text" class="text">
      Avec votre accord, ce site utilise Google Analytics pour mesurer son audience. Aucun cookie
      publicitaire. Vous pouvez changer d'avis à tout moment via le lien «&nbsp;Cookies&nbsp;» en
      bas de page.
      <RouterLink :to="{ path: '/mentions-legales', hash: '#cookies' }">En savoir plus</RouterLink>
    </p>
    <div class="actions">
      <button type="button" class="btn choice" @click="refuseCookies">Refuser</button>
      <button type="button" class="btn choice" @click="acceptCookies">Accepter</button>
    </div>
  </section>
</template>

<style scoped>
.cookie-banner {
  position: fixed;
  left: 16px;
  bottom: calc(16px + env(safe-area-inset-bottom));
  z-index: 95;
  width: min(400px, calc(100vw - 32px));
  padding: 20px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius);
  background: rgba(28, 28, 34, 0.96);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
}

.title {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  line-height: 1.2;
}

.text {
  margin-top: 6px;
  font-size: 0.875rem;
  line-height: 1.55;
  color: var(--text-muted);
}

.text a {
  color: var(--text);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 16px;
}

/* Refusing must be as easy as accepting: both buttons look the same */
.choice {
  min-height: 44px;
  border: 1px solid var(--line-strong);
  background: var(--surface-2);
}

.choice:hover {
  border-color: var(--text);
}

@media (max-width: 480px) {
  .cookie-banner {
    left: 8px;
    bottom: calc(8px + env(safe-area-inset-bottom));
    width: calc(100vw - 16px);
  }
}
</style>
