<template>
  <details class="group py-4 marker:content-['']">
    <summary class="flex w-full justify-between group-open:text-secondary-500 font-medium cursor-pointer"><ContentSlot name="question" unwrap="p" /></summary>
    <p class="pt-4"><ContentSlot name="answer" unwrap="p"/></p>
  </details>
</template>

<script setup lang="ts">

</script>