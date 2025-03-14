<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed w-screen h-screen !box-border inset-0 flex items-end sm:items-center justify-center bg-black/50 z-50 sm:px-4"
        @click="close"
      >
        <div
          v-bind="$attrs"
          class="bg-white min-w-[20rem] dark:bg-neutral-900 flex flex-col gap-3 rounded-lg shadow-lg max-w-full max-h-[90vh] min-h-[20rem] sm:min-h-fit sm:max-w-[70vw] w-full sm:w-fit relative"
          @click.stop
        >
          <div class="w-full flex items-center justify-between p-3 bg-accent rounded-t-lg">
            <h2 class="text-xl font-bold text-primary">{{ header }}</h2>
            <button
            class="text-3xl text-primary/70 hover:text-primary cursor-pointer"
            @click="close"
          >
            &times;
          </button>
          </div>
          <div class="w-fit min-w-full min-h-full p-3 sm:px-6">
            <slot></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{ isOpen: boolean, header?:string }>()
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
