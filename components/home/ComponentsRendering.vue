<template>
    <div>
        <div>
            <a href="#" @click="view('contact')">Contact</a>
        </div>
        <div style="margin-bottom: 10px;">
            <a href="#" @click="view('about')">About</a>
            <button @click="goToSimple" style="margin-left: 30px;">navigateToSimple</button>
        </div>
        <ContactUs v-if="Page === 'contact'" />
        <About v-if="Page === 'about'" />
        <button @click="toggle">Toggle</button>
        <component :is="MyCompo" />
    </div>
</template>
<script setup>
const Page = ref(" ")
const MyCompo = shallowRef(resolveComponent("Increment"));
function toggle() {
    MyCompo.value = resolveComponent("Decrement")
}

function view(name) {
    Page.value = name
}

function goToSimple(){
    navigateTo("simple")
}
</script>
