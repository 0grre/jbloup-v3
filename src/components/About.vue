<script setup>
const props = defineProps({
  basics: Object,
})
</script>

<template>
  <td id="about">
      <h2>About</h2>
      <p>{{ basics.summary }}</p>
      <p>{{ basics.summary_2 }}</p>
      <p>{{ basics.summary_3 }}</p>
  </td>
</template>
