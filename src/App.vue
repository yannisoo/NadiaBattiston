<script setup lang="ts">
import { RouterView } from "vue-router";
import AppBar from "./components/AppBar.vue";
</script>

<template>
  <div id="main">
  <AppBar/>
    <RouterView />
  </div>
</template>

<style scoped>
  #main{
    margin: 0;
    padding: 0;
    overflow: hidden;
    width: 100%;
  }
  template{
    display: flex;
    flex-direction: column;
  }
</style>