<script setup lang="ts">
import NavBar from "./components/Nav.vue";
</script>

<template>
  <NavBar id="navbar" />
  <router-view class="absolute" id="view" />
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
</style>
