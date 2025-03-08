<script lang="ts" setup>
    const {content,position,show} = defineProps<{
        position:"top-left"|"top-right"|"bottom-left"|"bottom-right",
        content:string|number,
        show:boolean
    }>()
</script>

<template>
    <span v-if="show" class="badge flex items-center justify-center" :data-position="position" :data-content="content">
        <slot/>
    </span>
    <slot v-if="!show"/>
</template>
