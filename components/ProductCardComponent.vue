<script lang="ts" setup>
import type { Product } from '~/types';


    const {product} = defineProps<{product:Product}>()
    const handleNavigate = ()=>{
        return navigateTo(`/shop/${product.id}`)
    }
    const {addToCart,crementing,removeFromCart} = useCart().actions
    const {cart} = useCart()
    function handleAdd(){
        addToCart(product)
    }
    
    
</script>

<template>
    <div class="w-full flex flex-col gap-2 cursor-pointer" @click="handleNavigate">
        <span class="w-full aspect-square min-h-52 overflow-hidden relative  group isolate bg-secondary flex items-center justify-center">
            <img v-if="product.image" class="size-full z-0 object-cover group-hover:brightness-50 duration-300 object-center" :src="product.image" :alt="`${product.name} image`">
            <i v-else class="pi pi-image text-5xl z-0 text-accent"></i>
            <div @click.stop class="w-fit p-2 px-0 absolute flex flex-col gap-2 top-0 left-0 z-10">
                <button class="flex w-fit items-center justify-center bg-light p-2 text-primary relative duration-300 delay-100 -left-[100%] group-hover:left-0"><i class="pi pi-heart text-lg"></i></button>
                <button v-if="!cart.items.find(p => p.productDetails.id === product.id)" @click="handleAdd" class="flex items-center justify-center bg-light p-2 text-primary relative duration-300 delay-150 -left-[100%] group-hover:left-0"><i class="pi pi-cart-plus text-lg"></i></button>
                <button :class="`flex w-fit items-center justify-center bg-light p-2 text-primary relative duration-300 ${!cart.items.find(p => p.productDetails.id === product.id)?'delay-200':'delay-150'} -left-[100%] group-hover:left-0`"><i class="pi pi-arrow-right-arrow-left text-lg"></i></button>
            </div>
            <div @click.stop v-if="cart.items.find(p => p.productDetails.id === product.id)" class="shadow-md absolute left-1/2 -translate-x-1/2 flex items-center  gap-1 min-[498px]:gap-3 justify-center  text-light duration-300 delay-[250ms] -bottom-[100%] group-hover:bottom-2">
                <button @click="removeFromCart(product.id)" class="flex bg-danger items-center justify-center py-1 min-[498px]:py-2 px-2 min-[498px]:px-4"><i class="pi pi-trash text-base min-[498px]:text-lg"></i></button>

                <div class="w-fit flex items-center justify-center gap-1 min-[498px]:gap-3 bg-primary">
                    <button @click="crementing('REMOVE',product.id)" class="flex items-center justify-center py-1 min-[498px]:py-2 px-2 min-[498px]:px-4"><i class="pi pi-minus text-base min-[498px]:text-lg"></i></button>
                <span>{{ cart.items.find(p => p.productDetails.id === product.id)?.length }}</span>
                <button @click="crementing('ADD',product.id)" class="flex items-center justify-center py-1 min-[498px]:py-2 px-2 min-[498px]:px-4"><i class="pi pi-plus text-base min-[498px]:text-lg"></i></button>
                </div>
                </div>
        </span>
        <ul class="w-full flex flex-col gap-2">
            <li>{{ product.name }}</li>
            <li v-if="product.price">&#8358; {{ product.price }}</li>
        </ul>
    </div>

</template>
