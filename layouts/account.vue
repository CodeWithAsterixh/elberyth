<script lang="ts" setup>
const user = { role: "admin" };
const shownSide = ref(false)
// handle toggle
const toggleSide = () => {
    shownSide.value = !shownSide.value
    }
</script>

<template>
  <div
    :class="`w-full sm:max-h-[calc(100vh-4rem)] sm:overflow-y-hidden flex`"
  >
<aside :class="`fixed shrink-0 ${shownSide?'':'sm:w-[3.5rem]'} w-80 top-0 z-40 sm:z-0 sm:sticky max-w-[80vw] sm:max-h-full bg-accent sm:bg-accent/30 duration-300 ${shownSide?'left-0':'-left-[80vw] min-[360px]:-left-80'}`">
    <button @click="toggleSide" class="bg-accent text-primary shadow-md sm:hidden p-2 flex items-center justify-center top-14 absolute left-[100%]"><i :class="`pi duration ${shownSide?'pi-angle-left':'pi-angle-right'} !text-xl`"></i></button>

    <div :class="`w-full bg-primary/20 flex items-center ${shownSide?'justify-between':'justify-center'}`">
            <h3 v-if="shownSide" class="text-lg p-2">Welcome , {{ user.role }}</h3>
            <button @click="toggleSide" class="p-2 hidden sm:flex items-center justify-center"><i :class="`pi !text-lg ${shownSide?'pi-angle-left':'pi-angle-right'}` "></i></button>
            
        </div>
      <nav class="w-full border-r p-2 sticky top-0 h-screen">
        <ul class="space-y-2 links">
          <li>
            <NuxtLink href="/account" :class="`${shownSide?'gap-2':'justify-center'}`">
              <i class="pi pi-user "></i> {{!shownSide?"":"Profile"}}
            </NuxtLink>
          </li>
          <li v-if="user.role === 'admin'">
            <NuxtLink href="/account/admin" :class="`${shownSide?'gap-2':'justify-center'}`">
              <i class="pi pi-cog"></i> {{!shownSide?"":"Admin Tools"}}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="/account/order-history" :class="`${shownSide?'gap-2':'justify-center'}`">
              <i class="pi pi-history"></i> {{!shownSide?"":"Order History"}}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="/account/payment-info" :class="`${shownSide?'gap-2':'justify-center'}`">
              <i class="pi pi-credit-card"></i> {{!shownSide?"":"Payment Methods"}}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="/account/security" :class="`${shownSide?'gap-2':'justify-center'}`">
              <i class="pi pi-lock"></i> {{!shownSide?"":"Security Settings"}}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </aside>
    <div v-if="shownSide" @click="toggleSide" class="fixed duration-500 top-0 bg-black/30 z-[39] w-screen h-screen sm:hidden"></div>
    <div
      class="w-full sm:max-h-[calc(100vh-4rem)] sm:overflow-y-auto no-scroller p-2"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.links li a:not(.router-link-active) {
  @apply flex items-center text-gray-700 hover:text-primary duration-300 bg-secondary/5 p-2;
}
.links li a .pi {
  @apply flex items-center justify-center;
}
.router-link-active {
  @apply flex text-primary bg-secondary/30 duration-300 p-2;
}
</style>
