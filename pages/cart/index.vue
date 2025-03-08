<template>
    <div class="container mx-auto px-4 py-10 bg-gray-50">
      <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">Your Cart</h1>
      <div v-if="cartItems.length > 0">
        <div class="space-y-6">
          <div
            v-for="item in cartItems"
            :key="item.productDetails.id"
            class="flex flex-col md:flex-row items-center border p-4 rounded-lg shadow-sm bg-white"
          >
            <img
              :src="item.productDetails.image"
              :alt="item.productDetails.name"
              class="w-24 h-24 object-cover rounded mr-4 mb-4 md:mb-0"
            />
            <div class="flex-1">
              <h2 class="text-xl font-semibold text-gray-800">{{ item.productDetails.name }}</h2>
              <p class="text-gray-600">Price: &#8358;{{ item.productDetails.price }}</p>
              <div class="flex items-center gap-4 mt-2">
                <button
                  @click="crementing('REMOVE', item.productDetails.id)"
                  class="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition"
                >
                  -
                </button>
                <span class="font-bold text-lg text-gray-800">{{ item.length }}</span>
                <button
                  @click="crementing('ADD', item.productDetails.id)"
                  class="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition"
                >
                  +
                </button>
              </div>
              <button
                @click="removeFromCart(item.productDetails.id)"
                class="mt-2 text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
            <div class="text-xl font-bold text-gray-800 mt-4 md:mt-0">
              &#8358;{{ item.productDetails.price * item.length }}
            </div>
          </div>
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
  const { crementing, removeFromCart } = useCart().actions;
  const cartItems = cart.items;
  
  // Compute the total price of items in the cart
  const totalPrice = computed(() =>
    cartItems.reduce((sum, item) => sum + item.productDetails.price * item.length, 0)
  );
  </script>
