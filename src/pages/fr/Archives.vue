<script setup>
import frenchTemplateData from "../../../services/fr/template.js"
import Navigation from "../../components/Navigation.vue";
import projects from "../../../services/projects.js"
import archives from "../../../services/projects.js"

const props = defineProps(
  {
    title: String
  }
)

</script>

<template>
  <Navigation :templateData="frenchTemplateData" :home="false"/>
  <h1>All projects</h1>
  <table>
    <thead>
    <tr>
      <th valign="top">Year</th>
      <th valign="top">Project</th>
      <th valign="top">Description</th>
      <th valign="top">Link</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="project in projects.archives">
      <td valign="top">{{ project.year }}</td>
      <td valign="top"><a :href="project.url">{{ project.name }}</a></td>
      <td valign="top">{{ project.description }}</td>
      <td valign="top"><a :href="project.homepage" target="_blank">{{ project.homepage }}</a>
      </td>
    </tr>
    </tbody>
  </table>
</template>
