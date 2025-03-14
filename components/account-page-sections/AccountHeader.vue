<template>
    <header class="flex bg-accent p-2 rounded flex-col min-[498px]:flex-row items-center gap-3 text-center min-[498px]:text-left mb-8">
      <!-- User Avatar -->
      <img 
        :src="user.avatar" 
        alt="User Avatar" 
        class="w-24 shrink-0 h-24 rounded-full border-2 border-primary mb-4" 
      />
      <div class="w-full flex flex-col gap-2 justify-center">
        <!-- Full Name -->
      <h1 class="text-2xl font-bold text-gray-800">{{ user.fullName }}</h1>
      <!-- Username -->
      <p class="text-lg text-gray-600">@{{ user.username }}</p>
      </div>
    </header>
  </template>
  
  <script lang="ts" setup>
  const user = {
    avatar: '/files/images/male (1).jpeg', // Replace with actual user avatar path
    fullName: 'Jane Doe',
    username: 'jane_doe'
  }

  </script>
  

  