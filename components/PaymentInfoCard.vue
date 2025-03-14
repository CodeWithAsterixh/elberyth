<script lang="ts" setup>
import type { PaymentMethod } from "~/types";

const cardModal = ref(false);

const { method } = defineProps<{ method: PaymentMethod }>();
</script>

<template>
        <PaymentCardBankTF v-if="method.paymentType==='Bank Transfer'" :details="method.paymentMethodDetails"/>
    <PaymentCardEpay v-if="method.paymentType==='epay'" :details="method.paymentMethodDetails"/>
    <PaymentCardCredit v-if="method.paymentType==='Credit Card'" :details="method.paymentMethodDetails"/>

               
</template>
