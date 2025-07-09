<template>
  <div>
    <div class="form-container" v-if="!isLoggedIn">
      <form @submit.prevent="handleSubmit" class="form">
        <h2>Contact Us</h2>
        <label for="email">Name:</label>
        <input type="text" id="name" v-model="email" />

        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />

        <button type="submit">Login</button>
      </form>
    </div>
    <div v-else>
      <About />
    </div>
  </div>
</template>
<script setup>
useHead({
  title: "Contact Us",
  meta: [
    { name: "description", content: "This is Contact Us page" },
    { property: "og:title", content: "Contact Us" },
    { property: "og:description", content: "This is Contact Us page" },
  ],
});

const email = ref("");
const password = ref("");
const isLoggedIn = ref(false);

const handleSubmit = () => {
  if (email.value === "user" && password.value === "12345") {
    isLoggedIn.value = true;
  } else {
    alert("Incorrect password, try again");
  }
};
</script>
