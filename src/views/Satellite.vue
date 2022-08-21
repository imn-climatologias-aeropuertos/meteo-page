<script setup lang="ts">
import Title from "../components/Title.vue";
import Subtitle from "../components/Subtitle.vue";
import Button from "../components/Button.vue";
import ButtonList from "../components/ButtonList.vue";
import CardList from "../components/CardList.vue";

import goesButtons from "../static/satellite/goesButtons.json";
import goesCards from "../static/satellite/goesCards.json";
import synopCards from "../static/satellite/synopCards.json";
import precipitableCards from "../static/satellite/precipitableCards.json";
</script>

<template>
  <div class="main-view">
    <section class="justify-center">
      <Title>Imágenes de Satélite</Title>
      <Subtitle>Acceso directo a diferentes sitios de imágenes</Subtitle>
      <div class="flex flex-wrap justify-center">
        <Button link="https://www.ncdc.noaa.gov/gibbs/">
          Archivo de Imágenes (1980 - Actualidad)
        </Button>
      </div>
    </section>
    <section>
      <Subtitle
        >Imágenes de Satélite del GOES-13, GOES-16 y algunos derivados</Subtitle
      >
      <ButtonList :buttons="goesButtons" />
      <CardList :cards="goesCards" />
    </section>
    <section>
      <Subtitle>Imágenes de Satélite Sinópticas</Subtitle>
      <CardList :cards="synopCards" />
      <p>
        Nota: Estas son las imágenes actuales para darle seguimiento al tiempo
        actual, si desea ver algún registro o imagen satelital más antigua debe
        ir al histórico.
      </p>
    </section>
    <section>
      <Subtitle>Agua Precipitable Advectada</Subtitle>
      <CardList :cards="precipitableCards" />
    </section>
  </div>
</template>
