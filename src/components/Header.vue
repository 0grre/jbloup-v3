<script setup>
const props = defineProps({
  basics: Object,
})
console.log(props.basics)
</script>

<template>
  <header class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
    <div>
      <h1 class="text-4xl font-bold tracking-tight text-zinc-200 sm:text-5xl">
        <a href="/">{{ basics.name }}</a>
    </h1>
      <h2 class="mt-3 text-lg font-medium tracking-tight text-zinc-200 sm:text-xl">{{ basics.label }} chez
        {{ basics.company }}</h2>
      <p class="mt-4 max-w-xs leading-normal">{{ basics.summary }}</p>
      <nav class="nav hidden lg:block" aria-label="In-page jump links">
        <ul class="mt-16 w-max">
          <li><a class="group flex items-center py-3 active" href="#about"><span
              class="nav-indicator mr-4 h-px w-8 bg-zinc-600 transition-all group-hover:w-16 group-hover:bg-zinc-200 group-focus-visible:w-16 group-focus-visible:bg-zinc-200 motion-reduce:transition-none"></span><span
              class="nav-text text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-200 group-focus-visible:text-zinc-200">About</span></a>
          </li>
          <li><a class="group flex items-center py-3 " href="#experience"><span
              class="nav-indicator mr-4 h-px w-8 bg-zinc-600 transition-all group-hover:w-16 group-hover:bg-zinc-200 group-focus-visible:w-16 group-focus-visible:bg-zinc-200 motion-reduce:transition-none"></span><span
              class="nav-text text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-200 group-focus-visible:text-zinc-200">Experience</span></a>
          </li>
          <li><a class="group flex items-center py-3 " href="#projects"><span
              class="nav-indicator mr-4 h-px w-8 bg-zinc-600 transition-all group-hover:w-16 group-hover:bg-zinc-200 group-focus-visible:w-16 group-focus-visible:bg-zinc-200 motion-reduce:transition-none"></span><span
              class="nav-text text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-200 group-focus-visible:text-zinc-200">Projects</span></a>
          </li>
        </ul>
      </nav>
    </div>
    <ul class="ml-1 mt-8 flex items-center" aria-label="Social media">

      <li class="mr-5 text-xs shrink-0" v-for="profile in basics.profiles">
        <a class="block hover:text-zinc-200" :href="profile.url" target="_blank" rel="noreferrer noopener" :aria-label="profile.network + '(opens in a new tab)'" :title="profile.network"><span
          class="sr-only">{{ profile.network }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6"
             aria-hidden="true">
          <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
      </a>
      </li>

    </ul>
  </header>
</template>
