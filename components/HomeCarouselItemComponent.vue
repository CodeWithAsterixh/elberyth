<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getImageColors } from '~/assets/lib/imageProcessor';
import { rgbToHex } from '~/assets/lib/utils/colorConverter';
import { getContrastingTextColor, getShade } from '~/assets/lib/utils/colorProcessing';
import type { ImageColors } from '~/types';

const props = defineProps<{
  imgSrc: string;
  title: string;
  description: string;
  isShown: boolean;
}>();

const imgColors = ref<ImageColors>({
  bgColor: '',
  primaryColor: '',
  secondaryColor: '',
});

onMounted(() => {
  getImageColors(props.imgSrc).then((colors) => {
    imgColors.value = colors;
  });
});
</script>

<template>
  <div
    :style="{
      'background-color': imgColors.secondaryColor ? getShade(imgColors.secondaryColor, 90) : '#fff',
      'color': imgColors.secondaryColor ? getContrastingTextColor(getShade(imgColors.secondaryColor, 90)) : '#000',
      perspective: '1200px'
    }"
    class="w-full duration-700 h-[50vh] sm:h-[86vh] max-h-[40rem] flex items-center justify-between gap-2"
  >
    <!-- Text Block -->
    <div
      :class="[
        'text-block', 
        { 'animate-text': props.isShown },
        'w-full flex flex-col justify-center px-4 sm:px-10 gap-4 min-h-full'
      ]"
    >
      <h1 class="font-bold text-xl sm:text-3xl">{{ props.title }}</h1>
      <p>{{ props.description }}</p>
      <Button class="w-fit !bg-secondary !text-accent !px-4 !py-2 !flex !items-center !justify-center !gap-2">
        <i class="pi pi-shopping-cart"></i>Shop now
      </Button>
    </div>

    <!-- Media Block -->
    <div
      :class="[
        'media-block', 
        { 'animate-media': props.isShown },
        'shrink-0 max-w-[40%] sm:max-w-[50%] h-full min-h-[40vh] sm:min-h-[70vh] max-h-[40rem]'
      ]"
    >
      <img :src="props.imgSrc" alt="media" class="w-full h-full object-cover" />
    </div>
  </div>
</template>

<style scoped>
/* Initial state for the Text Block */
.text-block {
  transform: translateY(50px) rotateX(20deg) scale(0.95);
  opacity: 0;
}

/* Smooth, refined Text Reveal Animation */
.animate-text {
  animation: textReveal 1.2s forwards ease-in-out;
}
@keyframes textReveal {
  0% {
    transform: translateY(50px) rotateX(20deg) scale(0.95);
    opacity: 0;
  }
  50% {
    transform: translateY(-5px) rotateX(0deg) scale(1.02);
    opacity: 0.8;
  }
  100% {
    transform: translateY(0) rotateX(0deg) scale(1);
    opacity: 1;
  }
}

/* Initial state for the Media Block */
.media-block {
  transform: translateX(50px) rotateY(20deg) scale(0.95);
  opacity: 0;
}

/* Smooth, refined Media Reveal Animation */
.animate-media {
  animation: mediaReveal 1.2s forwards ease-in-out;
}
@keyframes mediaReveal {
  0% {
    transform: translateX(50px) rotateY(20deg) scale(0.95);
    opacity: 0;
  }
  50% {
    transform: translateX(-5px) rotateY(0deg) scale(1.02);
    opacity: 0.8;
  }
  100% {
    transform: translateX(0) rotateY(0deg) scale(1);
    opacity: 1;
  }
}
</style>
