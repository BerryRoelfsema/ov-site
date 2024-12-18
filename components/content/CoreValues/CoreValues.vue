<template>
  <SectionWrapper class="py-4">
    <SectionContainer :width="containerWidth">
      <div class="bg-red-500 w-full">
        <div class="bg-red-300 container text-center">
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