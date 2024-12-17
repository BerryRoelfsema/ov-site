<template>
  <a v-if="href" :href="href" class="block bg-secondary-500 w-max py-2 px-3 border border-solid border-secondary-400 rounded text-white hover:bg-secondary-400 transition duration-100">
    <slot />
  </a>
  <button v-else class="bg-secondary-500 py-1 px-2 border border-solid border-secondary-400 rounded text-white hover:bg-secondary-400 transition duration-100">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '#'
  }
});
</script>