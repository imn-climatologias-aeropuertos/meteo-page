<script setup lang="ts">
import Title from "../components/Title.vue";
import Subtitle from "../components/Subtitle.vue";
import ButtonList from "../components/ButtonList.vue";
import CardList from "../components/CardList.vue";

import headerCards from "../static/home/headerCards.json";
import infraCards from "../static/home/infraCards.json";
import infraButtons from "../static/home/infraButtons.json";
import modelsCards from "../static/home/modelsCards.json";
</script>

<template>
  <div class="main-view">
    <section>
      <Title>Departamento de Meteorología Sinóptica y Aeronáutica</Title>
      <CardList :cards="headerCards" />
    </section>
    <section>
      <Subtitle>Rayos actuales e imagen de infrarrojo (Loop)</Subtitle>
      <CardList :cards="infraCards" />
      <ButtonList :buttons="infraButtons" />
    </section>
    <section>
      <Subtitle>Modelos Numéricos</Subtitle>
      <CardList :cards="modelsCards" />
    </section>
  </div>
</template>
