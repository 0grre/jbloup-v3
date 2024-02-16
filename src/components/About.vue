<script setup>
const props = defineProps({
  basics: Object,
})
</script>

<template>
  <section ref="about" id="about" :class=" 'mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'" aria-label="About me">
    <div
        class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 class="text-sm font-bold uppercase tracking-widest text-zinc-200 lg:sr-only">About</h2></div>
    <div><p class="mb-4">Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head
      first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege
      of building software for an.</p></div>
  </section>
</template>
