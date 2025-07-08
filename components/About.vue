<template>
    <div>
        <h1>
            This is About Page
        </h1>
    </div>
</template>
<script setup>
useHead({
  title: 'About Us',
  meta: [
    { name: 'description', content: 'This is About Us page' },
    { property: 'og:title', content: 'About Us' },
    { property: 'og:description', content: 'This is About Us page' },
  ],
})
</script>