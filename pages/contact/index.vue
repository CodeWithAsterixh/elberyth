<template>
    <div class="min-h-screen flex flex-col">
      <!-- Hero Section -->
      <div class="bg-hero-pattern bg-cover bg-center h-64 flex items-center justify-center">
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
            At Elberyth, we’re passionate about fashion and skincare. Whether you have a product inquiry,
            need personalized style advice, or simply want to say hello, we’re here to help. Let’s create something beautiful together.
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
            <a href="#" class="text-primary text-2xl hover:text-primary/70 transition">
              <i class="pi pi-facebook"></i>
            </a>
            <a href="#" class="text-primary text-2xl hover:text-primary/70 transition">
              <i class="pi pi-instagram"></i>
            </a>
            <a href="#" class="text-primary text-2xl hover:text-primary/70 transition">
              <i class="pi pi-twitter"></i>
            </a>
          </div>
        </div>
  
        <!-- Contact Form -->
        <div class="md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-bold mb-4 text-gray-800">Send Us a Message</h2>
          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label for="name" class="block text-gray-700 font-medium mb-1">Name</label>
              <input type="text" id="name" v-model="form.name" class="w-full border rounded p-2" placeholder="Your Name" required />
            </div>
            <div>
              <label for="email" class="block text-gray-700 font-medium mb-1">Email</label>
              <input type="email" id="email" v-model="form.email" class="w-full border rounded p-2" placeholder="Your Email" required />
            </div>
            <div>
              <label for="subject" class="block text-gray-700 font-medium mb-1">Subject</label>
              <input type="text" id="subject" v-model="form.subject" class="w-full border rounded p-2" placeholder="Subject" required />
            </div>
            <div>
              <label for="message" class="block text-gray-700 font-medium mb-1">Message</label>
              <textarea id="message" v-model="form.message" rows="5" class="w-full border rounded p-2" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" class="w-full bg-primary text-white py-2 rounded hover:bg-primary/70 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
  
      
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const submitForm = () => {
    // Here you would normally send the form data to your API
    console.log('Form submitted:', form.value);
    alert("Thank you for contacting us! We'll get back to you shortly.");
    // Reset the form
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  };
  </script>
  
  <style scoped>
  /* Hero background */
  .bg-hero-pattern {
    background-image: url('https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1500&q=80');
  }
  

  </style>
  