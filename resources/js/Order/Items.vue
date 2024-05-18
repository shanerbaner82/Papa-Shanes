<script setup>
    defineProps({order: Object})
</script>

<template>
    <div v-for="item in order.order_items"
         class="bg-white text-base px-4 py-1 flex flex-col rounded-xl shadow mt-2">
        <div class="flex justify-between  font-bold">
            <p class="flex-1">{{ item.product }}</p>
            <p>{{ item.product_options.size }}</p>
        </div>
        <div class="flex text-sm" >
            <p v-for="topping in item.product_options.toppings">{{topping}} &nbsp;</p>
        </div>
    </div>
</template>

<style scoped>

</style>
