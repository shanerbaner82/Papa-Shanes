<script setup>
import SecondaryButton from "@/Components/SecondaryButton.vue";
import {router} from "@inertiajs/vue3";

const submit = function() {
    router.post(route('orders.reseed'));
}
</script>

<template>
    <form @submit.prevent="submit">
        <secondary-button type="submit">Reseed Orders</secondary-button>
    </form>
</template>

<style scoped>

</style>
