<script setup lang="ts">
import { Menu} from '@/helpers/menu'
</script>

<template>
    <nav class="bg-gradient-to-b from-zinc-600 to-zinc-800 rounded-r">
        <ul class="m-2">
            <li v-for="(item, i) in Menu"
                :key="i"
            >
                <button @click="$router.push({name: item})" class="min-w-20 rounded-full bg-zinc-400 hover:opacity-60 m-2 p-2">
                        {{ item }}
                </button>
            </li>
        </ul>
    </nav>
</template>