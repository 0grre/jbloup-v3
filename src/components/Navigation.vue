<script setup>
import Header from "./Header.vue";

const props = defineProps({
  templateData: Object,
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
              <ol>
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
                  <router-link to="/archives">{{ templateData.archives.title }}</router-link>
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
