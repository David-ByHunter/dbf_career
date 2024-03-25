<script setup lang="ts">
import { aboutMeHome } from '@/helpers/main';
</script>

<template>
<div>
    <section
    v-for="(info,i) in aboutMeHome"
    :key="i"
    class="flex flex-col justify-start items-center m-4"
    >
    <div class="bg-secondary p-2 rounded-full min-w-40 flex justify-center">
        <h1 class="text-2xl font-bold">{{ info.field }}</h1>
    </div>
        <p class="m-2 text-justify">{{ info.description }}</p>
    </section>
</div>
</template>
