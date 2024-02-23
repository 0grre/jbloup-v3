<script setup>

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import About from "./components/About.vue";
import Experiences from "./components/Experiences.vue";
import Projects from "./components/Projects.vue";
import frenchResumeData from "../services/fr/resume.js"
import englishResumeData from "../services/en/resume.js"
import frenchTemplateData from "../services/fr/template.js"
import englishTemplateData from "../services/en/template.js"
import projects from "../services/projects.js";

import {ref} from 'vue';
import Navigation from "./components/Navigation.vue";

const templateData = ref(frenchTemplateData);
const resumeData = ref(frenchResumeData);

const loadTemplateData = (locationCountryCode) => {
  if (locationCountryCode === 'FR') {
    templateData.value = englishTemplateData;
    resumeData.value = englishResumeData;
  } else {
    templateData.value = frenchTemplateData;
    resumeData.value = frenchResumeData;
  }
};
</script>

<template>
<Navigation :about="resumeData." />
  <hr>
  <table>
    <tbody>
    <tr>
      <!--      <td width="40%">-->
      <td valign="top">
        <button @click="loadTemplateData(resumeData.basics.location.locationCountryCode)">
          {{ resumeData.basics.location.locationCountryCode }}
        </button>
        <Header :basics="resumeData.basics" :templateData="templateData.header"/>
      </td>
      <!--    </tr>-->
      <!--      <tr>-->
      <!--        <td width="40%">-->

      <!--        </td>-->
      <About :basics="resumeData.basics"/>
    </tr>
    <tr>
      <td width="40%">

      </td>
      <Experiences :work="resumeData.work"/>
    </tr>
    <tr>
      <td width="40%">
      </td>
      <td>
        <hr>
        <Projects :projects="resumeData.projects"/>
      </td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
      <td width="40%">

      </td>
      <Footer/>
    </tr>
    </tfoot>
  </table>
  <footer>
    <hr>
    <center>
      <p>2024 | Developped with &hearts; by <a href="https://github.com/0grre">0grre</a>.</p>
    </center>
  </footer>
</template>
