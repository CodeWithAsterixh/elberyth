<script lang="ts" setup>
import { products } from '../../assets/files/datas/products';
import { groupProductsByCategory } from '../../assets/lib/utils/product';

const showFilters = ref(false);
// toggle show filter
const toggleShowFilter = () => {
  showFilters.value = !showFilters.value;
};
</script>

<template>
  <div class="w-full flex flex-col gap-3 items-center py-3">
    <div class="w-full grid sm:grid-cols-[4fr_2fr]">
      <div class="w-full p-2 px-4 flex flex-col gap-5">
        <div v-for="(category, index) in groupProductsByCategory(products)" :key="index" class="w-full flex flex-col gap-3">
            <div class="w-full flex items-center justify-between">
              <h2
                class="text-center w-fit text-2xl sm:text-3xl font-bold border-b-4 border-primary"
              >
                {{ category.name }}
              </h2>
              <a href="#" class="hover:underline">see all <i class="pi pi-arrow-right text-xs"></i></a>
            </div>
            <div
              class="w-full grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3"
            >
            <ProductCardComponent v-for="(item, index2) in category.items" :key="index2" :product-name="item.productName" :price="item.price" :src="item.src" />

            </div>
          </div>
      </div>
      <div
        :class="`w-full p-2 fixed h-[70vh] duration-500 ${
          showFilters ? 'bottom-0 sm:bottom-0' : '-bottom-[100%] sm:bottom-0'
        } bg-accent sm:h-fit sm:relative`"
      >
        <!-- small head -->
        <div class="w-full flex items-center justify-between">
          <h2 class="text-xl">Filters</h2>
          <button
            @click="toggleShowFilter"
            class="sm:hidden w-fit flex items-center justify-center gap-2 py-2 px-4 bg-primary text-accent"
          >
            <i class="pi pi-times"></i>
          </button>
        </div>
      </div>
    </div>
    <button
      @click="toggleShowFilter"
      class="sm:hidden w-fit flex items-center justify-center gap-2 py-2 px-4 bg-primary text-accent"
    >
      <i class="pi pi-filter"></i>
      filters
    </button>
  </div>
</template>
