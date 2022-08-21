<script setup lang="ts">
import Title from "../components/Title.vue";
import Subtitle from "../components/Subtitle.vue";
import ButtonList from "../components/ButtonList.vue";
import CardList from "../components/CardList.vue";

import infraButtons from "../static/home/infraButtons.json";
import infraCards from "../static/home/infraCards.json";
</script>

<template>
  <div class="main-view">
    <section>
      <Title>Departamento de Meteorología Sinóptica y Aeronáutica</Title>
    </section>
    <section>
      <Subtitle>Departamento de Meteorología Sinóptica y Aeronáutica</Subtitle>
      <ButtonList :buttons="infraButtons" />
      <CardList :cards="infraCards" />
    </section>
    <section>
      <h1>Hello World!</h1>
    </section>
  </div>
</template>
