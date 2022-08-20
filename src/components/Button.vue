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
      :class="props.isLight ? 'light' : 'obscure'"
    >
      <slot></slot>
    </a>
  </div>
</template>

<style lang="postcss" scoped>
div {
  @apply inline-block justify-center;
  @apply m-3;
}

a {
  @apply border-2 text-lg font-normal rounded-md py-2 px-4;
  @apply block hover:scale-105 hover:transition;
  @apply hover:duration-150 hover:ease-in-out;
}

.light {
  @apply text-blue bg-white border-blue;
  @apply hover:text-white hover:bg-blue;
  @apply dark:border-white;
}

.obscure {
  @apply text-white bg-blue border-blue;
  @apply hover:text-blue hover:bg-white;
  @apply dark:border-white;
}
</style>
