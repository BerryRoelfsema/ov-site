<template>
  <SectionWrapper>
    <SectionContainer :width="containerWidth">
      <div class="bg-red-500 w-full">
        <div class="bg-red-300 container text-center">
          <h3 class="text-4xl font-semibold mb-4"><ContentSlot name="title" unwrap="p"/></h3>
          <p class="mb-6"><ContentSlot name="content" unwrap="p"/></p>
          <UiButton>Aanmelden als vakspecialist</UiButton>
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