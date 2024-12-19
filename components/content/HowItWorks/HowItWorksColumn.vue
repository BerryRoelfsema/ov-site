<template>
  <div :class="`bg-white rounded-xl shadow-xl ${getWidth(columnWidth)} ${padding} -mt-24`">
    <ColumnContainer class="bg-white">
      <Icon :name="iconName" class="mb-4 w-12 h-12"><ContentSlot name="icon" unwrap="p"/></Icon>
      <p v-if="$slots.content" class="mb-6 text-lg"><ContentSlot name="content" unwrap="p"/></p>
      <UiButton v-if="$slots.button" :href="link" type="link" icon><ContentSlot name="button" unwrap="p"/></UiButton>
    </ColumnContainer>
  </div>
</template>

<script setup lang="ts">
defineProps({
  columnWidth: {
    type: String,
    default: 'third',
  },
  iconName: {
    type: String,
    default: ''
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