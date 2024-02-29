<script setup>
const props = defineProps({
  basics: Object,
  templateData: Object
})
const emit = defineEmits(['changeLanguage']);
</script>

<template>
  <div id="header">
    <table>
      <tr>
        <td width="100%" valign="top">
          <h1>{{ basics.name }}</h1>
          <p><i>{{ basics.label }} {{ templateData.at }} <b>{{ basics.company }}</b></i></p>
          <ul>
            <li v-for="profile in basics.profiles">
              <a :href="profile.url">
                {{ profile.network }}
              </a>
            </li>
          </ul>
      </td>
        <td valign="top">
          <button @click="emit('changeLanguage', basics.location.locationCountryCode)">
              {{ basics.location.locationCountryCode }}
            </button>
        </td>
      </tr>
    </table>
  </div>
</template>
