<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { useUI } from "../composables/useUI";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const { toggleMenu } = useUI();
</script>

<template>
  <nav>
    <div class="flex items-center flex-shrink-0 text-white">
      <button class="menu-btn" @click="toggleMenu()">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </button>
      Menú
    </div>
    <div class="block items-center text-white mx-2">
      <button class="mx-5">
        <a href="https://github.com/imn-climatologias-aeropuertos/meteo-page" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon icon="fa-brands fa-github" />
        </a>
      </button>
      <button @click="toggleDark()" class="mx-2">
        <font-awesome-icon v-if="!isDark" icon="fa-solid fa-sun" />
        <font-awesome-icon v-else icon="fa-solid fa-moon" />
      </button>
    </div>
  </nav>
</template>

<style scoped lang="postcss">
nav {
  @apply absolute flex items-center justify-between flex-wrap bg-blue;
  @apply py-3 w-full;
  @apply shadow-sm dark:shadow-gray;
}
.menu-btn {
  @apply border border-white rounded-md;
  @apply text-white px-2 mx-2;
}
</style>
