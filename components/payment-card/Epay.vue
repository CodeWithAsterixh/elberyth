<script lang="ts" setup>
import type { PaymentMethodEpay } from '~/types';

const cardModal = ref(false);

    defineProps<{details:PaymentMethodEpay}>()
</script>

<template>
     <!-- epay UI -->
     <div  class="w-full flex flex-col justify-between relative bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-xl shadow-lg">
      <!-- Icon and Label -->
      <div class="absolute top-4 right-4 flex items-center space-x-2">
        <i class="pi pi-envelope text-2xl"></i>
        <span class="text-xl font-bold">ePay</span>
      </div>
      <!-- Email Display -->
      <div class="mt-16 text-center text-xl">
        <p class="font-semibold">Payment Address</p>
        <p class="tracking-wide">{{ details.address }}</p>
      </div>
      <!-- Action Buttons -->
      <div class="mt-6 flex justify-end space-x-2">
        <button @click="cardModal = true" class=" text-accent p-2 flex items-center justify-center">
          <i class="pi pi-pencil"></i>
        </button>
        <Button severity="danger" class="!text-white p-2 flex items-center justify-center">
          <i class="pi pi-trash"></i>
        </Button>
      </div>
    </div>
    <ModalsPaymentMethodEpay
          :show="cardModal"
          :close="() => (cardModal = false)"
          :data="details"
        header="Edit Epay info"
        />
</template>
