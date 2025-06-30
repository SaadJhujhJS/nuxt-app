<template>
    <p>
        {{ count }}
    </p>
    <button @click="increment">Decrement</button>
</template>
<script setup>
const count=ref(0);
function increment(){
    count.value--
}
</script>