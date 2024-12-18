<template>
  <a v-if="href && type != 'link'" :href="href" :class="getTypeClasses(type)">
    <slot />
  </a>
  <a v-else-if="href && type == 'link'" :href="href" :class="getTypeClasses(type)">
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
  },
  type: {
    type: String,
    default: 'secondary'
  }
});

const getTypeClasses = (type: string) => {
  const baseClasses = 'block border border-solid rounded w-max py-2 px-3 transition duration-100';
  const linkClasses = 'block w-max transition duration-100';

  switch (type) {
    case 'secondary':
      return `${baseClasses} bg-secondary-500 border-secondary-400 text-white hover:bg-secondary-400`;
    case 'primary':
      return `${baseClasses} bg-primary-500 border-primary-400 text-white hover:bg-primary-400`;
    case 'link':
      return `${linkClasses} text-primary-500 hover:text-primary-400`;
    default:
      return ''
  }
}
</script>