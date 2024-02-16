<script setup>
import octokit from "../services/github.js";
import {ref, onMounted, onUnmounted, nextTick, onBeforeMount} from 'vue';
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const about = ref(null);
const experiences = ref(null);
const projects = ref(null);
const currentSection = ref('');

// const data = ref(null);
let data = '';

async function fetchData() {
  try {
    const response = await octokit.request("GET /gists/ae63e34c62d41c9f5e053eb6661ff42d", {
      gist_id: 'ae63e34c62d41c9f5e053eb6661ff42d',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        'accept': 'application/vnd.github.v3+json'
      }
    });

    const gist = await response.data;
    const fileName = Object.keys(gist.files)[0];
    data = JSON.parse(gist.files[fileName].content);
  } catch (error) {
    console.error(error);
  }
}

onBeforeMount(() => {
  fetchData();
});

onMounted(() => {
  nextTick(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentSection.value = entry.target.id; // Met à jour la section active
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.5 // Ajustez ce seuil selon vos besoins
    });

    if (about.value) observer.observe(about.value);
    if (experiences.value) observer.observe(experiences.value);
    if (projects.value) observer.observe(projects.value);
  });
});

onUnmounted(() => {
  // observer.disconnect();
});


</script>


<template>
  <section class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-museo md:px-12 md:py-20 lg:px-24 lg:py-0">
    <div class="lg:flex lg:justify-between lg:gap-4">
<!--      <Header :basics="data.basics"/>-->
      <pre>{{ data }}</pre>
      <main id="content" class="pt-24 lg:w-1/2 lg:py-24">
        <About :basics="data.basics"/>
        <Experiences :work="data.work"/>
        <section ref="projects" id="projects"
                 :class="{ active: currentSection === 'projects' } + 'mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'"
                 aria-label="Projects">
        </section>
        <Footer/>
      </main>
    </div>
  </section>
</template>
