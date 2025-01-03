<template>
  <slot/>
</template>

<script setup>
import { Observer } from 'tailwindcss-intersect'

onMounted(() => {
  Observer.start()
})
</script>