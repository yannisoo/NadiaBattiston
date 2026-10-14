<script setup lang="ts">
import { onBeforeUnmount } from "vue";
import { RouterLink } from "vue-router";
import AppIcon from "@/components/AppIcon.vue";
import ContactCards from "@/components/ContactCards.vue";
import FilteredAudios from "@/components/FilteredAudios.vue";
import HeaderImage from "@/components/HeaderImage.vue";
import Platine from "@/components/Platine.vue";
import Stepper from "@/components/Stepper.vue";
import { useAudioStore } from "@/stores/audio";
import { usePageSeo } from "@/site";

const stepperInfo = useAudioStore();

usePageSeo({
  title: "Nadia Battiston – Comédienne voix off professionnelle",
  description:
    "Nadia Battiston, comédienne voix off depuis plus de 20 ans : publicité TV, radio et internet, documentaire, doublage, film institutionnel. Écoutez mes extraits.",
  path: "/",
});

const services = [
  {
    title: "Publicité",
    subtitle: "TV, radio et internet",
    text: "Souriante, dynamique, enveloppante ou sensuelle\u00a0: une voix qui porte votre marque, de Citroën à Paco Rabanne en passant par Vichy et Decathlon.",
    categories: ["pub_tv", "pub_radio", "pub_internet"],
  },
  {
    title: "Documentaire",
    subtitle: "Narration",
    text: "Une narration posée, informative et chaleureuse qui accompagne l'image, des documentaires historiques aux films animaliers et scientifiques.",
    categories: ["documentary"],
  },
  {
    title: "Doublage",
    subtitle: "Films et séries",
    text: "Des personnages incarnés avec justesse, de la tension à la tendresse\u00a0: Inspecteur Lewis, Une femme piégée, Three Rivers…",
    categories: ["doublage"],
  },
  {
    title: "Film institutionnel",
    subtitle: "Entreprises et institutions",
    text: "Une voix claire et rassurante pour vos films d'entreprise et vos messages institutionnels, comme pour Amundi ou Super U.",
    categories: ["institutional"],
  },
];

function listenTo(categories: string[]) {
  stepperInfo.showCategories(categories);
  document.getElementById("extraits")?.scrollIntoView();
}

onBeforeUnmount(() => stepperInfo.pause());
</script>

<template>
  <HeaderImage />

  <section class="facts" aria-label="En bref">
    <ul role="list" class="container facts-grid">
      <li>
        <strong>+20 ans</strong>
        <span>d'expérience</span>
      </li>
      <li>
        <strong>Pub · Documentaire · Doublage</strong>
        <span>à écouter dans mes extraits</span>
      </li>
      <li>
        <strong>Home studio</strong>
        <span>Micro Neumann&nbsp;U87&nbsp;Ai, cabine StudioBricks</span>
      </li>
    </ul>
  </section>

  <section class="section" aria-labelledby="services-title">
    <div class="container">
      <header class="section-head">
        <p class="eyebrow">Ce que je fais</p>
        <h2 id="services-title">Une voix pour chaque projet</h2>
        <p>
          Spécialisée dans la voix off, le doublage, la narration et le voice-over, je prête ma
          voix à vos publicités, documentaires, films et messages institutionnels.
        </p>
      </header>
      <ul role="list" class="services">
        <li v-for="service in services" :key="service.title" class="service">
          <p class="service-subtitle">{{ service.subtitle }}</p>
          <h3>{{ service.title }}</h3>
          <p class="service-text">{{ service.text }}</p>
          <button type="button" class="link-arrow" @click="listenTo(service.categories)">
            Écouter les extraits
            <AppIcon name="arrow" :size="18" />
          </button>
        </li>
      </ul>
    </div>
  </section>

  <section id="extraits" class="section extraits" aria-labelledby="extraits-title">
    <div class="container">
      <header class="section-head">
        <p class="eyebrow">Démo voix off</p>
        <h2 id="extraits-title">Écoutez mes extraits</h2>
        <p>
          Filtrez par catégorie, timbre ou interprétation pour trouver la voix de votre projet,
          puis lancez la lecture d'un simple clic.
        </p>
      </header>
      <div class="extraits-layout">
        <Platine />
        <div>
          <Stepper />
          <FilteredAudios />
        </div>
      </div>
    </div>
  </section>

  <section class="section" aria-labelledby="studio-title">
    <div class="container studio">
      <img
        src="/images/studio/studio-800.webp"
        srcset="/images/studio/studio-800.webp 800w, /images/studio/studio-1600.webp 1600w"
        sizes="(max-width: 860px) 100vw, 45vw"
        width="800"
        height="1067"
        alt="Cabine d'enregistrement de Nadia Battiston avec micro Neumann et poste Pro Tools"
        loading="lazy"
        decoding="async"
      />
      <div>
        <p class="eyebrow">Home studio</p>
        <h2 id="studio-title">Un studio professionnel, prêt à enregistrer</h2>
        <p class="lead">
          Cabine StudioBricks VO Edition, micro Neumann U87 Ai, carte son SSL2+ et Pro Tools&nbsp;:
          un équipement de référence pour enregistrer vos voix off dans les meilleures conditions.
        </p>
        <RouterLink to="/studio" class="link-arrow">
          Découvrir le studio
          <AppIcon name="arrow" :size="18" />
        </RouterLink>
      </div>
    </div>
  </section>

  <section class="section contact" aria-labelledby="contact-title">
    <div class="container">
      <header class="section-head">
        <p class="eyebrow">Contact</p>
        <h2 id="contact-title">Un projet de voix off&nbsp;? Parlons-en.</h2>
      </header>
      <ContactCards />
    </div>
  </section>
</template>

<style scoped>
.facts {
  border-block: 1px solid var(--line);
}

/* The middle highlight is the longest, it gets more room */
.facts-grid {
  display: grid;
  grid-template-columns: 1fr 1.6fr 1fr;
}

.facts-grid > li {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 28px 24px;
  text-align: center;
}

.facts-grid > li + li {
  border-left: 1px solid var(--line);
}

.facts strong {
  font-family: var(--font-serif);
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 400;
  line-height: 1.2;
  text-wrap: balance;
}

.facts span {
  font-size: 0.85rem;
  color: var(--text-muted);
  text-wrap: balance;
}

.services {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.service {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: linear-gradient(180deg, var(--surface-2), var(--surface));
}

.service-subtitle {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.service h3 {
  font-size: 2rem;
}

.service-text {
  flex: 1;
  color: var(--text-muted);
}

.service .link-arrow {
  align-self: flex-start;
  margin-top: 8px;
}

.extraits {
  background: radial-gradient(60% 50% at 15% 0%, var(--glow), transparent 70%);
  border-top: 1px solid var(--line);
}

.extraits-layout {
  display: grid;
  grid-template-columns: 320px minmax(0, 1fr);
  align-items: start;
  gap: 40px;
}

.studio {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(32px, 6vw, 80px);
}

.studio img {
  width: 100%;
  border-radius: var(--radius);
  aspect-ratio: 4 / 5;
  object-fit: cover;
}

.studio .lead {
  margin-block: 20px 28px;
}

.contact {
  border-top: 1px solid var(--line);
}

@media (max-width: 1100px) {
  .services {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 900px) {
  .extraits-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 860px) {
  .studio {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .services {
    grid-template-columns: 1fr;
  }

  .facts-grid {
    grid-template-columns: 1fr;
  }

  .facts-grid > li {
    padding: 18px 8px;
  }

  .facts-grid > li + li {
    border-left: 0;
    border-top: 1px solid var(--line);
  }
}
</style>
