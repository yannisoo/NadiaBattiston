<script setup lang="ts">
import Platine from "../components/Platine.vue";
import Categories from "../components/Categories.vue";
import Stepper from "../components/Stepper.vue";

</script>

<template>
  <main>    
    <Stepper/>
    <Platine/>
  </main>
</template>

<style scoped>
  main {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100vw;
  }
</style>