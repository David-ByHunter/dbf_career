<script setup lang="ts">
import { carrerName, carrerSkills } from '@/helpers/main';
import EstiemVue from '@/components/EstiemVue.vue';
import AboutMe from './AboutMe.vue';
</script>

<template>
  <section class="flex flex-col justify-start items-left m-4">
    <AboutMe />
    <span
      class="font-bold text-xl underline underline-offset-8 decoration-4 mb-4"
    >
      {{ carrerName }}
    </span>
    <ul class="flex flex-wrap gap-4">
      <li
        class="py-1 px-2 rounded-full border-2 border-secondary"
        v-for="ref in carrerSkills"
        :key="ref.skill"
      >
        <span class="text-sm">
          {{ ref.skill }}
        </span>
        <!-- TODO: Make description appear on hover -->
        <div v-if="ref.description" class="ml-6">
          {{ ref.description }}
        </div>
      </li>
    </ul>
    <EstiemVue />
  </section>
</template>
