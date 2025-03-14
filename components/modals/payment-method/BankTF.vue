<script lang="ts" setup>
import { type PaymentMethod, type PaymentMethodBankTF } from "../../../types";

// props to fill newpayment method
const { data, close, show } = defineProps<{
  data: PaymentMethodBankTF;
  show: boolean;
  close: () => void;
  save:(data:PaymentMethodBankTF)=>void
}>();
const newPayment = reactive({
  ...data,
});
</script>

<template>
  <ModalComponent :is-open="show" @close="close">
    <!-- Bank Transfer Form -->
    <div class="w-full flex-col flex gap-3 justify-between">
      <div class="flex flex-col gap-3">
        <FloatLabel variant="in">
          <InputText
            id="bank_name"
            v-model="newPayment.bankName"
            type="text"
            class="w-full !bg-light !text-dark focus:!border-primary"
          />
          <label for="bank_name" class="!text-primary">Bank Name</label>
        </FloatLabel>

        <FloatLabel variant="in">
          <InputNumber
            id="account_number"
            v-model="newPayment.accountNumber"
            type="number"
            class="w-full *:!bg-light *:!text-dark focus:*:!border-primary"
          />
          <label for="account_number" class="!text-primary"
            >Account Number</label
          >
        </FloatLabel>
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
