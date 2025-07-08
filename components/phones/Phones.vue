<template>
  <div>
    <Head>
      <Title>Nuxt 3 Phones</Title>
    </Head>
    <h1 style="text-align: center">We have Iphones and Samsung mobiles</h1>
    <div class="phones">
      <NuxtLink
        v-for="(phone, index) in phones"
        :key="index"
        :to="`/phones/${phone.name.replace(/\s+/g, '-')}`"
        class="card"
      >
        <h1 style="white-space: nowrap">{{ phone.name }}</h1>
        <img :src="phone.url" :alt="phone.name" height="200" />
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
const phones = [
  {
    name: "Iphone 13",
    url: "/images/iphone12.webp",
  },
  {
    name: "Iphone 13 Pro",
    url: "/images/iphone12-pro-max.webp",
  },
  {
    name: "Samsung S22",
    url: "/images/Samsung S25.webp",
  },
];
</script>
