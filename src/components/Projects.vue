<script setup>
const props = defineProps({
  title: String,
  projects: Object,
  archives: String
})
</script>

<template>
  <section id="projects">
    <h2>{{ title }}</h2>
    <fieldset v-for="project in projects">
      <legend>
        <h4>
          <a :href="project.url">{{ project.name }}</a>
        </h4>
      </legend>
      <img :src="'https://image.thum.io/get/https://'+project.name" :alt="project.name" width="300" height="250">
      <p>{{ project.summary }}</p>
      <ul>
        <li v-for="highlight in project.highlights">
          {{ highlight }}
        </li>
      </ul>
    </fieldset>
    <router-link to="/archives"><p>{{ archives }} &rarr; </p></router-link>
    <hr>
  </section>
</template>
