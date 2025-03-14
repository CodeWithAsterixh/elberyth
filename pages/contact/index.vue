<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero Section -->
    <div
      class="bg-hero-pattern bg-cover bg-center h-64 flex items-center justify-center"
    >
      <h1 class="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
        Contact Us
      </h1>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
      <!-- Contact Information -->
      <div class="md:w-1/2 space-y-6">
        <h2 class="text-2xl font-bold text-gray-800">
          Get in Touch with Elberyth
        </h2>
        <p class="text-gray-600">
          At Elberyth, we’re passionate about fashion and skincare. Whether you
          have a product inquiry, need personalized style advice, or simply want
          to say hello, we’re here to help. Let’s create something beautiful
          together.
        </p>
        <ul class="space-y-3 text-gray-700">
          <li class="flex items-center gap-2">
            <i class="pi pi-map-marker text-primary text-xl"></i>
            123 Fashion Ave, New York, NY
          </li>
          <li class="flex items-center gap-2">
            <i class="pi pi-phone text-primary text-xl"></i>
            +1 (555) 123-4567
          </li>
          <li class="flex items-center gap-2">
            <i class="pi pi-envelope text-primary text-xl"></i>
            contact@elberyth.com
          </li>
        </ul>
        <!-- Social Links -->
        <div class="flex gap-4 pt-4">
          <a
            href="#"
            class="text-primary text-2xl hover:text-primary/70 transition"
          >
            <i class="pi pi-facebook"></i>
          </a>
          <a
            href="#"
            class="text-primary text-2xl hover:text-primary/70 transition"
          >
            <i class="pi pi-instagram"></i>
          </a>
          <a
            href="#"
            class="text-primary text-2xl hover:text-primary/70 transition"
          >
            <i class="pi pi-twitter"></i>
          </a>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-lg">
        <h2 class="text-xl font-bold mb-4 text-gray-800">Send Us a Message</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
          <FloatLabel variant="in">
            <InputText
              id="name"
              v-model="form.name"
              type="text"
              class="w-full !bg-light !text-dark focus:!border-primary"
            />
            <label for="name" class="!text-primary">Name</label>
          </FloatLabel>
          <FloatLabel variant="in">
            <InputText
              id="email"
              v-model="form.email"
              type="email"
              class="w-full !bg-light !text-dark focus:!border-primary"
            />
            <label for="email" class="!text-primary">Email</label>
          </FloatLabel>
          <FloatLabel variant="in">
            <InputText
              id="subject"
              v-model="form.subject"
              type="text"
              class="w-full !bg-light !text-dark focus:!border-primary"
            />
            <label for="subject" class="!text-primary">Subject</label>
          </FloatLabel>
          <FloatLabel variant="in">
            <Textarea
              id="message"
              v-model="form.message"
              type="text"
              class="w-full !bg-light !text-dark focus:!border-primary h-40 resize-none"
            />
            <label for="message" class="!text-primary">Message</label>
          </FloatLabel>

          <Button
          label="Send Message"
          icon="pi pi-send"
          icon-pos="right"
            type="submit"
            class="!w-full !bg-primary !text-white !py-2 !border-none !rounded hover:!bg-primary/70 transition duration-300"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const submitForm = () => {
  // Here you would normally send the form data to your API
  console.log("Form submitted:", form.value);
  alert("Thank you for contacting us! We'll get back to you shortly.");
  // Reset the form
  form.value = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
};
</script>

<style scoped>
/* Hero background */
.bg-hero-pattern {
  background-image: url("https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1500&q=80");
}
</style>
