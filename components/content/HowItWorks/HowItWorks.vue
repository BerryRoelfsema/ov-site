<template>
  <SectionWrapper>
    <SectionContainer :width="containerWidth">
      <ContentSlot name="content" />
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