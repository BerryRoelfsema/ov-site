<template>
  <div :class="`bg-red-500 ${getWidth(width)}`">
    <ContentSlot name="columnContainer" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: String,
    default: 'third',
  }
});
</script>