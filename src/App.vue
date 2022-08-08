<script setup lang="ts">
import NavBar from "./components/Nav.vue";
import Menu from "./components/Menu.vue";
import { useUI } from "./composables/useUI";

const { isMenuOpen } = useUI();
</script>

<template>
  <NavBar id="navbar" />
  <Menu class="absolute" :class="{ hidden: !isMenuOpen }" id="menu" />
  <router-view
    class="absolute"
    :class="{ 'all-width': !isMenuOpen }"
    id="view"
  />
</template>

<style scoped>
#menu {
  width: 20%;
  left: 0;
}

#view {
  width: 80%;
  right: 0;
}

#menu,
#view {
  top: 3.5rem;
}

.hidden {
  left: -100;
}

.all-width {
  width: 100%;
  left: 0;
}
</style>
