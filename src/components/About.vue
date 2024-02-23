<script setup>
const props = defineProps({
  basics: Object,
})
</script>

<template>
  <td id="about" valign="top">
      <h2>About</h2>
      <p>{{ basics.summary }}</p>
      <p>{{ basics.summary_2 }}</p>
      <p>{{ basics.summary_3 }}</p>
  </td>
</template>
