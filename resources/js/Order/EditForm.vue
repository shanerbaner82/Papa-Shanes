<script setup>
    import PrimaryButton from "@/Components/PrimaryButton.vue";
    import {reactive, ref} from "vue";
    import {router} from "@inertiajs/vue3";
    const props = defineProps({order: Object})

    const form = reactive({
        status: ref(props.order.status)
    })

    const submit = function(){
        router.patch(route('orders.edit', {
            order: props.order.id,
            status: form.status
        }))
    }
</script>

<template>
    <form class="mt-6 w-full" @submit.prevent="submit">
        <div>
            <label for="status" class="block text-sm font-medium leading-6 text-gray-900">Update Status</label>
            <select id="status"
                    v-model="form.status"
                    class="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-red-600 sm:text-sm sm:leading-6">
                <option value="RECEIVED">Received</option>
                <option value="PROGRESS">In Progress</option>
                <option value="OVEN">In The Oven</option>
                <option value="READY">Ready for {{ order.delivery_method }}</option>
            </select>
        </div>
        <div class="text-xs text-red-500" v-if="$page.props.errors.status">{{ $page.props.errors.status }}</div>
        <primary-button class="w-full justify-center mt-2 bg-green-700">UPDATE</primary-button>
    </form>
</template>

<style scoped>

</style>
