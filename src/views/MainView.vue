<script setup lang="ts">
import { aboutMeHome } from '@/helpers/main';
</script>

<template>
<section 
    v-for="(info,i) in aboutMeHome"
    :key="i"
    class="flex-col"
>
    <h2>{{ info.field }}</h2>
    <span>{{ info.description }}</span>
</section>
</template>
