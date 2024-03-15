<script setup lang="ts">
import Title from "../components/Title.vue";
import Subtitle from "../components/Subtitle.vue";
import CardList from "../components/CardList.vue";
import ButtonList from "../components/ButtonList.vue";

import stationsCards from "../static/tracking_data/stationsCards.json";
import otherDataCards from "../static/tracking_data/otherDataCards.json";
import cigefiStationsButtons from "../static/tracking_data/cigefiStationsButtons.json";
import severalStationsButtons from "../static/tracking_data/severalStationsButtons.json";
import compendiumButtons from "../static/tracking_data/compendiumButtons.json";
import hidroButtons from "../static/tracking_data/hidroButtons.json";
</script>

<template>
  <div class="main-view">
    <section>
      <Title>Datos de Seguimiento</Title>
    </section>
    <section>
      <CardList :cards="stationsCards" />
    </section>
    <section>
      <ButtonList :buttons="severalStationsButtons" />
    </section>
    <section>
      <Subtitle>Estaciones del CIGEFI link directo</Subtitle>
      <ButtonList :buttons="cigefiStationsButtons" />
    </section>
    <section>
      <CardList :cards="otherDataCards" />
    </section>
    <section>
      <Subtitle>Compendio de Estaciones</Subtitle>
      <ButtonList :buttons="compendiumButtons" />
    </section>
    <section>
      <Subtitle>Hidroestimadores</Subtitle>
      <ButtonList :buttons="hidroButtons" />
    </section>
  </div>
</template>
