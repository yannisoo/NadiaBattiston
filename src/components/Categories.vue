<script setup lang="ts">
import type { Group } from "@/models/group";

defineProps<{ filters: Group[]; selectedFilters: string[] }>();
const emit = defineEmits<{
    (event: 'action', value: string): void
}>()
</script>

<template>
    <ul role="list" class="chips">
        <li v-for="filter in filters" :key="filter.value">
            <button
                type="button"
                class="chip"
                :aria-pressed="selectedFilters.includes(filter.value)"
                @click="emit('action', filter.value)"
            >
                {{ filter.name }}
            </button>
        </li>
    </ul>
</template>

<style scoped>
.chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.chip {
    min-height: 38px;
    padding: 0 16px;
    border: 1px solid var(--line-strong);
    border-radius: 999px;
    font-size: 0.9rem;
    color: var(--text-muted);
    transition: all 0.2s ease;
}

.chip:hover {
    border-color: var(--text);
    color: var(--text);
}

.chip[aria-pressed="true"] {
    border-color: var(--accent);
    background: var(--accent);
    color: var(--on-accent);
}
</style>
