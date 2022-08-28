<script setup lang="ts">
import Title from "../components/Title.vue";
import ButtonList from "../components/ButtonList.vue";
import CardList from "../components/CardList.vue";

import buttons from "../static/volcanic_ash/buttons.json";
import cards from "../static/volcanic_ash/cards.json";
</script>

<template>
  <div class="main-view">
    <section>
      <Title>Modelos Lagrangianos de Dispersión de Ceniza Volcánica</Title>
      <ButtonList :buttons="buttons" />
    </section>
    <section>
      <CardList :cards="cards" />
    </section>
  </div>
</template>
