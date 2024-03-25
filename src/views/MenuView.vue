<script setup lang="ts">
import { Menu} from '@/helpers/menu'
import { iconMenu } from '@/helpers/menu'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
    <div class="bg-gradient-to-b from-secondary to-primary rounded-r flex flex-col justify-start items-center ">
        <nav>
            <ul class="m-2">
                <li v-for="(item, i) in Menu"
                    :key="i"
                >
                    <button @click="$router.push({name: item})" class="m-2 hover:opacity-60">
                            <font-awesome-icon class="size-8" :icon="iconMenu[i]"/>
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>