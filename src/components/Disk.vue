<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps(['animated', 'title', 'size', 'canScale']);
const imageSize = computed(() => props.size / 2 + 'px')
const firstLine = computed(() => props.size * 0.9 + 'px')
const secondLine = computed(() => props.size * 0.8 + 'px')
const thirdLine = computed(() => props.size * 0.7 + 'px')
const fourthLine = computed(() => props.size * 0.6 + 'px')
const fifthLine = computed(() => props.size * 0.5 + 'px')
</script>


<template>
    <div class="player" v-bind:class="{ 'canScale': props.canScale }">
        <div class="disk">
            <div class="line one">
                <div class="line two">
                    <div class="line three">
                        <div class="line four">
                                <img v-bind:class="{ 'animation': props.animated }" v-if="props.title != null"
                                    v-bind:src="'images/' + props.title?.image" alt="">
                        </div>
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

.player {
    width: v-bind(size);
    height: v-bind(size);
    border-radius: 50%;
    transition: transform .2s; 
    background-color: black;
}
.canScale {
    cursor: pointer;
}

.canScale:hover {
    transform: scale(1.3);
}
.disk {
    width: v-bind(size);
    height: v-bind(size);
    background-color: black;
}

img {
    width: v-bind(imageSize);
    height: v-bind(imageSize);
    background-color: white;
    border-radius: 50%;
    object-fit: contain;
}

.line {
    border: 2px solid #717171;
}

.one {
    width: v-bind(firstLine);
    height: v-bind(firstLine);
}

.two {
    width: v-bind(secondLine);
    height: v-bind(secondLine);
}

.three {
    width: v-bind(thirdLine);
    height: v-bind(thirdLine);
}

.four {
    width: v-bind(fourthLine);
    height: v-bind(fourthLine);
}

.five {
    width: v-bind(fifthLine);
    height: v-bind(fifthLine);
}

.animation {
    animation: rotation 5s infinite linear;
}
@keyframes rotation {
    from {
      transform: rotate(0deg);
    }
  
    to {
      transform: rotate(359deg);
    }
  }
</style>