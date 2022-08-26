<script setup lang="ts">
import Title from "../components/Title.vue";
import Subtitle from "../components/Subtitle.vue";
import CardList from "../components/CardList.vue";
import ButtonList from "../components/ButtonList.vue";

import stationalCards from "../static/climate_models/stationalCards.json";
import longTermCards from "../static/climate_models/longTermCards.json";
import climateButtons from "../static/climate_models/climateButtons.json";
</script>

<template>
  <div class="main-view">
    <section>
      <Title>Modelos Estacionales (CFS, NMME)</Title>
    </section>
    <section>
      <Subtitle>Pronóstico Estacional</Subtitle>
      <CardList :cards="stationalCards" />
      <ButtonList :buttons="climateButtons" />
    </section>
    <section>
      <Subtitle>Largo Plazo</Subtitle>
      <CardList :cards="longTermCards" />
    </section>
  </div>
</template>
