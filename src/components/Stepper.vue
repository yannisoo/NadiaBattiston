<script setup lang="ts">
import { useStepperInfo } from '../stores/stepper'
import  Categories  from './Categories.vue'

const stepperInfo = useStepperInfo()
</script>

<template>
    <div class="container">

        <div class="stepper">
            <div class="stepper__step" :class="{ active: stepperInfo.currentStep >= 1 }">
                <div class="stepper__step__title">Catégories</div>
            </div>
            <div class="stepper__step" :class="{ active: stepperInfo.currentStep >= 2 }">
                <div class="stepper__step__title">Timbres</div>
            </div>
            <div class="stepper__step" :class="{ active: stepperInfo.currentStep >= 3 }">
                <div class="stepper__step__title">Ages</div>
            </div>
            <div class="stepper__step" :class="{ active: stepperInfo.currentStep >= 4 }">
                <div class="stepper__step__title">Interpretations</div>
            </div>
        </div>
        <div v-if="stepperInfo.currentStep == 0">
            <Categories/>
        </div>
        <div v-if="stepperInfo.currentStep == 1">
            <Categories/>
        </div>
        <div v-if="stepperInfo.currentStep == 2">
            <Categories/>
        </div>
        <div v-if="stepperInfo.currentStep == 3">
            <Categories/>
        </div>
        <div v-if="stepperInfo.currentStep == 4">
            <Categories/>
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
.stepper {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    margin-bottom: 2rem;
}
</style>