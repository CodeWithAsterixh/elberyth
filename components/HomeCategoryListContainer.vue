<script lang="ts" setup>
const props = defineProps(['title'])
</script>

<template>
  <div class="w-full flex flex-col gap-3 mt-5 p-4 m-auto max-w-screen-lg">
    <div class="w-full flex items-center justify-between">
      <h2
        class="text-center w-fit text-2xl sm:text-3xl font-bold border-b-4 border-primary"
      >
        {{ props.title }}
      </h2>
      <a href="#" class="hover:underline">see all <i class="pi pi-arrow-right text-xs"></i></a>
    </div>
    <div
      class="w-full grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3"
    >
      <slot/>
    </div>
  </div>
</template>
