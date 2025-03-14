<script lang="ts" setup>
import type { cartItem } from '~/types';

    const {item} = defineProps<{
        item:cartItem
    }>()
    const {crementing,removeFromCart} = useCart().actions
</script>

<template>
     <div
            :key="item.productDetails.id"
            class="flex flex-col min-[498px]:flex-row items-center border p-4 rounded-lg shadow-sm bg-accent/30"
          >
            <img
              :src="item.productDetails.image"
              :alt="item.productDetails.name"
              class="w-24 h-24 object-cover rounded mr-4 mb-4 md:mb-0 min-h-full"
            />
            <div class="flex-1">
              <h2 class="text-xl font-semibold text-dark">{{ item.productDetails.name }}</h2>
              <p class="text-gray-600">Price: &#8358;{{ item.productDetails.price }}</p>
              <div class="flex items-center gap-4 mt-2">
                <button
                  @click="crementing('REMOVE', item.productDetails.id)"
                  class="bg-secondary/30 text-dark px-3 py-1 rounded hover:bg-secondary/40 transition"
                >
                  -
                </button>
                <span class="font-bold text-lg text-dark">{{ item.length }}</span>
                <button
                  @click="crementing('ADD', item.productDetails.id)"
                  class="bg-secondary/30 text-dark px-3 py-1 rounded hover:bg-secondary/40 transition"
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
            <div class="text-xl font-semibold text-dark mt-4 md:mt-0">
             &#8358;{{ item.productDetails.price * item.length }}
            </div>
          </div>
</template>
