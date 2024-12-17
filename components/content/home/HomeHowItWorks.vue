<template>
  <SectionWrapper>
    <SectionContainer :width="containerWidth">
      <ColumnWrapper :width="columnWidth">
        <div v-if="$slots.icon"><ContentSlot name="icon" unwrap="p"/></div>
        <p v-if="$slots.content"><ContentSlot name="content" unwrap="p"/></p>
        <button v-if="$slots.button"><ContentSlot name="button" unwrap="p"/></button>
      </ColumnWrapper>
    </SectionContainer>
  </SectionWrapper>
</template>

<script setup lang="ts">
defineProps({
  containerWidth: {
    type: String,
    default: 'full'
  },
  columnWidth: {
    type: String,
    default: 'full'
  },
  href: {
    type: String,
    default: '#'
  },
})
</script>