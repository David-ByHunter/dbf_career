<script setup lang="ts">
const icons = [
    "fab fa-linkedin",
    "fab fa-instagram"
]
const info = [
    "https://www.linkedin.com/in/davidbarfer",
    "https://www.instagram.com/david_byhunter/",
]
</script>

<template>
    <footer class="flex justify-end">
        <a
            v-for="(ref,i) in info"
            :key="i"
            :href="ref"
            target="_blank"
        >
            <font-awesome-icon class="m-6 size-8" :icon="icons[i]" />
        </a>
    </footer>
</template>