<template>
  <SectionWrapper class="!py-2 bg-primary-900">
    <SectionContainer :width="containerWidth" class="bg-primary-900">
      <div class="w-full">
        <div class="container flex flex-row justify-between text-center text-white">
          <p><ContentSlot name="valueOne" unwrap="p"/></p>
          <p><ContentSlot name="valueTwo" unwrap="p"/></p>
          <p><ContentSlot name="valueThree" unwrap="p"/></p>
          <p><ContentSlot name="valueFour" unwrap="p"/></p>
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