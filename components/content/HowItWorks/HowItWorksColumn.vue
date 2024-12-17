<template>
  <div :class="`bg-red-500 ${getWidth(columnWidth)} ${padding}`">
    <ColumnContainer>
      <div v-if="$slots.icon" class="mb-4"><ContentSlot name="icon" unwrap="p"/></div>
      <p v-if="$slots.content" class="mb-2"><ContentSlot name="content" unwrap="p"/></p>
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
  padding: {
    type: String,
    default: 'p-8'
  },
  link: {
    type: String,
    default: '#',
  }
});
</script>