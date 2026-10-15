<script setup lang="ts">
import { computed } from 'vue';
import Categories from './Categories.vue'
import filters from '../assets/filters.json'
import { useAudioStore } from '@/stores/audio';
import { FILTER_GROUPS, type FilterGroup } from '@/models/audio';

const stepperInfo = useAudioStore()

const tabLabels: Record<FilterGroup, string> = {
    categories: 'Catégories',
    timbers: 'Timbres',
    interpretation: 'Interprétations',
}

const count = computed(() => {
    const total = stepperInfo.filteredAudios.length
    return `${total} extrait${total > 1 ? 's' : ''}`
})

// Arrow keys move between tabs (WAI-ARIA tabs pattern)
function onTabKeydown(event: KeyboardEvent, index: number) {
    const offset = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0
    if (!offset) return
    const group = FILTER_GROUPS[(index + offset + FILTER_GROUPS.length) % FILTER_GROUPS.length]
    stepperInfo.activeGroup = group
    document.getElementById(`tab-${group}`)?.focus()
}
</script>

<template>
    <div class="filters">
        <div class="tabs" role="tablist" aria-label="Filtrer les extraits">
            <button
                v-for="(group, index) in FILTER_GROUPS"
                :id="`tab-${group}`"
                :key="group"
                type="button"
                role="tab"
                class="tab"
                aria-controls="filters-panel"
                :aria-selected="stepperInfo.activeGroup === group"
                :tabindex="stepperInfo.activeGroup === group ? 0 : -1"
                @click="stepperInfo.activeGroup = group"
                @keydown="onTabKeydown($event, index)"
            >
                {{ tabLabels[group] }}
                <span v-if="stepperInfo.selected[group].length" class="badge">
                    {{ stepperInfo.selected[group].length }}
                </span>
            </button>
        </div>

        <div id="filters-panel" role="tabpanel" class="panel" :aria-labelledby="`tab-${stepperInfo.activeGroup}`">
            <Categories
                :filters="filters[stepperInfo.activeGroup]"
                :selected-filters="stepperInfo.selected[stepperInfo.activeGroup]"
                @action="(value: string) => stepperInfo.toggleFilter(stepperInfo.activeGroup, value)"
            />
        </div>

        <div class="summary">
            <p aria-live="polite">{{ count }}</p>
            <button v-if="stepperInfo.hasFilters" type="button" class="reset" @click="stepperInfo.resetFilters">
                Réinitialiser les filtres
            </button>
        </div>
    </div>
</template>

<style scoped>
.tabs {
    display: inline-flex;
    max-width: 100%;
    padding: 4px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: var(--surface);
    overflow-x: auto;
    scrollbar-width: none;
}

.tab {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 40px;
    padding: 0 18px;
    border-radius: 999px;
    font-size: 0.92rem;
    white-space: nowrap;
    color: var(--text-muted);
    transition: background-color 0.2s ease, color 0.2s ease;
}

.tab:hover {
    color: var(--text);
}

.tab[aria-selected="true"] {
    background: var(--surface-2);
    color: var(--text);
    box-shadow: inset 0 0 0 1px var(--line-strong);
}

.badge {
    display: grid;
    place-items: center;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    border-radius: 999px;
    background: var(--accent);
    color: var(--on-accent);
    font-size: 0.72rem;
    font-weight: 700;
}

.panel {
    margin-top: 20px;
}

.summary {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 20px;
    padding-top: 16px;
    border-top: 1px solid var(--line);
    font-size: 0.9rem;
    color: var(--text-muted);
}

.reset {
    color: var(--accent);
    text-decoration: underline;
    text-underline-offset: 3px;
}

.reset:hover {
    color: var(--accent-strong);
}

@media (max-width: 480px) {
    .tab {
        padding: 0 12px;
        font-size: 0.85rem;
    }
}
</style>
