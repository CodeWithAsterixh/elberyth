<template>
  <div class="min-h-screen ">
    <!-- Hero Section -->
    <section class="relative h-96 bg-cover bg-center" style="background-image: url('/files/images/fashion-shop.jpeg')">
      <div class="absolute inset-0 bg-black opacity-40"></div>
      <div class="relative flex items-center justify-center h-full">
        <h1 class="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">About Elberyth</h1>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-16 px-4 md:px-16 bg-secondary">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-accent mb-4">Our Story</h2>
        <p class="text-accent text-lg leading-relaxed">
          At Elberyth, we believe that beauty and style go hand in hand. Born out of a passion for fashion and skincare, our brand empowers you to embrace your individuality. Our journey began with a simple idea: create products that enhance your natural beauty while celebrating unique style.
        </p>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="bg-light py-16 px-4 md:px-16">
      <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 class="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">Our Mission</h3>
          <p class="text-gray-600 leading-relaxed">
            We are dedicated to delivering high-quality skincare and fashion products that inspire confidence and creativity. Our mission is to blend timeless elegance with modern trends—making every product a celebration of self-expression.
          </p>
        </div>
        <div>
          <h3 class="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">Our Vision</h3>
          <p class="text-gray-600 leading-relaxed">
            Our vision is to be a global leader in beauty and fashion innovation. We aspire to create a community where style and wellness intersect, empowering everyone to shine with individuality.
          </p>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-16 px-4 md:px-16 bg-accent">
      <div class="max-w-6xl mx-auto text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800">Meet Our Team</h2>
        <p class="text-gray-600 mt-4">The creative minds behind Elberyth, dedicated to bringing you the best in fashion and skincare.</p>
      </div>
      <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div v-for="(member, index) in team" :key="index" class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img :src="member.image" :alt="member.name" class="w-full h-56 object-cover object-top" />
          <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-800">{{ member.name }}</h3>
            <p class="text-gray-600">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 px-4 md:px-16 bg-gradient-to-br from-accent via-primary to-primary">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Join the Elberyth Community</h2>
        <p class="text-white text-lg mb-8">
          Stay updated with the latest trends in fashion and skincare. Follow us on social media and subscribe to our newsletter.
        </p>
    
      </div>
    </section>

    
  </div>
</template>

<script lang="ts" setup>
const team = [
  {
    name: "Alice Johnson",
    role: "Founder & CEO",
    image: "/files/images/team/ceo.jpeg"
  },
  {
    name: "Michael Lee",
    role: "Creative Director",
    image: "/files/images/team/media-guy.jpeg"
  },
  {
    name: "Sara Gomez",
    role: "Head of Skincare",
    image: "/files/images/team/skin-girl.jpeg"
  },
  {
    name: "David Kim",
    role: "Fashion Consultant",
    image: "/files/images/team/fashion-guy.jpeg"
  }
];
</script>

<style scoped>
/* Hero background image */
.bg-hero-pattern {
  background-image: url('/files/images/fashion-shop.jpeg');
}

</style>
