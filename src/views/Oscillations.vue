<script setup lang="ts">
import Title from "../components/Title.vue";
import Subtitle from "../components/Subtitle.vue";

import highFrecuencyCards from "../static/oscilaciones/highFrecuencyCards.json";
import lowFrecuencyCards from "../static/oscilaciones/lowFrecuencyCards.json";
import CardList from "../components/CardList.vue";
</script>

<template>
  <div class="main-view">
    <section>
      <Title>Oscilaciones de Alta y Baja Frecuencia</Title>
    </section>
    <section>
      <Subtitle>
        Oscilaciones de Alta Frecuencia (MJO, Kelvin, AO, NAO)
      </Subtitle>
      <CardList :cards="highFrecuencyCards" />
    </section>
    <section>
      <Subtitle> Oscilaciones de Baja Frecuencia (ENOS, PDO, AMO)</Subtitle>
      <CardList :cards="lowFrecuencyCards" />
    </section>
  </div>
</template>
