<script setup lang="ts">
import Title from "../components/Title.vue";
import Subtitle from "../components/Subtitle.vue";
import ButtonList from "../components/ButtonList.vue";

import socialButtons from "../static/contact/socialButtons.json";
import socialIMNButtons from "../static/contact/socialIMNButtons.json";
</script>

<template>
  <div class="main-view">
    <section>
      <Title>Contacto</Title>
      <Subtitle>Sitio Web y Redes Sociales del IMN</Subtitle>
      <ButtonList :buttons="socialIMNButtons" />
    </section>
    <section>
      <p>
        Para cualquier sugerencia o problema con este sitio web, favor contactar
        por correo interno o redes sociales con:
      </p>
      <p>Diego Garro Molina</p>
      <ButtonList :buttons="socialButtons" />
    </section>
  </div>
</template>
