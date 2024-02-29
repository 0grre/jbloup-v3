<script setup>
const props = defineProps({
  basics: Object,
})
</script>

<template>
  <section id="about">
    <h2>About</h2>
    <p v-html="basics.summary"></p>
    <hr>
  </section>
</template>
