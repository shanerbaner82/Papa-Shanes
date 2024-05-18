<script setup>
    defineProps({order: Object})
</script>

<template>
    <div class="flex items-center justify-between border-b border-black mb-2">
        <h2 class="font-black">Order: {{ order.order_number }}</h2>
        <a target="_blank" :href="route('orders.tracker', {order})" class="font-black text-red-600 flex items-center gap-x-1">
            TRACK
            <sup>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
            </sup>
        </a>
    </div>
    <div class="flex items-center justify-between">
        <div>
            <p class="text-gray-500">{{ order.time_since }}</p>
            <p class="text-gray-500"># Items: <span
                class="text-red-500 font-bold">{{ order.order_items.length }}</span></p>
        </div>
        <div class="font-black text-right">
            <p>{{ order.status }}</p>
            <p><span class="text-green-600">{{ order.delivery_method }}</span></p>
        </div>
    </div>
</template>

<style scoped>

</style>
