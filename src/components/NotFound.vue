<script setup lang="ts">
</script>

<template>
    <section class="flex flex-col justify-center items-center *:m-4">
        <h1 class="text-2xl font-bold uppercase bg-accent min-w-40 p-4 rounded-full">page not found</h1>
        <button
            @click="$router.push({name: 'Home'})"
            class="p-4 bg-accent hover:opacity-60 min-w-40 rounded-full text-2xl font-bold uppercase "
        >
            go back home
        </button>
    </section>
</template>