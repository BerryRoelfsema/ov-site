<template>
  <div class="bg-green-500 py-4">
    <div class="container bg-green-300 flex flex-wrap justify-between gap-y-4 items-center">
      <div class="bg-red-500">
        <div class="bg-red-300 container">
          <img src="public/offertevergelijker_logo.png" alt="test" class="h-8"/>
        </div>
      </div>
      <nav class="bg-red-500">
        <ul class="bg-red-300 flex gap-x-10">
          <ContentSlot name="navigation" unwrap="p"/>
        </ul>
      </nav>
      <div class="bg-red-500">
        <div class="bg-red-300 flex gap-x-4">
          <ContentSlot name="actions" unwrap="p"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>