<script setup lang="ts">
import { defineProps } from "vue";
import Card from "./Card.vue";

interface CardData {
  text: string;
  img: string;
  link: string;
  isBig: boolean;
}

const props = defineProps<{ cards: CardData[] }>();
</script>

<template>
  <div class="m-2 flex flex-wrap justify-center">
    <Card
      v-for="(card, idx) in props.cards"
      :key="idx"
      :is-big="card.isBig"
      :img="card.img"
      :link="card.link"
    >
      {{ card.text }}
    </Card>
  </div>
</template>
