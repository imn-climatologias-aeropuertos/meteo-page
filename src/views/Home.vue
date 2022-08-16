<script setup lang="ts">
import Title from "../components/Title.vue";
import Subtitle from "../components/Subtitle.vue";
import Button from "../components/Button.vue";
</script>

<template>
  <div>
    <Title>Departamento de Meteorología Sinóptica y Aeronáutica</Title>
    <Subtitle>Departamento de Meteorología Sinóptica y Aeronáutica</Subtitle>
    <Button :is-light="false" link="#">My Button</Button>
    <Button :is-light="true" link="#">Another Button</Button>
  </div>
</template>
