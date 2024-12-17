<template>
  <SectionWrapper>
    <SectionContainer class="bg-green-300 mb-12">
      <div class="bg-red-500 w-full">
        <div class="bg-red-300 container">
          <h3 class="text-4xl font-semibold">
            <ContentSlot name="title" />
          </h3>
        </div>
      </div>
    </SectionContainer>
    <SectionContainer :width="containerWidth" class="mb-24">
      <ContentSlot name="content" />
    </SectionContainer>
    <SectionContainer>
      <div class="bg-red-500 w-full">
        <div class="bg-red-300 container flex justify-center">
            <UiButton href="#">Bekijk alle producten</UiButton>
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