<script setup lang="ts">
import Title from "../components/Title.vue";
import Subtitle from "../components/Subtitle.vue";
import ButtonList from "../components/ButtonList.vue";
import CardList from "../components/CardList.vue";

import headerButtons from "../static/hurricanes/headerButtons.json";
import cyclonsCards from "../static/hurricanes/cyclonsCards.json";
import mapsCards from "../static/hurricanes/mapsCards.json";
import forecastsCards from "../static/hurricanes/forecastsCards.json";
import extratropicalCyclonsCards from "../static/hurricanes/extratropicalCyclonsCards.json";
</script>

<template>
  <div class="main-view">
    <section>
      <Title>Seguimiento del Centro de Huracanes y Otros</Title>
      <ButtonList :buttons="headerButtons" />
    </section>
    <section>
      <CardList :cards="cyclonsCards" />
      <CardList :cards="mapsCards" />
    </section>
    <section>
      <Subtitle>Pronósticos del Centro Nacional de Huracanes (CNH)</Subtitle>
      <CardList :cards="forecastsCards" />
    </section>
    <section>
      <Subtitle>Ciclones Tropicales y Extratropicales</Subtitle>
      <CardList :cards="extratropicalCyclonsCards" />
    </section>
  </div>
</template>
