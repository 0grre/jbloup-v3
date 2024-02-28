<script setup>
defineProps({
  title: String,
  text: String
})
</script>

<template>
  <h2>{{ title }}</h2>
  <p v-html="text"></p>
</template>
