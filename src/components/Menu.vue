<script setup lang="ts">
import links from "../static/menu_links.json";
</script>

<template>
  <ul>
    <li v-for="link in links" :key="link.icon">
      <router-link :to="{ name: link.name }" class="link block">
        <font-awesome-icon :icon="`fa-solid fa-${link.icon}`" class="px-2" />
        {{ link.text }}
      </router-link>
    </li>
  </ul>
</template>

<style scoped lang="postcss">
ul {
  @apply mx-1 bg-white;
  @apply border-2 sm:border-none border-blue rounded-md;
  @apply dark:border-white dark:bg-blue;
}

.link {
  @apply border rounded-md;
  @apply px-1 m-3 text-lg border-blue text-blue;
  @apply hover:bg-lightblue;
  @apply dark:border-white dark:text-white;
  @apply dark:hover:text-white;
}

.link.router-link-exact-active {
  @apply bg-lightblue;
}
</style>
