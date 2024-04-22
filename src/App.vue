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
  --color-primary: #1e0342;
  --color-secondary: #0e46a3;
  --color-accent: rgb(255, 200, 0);
}
body{
  display: inline-block;
  height: 100vh;
  width: 100%;
  background-color: var(--color-primary);

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
  background-color: var(--color-primary);
  color: var(--color-accent);
}
</style>