<template>
  <SectionWrapper class="bg-yellow-500">
    <SectionContainer :width="containerWidth" class="items-center">
      <div class="bg-red-500 w-1/2">
        <div class="bg-red-300 container">
          <h3 class="text-4xl font-semibold mb-4"><ContentSlot name="title" unwrap="p"/></h3>
          <p class="mb-2 italic"><ContentSlot name="introduction" unwrap="p"/></p>
          <p class="mb-6"><ContentSlot name="content" unwrap="p"/></p>
          <UiButton>Vergelijk offertes</UiButton>
        </div>
      </div>
      <div class="bg-red-500 w-1/2">
        <div class="bg-red-300 container">
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