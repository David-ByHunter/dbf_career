<script setup lang="ts">
import MenuView from './views/MenuView.vue';
import FooterView from './views/FooterView.vue';
</script>

<template>
    <MenuView class="[grid-area:Menu]"/>
    <RouterView class="[grid-area:Main]"/>
    <FooterView class="[grid-area:Footer]" />
</template>

<style>
body{
  height: 100vh;
  width: 100vm;
  margin: 0;
}
#app {
  height: inherit;
  width: inherit;
  display: grid;
  grid-template-areas: 
    "Menu Main"
    "Menu Main"
    "Footer Footer"
  ;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto 60px;
}
</style>