<script lang="ts" setup>
import { type PaymentMethodEpay } from "../../../types";

// props to fill newpayment method
const { data, close, show } = defineProps<{
  data: PaymentMethodEpay;
  show: boolean;
  close: () => void;
  save:(data:PaymentMethodEpay)=>void
}>();
const newPayment = reactive({
  ...data,
});
</script>

<template>
  <ModalComponent :is-open="show" @close="close">
    <!-- PayPal Form -->
    <div class="w-full flex-col flex gap-3 justify-between">
      <div>
        <FloatLabel variant="in">
          <InputText
            id="address"
            v-model="newPayment.address"
            type="email"
            class="w-full !bg-light !text-dark focus:!border-primary"
          />
          <label for="address" class="!text-primary">Address</label>
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
