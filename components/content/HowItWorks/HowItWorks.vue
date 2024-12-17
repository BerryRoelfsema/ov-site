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
})
</script>