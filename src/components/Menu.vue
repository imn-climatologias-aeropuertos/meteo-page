<template>
  <ul>
    <li>
      <router-link :to="{ name: 'home' }" class="block">
        <font-awesome-icon icon="fa-solid fa-house" class="px-2" /> Inicio
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'about' }" class="block">
        <font-awesome-icon icon="fa-solid fa-eject" class="px-2" /> About
      </router-link>
    </li>
  </ul>
</template>

<style scoped lang="postcss">
li {
  @apply border border-gray-800 rounded-md;
  @apply px-1 m-3;
}
</style>
