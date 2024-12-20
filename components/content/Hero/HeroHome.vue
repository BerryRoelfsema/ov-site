<template>
  <HeroWrapper class="relative bg-[url('public/assets/home/hero_image.jpeg')] bg-cover" :class="beforeClasses">
    <HeroContainer :width="containerWidth" class="bg-transparent relative z-20">
      <div>
        <div class="container">
          <h2 class="text-6xl font-bold font-lato mb-4"><ContentSlot name="heroTitle" unwrap="p" /></h2>
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
    </HeroContainer>
  </HeroWrapper>
</template>

<script setup lang="ts">
defineProps({
  containerWidth: {
    type: String,
    default: 'full'
  },
  heroImgUrl: {
    type: String,
    default: '/'
  },
});

const beforeClasses = `
before:absolute before:top-0 before:bg-black before:opacity-25
before:bg-cover before:h-full before:w-full before:z-10
`;
</script>