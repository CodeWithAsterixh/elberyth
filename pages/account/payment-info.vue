<template>
  <NuxtLayout name="account">
    <div class="container mx-auto px-4 py-10">
      <h1 class="text-3xl font-bold mb-6 text-center">Payment Methods</h1>
      <div v-if="paymentMethods.length > 0" class="gap-3 flex flex-col min-[498px]:grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] w-full">
        <PaymentInfoCard
          v-for="method in paymentMethods"
          :key="method.paymentMethodDetails.id"
          :method="method"
        />
      </div>
      <div v-else class="text-center text-gray-600">
        <p>No payment methods saved yet.</p>
      </div>
      <div class="mt-8 text-center">
        <button
        @click="addModal = true"
          class="bg-primary text-white py-2 px-6 rounded hover:bg-primary/70 transition duration-300"
        >
          Add New Payment Method
        </button>
      </div>
    </div>
  </NuxtLayout>

  <ModalsPaymentMethodNew :save-new="(data)=>{
    addModal = false
    paymentMethods = [...paymentMethods, data] as PaymentMethod[]
  }" :show="addModal" :close="()=>addModal = false" />
</template>

<script lang="ts" setup>
import type {
  PaymentMethod,
} from "~/types";

const addModal = ref(false)


const paymentMethods = ref<PaymentMethod[]>([
  {
    paymentMethodDetails: {
      id: "pm-001",
      type: "visa",
      cardNumber: "**** **** **** 1234",
      expiryDate: "12/24",
    },
    paymentType: "Credit Card",
  },
  {
    paymentMethodDetails: {
      address: "address@adress.com",
      id: "1234",
    },
    paymentType: "epay",
  },
  {
    paymentMethodDetails: {
      accountNumber: 129838103,
      bankName: "bank name",
      id: "1235",
    },
    paymentType: "Bank Transfer",
  },
]);
</script>
