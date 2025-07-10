<template>
  <div>
    <div class="form-container">
    <form @submit.prevent="handleSubmit" class="form">
      <h2>Login</h2>
      <p v-if="error" style="color: red; font-size: smaller; margin-bottom: 10px;">Invalid Credentials, try again...</p>
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
const Auth = useAuth()
const error = ref(false);

const handleSubmit = () => {
    if (email.value === 'admin@example.com' && password.value === '123456') {
    router.push('/phones')
    Auth.value.isAuthenticated = true;
  } else {
    error.value = true;
    email.value = "";
    password.value = "";
  }
};
</script>

