<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  img: String,
  link: String,
  isBig: Boolean,
});

const imgSuffix = ".jpg";
</script>

<template>
  <div class="container" :class="{ big: props.isBig }">
    <figure>
      <a :href="props.link" target="_blank">
        <img :src="props.img + imgSuffix" alt="" />
        <div class="py-2 px-6 text-center">
          <figcaption class="font-medium">
            <div>
              <slot></slot>
            </div>
          </figcaption>
        </div>
      </a>
    </figure>
  </div>
</template>

<style lang="postcss" scoped>
.container {
  @apply text-base flex w-60 h-60 justify-center m-4 transform-gpu;
  @apply hover:transition hover:ease-in-out;
  @apply hover:-translate-y-2 hover:duration-200;
  @apply dark:border dark:border-white dark:rounded-xl;
}

figure {
  @apply text-white w-full bg-blue rounded-xl py-3;
  @apply shadow-md shadow-gray;
  @apply hover:bg-lightblue hover:text-blue;
}

img {
  @apply w-11/12 h-5/6 rounded-xl mx-auto;
}

.big {
  @apply w-72 h-72;
}
</style>
