<script lang="ts" setup>
import type { PaymentMethodCard } from "~/types";

const cardModal = ref(false);

defineProps<{ details: PaymentMethodCard }>();
</script>

<template>
  <!-- Credit Card UI -->
  <div
    class="w-full flex flex-col justify-between relative bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-xl shadow-lg"
  >
    <!-- Optional Card Chip -->
    <div class="absolute top-4 left-4">
      <div class="w-10 h-7 bg-yellow-300 rounded-sm"></div>
    </div>
    <!-- Card Logo using PrimeVue Icon and Text -->
    <div class="absolute top-4 right-4 flex items-center space-x-2">
      <i class="pi pi-credit-card text-2xl"></i>
      <span v-if="details.type === 'visa'" class="text-xl font-bold">VISA</span>
      <span v-else-if="details.type === 'mastercard'" class="text-xl font-bold"
        >Mastercard</span
      >
    </div>
    <!-- Card Number -->
    <div class="mt-16 text-center text-2xl tracking-widest">
      **** **** **** {{ details.cardNumber?.slice(-4) }}
    </div>
    <!-- Expiry and Card Holder -->
    <div class="mt-4 flex justify-between px-4 text-sm">
      <div>
        <p class="uppercase opacity-75">Valid Thru</p>
        <p>{{ details.expiryDate }}</p>
      </div>
      <div>
        <p class="uppercase opacity-75">Card Holder</p>
        <p>John Doe</p>
        <!-- Replace with dynamic card holder name if available -->
      </div>
    </div>
    <!-- Action Buttons -->
    <div class="mt-6 flex justify-end space-x-2">
        <button @click="cardModal = true" class=" text-white p-2 flex items-center justify-center">
          <i class="pi pi-pencil"></i>
        </button>
        <Button severity="danger" class="!text-white p-2 flex items-center justify-center">
          <i class="pi pi-trash"></i>
        </Button>
    </div>
  </div>

  <ModalsPaymentMethodCard
    :show="cardModal"
    :close="() => (cardModal = false)"
    :data="details"
    header="Edit Credit card info"
  />
</template>
