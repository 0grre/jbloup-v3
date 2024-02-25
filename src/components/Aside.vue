<script setup>
defineProps({
  description: String

})
</script>

<template>
  <td>
    <hr>
    <p v-html="description">
    </p>
  </td>
</template>
