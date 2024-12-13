<template>
  <div class="bg-green-500 py-4">
    <div class="container bg-green-300 flex flex-wrap justify-between gap-y-4">
      <div class="bg-red-500">
        <div class="bg-red-300">
          <ContentSlot name="logo"/>
        </div>
      </div>
      <nav class="bg-red-500">
        <ul class="bg-red-300 flex gap-x-10">
          <ContentSlot name="navigation"/>
        </ul>
      </nav>
      <div class="bg-red-500">
        <div class="bg-red-300 flex gap-x-4">
          <ContentSlot name="action"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const logoDefault = {
  logo: '/path-to-logo.png',
  link: '/'
}

const navigationDefault = {
  links: [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' }
  ]
}

const actionDefault = {
  buttons: [
    { text: 'Contact', url: '/contact', style: 'primary' }
  ]
}
</script>