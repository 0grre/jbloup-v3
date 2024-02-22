<script setup>
const props = defineProps({
  projects: Object,
})
</script>

<template>
  <td id="projects">
    <h2>Projects</h2>
    <fieldset  v-for="project in projects">
            <legend>
             <h4>
               <a :href="project.url">{{ project.name }}</a>
             </h4>
            </legend>
        <table>
              <tr>
            <td width="30%">
              <img :src="project.image" :alt="project.name" width="100%">
            </td>
            <td>
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
</template>
