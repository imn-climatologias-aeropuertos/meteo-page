<template>
  <h2>
    <slot></slot>
  </h2>
</template>

<style lang="postcss" scoped>
h2 {
  @apply px-3 py-5 text-2xl font-semibold text-blue text-center;
  @apply dark:text-white;
}
</style>
