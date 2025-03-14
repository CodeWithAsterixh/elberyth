<template>
  <NuxtLayout name="account">
    <div class="container mx-auto px-4 py-10">
      <h1 class="text-3xl font-bold text-gray-800 mb-8 text-center">Security Settings</h1>
      
      <!-- Change Password Section -->
      <section class="mb-8 border p-6 rounded-lg bg-white shadow">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Change Password</h2>
        <form @submit.prevent="handleChangePassword" class="flex flex-col gap-4">
          
          <FloatLabel variant="in">
            <InputText
              id="currentPassword"
              v-model="passwordForm.currentPassword"
              type="password"
              class="w-full !bg-light !text-dark focus:!border-primary"
            />
            <label for="currentPassword" class="!text-primary">Current Password</label>
          </FloatLabel>
          
          <FloatLabel variant="in">
            <InputText
              id="newPassword"
              v-model="passwordForm.newPassword"
              type="password"
              class="w-full !bg-light !text-dark focus:!border-primary"
            />
            <label for="newPassword" class="!text-primary">New Password</label>
          </FloatLabel>
          <FloatLabel variant="in">
            <InputText
              id="confirmPassword"
              v-model="passwordForm.confirmPassword"
              type="password"
              class="w-full !bg-light !text-dark focus:!border-primary"
            />
            <label for="confirmPassword" class="!text-primary">Confirm New Password</label>
          </FloatLabel>
          
          <button type="submit" class="bg-primary text-white py-2 px-6 rounded hover:bg-primary/80 transition duration-300">
            Change Password
          </button>
        </form>
      </section>
      
      <!-- Two-Factor Authentication Section -->
      <section class="mb-8 border p-6 rounded-lg bg-white shadow">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Two-Factor Authentication</h2>
        <div class="flex items-center">
          <label class="flex items-center cursor-pointer">
            <ToggleSwitch v-model="twoFactorEnabled" :class="`${twoFactorEnabled?'*:!bg-primary *:*:!bg-accent':'*:!bg-accent *:*:!bg-primary'}`" />

            <span class="ml-2 text-gray-700">Enable Two-Factor Authentication</span>
          </label>
        </div>
        <p class="text-gray-600 mt-2">
          Two-factor authentication adds an extra layer of security to your account by requiring a verification code along with your password when signing in.
        </p>
      </section>
      
      <!-- Session Management Section -->
      <section class="border p-6 rounded-lg bg-white shadow">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Session Management</h2>
        <p class="text-gray-600">
          Review your recent login sessions and sign out of any sessions you do not recognize.
        </p>
        <!-- Placeholder for session details -->
        <ul class="mt-4 space-y-2">
          <li class="p-2 border rounded">
            Session from Chrome on Windows - IP: 192.168.1.1 - Last active: 2 hours ago
          </li>
          <li class="p-2 border rounded">
            Session from Safari on iPhone - IP: 192.168.1.2 - Last active: 1 day ago
          </li>
        </ul>
        <button class="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300">
          Sign Out All Other Sessions
        </button>
      </section>
    </div>
    
  </NuxtLayout>

  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  const passwordForm = ref({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const twoFactorEnabled = ref(false);
  
  const handleChangePassword = () => {
    if (passwordForm.value.newPassword !== passwordForm.value.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    // Implement password change functionality here
    alert("Password changed successfully!");
    // Reset the form fields
    passwordForm.value.currentPassword = '';
    passwordForm.value.newPassword = '';
    passwordForm.value.confirmPassword = '';
  };
  </script>
  

  