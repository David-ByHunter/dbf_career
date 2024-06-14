<script setup lang="ts">
import { infoFooter } from '@/helpers/footer'
</script>

<template>
    <footer class="flex justify-end items-center">
        <a
            v-for="(ref,i) in infoFooter.linkIcons"
            :key="i"
            class="mx-1 hover:scale-110"
            :href="ref"
            :alt="infoFooter.title[i]"
            target="_blank"
            :aria-label="infoFooter.title[i]"

        >
            <font-awesome-icon class="m-2 size-8" :icon="infoFooter.icons[i]" />
        </a>
    </footer>
</template>