<script lang="ts" setup>
import { type PaymentMethodCard } from "../../../types";

// props to fill newpayment method
const { data, close, show } = defineProps<{
  data: PaymentMethodCard;
  show: boolean;
  close: () => void;
  save:(data:PaymentMethodCard)=>void

}>();
const newPayment = reactive({
  ...data,
});
</script>

<template>
  <ModalComponent :is-open="show" @close="close">
    <!-- Credit Card Form -->
    <div class="w-full flex-col flex gap-3 justify-between">
      <div class="flex flex-col gap-3">
        <FloatLabel variant="in">
          <InputText
            id="card_number"
            v-model="newPayment.cardNumber"
            type="text"
            class="w-full !bg-light !text-dark focus:!border-primary"
          />
          <label for="card_number" class="!text-primary">Card Number</label>
        </FloatLabel>
        <div class="w-full flex gap-3">
          <FloatLabel variant="in" class="w-full">
            <InputText
              id="exp_date"
              v-model="newPayment.expiryDate"
              type="text"
              class="w-full !bg-light !text-dark focus:!border-primary"
            />
            <label for="exp_date" class="!text-primary"
              >Expiry Date (MM/YY)</label
            >
          </FloatLabel>
          <FloatLabel class="w-28" variant="in">
            <InputNumber
              id="cvv"
              v-model="newPayment.cvv"
              type="text"
              class="*:w-full *:!bg-light !text-dark *:!text-dark focus:*:!border-primary"
            />
            <label for="cvv" class="!text-primary">CVV</label>
          </FloatLabel>
        </div>
      </div>

      <div class="w-full grid grid-cols-[5fr_1.5fr]">
        <button @click="()=>save(newPayment)" class="bg-primary text-white w-full py-2 px-4 rounded">
          Save Payment Method
        </button>
        <button
          @click="close"
          class="ml-2 bg-gray-500 text-white py-2 px-4 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  </ModalComponent>
</template>
