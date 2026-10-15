<script setup lang="ts">
import { RouterLink } from "vue-router";
import { CONTACT } from "@/site";
import { openCookieSettings } from "@/consent";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="app-footer">
    <div class="container grid">
      <div class="about">
        <p class="name">Nadia Battiston</p>
        <p class="muted">
          Comédienne voix off&nbsp;: publicité TV, radio et internet, documentaire, doublage et film
          institutionnel.
        </p>
      </div>

      <nav aria-label="Pied de page">
        <p class="title">Navigation</p>
        <ul role="list">
          <li><RouterLink to="/">Accueil</RouterLink></li>
          <li><RouterLink :to="{ path: '/', hash: '#extraits' }">Extraits voix off</RouterLink></li>
          <li><RouterLink to="/studio">Le studio</RouterLink></li>
          <li><RouterLink to="/photos">Photos</RouterLink></li>
          <li><RouterLink to="/a-propos">À propos</RouterLink></li>
        </ul>
      </nav>

      <div>
        <p class="title">Contact</p>
        <ul role="list">
          <li><a :href="CONTACT.phoneHref">{{ CONTACT.phone }}</a></li>
          <li><a :href="`mailto:${CONTACT.email}`">{{ CONTACT.email }}</a></li>
          <li>
            <a :href="CONTACT.instagramUrl" target="_blank" rel="noopener">
              Instagram {{ CONTACT.instagram }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="container bottom">
      <p>© {{ year }} Nadia Battiston</p>
      <div class="legal-links">
        <RouterLink to="/mentions-legales">Mentions légales</RouterLink>
        <button type="button" @click="openCookieSettings">Cookies</button>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  border-top: 1px solid var(--line);
  background: var(--surface);
  font-size: 0.95rem;
}

.grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 40px;
  padding-block: 56px 40px;
}

.name {
  margin-bottom: 8px;
  font-family: var(--font-serif);
  font-size: 1.75rem;
}

.muted,
.bottom {
  color: var(--text-muted);
}

.muted {
  max-width: 34ch;
}

.title {
  margin-bottom: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-muted);
}

li + li {
  margin-top: 6px;
}

ul a {
  transition: color 0.2s ease;
}

ul a:hover {
  color: var(--accent);
}

.bottom {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding-block: 20px;
  border-top: 1px solid var(--line);
  font-size: 0.85rem;
}

.legal-links {
  display: flex;
  gap: 20px;
}

.legal-links > * {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.legal-links > *:hover {
  color: var(--accent);
}

@media (max-width: 760px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
