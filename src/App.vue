<script setup lang="ts">
import { RouterView } from "vue-router";
import AppBar from "./components/AppBar.vue";
</script>

<template>
  <AppBar/>
  <RouterView />
</template>

<style scoped>
  template{
    display: flex;
    flex-direction: column;    
    max-width: 100vw;
    max-height: 100vh;
  }
</style>