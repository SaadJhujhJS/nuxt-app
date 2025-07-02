<template>
    <div>
        <ul>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li><NuxtLink to="/about-us">AboutUs</NuxtLink></li>
            <li><NuxtLink to="/contact-us">ContactUs</NuxtLink></li>
        </ul>
    </div>
</template>
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