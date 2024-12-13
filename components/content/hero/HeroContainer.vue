<template>
  <div class="container bg-blue-300 text-center text-white" :class="width">
    <div class="bg-red-300">
      <div class="bg-red-500 container">
        <h2 class="text-6xl font-bold mb-4"><ContentSlot name="heroTitle" unwrap="p"/></h2>
        <p class="text-2xl mb-8"><ContentSlot name="heroSubTitle" unwrap="p" /></p>
        <div class="flex justify-center gap-x-2 text-black mb-4">
          <select>
            <option>Kies je categorie</option>
          </select>
          <form class="bg-white">
            <input type="text" placeholder="Jouw postcode...">
            <button>Vergelijk offertes</button>
          </form>
        </div>
        <p>Wij scoren een <ContentSlot name="heroReviewScore" unwrap="p" /> uit ruim <ContentSlot name="heroReviewCount" unwrap="p" /> klantbeoordelingen!</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  width: {
    type: String,
    default: 'w-full'
  },
})
</script>