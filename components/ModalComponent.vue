<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed w-screen h-screen !box-border inset-0 flex items-end justify-center bg-black/50 z-50 sm:px-4"
        @click="close"
      >
        <div
          v-bind="$attrs"
          class="bg-white min-w-[20rem] dark:bg-neutral-900 py-8 px-2 sm:px-6 rounded-lg shadow-lg max-w-full max-h-[90vh] min-h-36 sm:min-h-fit sm:max-w-[70vw] w-full sm:w-fit relative"
          @click.stop
        >
          <button
            class="absolute top-2 right-3 text-3xl text-neutral-400 hover:text-neutral-100 cursor-pointer"
            @click="close"
          >
            &times;
          </button>
          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{ isOpen: boolean }>()
const emit = defineEmits(['close'])

const close = () => emit('close')
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
