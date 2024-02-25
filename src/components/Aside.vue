<script setup>
defineProps({
  text: String

})
</script>

<template>
  <td>
    <hr>
    <p v-html="text">
    </p>
  </td>
</template>
