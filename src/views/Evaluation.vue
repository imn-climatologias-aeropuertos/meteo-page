<script setup lang="ts">
import Title from "../components/Title.vue";
import ButtonList from "../components/ButtonList.vue";

import buttons from "../static/evaluation/buttons.json";
</script>

<template>
  <div class="main-view">
    <section>
      <Title>Evaluaciones</Title>
    </section>
    <section>
      <ButtonList :buttons="buttons" />
    </section>
  </div>
</template>
