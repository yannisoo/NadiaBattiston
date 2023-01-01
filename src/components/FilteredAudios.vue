<script setup lang="ts">import { useAudioStore } from '@/stores/audio';
import Disk from './Disk.vue';

const stepperInfo = useAudioStore()

</script>
<template>
    <div class="holder">
        <div v-for="(audio, index) in stepperInfo.filteredAudios" class="filter-node"
            @click="stepperInfo.chooseAudio(index)">
            <a href="#platine">
                <Disk :animated="false" :title="audio" :size=180 :can-scale=true />
            </a>
        </div>
    </div>
</template>

<style scoped>
.holder {
    display: flex;
    margin-top: 36px;
    flex-direction: space-between;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
}

.filter-node {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10px;
}
</style>