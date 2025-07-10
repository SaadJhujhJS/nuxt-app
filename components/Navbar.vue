<template>
  <div class="navbg">
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li v-if="Auth.isAuthenticated">
        <NuxtLink to="/phones">Phones</NuxtLink>
      </li>
      <li><NuxtLink to="/about-us">AboutUs</NuxtLink></li>
      <li><NuxtLink to="/contact-us">ContactUs</NuxtLink></li>
    </ul>
    <div
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
      "
    >
      <NuxtLink to="/login" v-if="!Auth.isAuthenticated">Login</NuxtLink>
      <p v-else @click="LogOut" style="cursor: pointer;">Log Out</p>
      <!-- <p style="">{{ Auth.isAuthenticated }}</p> -->
      <h2 style="text-align: end; color: red">[{{ UseCart.length }}]</h2>
    </div>
  </div>
</template>
<script setup>
const UseCart = UseCartState();
const Auth = useAuth();

const LogOut = () =>{
    Auth.value.isAuthenticated = false
    navigateTo('/')
}
</script>
<style scoped>
.navbg {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: cadetblue;
  padding: 0px 20px;
}
ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  list-style-type: none;
}
ul li {
  padding: 20px opx;
}
ul li a {
  text-decoration: none;
}
</style>
