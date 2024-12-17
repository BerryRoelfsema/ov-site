<template>
  <SectionWrapper class="bg-yellow-500 pb-36">
    <SectionContainer width="half" class="bg-green-300">
      <div class="bg-red-500 w-full">
        <div class="bg-red-300 container text-center">
          <h5 class="uppercase mb-8">Hoe het werkt</h5>
          <h3 class="text-4xl font-semibold">Gratis offertes aanvragen, geheel vrijblijvend!</h3>
        </div>
      </div>
    </SectionContainer>
  </SectionWrapper>
  <SectionWrapper class="pt-0">
    <SectionContainer :width="containerWidth" >
      <ContentSlot name="content" />
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