<script setup lang="ts">
import { meaningESTIEM } from '@/helpers/main';
// import { positionsESTIEM } from '@/helpers/main';
// import { eventsESTIEM } from ç'@/helpers/main';
</script>

<template>
    <section>
        <div class="flex flex-col justify-start items-left m-4">
            <span class="font-bold italic underline underline-offset-8 decoration-4">{{ meaningESTIEM.field }}</span>
            <span class="m-4 italic">{{ meaningESTIEM.description }}</span>
        </div>

    </section>
</template>