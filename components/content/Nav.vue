<template>
  <div class="bg-green-500 py-4">
    <div class="container bg-green-300 flex flex-wrap justify-between gap-y-4">
      <ContentSlot :default="logoDefault" name="logo-col"/>
      <ContentSlot :default="navigationDefault" name="navigation-col"/>
      <ContentSlot :default="actionDefault" name="action-col"/>
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