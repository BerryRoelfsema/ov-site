<template>
  <div :class="`bg-red-500 ${getWidth(width)} ${padding}`">
    <ColumnContainer>
      <slot />
    </ColumnContainer>
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