<script setup>
import { RouterView } from 'vue-router';
import BaseNavigation from '@/components/BaseNavigation.vue';
</script>
<template>
    <div class="container m-6">
        <BaseNavigation />
        <main>
            <div class="py-16">
                <RouterView />
            </div>
        </main>
    </div>
</template>
<style scoped lang="postcss">
:global(html) {
    background-color: #09090b;
    color: white;
}
</style>