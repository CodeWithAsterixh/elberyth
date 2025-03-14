<script lang="ts" setup>
import { groupProductsByCategory } from '~/assets/lib/utils/product';
import { products } from '~/assets/files/datas/products';

import type { Product } from '~/types';

// Data for the carousel
const carouselData = [
  {
    title: "Fashion",
    description: "Discover our astonishing wears, level up your style",
    imgSrc: "/files/images/image-cloth (2).jpeg",
  },
  {
    title: "Skincare",
    description: "Beauty is pride. Look at what we have for you, Having fresh skin brings beauty",
    imgSrc: "/files/images/image-skin (2).jpeg",
  }
];
const currentPageIndex = ref(0);
const onPageChange = (e: number) => {
  currentPageIndex.value = e;
};

// Service list data
const services = [
  {
    icon: "pi pi-truck",
    title: "Shipping & Return",
    description: "Nationwide shipping",
  },
  {
    icon: "pi pi-credit-card",
    title: "Secure Payment",
    description: "Credit card payment or e-pay support.",
  },
  {
    icon: "pi pi-undo",
    title: "15 Days Exchange",
    description: "Errors from manufacturers within 15 days of purchase.",
  },
  {
    icon: "pi pi-phone",
    title: "Customer Support 24/7",
    description: "Sales and return support daily and for holiday shoppings.",
  },
];



// Categories list data
const categories = [
  { image: "/files/images/image-cloth (1).jpeg", title: "Male cloths" },
  { image: "/files/images/image-cloth (2).jpeg", title: "Hoods cloths" },
  { image: "/files/images/image-skin (1).jpeg", title: "Facials" },
  { image: "/files/images/image-skin (2).jpeg", title: "Skin" },
];

const groupedProduct = groupProductsByCategory(products)
// Featured product data
const randomGroup = groupedProduct[Math.floor(Math.random()*groupedProduct.length)]
const featuredProduct = randomGroup.items[Math.floor(Math.random()*randomGroup.items.length)]
const {addToCart} = useCart().actions
</script>

<template>
  <div class="w-full mb-20 isolate relative">
    <!-- Carousel -->
    <Carousel
      content-class="max-w-[100vw]"
      @update:page="onPageChange"
      :show-navigators="false"
      :show-indicators="false"
      :autoplay-interval="5000"
      :value="carouselData"
      class="!w-full !flex !items-center !justify-center !m-auto !relative !!z-0"
    >
      <template #item="slotProps">
        <HomeCarouselItemComponent
          :imgSrc="slotProps.data.imgSrc"
          :title="slotProps.data.title"
          :description="slotProps.data.description"
          :is-shown="slotProps.index === currentPageIndex"
        />
      </template>
    </Carousel>

    <div class="w-full h-fit relative">
      <!-- Service List -->
      <ul
        class="w-full sm:px-10 px-4 z-10 relative -mt-10 sm:-mt-20 grid gap-2 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] md:grid-cols-4 text-accent *:bg-secondary"
      >
        <li
          v-for="(service, index) in services"
          :key="index"
          class="flex flex-col px-2 py-4 items-center justify-center gap-2 text-center"
        >
          <span
            class="border-2 py-2 px-2.5 border-accent flex items-center justify-center rounded-full"
          >
            <i :class="[service.icon, '!text-4xl']"></i>
          </span>
          <h4 class="text-lg font-semibold">{{ service.title }}</h4>
          <p class="text-base">{{ service.description }}</p>
        </li>
      </ul>

      <!-- Background Blob -->
      <picture>
        <source
          media="(min-width: 640px)"
          srcset="/files/svgs/bg-blob-large.svg"
        />
        <img
          class="size-full absolute blur-3xl opacity-60 sm:opacity-90 md:opacity-60 duration-300 top-20 object-cover object-center -z-10"
          src="/files/svgs/bg-blob-mobile.svg"
          alt="bg-blob"
        />
      </picture>

      <!-- Featured Product -->
      <div class="w-full flex flex-col gap-3 items-center mt-10">
        <h1
          class="text-center w-fit text-2xl sm:text-3xl font-bold border-b-4 border-primary"
        >
          Featured Product
        </h1>
        <div
          class="w-full flex gap-5 flex-col-reverse sm:flex-row items-center max-w-5xl m-auto px-4 sm:px-10 mt-5"
        >
          <div
            class="w-full flex flex-col justify-center sm:px-10 gap-4 min-h-full"
          >
            <h1 class="font-bold text-3xl">{{ featuredProduct.name }}</h1>
            <p>{{ featuredProduct.details }}</p>
            <div class="w-full flex flex-wrap *:basis-44 gap-2">
              <button
              @click="()=>addToCart(featuredProduct)"
              class="w-fit !bg-primary !text-accent !px-4 !py-2 !flex !items-center !justify-center !gap-2"
            >
              <i class="pi pi-cart-plus"></i>
              Add to cart
            </button>
            <NuxtLink
              :href="`/shop/${featuredProduct.id}`"
              class="w-fit !bg-secondary !text-accent !px-4 !py-2 !flex !items-center !justify-center !gap-2"
            >
              View product
            </NuxtLink>
            </div>
          </div>
          <span class="w-full sm:w-fit shrink-0 bg-highlight">
            <img
              class="w-full sm:w-fit max-h-96 lg:max-h-[70vh] object-cover"
              :src="featuredProduct.image"
              :alt="featuredProduct.image"
            />
          </span>
        </div>
      </div>
    </div>

    <!-- Categories Section -->
    <div class="w-full h-fit flex flex-col items-center gap-3 relative mt-20 overflow-hidden">
      <h2
        class="text-center w-fit text-2xl sm:text-3xl font-bold border-b-4 border-primary"
      >
        SHOP BY CATEGORIES
      </h2>
      <ul
        class="w-full sm:px-10 px-4 z-10 relative grid gap-2 grid-cols-[repeat(auto-fill,minmax(150px,1fr))] md:grid-cols-4 text-white"
      >
        <li
          v-for="(category, index) in groupedProduct"
          :key="index"
          class="flex flex-col px-2 py-4 items-center justify-center gap-2 text-center"
        >
          <span
            class="w-full border-2 py-2 px-2.5 border-primary flex items-center justify-center"
          >
            <img
              :src="category.items[Math.floor(Math.random()*category.items.length)].image"
              alt="category"
              class="w-full h-32 object-cover object-center"
            />
          </span>
          <h4 class="text-lg font-semibold bg-light text-primary px-2">
            {{ category.name }}
          </h4>
        </li>
      </ul>
      <picture class="size-full absolute top-20">
        <source
          media="(min-width: 640px)"
          srcset="/files/svgs/layering-blob-large.svg"
        />
        <img
          class="size-full duration-300 top-20 object-cover object-bottom -z-10"
          src="/files/svgs/layering-blob-mobile.svg"
          alt="bg-blob"
        />
      </picture>
    </div>

    <!-- categories mini list -->

     <HomeCategoryListContainer v-for="(category, index) in groupedProduct" :key="index" :title="category.name">
      <ProductCardComponent v-for="(item, index2) in category.items" :key="index2" :product="item" />
     </HomeCategoryListContainer>
     
  </div>
</template>
