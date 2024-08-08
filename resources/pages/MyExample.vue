<script setup>
import { myExampleStore } from "@/stores/modules/myExample";
const store = myExampleStore();
</script>

<template>
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
    <button
        type="button"
        class="p-2 text-white bg-gray-500 rounded"
        @click="store.increment()"
    >
        Counter is: {{ store.count }}
    </button>
    <div>Double Count is : {{ store.doubleCount }}</div>
    <button
        type="button"
        class="p-2 text-white bg-gray-500 rounded"
        @click="store.$reset()"
    >
        reset
    </button>
    <div>
        <svg-icon name="example" />
    </div>
</template>
