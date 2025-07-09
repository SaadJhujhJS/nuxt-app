<template>
  <div>
    <button
      @click="addToCart"
      style="
        background-color: cadetblue;
        color: white;
        padding: 10px 20px;
        cursor: pointer;
        border: none;
        border-radius: 12px;
      "
    >
      <span v-if="isInCart()">Remove From Cart</span>
      <span v-else>Add To Cart</span>
    </button>
  </div>
</template>
<script setup>
const route = useRoute();
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
const cart = UseCartState();
const fullname = computed(() => {
  return `phone-${route.params.name}`;
});

function isInCart(){
  return !!cart.value.find((ct) => ct.name == fullname.value);
}
function addToCart() {
  if (!isInCart()) {
    cart.value.push({
      name: fullname,
    });
    toast.success("Added to Cart")
  }
  else{
    cart.value = cart.value.filter((ct)=> ct.name !== fullname.value)
    toast.error("Removed from cart")
  }
}
</script>
