<script setup lang="ts">
import links from "../static/menu_links.json";
</script>

<template>
  <ul>
    <li v-for="link in links" :key="link.icon">
      <router-link :to="{ name: link.name }" class="block">
        <font-awesome-icon :icon="`fa-solid fa-${link.icon}`" class="px-2" />
        {{ link.text }}
      </router-link>
    </li>
  </ul>
</template>

<style scoped lang="postcss">
ul {
  @apply mx-1 bg-white;
  @apply border-2 sm:border-none border-gray-800 rounded-md;
  @apply dark:border-white dark:bg-gray-800;
}

li {
  @apply border rounded-md;
  @apply px-1 m-3 text-lg border-gray-800 text-gray-800;
  @apply hover:bg-gray-800 hover:text-white;
  @apply dark:border-white dark:text-white;
  @apply dark:hover:bg-white dark:hover:text-gray-800;
}
</style>
