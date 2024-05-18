<script setup>
import Header from "@/Order/Header.vue";
import Items from "@/Order/Items.vue";
import EditForm from "@/Order/EditForm.vue";

const props = defineProps({order: Object})

</script>

<template>
    <div class="flex flex-col w-full h-full">
        <Header :order="order" />
        <Items :order="order" />
        <EditForm :order="order" />
    </div>
</template>

<style scoped>

</style>
