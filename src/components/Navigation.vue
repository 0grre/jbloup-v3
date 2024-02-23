<script setup>
import Header from "./Header.vue";
defineProps({
  about: String,
  projects: String,
  experiences: String
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
              <ul>
                <li>
                  <a href="#about">{{ about }}</a>
                </li>
                <li>
                  <a href="#projects">{{ projects }}</a>
                </li>
                <li>
                  <a href="#experience">{{ experiences }}</a>
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
