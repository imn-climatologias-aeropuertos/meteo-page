<script setup lang="ts">
import moment from "moment";

import Title from "../components/Title.vue";
import Subtitle from "../components/Subtitle.vue";
import ButtonList from "../components/ButtonList.vue";
import CardList from "../components/CardList.vue";

import headerButtons from "../static/aeronautics/headerButtons.json";
import cards from "../static/aeronautics/cards.json";

const stations = ["mroc", "mrlb", "mrlm", "mrpv", "mrch"];
const hours = ["00", "06", "12", "18"];

function generateBufkitLinks(
  hour: string
): Array<{ text: string; link: string }> {
  let links = new Array<{ text: string; link: string }>();

  for (let stn of stations) {
    links.push({
      text: stn.toUpperCase(),
      link: `http://www.meteo.psu.edu/bufkit/data/NAM/${hour}/nam_${stn}.buf`,
    });
  }

  return links;
}

let sigwxButtons: Array<{ text: string; link: string }> = [];

function generateSigWXButtonsLinks() {
  let links = new Array<{ text: string; link: string }>();

  for (let i = 0; i < 4; i++) {
    links.push({
      text: `${hours[i]}00Z`,
      link: `https://www.aviationweather.gov/data/products/swh/${hours[i]}_sigwx_hi_a.gif`,
    });
  }

  sigwxButtons = links;
}
generateSigWXButtonsLinks();
</script>

<template>
  <div class="main-view">
    <section>
      <Title>Meteorología Aeronáutica</Title>
      <ButtonList :buttons="headerButtons" />
    </section>
    <section>
      <Subtitle>Archivos para el Bufkit</Subtitle>
      <div class="bufkit" v-for="(hour, index) in hours" :key="index">
        <span class="label">{{ hour }}Z</span>
        <ButtonList :buttons="generateBufkitLinks(hour)" />
      </div>
    </section>
    <section>
      <Subtitle>Mapas de Tiempo Significante por Hora de Validez</Subtitle>
      <ButtonList :buttons="sigwxButtons" />
    </section>
    <section>
      <CardList :cards="cards" />
    </section>
  </div>
</template>

<style lang="postcss" scoped>
.bufkit {
  @apply flex justify-center;
}

.label {
  @apply text-xl text-center text-blue dark:text-white;
  @apply p-5 m-3;
}

.btn {
  @apply text-xl text-white bg-blue p-3 border-2 border-blue rounded-md;
  @apply hover:text-blue hover:bg-white;
  @apply dark:text-white dark:bg-secondblue dark:border-white;
  @apply dark:hover:text-secondblue dark:hover:bg-white;
}
</style>
