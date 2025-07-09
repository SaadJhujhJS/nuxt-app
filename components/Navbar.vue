<template>
    <div>
        <ul>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li><NuxtLink to="/phones">Phones</NuxtLink></li>
            <li><NuxtLink to="/about-us">AboutUs</NuxtLink></li>
            <li><NuxtLink to="/contact-us">ContactUs</NuxtLink></li>
            <li><NuxtLink to="/login">Login</NuxtLink></li>
        </ul>
        <h2 style="text-align: end; color: red;">[{{ UseCart.length }}]</h2>
    </div>
</template>
<script setup>
const UseCart = UseCartState();
</script>
<style scoped>
ul{
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: cadetblue;
}
ul li{
    padding:20px;
}
ul li a{
    text-decoration: none;
}
</style>