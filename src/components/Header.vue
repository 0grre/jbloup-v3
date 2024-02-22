<script setup>
const props = defineProps({
  basics: Object,
})

console.log(props.basics)

</script>

<template>
  <td>
    <header>
      <ul>
        <h1><code>{{ basics.name }}</code></h1>
        <p><i>{{ basics.label }} chez <b>{{ basics.company }}</b></i></p>
      </ul>
      <ul>
        <li v-for="profile in basics.profiles">
          <a :href="profile.url">{{ profile.network }}</a>
        </li>
      </ul>
      <ul>
        <h1>
          <a href="">
            <button>
              &rarr; Download my resume
            </button>
          </a>
        </h1>
      </ul>
    </header>
  </td>
</template>
