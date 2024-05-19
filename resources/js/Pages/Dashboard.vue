<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import Order from "@/Order/Order.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import Reseed from "@/Components/Reseed.vue";

defineProps({
    orders: Object,
    required: true
});
</script>

<template>
    <Head title="Order Manager" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Order Manager</h2>
        </template>

        <div class=" p-6 sm:p-8" >
            <div class="flex items-center justify-between">
                <h3 class="font-bold text-2xl">Pending Orders: <span class="text-red-600">{{orders.length}}</span> - <span class="italic">GET MOVIN'!</span></h3>
                <Reseed />
            </div>
            <div class=" mt-4 grid  grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
                <article v-for="order in orders"
                         :key="order.id"
                         v-show="order.status !== 'READY'"
                         class="flex max-w-xl flex-col items-start justify-between border rounded-xl shadow-md bg-gray-100 p-4"
                         :class="{'animate-pulse' : order === orders[0]}"
                >
                    <order :order="order" />
                </article>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
