<template>
  <div :class="`bg-red-500 ${getWidth(columnWidth)} rounded`">
    <ColumnContainer class="h-80 flex flex-col items-center justify-center">
      <h4 v-if="$slots.product" class="text-xl mb-2"><ContentSlot name="product" unwrap="p"/></h4>
      <UiButton v-if="$slots.button" :href="link"><ContentSlot name="button" unwrap="p"/></UiButton>
    </ColumnContainer>
  </div>
</template>

<script setup lang="ts">
defineProps({
  columnWidth: {
    type: String,
    default: 'third',
  },
  link: {
    type: String,
    default: '#',
  }
});
</script>