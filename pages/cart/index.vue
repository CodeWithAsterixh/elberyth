<template>
    <div class="container mx-auto px-4 py-10 bg-gray-50">
      <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">Your Cart</h1>
      <div v-if="cart.items.length > 0">
        <div class="space-y-6">
          <CartItemComponent  v-for="(item,id) in cart.items" :key="id" :item="item"/>
        </div>
        <div class="mt-8 text-right">
          <h2 class="text-2xl font-bold text-gray-800">Total: &#8358;{{ totalPrice }}</h2>
        </div>
        <div class="mt-6 text-right">
          <button class="bg-primary text-white py-3 px-8 rounded hover:bg-primary/80 transition duration-300">
            Proceed to Checkout
          </button>
        </div>
      </div>
      <div v-else class="text-center text-gray-600">
        <p class="text-xl">Your cart is empty.</p>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  
  const { cart } = useCart();
  
  // Compute the total price of items in the cart
  const totalPrice = computed(() =>
  cart.items.reduce((sum, item) => sum + item.productDetails.price * item.length, 0)
  );
  </script>
