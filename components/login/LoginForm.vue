<template>
  <div>
    <div class="form-container">
    <form @submit.prevent="handleSubmit" class="form">
      <h2>Login</h2>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />

      <button type="submit">Login</button>
    </form>
  </div>
  </div>
</template>

<script setup lang="ts">

const email = ref("");
const password = ref("");
const router = useRouter()
const data = "https://jsonplaceholder.typicode.com/users"

const handleSubmit = () => {
    if (email.value === 'admin@example.com' && password.value === '123456') {
    router.push('/phones')
  } else {
    alert('Invalid credentials')
  }
};
</script>

