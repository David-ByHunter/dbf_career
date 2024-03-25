<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { onMounted, ref } from 'vue';
const isScroll = ref(false);
function scrollTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
function handleScroll() {
    if(document.documentElement.scrollTop < 25)
        isScroll.value = false;
    else
        isScroll.value = true;
}
onMounted(() => {
    window.addEventListener("scroll", handleScroll)
}) 
</script>

<template>
    <button 
        class="fixed bottom-2 left-2 mb-8"
        @click="scrollTop" v-show="isScroll"
    >
        <FontAwesomeIcon class="size-6 bg-accent rounded-full p-2" icon="fas fa-chevron-up" />
    </button>
</template>