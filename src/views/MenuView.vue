<script setup lang="ts">
import { Menu} from '@/helpers/menu'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref } from 'vue';
const state = ref(false)
const changeState = () => {
    state.value = !state.value
}
</script>

<template>
    <div class="bg-gradient-to-b from-secondary to-primary rounded-r flex flex-col justify-start items-center ">
        <button @click="changeState" class="m-4">
            <font-awesome-icon class="size-8" icon="fas fa-bars" />
        </button>
        <nav v-show="state">
            <ul class="m-2">
                <li v-for="(item, i) in Menu"
                    :key="i"
                >
                    <button @click="$router.push({name: item})" class="min-w-20 rounded-full bg-accent font-bold text-primary hover:opacity-60 m-2 p-2">
                            {{ item }}
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>