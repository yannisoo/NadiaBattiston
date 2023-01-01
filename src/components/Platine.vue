<script setup lang="ts">
import { useAudioStore } from '@/stores/audio';
import Disk from './Disk.vue';

const stepperInfo = useAudioStore()
</script>


<template>
  <div class="center">

    <div class="platine">
      
      <div class="player">
        <Disk :animated=stepperInfo.isPlaying :title="stepperInfo.title" :size=220></Disk>
        <div class="row">
          <div class="previous knob" @click="stepperInfo.previousAudio">
            <span class="material-symbols-outlined">
              fast_rewind
            </span>
          </div>
          <div class="pause knob" v-if="stepperInfo.isPlaying" @click="stepperInfo.pause">
            <span class="material-symbols-outlined">
              play_pause
            </span>
          </div>
          <div class="pause knob" v-if="!stepperInfo.isPlaying" @click="stepperInfo.play">
            <span class="material-symbols-outlined">
              play_pause
            </span>
          </div>
          <div class="next knob" @click="stepperInfo.nextAudio">
            
            <span class="material-symbols-outlined">
              fast_forward
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  flex-shrink: 0;
}

.material-symbols-outlined {
  color: white;
  font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
}

.platine {
  background-image: url("https://stnoufer.files.wordpress.com/2010/10/dark-wood-texture.jpg");
  border-radius: 10px;
  padding: 0 25px;
  width: 250px;
  height: 300px;
}

.row {
  margin-top: 25px;
  width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.player {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.knob {
  width: 40px;
  height: 40px;
  background-color: var(--color2);
  cursor: pointer;
}


.material-symbols-outlined {
  font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
}
</style>