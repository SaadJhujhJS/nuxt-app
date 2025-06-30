<template>
  <div>
    <Home />
    <button @click="toggle">Toggle</button>
    <component :is="MyCompo" />
  </div>
</template>
<script setup>
const MyCompo = shallowRef(resolveComponent("Increment"));
function toggle(){
  MyCompo.value= resolveComponent("Decrement")
}
</script>
