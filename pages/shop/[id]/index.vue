<template>
  <div v-if="product" class="container mx-auto px-4 py-10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Product Image -->
      <div class="flex items-center justify-center">
        <img
          :src="product.image"
          alt="Product Image"
          class="w-full max-w-md object-cover shadow-lg"
        />
      </div>
      <!-- Product Details -->
      <div class="flex flex-col justify-center">
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          {{ product.name }}
        </h1>
        <p class="text-xl text-primary font-semibold mb-6">
          &#8358; {{ product.price }}
        </p>
        <p class="text-gray-700 mb-6">
          {{ product.description }}
        </p>
        <ul
          class="list-disc list-inside mb-6"
          v-if="product.features && product.features.length"
        >
          <li
            v-for="(feature, index) in product.features"
            :key="index"
            class="text-gray-700"
          >
            {{ feature }}
          </li>
        </ul>
        <div class="flex gap-4">
          <button
            class="bg-primary text-white py-2 px-6 hover:bg-primary/70 transition duration-300"
          >
            <i class="pi pi-cart-plus mr-2"></i> Add to Cart
          </button>
          <button
            class="border border-primary text-primary py-2 px-6 hover:bg-primary hover:text-white transition duration-300"
          >
            <i class="pi pi-credit-card mr-2"></i> Buy Now
          </button>
        </div>
      </div>
    </div>
    <!-- Additional Product Information -->
    <div class="mt-10">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Product Details</h2>
      <p class="text-gray-700 leading-relaxed">
        {{ product.details }}
      </p>
    </div>
  </div>

  <!-- Fallback for Product Not Found -->
  <div v-else class="container mx-auto px-4 py-10">
    <p class="text-center text-gray-600 text-2xl">Product not found.</p>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { products } from "~/assets/files/datas/products";

const route = useRoute();
const id = route.params.id as string;
const product = products.find((p) => p.id === id);
</script>
