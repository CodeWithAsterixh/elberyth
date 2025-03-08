<script lang="ts" setup>

</script>

<template>
   <footer class="bg-primary text-white px-4 sm:px-8 py-8">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
    <!-- Company Info -->
    <div class="flex flex-col gap-4">
      <h2 class="text-2xl font-bold">Elberyth</h2>
      <p class="text-sm">
        Discover the latest trends in fashion and skincare. We bring you quality products to elevate your style and beauty.
      </p>
      <p class="text-xs">&copy; 2025 Elberyth. All rights reserved.</p>
    </div>
    <!-- Navigation -->
    <nav class="flex flex-col gap-2 min-w-44">
      <h3 class="text-lg font-semibold">Quick Links</h3>
      <ul class="flex flex-col gap-1">
        <li><NuxtLink href="/" class="hover:underline">Home</NuxtLink></li>
        <li><NuxtLink href="/shop" class="hover:underline">Shop</NuxtLink></li>
        <li><NuxtLink href="/about" class="hover:underline">About Us</NuxtLink></li>
        <li><NuxtLink href="/contact" class="hover:underline">Contact</NuxtLink></li>
      </ul>
    </nav>
    <!-- Newsletter Signup -->
    <div class="flex flex-col gap-4">
      <h3 class="text-lg font-semibold">Newsletter</h3>
      <p class="text-sm">Subscribe to get the latest updates and exclusive offers.</p>
      <form class="flex flex-wrap gap-2">
        <input
          type="email"
          placeholder="Your email"
          class="p-2 text-black flex-1 flex-grow basis-32 !outline-none !border-none"
        />
        <button
          type="submit"
          class="bg-accent text-primary p-2 flex-grow basis-32 hover:bg-secondary hover:text-accent transition"
        >
          Subscribe
        </button>
      </form>
    </div>
    <!-- Socials -->
    <div class="flex flex-col gap-4">
      <h3 class="text-lg font-semibold">Follow Us</h3>
      <ul class="flex gap-4 text-2xl">
        <li><a href="#"><i class="pi pi-facebook"></i></a></li>
        <li><a href="#"><i class="pi pi-tiktok"></i></a></li>
        <li><a href="#"><i class="pi pi-instagram"></i></a></li>
        <li><a href="#"><i class="pi pi-whatsapp"></i></a></li>
        <li><a href="#"><i class="pi pi-pinterest"></i></a></li>
      </ul>
    </div>
  </div>
  <!-- Bottom Footer Links -->
  <div class="mt-8 border-t border-white pt-4 text-center text-xs">
    <p>
      <a href="#" class="hover:underline">Terms & Conditions</a> |
      <a href="#" class="hover:underline">Privacy Policy</a>
    </p>
  </div>
</footer>

</template>
