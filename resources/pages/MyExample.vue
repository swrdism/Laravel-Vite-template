<script setup>
const counter = ref(0);
</script>

<template>
    <button
        type="button"
        class="p-2 text-white bg-gray-500 rounded"
        @click="counter++"
    >
        Counter is: {{ counter }}
    </button>
    <div>
        <svg-icon name="example" />
    </div>
</template>
