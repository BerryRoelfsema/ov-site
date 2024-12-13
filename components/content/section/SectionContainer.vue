<template>
  <div :class="`container bg-green-300 flex ${getWidth(width)} gap-x-12 mb-48`">
    <ContentSlot name="SectionContent"/>
  </div>
</template>

<script setup lang="ts">
import {getWidth} from "~/utils/sizeUtils";

defineProps({
  width: {
    type: String,
    default: 'full'
  }
})
</script>