<template>
  <div :class="`container bg-green-300 flex ${getWidth(width)} gap-x-12 mb-48`">
    <div class="bg-red-500 p-8 -mt-24">
      <div class="bg-red-300">
        <div class="mb-4">[ICON]</div>
        <p class="mb-6">Et labore ex voluptate est pariatur. Eiusmod cupidatat ipsum pariatur. Anim elit
          exercitation voluptate in aliquip consectetur voluptate officia commodo ex excepteur.
          Et occaecat pariatur duis in fugiat do ipsum commodo enim nisi minim quis dolore velit.</p>
        <button>Zoek mijn product</button>
      </div>
    </div>
    <div class="bg-red-500 p-8 -mt-24">
      <div class="bg-red-300">
        <div class="mb-4">[ICON]</div>
        <p class="mb-6">Et labore ex voluptate est pariatur. Eiusmod cupidatat ipsum pariatur. Anim elit
          exercitation voluptate in aliquip consectetur voluptate officia commodo ex excepteur.
          Et occaecat pariatur duis in fugiat do ipsum commodo enim nisi minim quis dolore velit.</p>
        <button>Vergelijk offertes</button>
      </div>
    </div>
    <div class="bg-red-500 p-8 -mt-24">
      <div class="bg-red-300">
        <div class="mb-4">[ICON]</div>
        <p class="mb-6">Et labore ex voluptate est pariatur. Eiusmod cupidatat ipsum pariatur. Anim elit
          exercitation voluptate in aliquip consectetur voluptate officia commodo ex excepteur.
          Et occaecat pariatur duis in fugiat do ipsum commodo enim nisi minim quis dolore velit.</p>
        <button>Vraag offertes aan</button>
      </div>
    </div>
  </div>

  <div class="container bg-green-300">
    <div class="bg-red-500">
      <div class="bg-red-300">
        <h3 class="text-4xl font-semibold mb-8">Populaire producten</h3>
        <div class="mb-12">[PRODUCT SLIDER]</div>
        <button class="text-center w-full">Bekijk alle producten</button>
      </div>
    </div>
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