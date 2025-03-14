<template>
    <section class="border p-4 rounded-lg bg-white shadow-sm mb-8">
      <div class="flex items-center space-x-2 mb-4">
      <i class="pi pi-user text-primary text-3xl"></i>
      <h2 class="text-2xl font-bold text-gray-800">Personal Information</h2>
    </div>
      <p class="mb-2"><strong>Email:</strong> {{ user.email }}</p>
      <p class="mb-2"><strong>Phone:</strong> {{ user.phone }}</p>
      <p class="mb-2">
        <strong>Newsletter Subscription:</strong>
        <span v-if="user.subscribedToNewsletter">Subscribed</span>
        <span v-else>Not Subscribed</span>
      </p>
      <div class="w-full flex items-center justify-end">
      <Button class="!bg-secondary/20 hover:!bg-secondary/40 duration-300 flex items-center justify-center gap-3 !border-none !text-primary"><i class="pi pi-pencil"></i>Edit</Button>

      </div>
    </section>
  </template>
  
  <script lang="ts" setup>
  const user = {
    email: 'jane.doe@example.com',
    phone: '+1-555-0123',
    subscribedToNewsletter: true
  };
  </script>

  