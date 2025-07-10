<template>
    <div>
        <Phones />
    </div>
</template>
<script setup>
definePageMeta({
    //named middle ware and this is best way to use
  middleware: ["auth"]
  // Inline middle ware
//   middleware: ()=>{
//     const auth = useAuth()
//     return auth.value.isAuthenticated
//   }
})

</script>