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
li {
  @apply border border-gray-800 rounded-md;
  @apply px-1 m-3 text-gray-800;
  @apply hover:bg-gray-800 hover:text-white;
}
</style>
