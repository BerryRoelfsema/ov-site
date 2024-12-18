<template>
  <SectionWrapper class="bg-white">
    <SectionContainer :width="containerWidth" class="bg-white items-center">
      <div class="w-1/2">
        <div class="container">
          <h3 class="text-4xl font-semibold mb-4"><ContentSlot name="title" unwrap="p"/></h3>
          <p class="mb-2 italic"><ContentSlot name="introduction" unwrap="p"/></p>
          <p class="mb-6"><ContentSlot name="content" unwrap="p"/></p>
          <UiButton>Vergelijk offertes</UiButton>
        </div>
      </div>
      <div class="w-1/2">
        <div class="container">
          <img :src="imgSrc" :alt="imgAlt" class="aspect-square object-cover rounded-xl"/>
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
  imgSrc: {
    type: String,
    default: '/'
  },
  imgAlt: {
    type: String,
    default: ''
  },
})
</script>