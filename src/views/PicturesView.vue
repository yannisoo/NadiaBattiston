<script setup lang="ts">
import { computed, ref } from "vue";
import AppIcon from "@/components/AppIcon.vue";
import photos from "@/assets/photos.json";
import { usePageSeo } from "@/site";

usePageSeo({
  title: "Photos | Nadia Battiston, comédienne voix off",
  description:
    "Portraits de Nadia Battiston, comédienne voix off et actrice : découvrez la galerie photo.",
  path: "/photos",
});

const dialog = ref<HTMLDialogElement>();
const index = ref(0);
const current = computed(() => photos[index.value]);

const src = (file: string, width: number) => `/images/photos/${file}-${width}.webp`;

function open(i: number) {
  index.value = i;
  dialog.value?.showModal();
}

function step(offset: number) {
  index.value = (index.value + offset + photos.length) % photos.length;
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === "ArrowRight") step(1);
  if (event.key === "ArrowLeft") step(-1);
}
</script>

<template>
  <div class="container page">
    <header class="section-head">
      <p class="eyebrow">Galerie</p>
      <h1>Photos</h1>
    </header>

    <ul role="list" class="gallery">
      <li v-for="(photo, i) in photos" :key="photo.file">
        <button type="button" class="thumb" @click="open(i)">
          <img
            :src="src(photo.file, 640)"
            :srcset="`${src(photo.file, 640)} 640w, ${src(photo.file, 1280)} 1280w`"
            sizes="(max-width: 640px) 50vw, (max-width: 1000px) 33vw, 300px"
            width="640"
            height="960"
            :alt="photo.alt"
            :loading="i < 4 ? 'eager' : 'lazy'"
            :fetchpriority="i === 0 ? 'high' : undefined"
            decoding="async"
          />
          <span class="sr-only">Agrandir la photo</span>
        </button>
      </li>
    </ul>

    <dialog ref="dialog" class="lightbox" aria-label="Photo agrandie" @keydown="onKeydown" @click.self="dialog?.close()">
      <img :src="src(current.file, 1280)" :alt="current.alt" width="1280" height="1920" />
      <button type="button" class="nav close" aria-label="Fermer" @click="dialog?.close()">
        <AppIcon name="close" :size="24" />
      </button>
      <button type="button" class="nav prev" aria-label="Photo précédente" @click="step(-1)">
        <AppIcon name="left" :size="28" />
      </button>
      <button type="button" class="nav next" aria-label="Photo suivante" @click="step(1)">
        <AppIcon name="right" :size="28" />
      </button>
    </dialog>
  </div>
</template>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.thumb {
  display: block;
  width: 100%;
  overflow: hidden;
  border-radius: var(--radius-sm);
}

.thumb img {
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  transition: transform 0.5s ease, filter 0.5s ease;
}

.thumb:hover img {
  transform: scale(1.04);
  filter: brightness(1.08);
}

.lightbox {
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
}

.lightbox::backdrop {
  background: rgba(5, 5, 7, 0.94);
}

.lightbox[open] {
  display: grid;
  place-items: center;
}

.lightbox img {
  max-width: calc(100vw - 32px);
  max-height: calc(100vh - 96px);
  width: auto;
  height: auto;
  border-radius: var(--radius-sm);
}

.nav {
  position: fixed;
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: var(--text);
  transition: background-color 0.2s ease;
}

.nav:hover {
  background: rgba(255, 255, 255, 0.16);
}

.close {
  top: 16px;
  right: 16px;
}

.prev,
.next {
  top: 50%;
  transform: translateY(-50%);
}

.prev {
  left: 16px;
}

.next {
  right: 16px;
}

@media (max-width: 1000px) {
  .gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .prev,
  .next {
    top: auto;
    bottom: 16px;
    transform: none;
  }
}
</style>
