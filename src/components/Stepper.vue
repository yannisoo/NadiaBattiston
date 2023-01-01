<script setup lang="ts">
import Categories from './Categories.vue'
import filters from '../assets/filters.json'
import { useAudioStore } from '@/stores/audio';
const stepperInfo = useAudioStore()

</script>

<template>
    <div class="container">
        <div class="stepper">
            <div class="stepper__step"
                :class="{ active: stepperInfo.currentStep == 1, done: stepperInfo.currentStep > 1 }"
                @click="stepperInfo.changeStep(1)">
                <div class="stepper__step__title">Catégories</div>
            </div>
            <div class="line" :class="{done: stepperInfo.currentStep > 1 }" />
            <div class="stepper__step"
                :class="{ active: stepperInfo.currentStep == 2, done: stepperInfo.currentStep > 2 }"
                @click="stepperInfo.changeStep(2)">
                <div class="stepper__step__title">Timbres</div>
            </div>
            <div class="line" :class="{done: stepperInfo.currentStep > 2 }" />
            <div class="stepper__step"
                :class="{ active: stepperInfo.currentStep == 3 , done: stepperInfo.currentStep > 3}"
                @click="stepperInfo.changeStep(3)">
                <div class="stepper__step__title">Interpretations</div>
            </div>
        </div>

        <div class="content" v-if="stepperInfo.currentStep == 1">
            <Categories :filters="filters.categories" :selected-filters="stepperInfo.categories"
                v-on:action="(value: string) => stepperInfo.updateCategory(value)" />
        </div>
        <div class="content" v-if="stepperInfo.currentStep == 2">
            <Categories :filters="filters.timbers" :selected-filters="stepperInfo.timbers"
                v-on:action="(value: string) => stepperInfo.updateTimber(value)" />
        </div>
        <div class="content" v-if="stepperInfo.currentStep == 3">
            <Categories :filters="filters.interpretation" :selected-filters="stepperInfo.interpretations"
                v-on:action="(value: string) => stepperInfo.updateInterpretation(value)" />
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.content {
    width: 100%;
}

.stepper {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;
}

.stepper__step {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    background-color: var(--color4);
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
}

.line {
    width: 10%;
    height: 4px;
    background-color: var(--color4);
}

.stepper__step:hover {
    background-color: var(--color1);
    cursor: pointer;
    color: white;
}
.stepper__step__title {
    font-size: 1.2rem;
}

.active {
    background-color: var(--color1);
    color: white;
}

.done {
    background-color: var(--color3);
    color: white;
}
</style>