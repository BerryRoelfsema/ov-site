<template>
  <div :class="`container bg-blue-300 text-center text-white ${getWidth(width)}`" >
    <div class="bg-red-300">
      <div class="bg-red-500 container">
        <h2 class="text-6xl font-bold mb-4"><ContentSlot name="heroTitle" unwrap="p" /></h2>
        <p class="text-2xl mb-8">Meer dan <span class="font-semibold"><ContentSlot name="heroCustomerCount" unwrap="p" /></span> mensen gingen je voor.</p>
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
import {getWidth} from "~/utils/sizeUtils";

defineProps({
  width: {
    type: String,
    default: 'full'
  },
});
</script>