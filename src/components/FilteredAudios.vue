<script setup lang="ts">
import type { ExtractAudio } from '@/models/audio';
import { filterLabel, useAudioStore } from '@/stores/audio';
import AppIcon from './AppIcon.vue';
import Disk from './Disk.vue';

const stepperInfo = useAudioStore()

const isCurrent = (audio: ExtractAudio) => stepperInfo.current?.url === audio.url
const isPlaying = (audio: ExtractAudio) => isCurrent(audio) && stepperInfo.isPlaying
const categories = (audio: ExtractAudio) =>
    audio.categories.map((c) => filterLabel('categories', c)).join(' · ')
</script>

<template>
    <ul v-if="stepperInfo.filteredAudios.length" role="list" class="grid">
        <li v-for="audio in stepperInfo.filteredAudios" :key="audio.url">
            <button
                type="button"
                class="card"
                :class="{ active: isCurrent(audio) }"
                :aria-label="`${isPlaying(audio) ? 'Mettre en pause' : 'Écouter'} : ${audio.name}`"
                @click="stepperInfo.select(audio)"
            >
                <span class="disk">
                    <Disk :cover="audio.image" :spinning="isPlaying(audio)" />
                </span>
                <span class="text">
                    <span class="name">{{ audio.name }}</span>
                    <span class="meta">{{ categories(audio) }}</span>
                </span>
                <span class="icon">
                    <AppIcon :name="isPlaying(audio) ? 'pause' : 'play'" :size="16" />
                </span>
            </button>
        </li>
    </ul>
    <p v-else class="empty">
        Aucun extrait ne correspond à cette combinaison de filtres.
        <button type="button" @click="stepperInfo.resetFilters">Réinitialiser les filtres</button>
    </p>
</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 12px;
    margin-top: 28px;
}

.card {
    display: flex;
    align-items: center;
    gap: 14px;
    width: 100%;
    height: 100%;
    padding: 12px 16px 12px 12px;
    border: 1px solid var(--line);
    border-radius: var(--radius-sm);
    background: var(--surface);
    text-align: left;
    transition: border-color 0.2s ease, background-color 0.2s ease;
}

.card:hover {
    border-color: var(--line-strong);
    background: var(--surface-2);
}

.card.active {
    border-color: rgba(226, 178, 107, 0.6);
    background: var(--surface-2);
}

.disk {
    --label-size: 64%;
    flex-shrink: 0;
    width: 56px;
    transition: transform 0.3s ease;
}

.card:hover .disk {
    transform: rotate(-20deg) scale(1.04);
}

.text {
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;
}

.name {
    font-weight: 550;
    line-height: 1.3;
}

.meta {
    overflow: hidden;
    font-size: 0.8rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: var(--text-muted);
}

.icon {
    display: grid;
    place-items: center;
    flex-shrink: 0;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 1px solid var(--line-strong);
    color: var(--text-muted);
    transition: all 0.2s ease;
}

.card:hover .icon,
.card.active .icon {
    border-color: var(--accent);
    background: var(--accent);
    color: var(--on-accent);
}

.empty {
    margin-top: 28px;
    padding: 32px;
    border: 1px dashed var(--line-strong);
    border-radius: var(--radius);
    text-align: center;
    color: var(--text-muted);
}

.empty button {
    display: block;
    margin: 12px auto 0;
    color: var(--accent);
    text-decoration: underline;
    text-underline-offset: 3px;
}
</style>
