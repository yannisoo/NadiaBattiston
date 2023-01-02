<script setup lang="ts">
const props = defineProps(['filters', 'selectedFilters']);
const emit = defineEmits<{
    (event: 'action', value: string): void
}>()

</script>
<template>
    <div class="holder">
        <div v-for="filter in props.filters" class="filter-node" :class="{ active: selectedFilters.includes(filter.value)}" @click="emit('action', filter.value)">
            {{filter.name}}
        </div>
    </div>
</template>

<style scoped>
.holder {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 10px;
    width: 100%;
    height: 100%;
    padding: 10px;
}

.filter-node {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color4);
    width: 150px;
    height: 50px;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
}
.filter-node:hover {
    background-color: var(--color3);
    cursor: pointer;
    color: white;
}
.active {
    background-color: var(--color1);
    color: white;
}
.active:hover {
    background-color: var(--color1);
    color: white;
}

@media (max-width: 940px) {
    .filter-node:hover {
        background-color: var(--color4);
        color: black;
    }
    .active:hover {
        background-color: var(--color1);
        color: white;
    }

    .filter-node {
        width: 100%;
     }
  }

  @media (max-width: 380px) {
    .holder {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: space-between;
    }
  }
</style>