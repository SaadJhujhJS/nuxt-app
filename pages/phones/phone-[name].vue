<template>
  <div>
    <Head>
      <Title>Nuxt 3 Phones {{ name }}</Title>
    </Head>
    <div>
      <h1>Phones</h1>
    </div>
    <NuxtLink to="/phones"><button>Go Back</button></NuxtLink>
  </div>
</template>
<script setup>
const route = useRoute();
const name = computed(() => {
  return route.params.name.replaceAll("-", " ");
});
</script>
