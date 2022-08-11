<script setup lang="ts">
import NavBar from "./components/Nav.vue";
import Menu from "./components/Menu.vue";
import { useUI } from "./composables/useUI";

const { isMenuOpen } = useUI();
</script>

<template>
  <NavBar id="navbar" />
  <Transition name="slide-fade">
    <Menu v-if="isMenuOpen" id="menu" />
  </Transition>
  <Transition name="fade">
    <router-view
      :class="{
        width100: !isMenuOpen,
        'ease-out': !isMenuOpen,
        'ease-in': isMenuOpen,
      }"
      id="view"
    />
  </Transition>
</template>

<style scoped lang="postcss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

#menu {
  @apply absolute z-10 w-3/5 left-0 sm:w-1/5;
}

#view {
  @apply absolute w-full px-2 sm:w-4/5 sm:right-0;
}

#menu,
#view {
  @apply top-14;
}

.hidden {
  @apply -left-80;
}

.width100 {
  @apply left-0 w-full;
}
</style>
