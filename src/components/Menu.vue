<script setup lang="ts">
import links from "../static/menu_links.json";
</script>

<template>
  <ul>
    <li v-for="link in links" :key="link.icon">
      <router-link :to="{ name: link.name }" class="link block">
        <span class="mx-2">
          <font-awesome-icon :icon="`fa-solid fa-${link.icon}`" />
        </span>
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
  @apply border border-blue rounded-md;
  @apply px-1 m-3 text-sm text-blue font-medium sm:text-lg lg:text-2xl;
  @apply hover:bg-lightblue dark:hover:text-white;
  @apply dark:border-white dark:text-white;
}

.link.router-link-exact-active {
  @apply bg-lightblue;
}
</style>
