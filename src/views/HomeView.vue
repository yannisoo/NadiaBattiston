<script setup lang="ts">
import FilteredAudios from "@/components/FilteredAudios.vue";
import HeaderImage from "@/components/HeaderImage.vue";
import Platine from "../components/Platine.vue";
import Stepper from "../components/Stepper.vue";

</script>

<template>
  <main>    
    <HeaderImage/>
    <div class="main_content">

      <h2>
        Mes extraits
      </h2>
      <div class="spacer"></div>
      <div class="filter">
        
        <Stepper/>
        <div class="spacer show"></div>
        <Platine id="platine" class="show"/>
      </div>
      <FilteredAudios/>
    </div>
  </main>
</template>

<style scoped>
main{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  width: 100%;
  height: 100%;
}
.main_content{
  width: 100%;
  padding: 36px;
  max-width: 1700px;
}
.spacer{
  height: 36px;
  width: 36px;
}
h2{
  margin: 36px;
    color: white;
    font-size: 2em;
    font-weight: 400;
    margin: 0;
}
  .filter {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  @media (max-width: 940px) {
    h2 {
      font-size: 1.5rem;
    }
    .filter {
      width: 100%;
      flex-direction: column;
    }
    .main_content {
      padding: 10px;
    }
  }


  @media (max-width: 480px) {
    h2 {
      font-size: 1.1rem;
    }
  }
  main {
    background-color: black;
  }

</style>