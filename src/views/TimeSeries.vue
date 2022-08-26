<script setup lang="ts">
import Title from "../components/Title.vue";
import Subtitle from "../components/Subtitle.vue";
import ButtonList from "../components/ButtonList.vue";
import CardList from "../components/CardList.vue";

import headerButtons from "../static/time_series/headerButtons.json";
import meteogramButtons from "../static/time_series/meteogramButtons.json";
import seriesCards from "../static/time_series/seriesCards.json";
</script>

<template>
  <div class="main-view">
    <section>
      <Title>Series de Tiempo</Title>
      <Subtitle>Productos Puntuales del IMN</Subtitle>
      <ButtonList :buttons="headerButtons" />
    </section>
    <section>
      <Subtitle>Meteogramas</Subtitle>
      <CardList :cards="seriesCards" />
    </section>
    <section>
      <Subtitle>Meteogramas WXCaster para los Aeropuertos</Subtitle>
      <ButtonList :buttons="meteogramButtons" />
    </section>
  </div>
</template>
