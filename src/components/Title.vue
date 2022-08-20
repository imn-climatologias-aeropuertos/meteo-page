<template>
  <h1>
    <slot></slot>
  </h1>
</template>

<style lang="postcss" scoped>
h1 {
  @apply p-2 text-4xl font-bold text-blue text-center;
  @apply dark:text-white;
}
</style>
