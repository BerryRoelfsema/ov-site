<template>
  <SectionWrapper class="bg-white">
    <SectionContainer class="bg-white mb-24">
      <div class="w-full">
        <div class="container flex flex-col items-center">
          <UiHeadline><ContentSlot name="headline" /></UiHeadline>
          <h3 class="text-4xl font-semibold"><ContentSlot name="title" /></h3>
        </div>
      </div>
    </SectionContainer>
    <SectionContainer :width="containerWidth" class="bg-white mb-24">
      <div class="w-full">
        <div class="container text-center">
          [REVIEWS]
        </div>
      </div>
    </SectionContainer>
    <SectionContainer class="bg-white">
      <div class="w-full">
        <div class="container flex flex-col items-center">
          <UiButton href="#" type="secondary">Lees alle reviews</UiButton>
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