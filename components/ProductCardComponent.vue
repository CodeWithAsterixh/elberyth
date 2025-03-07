<script lang="ts" setup>

    const props = defineProps(['productName','price','src', 'id'])
    const handleNavigate = ()=>{
        return navigateTo(`/shop/${props.id}`)
    }
</script>

<template>
    <div class="w-full flex flex-col gap-2 cursor-pointer" @click="handleNavigate">
        <span class="w-full aspect-square min-h-52 overflow-hidden relative  group isolate bg-secondary flex items-center justify-center">
            <img v-if="props.src" class="size-full z-0 object-cover group-hover:brightness-50 duration-300 object-center" :src="props.src" :alt="`${props.productName} image`">
            <i v-else class="pi pi-image text-5xl z-0 text-accent"></i>
            <div @click.stop class="w-fit p-2 px-0 absolute flex flex-col gap-2 top-0 left-0 z-10">
                <button class="flex items-center justify-center bg-light p-2 text-primary relative duration-300 delay-100 -left-[100%] group-hover:left-0"><i class="pi pi-heart text-lg"></i></button>
                <button class="flex items-center justify-center bg-light p-2 text-primary relative duration-300 delay-200 -left-[100%] group-hover:left-0"><i class="pi pi-cart-plus text-lg"></i></button>
                <button class="flex items-center justify-center bg-light p-2 text-primary relative duration-300 delay-300 -left-[100%] group-hover:left-0"><i class="pi pi-arrow-right-arrow-left text-lg"></i></button>
            </div>
        </span>
        <ul class="w-full flex flex-col gap-2">
            <li>{{ props.productName }}</li>
            <li v-if="props.price">&#8358; {{ props.price }}</li>
        </ul>
    </div>
</template>
