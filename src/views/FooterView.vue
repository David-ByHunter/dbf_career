<script setup lang="ts">
import { infoFooter } from '@/helpers/footer'
</script>

<template>
    <footer class="flex justify-end items-center">
        <span class="italic font-light">
            {{ infoFooter.info }}
        </span>
        <a
            v-for="(ref,i) in infoFooter.linkIcons"
            :key="i"
            :href="ref"
            target="_blank"
            class="hover:opacity-80"
        >
            <font-awesome-icon class="m-2 size-8" :icon="infoFooter.icons[i]" />
        </a>
    </footer>
</template>