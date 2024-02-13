<script setup lang="ts">
import { aboutMeHome } from '@/helpers/main';
</script>

<template>
<section
    v-for="(info,i) in aboutMeHome"
    :key="i"
    class="flex flex-col justify-center items-center"
>
    <div class="text-xl font-bold">{{ info.field }}</div>
    <div>{{ info.description }}</div>
</section>
</template>
