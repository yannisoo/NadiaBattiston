<script setup lang="ts">
import { computed } from "vue";
import { useHead } from "@unhead/vue";
import { filterLabel, useAudioStore } from "@/stores/audio";
import AppIcon from "./AppIcon.vue";
import Disk from "./Disk.vue";

const stepperInfo = useAudioStore();

const status = computed(() => {
  if (!stepperInfo.current) return "Platine";
  return stepperInfo.isPlaying ? "En lecture" : "En pause";
});

const categories = computed(() =>
  stepperInfo.current?.categories.map((c) => filterLabel("categories", c)).join(" · ")
);

const progress = computed(() =>
  stepperInfo.duration ? (stepperInfo.currentTime / stepperInfo.duration) * 100 : 0
);

function formatTime(seconds: number) {
  const total = Math.floor(seconds || 0);
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
}

function onSeek(event: Event) {
  stepperInfo.seek(Number((event.target as HTMLInputElement).value));
}

// Leaves room for the floating mini player on small screens
useHead({
  bodyAttrs: { class: computed(() => (stepperInfo.current ? "has-player" : "")) },
});
</script>

<template>
  <aside class="platine" :class="{ idle: !stepperInfo.current }" aria-label="Lecteur d'extraits">
    <div class="disk">
      <Disk :cover="stepperInfo.current?.image" :spinning="stepperInfo.isPlaying" />
    </div>

    <div class="info">
      <p class="status">{{ status }}</p>
      <p class="title">{{ stepperInfo.current?.name ?? "Choisissez un extrait" }}</p>
      <p v-if="categories" class="meta">{{ categories }}</p>
    </div>

    <div class="progress">
      <input
        type="range"
        class="seek"
        min="0"
        :max="stepperInfo.duration || 1"
        step="0.1"
        :value="stepperInfo.currentTime"
        :style="{ '--progress': `${progress}%` }"
        :disabled="!stepperInfo.current"
        aria-label="Position dans l'extrait"
        :aria-valuetext="`${formatTime(stepperInfo.currentTime)} sur ${formatTime(stepperInfo.duration)}`"
        @input="onSeek"
      />
      <div class="times">
        <span>{{ formatTime(stepperInfo.currentTime) }}</span>
        <span>{{ formatTime(stepperInfo.duration) }}</span>
      </div>
    </div>

    <div class="controls">
      <button class="control previous" type="button" aria-label="Extrait précédent" @click="stepperInfo.previousAudio">
        <AppIcon name="previous" />
      </button>
      <button
        class="control play"
        type="button"
        :aria-label="stepperInfo.isPlaying ? 'Pause' : 'Lecture'"
        @click="stepperInfo.toggle"
      >
        <AppIcon :name="stepperInfo.isPlaying ? 'pause' : 'play'" :size="24" />
      </button>
      <button class="control" type="button" aria-label="Extrait suivant" @click="stepperInfo.nextAudio">
        <AppIcon name="next" />
      </button>
      <button
        class="control download"
        type="button"
        aria-label="Télécharger l'extrait"
        :disabled="!stepperInfo.current"
        @click="stepperInfo.download"
      >
        <AppIcon name="download" />
      </button>
    </div>
  </aside>
</template>

<style scoped>
.platine {
  position: sticky;
  top: calc(var(--header-height) + 24px);
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background:
    radial-gradient(120% 60% at 50% 0%, var(--glow), transparent 70%),
    var(--surface);
  text-align: center;
}

.disk {
  width: min(220px, 70%);
  margin: 8px auto 0;
}

.status {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
}

.title {
  margin-top: 6px;
  font-family: var(--font-serif);
  font-size: 1.65rem;
  line-height: 1.15;
}

.meta {
  margin-top: 4px;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.seek {
  --progress: 0%;
  width: 100%;
  height: 4px;
  margin: 0;
  border-radius: 4px;
  background: linear-gradient(to right, var(--accent) var(--progress), var(--line-strong) var(--progress));
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

.seek:disabled {
  cursor: default;
}

.seek::-webkit-slider-thumb {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--text);
  -webkit-appearance: none;
}

.seek::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border: 0;
  border-radius: 50%;
  background: var(--text);
}

.times {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 0.78rem;
  font-variant-numeric: tabular-nums;
  color: var(--text-muted);
}

.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.control {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: var(--text-muted);
  transition: color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
}

.control:not(:disabled):hover {
  color: var(--text);
  background: var(--surface-2);
}

.play {
  width: 60px;
  height: 60px;
  background: var(--accent);
  color: var(--on-accent);
}

.play:not(:disabled):hover {
  background: var(--accent-strong);
  color: var(--on-accent);
  transform: scale(1.05);
}

/* Floating mini player on small screens */
@media (max-width: 900px) {
  .platine {
    position: fixed;
    top: auto;
    left: 8px;
    right: 8px;
    bottom: calc(8px + env(safe-area-inset-bottom));
    z-index: 90;
    display: grid;
    grid-template-columns: 52px minmax(0, 1fr) auto;
    grid-template-areas:
      "disk info controls"
      "progress progress progress";
    align-items: center;
    gap: 6px 12px;
    padding: 10px 12px 12px;
    background: rgba(28, 28, 34, 0.92);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
    text-align: left;
  }

  .platine.idle {
    display: none;
  }

  .disk {
    --label-size: 64%;
    grid-area: disk;
    width: 52px;
    margin: 0;
  }

  .info {
    grid-area: info;
    min-width: 0;
  }

  .status,
  .meta,
  .times,
  .previous,
  .download {
    display: none;
  }

  .title {
    margin: 0;
    overflow: hidden;
    font-size: 1.15rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .progress {
    grid-area: progress;
  }

  .seek {
    height: 3px;
  }

  .controls {
    grid-area: controls;
    gap: 4px;
  }

  .play {
    width: 44px;
    height: 44px;
  }
}
</style>
