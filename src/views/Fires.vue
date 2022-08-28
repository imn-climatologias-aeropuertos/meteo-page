<script setup lang="ts">
import Title from "../components/Title.vue";
import CardList from "../components/CardList.vue";

import firesCards from "../static/fires/firesCards.json";
</script>

<template>
  <div class="main-view">
    <section>
      <Title>Incendios Forestales</Title>
    </section>
    <section>
      <CardList :cards="firesCards" />
    </section>
  </div>
</template>
