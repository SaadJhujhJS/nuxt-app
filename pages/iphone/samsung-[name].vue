<template>
    <div>
        <h1>
            Samsung Galaxy {{ name }}
        </h1>
    </div>
</template>
<script setup>
const route = useRoute()
const name = computed(()=>{
    return route.params.name.replaceAll("-", " ")
})
</script>