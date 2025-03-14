<template>
    <section class="border p-4 rounded-lg bg-white shadow-sm mb-8">
      <div class="flex items-center space-x-2 mb-4">
      <i class="pi pi-address-book text-primary text-3xl"></i>
      <h2 class="text-2xl font-bold text-gray-800">Shipping & Billing Addresses</h2>
    </div>
      <div v-if="user.addresses && user.addresses.length">
        <div v-for="address in user.addresses" :key="address.id" class="mb-4 *:select-none relative overflow-hidden group">
          <p class="font-semibold">{{ address.label }}</p>
          <p>{{ address.street }}, {{ address.city }}, {{ address.state }} {{ address.postalCode }}</p>
          <p>{{ address.country }}</p>
          <span class="w-fit h-full bg-white flex items-center gap-2 absolute -right-72 group-hover:right-0 duration-300 top-0 pl-2">
      <Button class="!bg-secondary/20 hover:!bg-secondary/40 duration-300 flex items-center justify-center gap-3 !border-none !text-primary"><i class="pi pi-pencil"></i></Button>
      <Button severity="danger" class=" duration-300 flex items-center justify-center gap-3 !border-none !text-white"><i class="pi pi-trash"></i></Button>

          </span>
        </div>
      </div>
      <p v-else class="text-gray-600">No addresses saved yet.</p>
      <div class="w-full flex items-center justify-end">
      <Button class="!bg-secondary/20 hover:!bg-secondary/40 duration-300 flex items-center justify-center gap-3 !border-none !text-primary"><i class="pi pi-plus"></i>Add</Button>

      </div>
    </section>
  </template>
  
  <script lang="ts" setup>
  const user = {
    addresses: [
      {
        id: 'addr-001',
        label: 'Home',
        street: '123 Fashion Ave',
        city: 'New York',
        state: 'NY',
        postalCode: '10001',
        country: 'USA'
      },
      {
        id: 'addr-002',
        label: 'Office',
        street: '456 Skincare Blvd',
        city: 'Los Angeles',
        state: 'CA',
        postalCode: '90001',
        country: 'USA'
      }
    ]
  };
  </script>
