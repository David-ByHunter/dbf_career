<script setup lang="ts">
import { meaningESTIEM } from '@/helpers/main';
import { positionsESTIEM } from '@/helpers/main';
// import { eventsESTIEM } from ç'@/helpers/main';
import { linksESTIEM } from '@/helpers/main';
</script>

<template>
  <section class="flex flex-col justify-start items-left m-4">
    <span
      class="font-bold text-xl italic underline underline-offset-8 decoration-4"
      >{{ meaningESTIEM.field }}</span
    >
    <span class="m-4 italic">{{ meaningESTIEM.description }}</span>
    <span class="ml-2 font-bold underline underline-offset-4 decoration-2"
      >Positions</span
    >
    <ul class="m-2">
      <li
        class="m-4 p-4 rounded-full bg-secondary"
        v-for="ref in positionsESTIEM"
        :key="ref.position"
      >
        <span class="italic text-wrap">
          {{ ref.position }}
        </span>
      </li>
    </ul>
    <div
      class="flex flex-wrap gap-x-4 *:italic *:border *:border-accent *:px-2 *:py-1"
    >
      <a
        :href="linksESTIEM[0].description"
        target="_blank"
        class="hover:bg-accent hover:text-primary"
        >{{ linksESTIEM[0].field }}</a
      >
      <a
        :href="linksESTIEM[1].description"
        target="_blank"
        class="hover:bg-accent hover:text-primary"
        >{{ linksESTIEM[1].field }}</a
      >
    </div>
  </section>
</template>
