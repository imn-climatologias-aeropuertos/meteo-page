<script setup lang="ts">
import Title from "../components/Title.vue";
import Subtitle from "../components/Subtitle.vue";
import CardList from "../components/CardList.vue";

import reanalisysCards from "../static/reanalisys/reanalisysCards.json";
</script>

<template>
  <div class="main-view">
    <section>
      <Title>Datos de Reanálisis e Históricos</Title>
    </section>
    <section>
      <Subtitle>Modelado y Reanálisis de Datos</Subtitle>
      <CardList :cards="reanalisysCards" />
    </section>
  </div>
</template>
