<template>
  <SectionWrapper>
    <SectionContainer :width="containerWidth">
      <ColumnWrapper :width="columnWidth">
        <ColumnContainer>Hoi</ColumnContainer>
      </ColumnWrapper>
      <ColumnWrapper :width="columnWidth">
        <ColumnContainer>Hoi</ColumnContainer>
      </ColumnWrapper>
      <ColumnWrapper :width="columnWidth">
        <ColumnContainer>Hoi</ColumnContainer>
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