<template>
  <div :class="`bg-white rounded-xl shadow-xl ${getWidth(columnWidth)} ${padding} -mt-24`">
    <ColumnContainer class="bg-white">
      <div v-if="$slots.icon" class="mb-4"><ContentSlot name="icon" unwrap="p"/></div>
      <p v-if="$slots.content" class="mb-2"><ContentSlot name="content" unwrap="p"/></p>
      <UiButton v-if="$slots.button" :href="link" type="link"><ContentSlot name="button" unwrap="p"/></UiButton>
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