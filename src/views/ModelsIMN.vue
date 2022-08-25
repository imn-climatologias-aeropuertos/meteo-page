<script setup lang="ts">
import Title from "../components/Title.vue";
import CardList from "../components/CardList.vue";

import modelsCards from "../static/models_imn/modelsCards.json";
</script>

<template>
  <div class="main-view">
    <section>
      <Title>Modelos Numéricos Regionales</Title>
    </section>
    <section>
      <CardList :cards="modelsCards" />
    </section>
  </div>
</template>
