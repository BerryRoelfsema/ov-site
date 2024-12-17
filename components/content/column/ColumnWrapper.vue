<template>
  <div :class="`bg-red-500 ${getWidth(width)} ${padding}`">
    <ContentSlot name="columnContainer" />
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: String,
    default: 'third',
  },
  padding: {
    type: String,
    default: 'p-8'
  }
});
</script>