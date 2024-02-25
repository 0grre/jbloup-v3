<script setup>
import Header from "./Header.vue";
defineProps({
  about: String,
  work: String,
  projects: String,
  archives: String,
  resume: String
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
                  <a href="#about">{{ about }}</a>
                </li>
                <li>
                  <a href="#projects">{{ projects }}</a>
                </li>
                <li>
                  <a href="#experience">{{ work }}</a>
                </li>
              </ol>
              <ul>
                <li>
                  <router-link to="/archives">{{ archives }}</router-link>
                </li>
                <li>
                  <a href="/Jean-Baptiste_LOUP_CV_2024.pdf">{{ resume }}</a>
                </li>
              </ul>
            </td>
            <td></td>
          </tr>
          </thead>
        </table>
      </details>
    </center>
  </header>
</template>
