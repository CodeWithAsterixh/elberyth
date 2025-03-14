<template>
  <section class="border p-6 rounded-lg bg-gradient-to-r from-white to-gray-50 shadow-md mb-8">
    <div class="flex items-center space-x-2 mb-4">
      <i class="pi pi-heart text-primary text-3xl"></i>
      <h2 class="text-2xl font-bold text-gray-800">Account Preferences</h2>
    </div>

    <!-- Preferred Styles -->
    <div class="mb-6">
      <h3 class="text-xl font-semibold text-gray-700 mb-3">Preferred Styles</h3>
      <div class="flex flex-wrap gap-3">
        <span
          v-for="(style, index) in user.preferredStyles"
          :key="index"
          class="px-4 py-1 bg-primary text-white rounded-full shadow-sm"
        >
          {{ style }}
        </span>
      </div>
      <p v-if="!user.preferredStyles || user.preferredStyles.length === 0" class="text-gray-600 mt-2">
        No preferred styles selected.
      </p>
    </div>

    <!-- Additional Preferences -->
    <div>
      <h3 class="text-xl font-semibold text-gray-700 mb-3">Additional Preferences</h3>
      <div class="flex flex-wrap gap-3">
        <span
          v-for="(preference, index) in user.additionalPreferences"
          :key="index"
          class="px-4 py-1 bg-accent text-gray-800 rounded-full shadow-sm"
        >
          {{ preference }}
        </span>
      </div>
      <p v-if="!user.additionalPreferences || user.additionalPreferences.length === 0" class="text-gray-600 mt-2">
        None
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
const user = {
  preferredStyles: ['Casual', 'Elegant', 'Trendy'],
  additionalPreferences: ['Eco-friendly packaging', 'Free returns']
};
</script>

