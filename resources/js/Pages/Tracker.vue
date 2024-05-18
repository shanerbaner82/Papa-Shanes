<script setup>
import ConfettiGenerator from "confetti-js";
import {onMounted, watch, toRefs} from "vue";

const props = defineProps({
    order: Object,
    statuses: Object
})

let {status} = toRefs(props.order)
let keys = Object.keys(props.statuses);

watch(status, () => {
    checkForConfetti()
})

const checkForConfetti = function () {
    if (keys.indexOf(status.value) === keys.length - 1) {
        tada();
    }
}
const tada = function () {
    let confettiSettings = {
        target: 'confetti',
        clock: 50,
        start_from_edge: true,
        rotate: true,
        max: 500
    };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}

const statusClasses = function (key, value) {
    let defaultClasses = 'w-1/4 bg-gradient-to-b flex items-center justify-center h-20 border-r-2  transition-all';

    if (key === keys[0]) {
        defaultClasses += ' rounded-l-full'
    }
    if (key === keys[keys.length - 1]) {
        defaultClasses = defaultClasses.replace('border-r-2', 'rounded-r-full');
    }

    if (status.value === key) {
        return `${defaultClasses} from-red-500 to-red-600 scale-125 rounded shadow-lg border-red-800 shadow-2xl z-10`
    }

    if (keys.indexOf(key) < keys.indexOf(status.value)) {
        return `${defaultClasses} from-green-700 to-green-800 border-green-900`
    }

    return `${defaultClasses} from-green-200 to-green-500 border-green-900`
}

onMounted(() => {
    checkForConfetti()
    Echo.channel(`orders.${props.order.order_number}`)
        .listen('OrderUpdatedEvent', (e) => {
            status.value = e.order.status
        });
})
</script>

<template>
    <canvas class="absolute w-screen h-screen inset-0" id="confetti"></canvas>
    <div class="w-screen h-screen grid content-center justify-center">
        <div class="max-w-4xl ">
            <div class="flex flex-col items-center justify-center p-12 gap-y-4">
                <img src="/images/papashanes.png" class="flex justify-center max-h-24"/>
                <p class="font-black text-3xl">Better Ingredients. Better Code.</p>
            </div>
            <div class="flex border-4 border-black rounded-full shadow-xl">
                <div v-for="(value, key) in props.statuses" :key="key" :class="statusClasses(key, value)">
                    <p class="uppercase font-bold italic text-white drop-shadow text-center">
                        <span class="block text-3xl font-bold not-italic leading-none">{{ value }}</span>
                    </p>
                </div>
            </div>
            <p class="text-center mt-4 text-xl">Ordered {{ order.created }}</p>
        </div>
    </div>
</template>

<style scoped>

</style>
