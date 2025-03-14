<script lang="ts" setup>
import type { PaymentMethodBankTF } from '~/types';


const cardModal = ref(false);

    defineProps<{details:PaymentMethodBankTF}>()
</script>

<template>

    <!-- Bank Transfer UI -->
    <div class="w-full relative flex flex-col justify-between bg-gradient-to-r from-secondary via-primary  to-secondary text-accent p-6 rounded-xl shadow-lg">
      <!-- Icon and Label -->
      <div class="absolute top-4 right-4 flex items-center space-x-2">
        <i class="pi pi-bank text-2xl"></i>
        <span class="text-xl font-bold">Bank Transfer</span>
      </div>
      <!-- Bank Details -->
      <div class="mt-16 text-center text-xl">
        <p class="font-semibold">{{ details.bankName }}</p>
        <p class="tracking-widest">
          Account: ****{{ details.accountNumber.toString().slice(-4) }}
        </p>
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
    <ModalsPaymentMethodBankTF
          :show="cardModal"
          :close="() => (cardModal = false)"
          :data="details"
              header="Edit Bank Transfer info"
          
        />
  </template>
  
