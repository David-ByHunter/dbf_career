<script setup lang="ts">
import FooterView from './views/FooterView.vue';
import BackToTopBtn from './components/BackToTopBtn.vue';
</script>

<template>
  <RouterView class="[grid-area:Main]" />
  <FooterView class="[grid-area:Footer]" />
  <BackToTopBtn />
</template>

<style>
:root {
  --color-primary: rgb(10, 25, 47); /* Azul muy oscuro */
  --color-secondary: rgb(42, 82, 109); /* Azul oscuro pero más claro */
  --color-accent: rgb(255, 200, 0); /* Amarillo brillante */
}
body {
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
    'Main'
    'Footer';
  grid-template-columns: auto;
  grid-template-rows: auto 60px;
  background-color: var(--color-primary);
  color: var(--color-accent);
}
</style>
