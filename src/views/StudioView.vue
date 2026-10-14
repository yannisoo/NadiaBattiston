<script setup lang="ts">
import ContactCards from "@/components/ContactCards.vue";
import { PERSON_ID, SITE_URL, useJsonLd, usePageSeo } from "@/site";

usePageSeo({
  title: "Home studio voix off : Neumann U87 Ai, StudioBricks | Nadia Battiston",
  description:
    "Le home studio de Nadia Battiston : cabine StudioBricks VO Edition, micro Neumann U87 Ai, carte son SSL2+ et Pro Tools pour des voix off de qualité professionnelle.",
  path: "/studio",
});

useJsonLd({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "« Demain, dès l'aube… » de Victor Hugo, lu par Nadia Battiston",
  description:
    "Lecture du poème « Demain, dès l'aube… » de Victor Hugo, enregistrée par Nadia Battiston dans son home studio.",
  thumbnailUrl: `${SITE_URL}/video/demain_des_laube-poster.webp`,
  contentUrl: `${SITE_URL}/video/demain_des_laube.mp4`,
  uploadDate: "2025-02-24T09:53:27+01:00",
  duration: "PT40S",
  inLanguage: "fr",
  actor: { "@id": PERSON_ID },
});

const gear = [
  { type: "Cabine", name: "StudioBricks VO Edition" },
  { type: "Microphone", name: "Neumann U87 Ai" },
  { type: "Carte son", name: "SSL2+" },
  { type: "Casque", name: "Neumann NDH 20" },
  { type: "Filtre anti-pop", name: "Shure PS-6" },
  { type: "Ordinateur", name: "Mac mini M1" },
  { type: "Logiciel", name: "Pro Tools Studio" },
];

const photos = [
  {
    file: "studio-micro",
    alt: "Micro Neumann U87 Ai avec filtre anti-pop et casque dans la cabine",
    caption: "Neumann U87 Ai",
  },
  {
    file: "studio",
    alt: "Intérieur de la cabine d'enregistrement : poste de travail, micro et fauteuil",
    caption: "La cabine",
  },
  {
    file: "studio-mylo",
    alt: "Un chat assis sur le fauteuil de la cabine d'enregistrement",
    caption: "Mylo, l'assistant du studio",
  },
];
</script>

<template>
  <div class="container page">
    <header class="intro">
      <div>
        <p class="eyebrow">Home studio</p>
        <h1>Mon studio d'enregistrement</h1>
        <p class="lead">
          Une cabine acoustique professionnelle et un matériel de référence pour enregistrer vos voix
          off, doublages et narrations dans les meilleures conditions.
        </p>
      </div>
      <img
        class="cabine"
        src="/images/studio/cabine-800.webp"
        width="800"
        height="800"
        alt="Cabine d'enregistrement StudioBricks VO Edition"
        fetchpriority="high"
      />
    </header>

    <section class="section gear-section" aria-labelledby="gear-title">
      <h2 id="gear-title">Le matériel</h2>
      <dl class="gear">
        <div v-for="item in gear" :key="item.type" class="gear-item">
          <dt>{{ item.type }}</dt>
          <dd>{{ item.name }}</dd>
        </div>
      </dl>
    </section>

    <section aria-label="Photos du studio">
      <ul role="list" class="photos">
        <li v-for="photo in photos" :key="photo.file">
          <figure>
            <img
              :src="`/images/studio/${photo.file}-800.webp`"
              :srcset="`/images/studio/${photo.file}-800.webp 800w, /images/studio/${photo.file}-1600.webp 1600w`"
              sizes="(max-width: 760px) 100vw, 33vw"
              width="800"
              height="1067"
              :alt="photo.alt"
              loading="lazy"
              decoding="async"
            />
            <figcaption>{{ photo.caption }}</figcaption>
          </figure>
        </li>
      </ul>
    </section>

    <section class="section video-section" aria-labelledby="video-title">
      <video
        class="video"
        controls
        playsinline
        preload="none"
        poster="/video/demain_des_laube-poster.webp"
        width="607"
        height="1080"
      >
        <source src="/video/demain_des_laube.mp4" type="video/mp4" />
        Votre navigateur ne peut pas lire cette vidéo.
      </video>
      <div>
        <p class="eyebrow">En cabine</p>
        <h2 id="video-title">«&nbsp;Demain, dès l'aube…&nbsp;»</h2>
        <p class="lead">
          Le poème de Victor Hugo, lu et enregistré dans le studio. Quarante secondes pour entendre
          la voix, le grain et l'interprétation.
        </p>
      </div>
    </section>

    <section class="section contact" aria-labelledby="contact-title">
      <header class="section-head">
        <p class="eyebrow">Contact</p>
        <h2 id="contact-title">Un projet à enregistrer&nbsp;?</h2>
        <p>Une question sur le studio ou sur votre projet&nbsp;? Contactez-moi directement.</p>
      </header>
      <ContactCards />
    </section>
  </div>
</template>

<style scoped>
.intro {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(32px, 6vw, 80px);
}

.intro .lead {
  max-width: 40ch;
  margin-top: 22px;
}

.cabine {
  width: 100%;
  border-radius: var(--radius);
  background: #e7e5e1;
}

.gear-section h2 {
  margin-bottom: 32px;
}

.gear {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(150px, 100%), 1fr));
  gap: 12px;
}

.gear-item {
  padding: 20px 22px;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--surface);
}

.gear-item dt {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.gear-item dd {
  margin-top: 2px;
  font-size: 1.1rem;
  font-weight: 550;
}

.photos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.photos img {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: var(--radius);
}

figcaption {
  margin-top: 10px;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.video-section {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: clamp(32px, 6vw, 80px);
}

.video {
  width: min(360px, 100%);
  aspect-ratio: 607 / 1080;
  border-radius: var(--radius);
  background: #000;
}

.video-section .lead {
  max-width: 40ch;
  margin-top: 20px;
}

.contact {
  padding-bottom: 0;
  border-top: 1px solid var(--line);
}

@media (max-width: 860px) {
  .intro,
  .video-section {
    grid-template-columns: 1fr;
  }

  .cabine {
    max-width: 420px;
  }

  .video {
    margin-inline: auto;
  }
}

@media (max-width: 760px) {
  .photos {
    grid-template-columns: 1fr;
  }
}
</style>
