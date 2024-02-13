<script setup lang="ts">
import { Menu} from '@/helpers/menu'
</script>

<template>
    <nav class="bg-gradient-to-b from-sky-600 to-sky-800 rounded-r">
        <ul class="m-6">
            <li v-for="(item, i) in Menu"
                :key="i"
            >
                <button class="min-w-20 rounded-full bg-sky-200 hover:bg-sky-300 m-2 p-2">
                        {{ item }}
                </button>
            </li>
        </ul>
    </nav>
</template>