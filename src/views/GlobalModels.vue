<script setup lang="ts">
import Title from "../components/Title.vue";
import Subtitle from "../components/Subtitle.vue";
import CardList from "../components/CardList.vue";

import gfsCards from "../static/global_models/gfsCards.json";
import mediumTermCards from "../static/global_models/mediumTermCards.json";
import specialsCards from "../static/global_models/specialsCards.json";
</script>

<template>
  <div class="main-view">
    <section>
      <Title>Modelos Numéricos Globales y de Mesoescala</Title>
    </section>
    <section>
      <Subtitle>GFS y Europeo</Subtitle>
      <CardList :cards="gfsCards" />
    </section>
    <section>
      <Subtitle>Modelos de Frentes Fríos, Mediano Plazo y Químicos</Subtitle>
      <CardList :cards="mediumTermCards" />
    </section>
    <section>
      <Subtitle>Modelos Numéricos Especiales</Subtitle>
      <p>
        Modelos numéricos para el pronóstico de polvo del Sahara y aerosoles.
      </p>
      <CardList :cards="specialsCards" />
    </section>
  </div>
</template>
