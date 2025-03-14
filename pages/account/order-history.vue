<template>
    <NuxtLayout name="account">

    <div class="container mx-auto px-4 py-10">
      <h1 class="text-3xl font-bold text-gray-800 mb-8 text-center">Order History</h1>
      <div v-if="orders.length > 0">
        <div class="space-y-6">
          <div
            v-for="order in orders"
            :key="order.id"
            class="bg-white border rounded-lg p-6 shadow-sm"
          >
            <div class="flex flex-col md:flex-row justify-between items-center">
              <div>
                <p class="text-lg font-semibold">Order #{{ order.id }}</p>
                <p class="text-gray-600">Date: {{ formatDate(order.date) }}</p>
              </div>
              <div class="mt-4 md:mt-0 text-right">
                <p class="text-lg font-semibold">Total: &#8358;{{ order.total }}</p>
                <p class="text-gray-600">
                  Status: 
                  <span
                    :class="{
                      'text-green-600': order.status === 'Delivered',
                      'text-orange-600': order.status === 'Processing',
                      'text-red-600': order.status === 'Cancelled'
                    }"
                  >
                    {{ order.status }}
                  </span>
                </p>
              </div>
            </div>
            <!-- Order Items -->
            <div class="mt-4">
              <h3 class="text-md font-medium text-gray-800">Items:</h3>
              <ul class="list-disc list-inside">
                <li v-for="item in order.items" :key="item.productId" class="text-gray-600">
                  {{ item.productName }} (x{{ item.quantity }})
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-center text-gray-600">
        <p>You have no orders yet.</p>
      </div>
    </div>
  </NuxtLayout>

  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  interface OrderItem {
    productId: string;
    productName: string;
    quantity: number;
  }
  
  interface Order {
    id: string;
    date: Date;
    total: number;
    status: 'Delivered' | 'Processing' | 'Cancelled';
    items: OrderItem[];
  }
  
  const orders = ref<Order[]>([
    {
      id: '1001',
      date: new Date('2023-07-15T10:00:00Z'),
      total: 5400,
      status: 'Delivered',
      items: [
        { productId: 'fashion-male-01', productName: "Elberyth Classic Men's T-Shirt", quantity: 2 },
        { productId: 'skincare-01', productName: "Elberyth Luxe Skincare Cream", quantity: 1 }
      ]
    },
    {
      id: '1002',
      date: new Date('2023-08-01T14:30:00Z'),
      total: 3200,
      status: 'Processing',
      items: [
        { productId: 'fashion-hood-01', productName: "Elberyth Cozy Pullover Hoodie", quantity: 1 }
      ]
    },
    {
      id: '1003',
      date: new Date('2023-08-10T09:15:00Z'),
      total: 1800,
      status: 'Cancelled',
      items: [
        { productId: 'makeup-01', productName: "Elberyth Velvet Matte Lipstick", quantity: 1 }
      ]
    }
  ]);
  
  function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  }
  </script>
  
