<script setup lang="ts">
import Title from "../components/Title.vue";
import Subtitle from "../components/Subtitle.vue";
import ButtonList from "../components/ButtonList.vue";
import CardList from "../components/CardList.vue";

import marineButtons from "../static/marine/marineButtons.json";
import marineCards from "../static/marine/marineCards.json";
</script>

<template>
  <div class="main-view">
    <section>
      <Title>Modelos Numéricos para el Pronóstico de Oleaje y Mareas</Title>
    </section>
    <section>
      <CardList :cards="marineCards" />
    </section>
    <section>
      <Subtitle>Datos de Boyas Buoyweather</Subtitle>
      <ButtonList :buttons="marineButtons" />
    </section>
  </div>
</template>
