<template>
  <div>
    <div class="form-container">
      <form @submit.prevent="handleSubmit" class="form">
        <h2>About Us</h2>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required/>

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required/>

        <button type="submit">
          {{ isLoading ? "Logging in..." : "Login" }}
        </button>
        <p v-if="isLoading" style="margin-top: 10px; color: #2e86de">
          Loading data...
        </p>
      </form>
    </div>
  </div>
</template>
<script setup>
useHead({
  title: "About Us",
  meta: [
    { name: "description", content: "This is About Us page" },
    { property: "og:title", content: "About Us" },
    { property: "og:description", content: "This is About Us page" },
  ],
});

const name = ref("");
const email = ref("");
const isLoading = ref(false);
const isLoggedIn = ref(false)
const handleSubmit = async () => {
  if (isLoading.value) return;
  isLoading.value = true;
   // ✅ Simulate a delay (e.g., 2 seconds)
  await new Promise(resolve => setTimeout(resolve, 2000));
  const { data, error } = await useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  isLoading.value = false;
  if (error.value) {
    console.error("Fetch failed:", error.value);
    return;
  }

  // if (data.value) {
  //   data.value.forEach((user) => {
  //     console.log("Name:", user.name);
  //     console.log("Email:", user.email);
  //   });
  // }
  const matchedUser = data.value.find(
    user => user.name.toLowerCase() === name.value.toLowerCase().trim() &&
            user.email.toLowerCase() === email.value.toLowerCase().trim()
  )

  if (matchedUser) {
    isLoggedIn.value = true
    alert('Login successful')
    name.value = ""
    email.value = ""
  } else {
    alert('User not found. Please check name and email.')
  }
};
</script>
