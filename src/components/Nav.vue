<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { useUI } from "../composables/useUI";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const { toggleMenu } = useUI();
</script>

<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-gray-800 py-3 shadow-sm dark:shadow-slate-400"
  >
    <div class="flex items-center flex-shrink-0 text-white">
      <button class="menu-btn" @click="toggleMenu()">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </button>
      Menú
    </div>
    <div class="block items-center text-white mx-5">
      <button @click="toggleDark()">
        <font-awesome-icon v-if="!isDark" icon="fa-solid fa-sun" />
        <font-awesome-icon v-else icon="fa-solid fa-moon" />
      </button>
    </div>
  </nav>
</template>

<style scoped lang="postcss">
.menu-btn {
  @apply border border-white rounded-md;
  @apply text-white px-2 mx-2;
}
</style>
