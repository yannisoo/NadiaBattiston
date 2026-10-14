<script setup lang="ts">
import { RouterLink } from "vue-router";
import AppIcon from "./AppIcon.vue";
</script>

<template>
  <section class="hero">
    <img
      class="background"
      src="/images/hero.webp"
      width="1280"
      height="546"
      alt="Micro de studio et portrait en noir et blanc de Nadia Battiston"
      fetchpriority="high"
    />
    <div class="content">
      <h1>
        <span class="eyebrow">Comédienne voix off</span>
        Nadia Battiston
      </h1>
      <p class="lead">
        Une voix off pro pour magnifier votre travail&nbsp;: publicité TV, radio et internet,
        documentaire, doublage et film institutionnel.
      </p>
      <div class="actions">
        <a href="#extraits" class="btn btn-primary">
          <AppIcon name="play" :size="16" />
          Écouter mes extraits
        </a>
        <RouterLink :to="{ path: '/a-propos', hash: '#contact' }" class="btn btn-ghost">
          Me contacter
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Photo and text share one grid cell: the photo keeps its natural ratio
   (nothing gets cropped) and the text sits over its dark centre. */
.hero {
  display: grid;
  overflow: hidden;
  text-align: center;
}

.background,
.content {
  grid-area: 1 / 1;
}

.background {
  align-self: start;
  width: 100%;
  aspect-ratio: 1280 / 546;
  -webkit-mask-image: linear-gradient(to bottom, #000 55%, transparent);
  mask-image: linear-gradient(to bottom, #000 55%, transparent);
}

.content {
  position: relative;
  isolation: isolate;
  align-self: center;
  justify-self: center;
  max-width: 640px;
  padding: 64px var(--gutter);
}

/* Darkens the middle of the photo so the title stays readable */
.content::before {
  content: "";
  position: absolute;
  inset: -10% -25%;
  z-index: -1;
  background: radial-gradient(closest-side, rgba(11, 11, 13, 0.82), transparent);
}

.eyebrow {
  margin-bottom: 18px;
}

h1 {
  font-size: clamp(3rem, 7.5vw, 6rem);
}

.lead {
  max-width: 34rem;
  margin: 22px auto 0;
  color: #d4d0c8;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 36px;
}

/* On narrow screens the text starts below the photo instead of over it */
@media (max-width: 760px) {
  .content {
    align-self: start;
    padding-top: calc(100vw * 546 / 1280 * 0.85);
  }

  .content::before {
    display: none;
  }
}
</style>
