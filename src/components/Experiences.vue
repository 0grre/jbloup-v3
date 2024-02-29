<script setup>
import {getYear} from "../../services/projects.js"

const props = defineProps({
  work: Object,
  resume: String
})

</script>

<template>
  <section id="experiences">
    <h2>Experiences</h2>
    <template v-for="experience in work">
      <fieldset v-if="experience.highlights">
        <legend>
          <h4>
            <a :href="experience.url">{{ experience.name }}</a>
          </h4>
        </legend>
        <p>{{ experience.summary }}</p>
        <ul>
          <li v-for="highlight in experience.highlights">
            {{ highlight }}
          </li>
        </ul>
        <small>
          <time>{{ getYear(experience.startDate) }}</time>
          -
          <time>{{ experience.endDate ? getYear(experience.endDate) : 'Present' }}</time>
        </small>
      </fieldset>
    </template>
    <a href="/Jean-Baptiste_LOUP_CV_2024.pdf" target="_blank"><p>{{ resume }} &rarr; </p></a>
    <hr>
  </section>
</template>
