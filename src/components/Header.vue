<script setup>
const props = defineProps({
  basics: Object,
  templateData: Object
})
</script>

<template>

  <header>
    <!--      <ul>-->
    <h1><code>{{ basics.name }}</code></h1>
    <p><i>{{ basics.label }} {{ templateData.at }} <b>{{ basics.company }}</b></i></p>
    <!--      </ul>-->
    <ul>
      <li v-for="profile in basics.profiles">
        <a :href="profile.url">
          {{ profile.network }}
        </a>
      </li>
    </ul>
  </header>

</template>
