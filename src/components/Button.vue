<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  isLight: Boolean,
  link: String,
});
</script>

<template>
  <div>
    <a
      target="_blank"
      :href="props.link"
      :class="props.isLight ? 'light' : 'dark'"
    >
      <slot></slot>
    </a>
  </div>
</template>

<style lang="postcss" scoped>
div {
  @apply inline-block justify-center;
  @apply m-2;
}

a {
  @apply border-2 text-lg rounded-md py-2 px-4;
  @apply block hover:scale-105 hover:text-xl hover:transition;
  @apply hover:duration-150 hover:ease-in-out;
}

.light {
  @apply text-blue bg-white border-blue;
  @apply hover:text-white hover:bg-blue;
}

.dark {
  @apply text-white bg-blue border-blue;
  @apply hover:text-blue hover:bg-white;
}
</style>
