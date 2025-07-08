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
  }
  else{
    cart.value = cart.value.filter((ct)=> ct.name !== fullname.value)
  }
}
</script>
