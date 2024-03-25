<script setup lang="ts">
import MenuView from './views/MenuView.vue';
import FooterView from './views/FooterView.vue';
import BackToTopBtn from './components/BackToTopBtn.vue';
</script>

<template>
    <MenuView class="[grid-area:Menu]"/>
    <RouterView class="[grid-area:Main]"/>
    <FooterView class="[grid-area:Footer]" />
    <BackToTopBtn />
</template>

<style>
:root {
  --color-primary: #7134C7;
  --color-secondary: #A172F2;
  --color-accent: #8253B0;
}
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