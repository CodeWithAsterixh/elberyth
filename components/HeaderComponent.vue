<script lang="ts" setup>
const menuShown = ref(false);
const toggleShow = () => {
  menuShown.value = !menuShown.value;
};
const isTopShown = ref(false);
const {cart} = useCart()
onMounted(() => {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");

  if (header && nav) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        header.classList.add("sticky");
        isTopShown.value = false;
      } else {
        header.classList.remove("sticky");
        isTopShown.value = true;
      }
    });
  }
});
</script>

<template>
  <header class="w-full h-fit z-10 -top-11 duration-300">
    <div class="top-header z-50">
      <h1>Elberyth</h1>
      <ul>
        <li><i class="pi pi-facebook"></i></li>
        <li><i class="pi pi-tiktok"></i></li>
        <li><i class="pi pi-instagram"></i></li>
        <li><i class="pi pi-whatsapp"></i></li>
      </ul>
    </div>
    <nav class="main-header">
      <ul class="navigation">
        <li><NuxtLink href="/">Home</NuxtLink></li>
        <li><NuxtLink href="/shop">Shop</NuxtLink></li>
        <li><NuxtLink href="/contact">Contact us</NuxtLink></li>
      </ul>
      <ul class="actions flex items-center gap-3">
      
      <li class="flex items-center justify-center"><NuxtLink href="/account" class="!h-fit flex items-center justify-center"><Avatar size="normal" shape="circle" image="/files/images/male (1).jpeg" /></NuxtLink></li>
        <li><i class="pi pi-heart !text-lg"></i></li>
        <li><i class="pi pi-arrow-right-arrow-left !text-lg"></i></li>
        <li><NuxtLink href="/cart"><BadgeComponent :show="cart.items.length?true:false" :content="cart.items.length" position="top-right"><i class="pi pi-shopping-cart !text-lg"></i></BadgeComponent></NuxtLink></li>
        <li><i class="pi pi-search !text-lg"></i></li>
      </ul>
      
    </nav>
    <nav
      v-if="!menuShown||!isTopShown"
      class="w-full flex z-50 sm:hidden bg-accent text-primary p-2 py-5 sticky top-0 sm:px-10 items-center justify-between"
    >
      <h1
        :class="`text-lg font-bold duration-500 ${
          isTopShown ? 'opacity-0 scale-50' : 'opacity-100 scale-100'
        }`"
      >
        Elberyth
      </h1>
     <div class="flex items-center gap-3">
      <NuxtLink href="/account"><Avatar size="normal" shape="circle" image="/files/images/male (1).jpeg" /></NuxtLink>
      <button
        :class="`${
          menuShown ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`"
        @click="toggleShow"
      >
        <i class="pi pi-bars text-xl"></i>
      </button>
     </div>
    </nav>
    <nav
      :class="`small-main-header shadow-md pb-5 duration-500 ${
        menuShown ? isTopShown?'top-11': 'top-16' : '-top-[100%]'
      }`"
    >
      <ul class="navigation">
        <li><NuxtLink href="/">Home</NuxtLink></li>
        <li><NuxtLink href="/shop">Shop</NuxtLink></li>
        <li><NuxtLink href="/contact">Contact us</NuxtLink></li>
      </ul>
      <ul class="actions">
        <li><i class="pi pi-heart"></i></li>
        <li><i class="pi pi-arrow-right-arrow-left"></i></li>
        <li><NuxtLink href="/cart"><BadgeComponent :show="cart.items.length?true:false" :content="cart.items.length" position="top-right"><i class="pi pi-shopping-cart"></i></BadgeComponent></NuxtLink></li>
        <li><i class="pi pi-search"></i></li>
      </ul>
      <button
        @click="toggleShow"
        class="p-2 px-4 flex rounded-b-full shadow-md items-center justify-center bg-accent absolute top-[calc(100%-2px)] left-1/2 -translate-x-1/2"
      >
        <i class="pi pi-times !text-3xl !text-primary"></i>
      </button>
    </nav>
    
  </header>
</template>
