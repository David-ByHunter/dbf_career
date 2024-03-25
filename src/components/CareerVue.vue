<script setup lang="ts">
import { carrerName } from '@/helpers/main';
import { carrerSkills } from '@/helpers/main';
import EstiemVue from './EstiemVue.vue';
</script>

<template>
    <section class="flex flex-col justify-start items-left m-4">
        <span class="font-bold text-xl underline underline-offset-8 decoration-4">
            {{ carrerName }}
        </span>
        <ul class="m-2">
            <li 
                class="m-4 p-4 rounded-full border-2 border-secondary"
                v-for="ref in carrerSkills"
                :key="ref.skill"
            >
                <span class="italic">
                    {{ ref.skill }}
                </span>
                <!-- TODO: Make description appear on hover -->
                <div
                    v-if="ref.description"
                    class="ml-6"
                >
                    {{ ref.description }}
                </div>
            </li>
        </ul>
        <EstiemVue />
    </section>
</template>