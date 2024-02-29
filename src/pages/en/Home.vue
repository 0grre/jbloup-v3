<script setup>
import {ref} from 'vue';
import Header from "../components/Header.vue";
import About from "../components/About.vue";
import Experiences from "../components/Experiences.vue";
import Projects from "../components/Projects.vue";
import Navigation from "../components/Navigation.vue";
import Aside from "../components/Aside.vue";
import Footer from "../components/Footer.vue";
import frenchResumeData from "../../services/fr/resume.js"
import englishResumeData from "../../services/en/resume.js"
import frenchTemplateData from "../../services/fr/template.js"
import englishTemplateData from "../../services/en/template.js"

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
  <Navigation :templateData="templateData"/>
  <Header :basics="resumeData.basics" :templateData="templateData.header" @changeLanguage="loadTemplateData"/>
  <About :title="templateData.about.title" :basics="resumeData.basics"/>
  <Experiences :title="templateData.work.title" :work="resumeData.work" :resume="templateData.resume.sentence"/>
  <Projects :title="templateData.projects.title" :projects="resumeData.projects" :archives="templateData.archives.sentence"/>
  <Aside :title="templateData.aside.title" :text="templateData.aside.text"/>
  <Footer/>
</template>
