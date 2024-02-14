<script setup lang="ts">
import { aboutMeHome } from '@/helpers/main';
</script>

<template>
<div>
    <section
    v-for="(info,i) in aboutMeHome"
    :key="i"
    class="flex flex-col justify-start items-center m-2"
    >
    <div class="bg-zinc-600 p-2 rounded-xl min-w-40 flex justify-center">
        <h1 class="text-2xl font-bold">{{ info.field }}</h1>
    </div>
        <p class="m-2 text-center">{{ info.description }}</p>
    </section>
</div>
</template>
