<script setup lang="ts">
import { coverUrl } from "@/models/audio";

defineProps<{ cover?: string; spinning?: boolean }>();
</script>

<template>
  <div class="disk" :class="{ spinning }">
    <div class="vinyl">
      <img
        v-if="cover"
        :src="coverUrl(cover)"
        alt=""
        width="160"
        height="160"
        loading="lazy"
        decoding="async"
      />
      <span v-else class="label" aria-hidden="true">NB</span>
    </div>
  </div>
</template>

<style scoped>
.disk {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #0d0d0f;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.55), inset 0 0 0 1px rgba(255, 255, 255, 0.06);
}

/* Static light reflection on top of the spinning grooves */
.disk::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(
    from 20deg,
    transparent 0deg,
    rgba(255, 255, 255, 0.11) 40deg,
    transparent 80deg,
    transparent 180deg,
    rgba(255, 255, 255, 0.07) 220deg,
    transparent 260deg
  );
  pointer-events: none;
}

.vinyl {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: repeating-radial-gradient(circle at center, #18181b 0 1.5px, #0d0d0f 1.5px 3px);
  animation: spin 2.4s linear infinite;
  animation-play-state: paused;
}

.spinning .vinyl {
  animation-play-state: running;
}

/* Spindle hole */
.vinyl:not(:has(.label))::after {
  content: "";
  position: absolute;
  width: 5%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--bg);
}

/* Parents can set --label-size: small disks need a bigger label to stay legible */
img,
.label {
  width: var(--label-size, 44%);
  height: var(--label-size, 44%);
  border-radius: 50%;
  box-shadow: 0 0 0 3px #0d0d0f, 0 0 0 4px rgba(255, 255, 255, 0.12);
}

img {
  padding: 7%;
  object-fit: contain;
  background: #fff;
}

.label {
  display: grid;
  place-items: center;
  background: radial-gradient(circle, var(--accent-strong), var(--accent));
  color: var(--on-accent);
  font-family: var(--font-serif);
  font-size: 1.6rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
