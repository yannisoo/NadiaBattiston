<script setup lang="ts">
import AppIcon, { type IconName } from "./AppIcon.vue";
import { CONTACT } from "@/site";

const cards: { icon: IconName; label: string; value: string; href: string; external?: boolean }[] = [
  { icon: "phone", label: "Téléphone", value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: "mail", label: "E-mail", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  {
    icon: "instagram",
    label: "Instagram",
    value: CONTACT.instagram,
    href: CONTACT.instagramUrl,
    external: true,
  },
];
</script>

<template>
  <ul role="list" class="cards">
    <li v-for="card in cards" :key="card.label">
      <a
        :href="card.href"
        class="card"
        v-bind="card.external ? { target: '_blank', rel: 'noopener' } : {}"
      >
        <span class="icon"><AppIcon :name="card.icon" :size="22" /></span>
        <span class="text">
          <span class="label">{{ card.label }}</span>
          <span class="value">{{ card.value }}</span>
        </span>
        <AppIcon name="arrow" class="arrow" />
      </a>
    </li>
  </ul>
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.card {
  display: flex;
  align-items: center;
  gap: 16px;
  height: 100%;
  padding: 22px 24px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--surface);
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.card:hover {
  border-color: rgba(226, 178, 107, 0.5);
  background: var(--surface-2);
}

.icon {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(226, 178, 107, 0.12);
  color: var(--accent);
}

.text {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.label {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.value {
  font-weight: 550;
  overflow-wrap: anywhere;
}

.arrow {
  margin-left: auto;
  flex-shrink: 0;
  color: var(--text-muted);
  transition: transform 0.2s ease, color 0.2s ease;
}

.card:hover .arrow {
  color: var(--accent);
  transform: translateX(3px);
}
</style>
