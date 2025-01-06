<template>
  <SectionWrapper class="bg-primary-500">
    <SectionContainer :width="containerWidth" class="bg-primary-500 text-white mb-12">
      <div class="w-full">
        <div class="container flex flex-col">
          <h3 class="text-4xl font-semibold">Veel gestelde vragen</h3>
        </div>
      </div>
    </SectionContainer>
    <SectionContainer :width="containerWidth" class="bg-primary-500 text-white">
      <div class="w-full">
        <div class="container flex flex-col">
          <dl class="divide-y divide-gray-200">
            <ContentSlot name="content" unwrap="p"/>
          </dl>
        </div>
      </div>
    </SectionContainer>
  </SectionWrapper>
</template>

<script setup lang="ts">
defineProps({
  containerWidth: {
    type: String,
    default: 'two-thirds'
  },
});
</script>