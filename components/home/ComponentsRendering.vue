<template>
  <div style="display: flex; align-items: center; justify-content: center">
    <div>
      <div>
        <h1>
            This is Home Page
        </h1>
        <a href="#" @click="view('contact')">Contact</a>
      </div>
      <div style="margin-bottom: 10px">
        <a href="#" @click="view('about')">About</a>
        <button @click="goToSimple" style="margin-left: 30px">
          navigateToSimple
        </button>
      </div>
      <ContactUs v-if="Page === 'contact'" />
      <About v-if="Page === 'about'" />
      <button @click="toggle">Toggle</button>
      <component :is="MyCompo" />
    </div>
  </div>
</template>
<script setup>
const Page = ref(" ");
const MyCompo = shallowRef(resolveComponent("Increment"));
function toggle() {
  MyCompo.value = resolveComponent("Decrement");
}

function view(name) {
  Page.value = name;
}

function goToSimple() {
  navigateTo("simple");
}

const { data, error } = await useFetch('/api/students')

watchEffect(() => {
  if (data.value) {
    console.log("Student data:", data.value);
  }
  if (error.value) {
    console.error("API Error:", error.value);
  }
})
</script>
