<script setup lang="ts">
import { defineProps } from "vue";
import Button from "./Button.vue";

interface ButtonData {
  text: string;
  link: string;
}

const props = defineProps<{ buttons: ButtonData[] }>();

const isLight = (index: number): boolean => {
  return index % 2 == 0;
};
</script>

<template>
  <div class="m-2 flex flex-wrap justify-center">
    <Button
      v-for="(btn, idx) of props.buttons"
      :key="idx"
      :is-light="isLight(idx)"
      :link="btn.link"
    >
      {{ btn.text }}
    </Button>
  </div>
</template>
