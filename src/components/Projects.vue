<script setup>
const props = defineProps({
  projects: Object,
})
</script>

<template>
  <td id="projects" valign="top">
    <h2>Projects</h2>
    <fieldset v-for="project in projects">
      <legend>
        <h4>
          <a :href="project.url">{{ project.name }}</a>
        </h4>
      </legend>
      <table>
        <tr>
          <td width="30%" valign="top">
            <img :src="project.image" :alt="project.name" width="100%">
          </td>
          <td valign="top">
            <p>{{ project.summary }}</p>
            <ul>
              <li v-for="highlight in project.highlights">
                {{ highlight }}
              </li>
            </ul>
          </td>
        </tr>
      </table>
    </fieldset>
  </td>
  <tr>
    <td>
      <router-link to="/archives"><p>View full open source projects &rarr; </p></router-link>
    </td>
  </tr>
</template>
