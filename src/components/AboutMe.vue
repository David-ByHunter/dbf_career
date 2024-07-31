<script setup lang="ts">
import { aboutMe } from '@/helpers/main';

</script>
<template>
    <section class="flex flex-col justify-start items-left my-4">
      <span class="font-bold text-xl underline underline-offset-8 decoration-4">
        {{ aboutMe.field }}
      </span>
      <span class="m-4 italic">{{ aboutMe.description }}</span>
    </section>
</template>