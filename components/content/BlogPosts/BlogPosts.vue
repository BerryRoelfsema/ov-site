<template>
  <SectionWrapper>
    <SectionContainer class="mb-12">
      <div class="bg-red-500 w-full">
        <div class="bg-red-300 container text-center">
          <h5 class="uppercase mb-8"><ContentSlot name="headline" /></h5>
          <h3 class="text-4xl font-semibold"><ContentSlot name="title" /></h3>
        </div>
      </div>
    </SectionContainer>
    <SectionContainer :width="containerWidth">
      <div class="bg-red-500 w-full">
        <div class="bg-red-300 container text-center">
          [BLOG POSTS]
        </div>
      </div>
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