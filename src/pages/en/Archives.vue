<script setup>
import Navigation from "../components/Navigation.vue";
import projects from "../../services/projects.js"
import {ref} from "vue";

const props = defineProps(
  {
    title: String,
    projects: Object,
  }
)

console.log(projects);

const archives = ref(projects);
</script>

<template>
  <Navigation />
  <table>
    <thead>
    <tr>
      <th>Year</th>
      <th>Project</th>
      <th>Link</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="project in archives">
      <td>{{ project.year }}</td>
      <td>{{ project.title }}</td>
      <td><a :href="project.url">{{ project.url }}</a></td>
    </tr>
    </tbody>
  </table>
</template>
