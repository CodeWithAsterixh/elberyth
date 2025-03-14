<script lang='ts' setup>
import type {
  PaymentMethodType,
  PaymentMethodCard, PaymentMethodEpay , PaymentMethodBankTF
} from "~/types";

type PaymentMethod = {
  paymentType: PaymentMethodType;
  paymentMethodDetails: PaymentMethodCard | PaymentMethodEpay | PaymentMethodBankTF;
};
// props to fill newpayment method
const {close, show,saveNew } = defineProps<{
  show: boolean,
  close: () => void,
  saveNew: (data:PaymentMethod)=>void
}>();

const dataModal = ref(false)
const options:PaymentMethodType[] = [
    'Credit Card',
    'epay',
    'Bank Transfer',
]
const defaultPaymentMethodDetails: Record<
  PaymentMethodType,
  PaymentMethodCard | PaymentMethodEpay | PaymentMethodBankTF
> = {
  'Credit Card': {
    id: '',
    cardNumber: '',
    expiryDate: '',
    cvv: 0,
    type: 'visa', // default card type
  },
  epay: {
    id: '',
    address: '',
  },
  'Bank Transfer': {
    id: '',
    accountNumber: 0,
    bankName: '',
  },
};

const selectedType = ref<PaymentMethodType>(options[0])
const newData = reactive<PaymentMethod>({
  paymentMethodDetails: defaultPaymentMethodDetails[selectedType.value],
  paymentType:selectedType.value
})

const handleAddNew = (data:PaymentMethod)=>{
  newData.paymentMethodDetails = data.paymentMethodDetails
  newData.paymentType = data.paymentType

  saveNew(newData)
  dataModal.value = false
}


</script>
<template>
    
    <!-- select method -->
  <ModalComponent header="Account type" :is-open="show" @close="close">

    <div class="card flex flex-col gap-2 justify-center">
        <p>Please select an account type below</p>
        <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-1">
                <SelectButton v-model="selectedType" class="*:!bg-accent *:!border-secondary *:data-[p-checked=true]:*:!bg-primary" name="selection" :options="options" />
            </div>
            <Button @click="()=>{
              dataModal = true,
              newData = {
                paymentMethodDetails:defaultPaymentMethodDetails[selectedType],
                paymentType:selectedType
              }
            }" label="Select" class="!bg-primary !text-accent !border-transparent !ring-transparent" />
        </div>
    </div>
  </ModalComponent>
<ModalsPaymentMethodBankTF
v-if="newData.paymentType==='Bank Transfer'"
    :show="dataModal"
    :close="() => (dataModal = false)"
    :data="newData.paymentMethodDetails as PaymentMethodBankTF"
    header="Edit Account info"
    :save="(data)=>handleAddNew({
      paymentMethodDetails:data,
      paymentType:'Bank Transfer'
    })"
  />
  <ModalsPaymentMethodEpay
  v-if="newData.paymentType==='epay'" 
    :show="dataModal"
    :close="() => (dataModal = false)"
    :data="newData.paymentMethodDetails as PaymentMethodEpay"
    header="Edit Address info"
    :save="(data)=>handleAddNew({
      paymentMethodDetails:data,
      paymentType:'epay'
    })"
  />
  <ModalsPaymentMethodCard
  v-if="newData.paymentType==='Credit Card'"
    :show="dataModal"
    :close="() => (dataModal = false)"
    :data="newData.paymentMethodDetails as PaymentMethodCard"
    header="Edit Credit card info"
    :save="(data)=>handleAddNew({
      paymentMethodDetails:data,
      paymentType:'Credit Card'
    })"
  />
</template>


        