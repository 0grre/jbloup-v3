<script setup>
const props = defineProps({
  work: Object,
  resume: String
})

const getYear = (string) => {
  const date = Date.parse(string);
  return new Date(date).getUTCFullYear()
}

</script>

<template>
  <td id="experience" valign="top">
    <hr>
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
    <tr>
      <td>
        <a href="/Jean-Baptiste_LOUP_CV_2024.pdf"><p>{{ resume }} &rarr; </p></a>
      </td>
    </tr>
  </td>
</template>
