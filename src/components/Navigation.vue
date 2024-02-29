<script setup>
import Header from "./Header.vue";

const props = defineProps({
  templateData: Object,
  home: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <header>
    <center>
      <details>
        <summary>Navigation</summary>
        <table>
          <thead>
          <tr>
            <td></td>
            <td width="150px">
              <ol v-if="home">
                <li>
                  <a href="#about">{{ templateData.about.title }}</a>
                </li>
                <li>
                  <a href="#experience">{{ templateData.work.title }}</a>
                </li>
                <li>
                  <a href="#projects">{{ templateData.projects.title }}</a>
                </li>
              </ol>
              <ul>
                <li>
                  <router-link :to="home ? templateData.archives.url : templateData.header.url">
                    {{ home ? templateData.archives.title : templateData.header.title }}
                  </router-link>
                </li>
                <li>
                  <a href="/Jean-Baptiste_LOUP_CV_2024.pdf">{{ templateData.resume.title }}</a>
                </li>
              </ul>
            </td>
            <td></td>
          </tr>
          </thead>
        </table>
      </details>
    </center>
    <hr>
  </header>
</template>
