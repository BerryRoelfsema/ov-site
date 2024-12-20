<template>
  <div :class="`bg-transparent ${getWidth(columnWidth)}`">
    <ColumnContainer class="bg-transparent">
      <img :src="imgSrc" :alt="imgAlt" class="aspect-video object-cover rounded-xl"/>
      <h5 v-if="$slots.content" class="mb-2 text-lg"><ContentSlot name="title" unwrap="p"/></h5>
      <p v-if="$slots.content" class="mb-6 text-lg"><ContentSlot name="content" unwrap="p"/></p>
      <UiButton href="#" type="link" icon>Lees verder</UiButton>
    </ColumnContainer>
  </div>
</template>

<script setup lang="ts">
defineProps({
  columnWidth: {
    type: String,
    default: 'third',
  },
  imgSrc: {
    type: String,
    default: '/'
  },
  imgAlt: {
    type: String,
    default: ''
  },
});
</script>