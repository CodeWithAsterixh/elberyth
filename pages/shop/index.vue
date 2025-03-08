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
    <div class="w-full">
      <div class="w-full p-2 px-4 flex flex-col gap-5">
        <div v-for="(category, index) in groupProductsByCategory(products)" :key="index" class="w-full flex flex-col gap-3">
            <div class="w-full flex items-center justify-between">
              <h2
                class="text-center w-fit text-2xl sm:text-3xl font-bold border-b-4 border-primary"
              >
                {{ category.name }}
              </h2>
            </div>
            <div
              class="w-full grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3"
            >
            <ProductCardComponent v-for="(item, index2) in category.items" :key="index2" :product="item" />

            </div>
          </div>
      </div>
      
    </div>
    
  </div>
</template>
