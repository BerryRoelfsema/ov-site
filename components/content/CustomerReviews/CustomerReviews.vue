<template>
  <SectionWrapper>
    <SectionContainer class="mb-24">
      <div class="bg-red-500 w-full">
        <div class="bg-red-300 container text-center">
          <h5 class="uppercase mb-8"><ContentSlot name="headline" /></h5>
          <h3 class="text-4xl font-semibold"><ContentSlot name="title" /></h3>
        </div>
      </div>
    </SectionContainer>
    <SectionContainer :width="containerWidth" class="mb-24">
      <div class="bg-red-500 w-full">
        <div class="bg-red-300 container text-center">
          [REVIEWS]
        </div>
      </div>
    </SectionContainer>
    <SectionContainer>
      <div class="bg-red-500 w-full">
        <div class="bg-red-300 container flex justify-center">
          <UiButton href="#">Lees alle reviews</UiButton>
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