<script setup lang="ts">
import Title from "../components/Title.vue";
import Subtitle from "../components/Subtitle.vue";
import ButtonList from "../components/ButtonList.vue";

import imnButtons from "../static/several_data/imnButtons.json";
import camerasButtons from "../static/several_data/camerasButtons.json";
</script>

<template>
  <div class="main-view">
    <section>
      <Title>Cámaras Viales y Datos Varios</Title>
    </section>
    <section>
      <ButtonList :buttons="camerasButtons" />
    </section>
    <section>
      <Subtitle>Cámaras IMN Azotea</Subtitle>
      <ButtonList :buttons="imnButtons" />
    </section>
  </div>
</template>
