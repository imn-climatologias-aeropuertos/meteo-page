<script setup lang="ts">
import Title from "../components/Title.vue";
import Subtitle from "../components/Subtitle.vue";
import Button from "../components/Button.vue";
import ButtonList from "../components/ButtonList.vue";

import infraButtons from "../static/home/infraButtons.json";
</script>

<template>
  <div>
    <Title>Departamento de Meteorología Sinóptica y Aeronáutica</Title>
    <Subtitle>Departamento de Meteorología Sinóptica y Aeronáutica</Subtitle>
    <Button :is-light="false" link="#">My Button</Button>
    <Button :is-light="true" link="#">Another Button</Button>
    <ButtonList :buttons="infraButtons" />
  </div>
</template>
