<template>
  <div class="container">
    <figure>
      <a href="#" target="_blank">
        <img
          src="../static/home/img/aerosoles-pronos.jpg"
          alt="texto del alt"
        />
        <div class="py-2 px-6 text-center">
          <figcaption class="font-medium">
            <div>Aerosoles</div>
          </figcaption>
        </div>
      </a>
    </figure>
  </div>
</template>

<style lang="postcss" scoped>
.container {
  @apply flex w-60 h-60 justify-center m-4 transform-gpu;
  @apply hover:transition hover:ease-in-out;
  @apply hover:-translate-y-2 hover:duration-200;
}

figure {
  @apply text-white dark:text-blue;
  @apply bg-blue dark:bg-white rounded-xl;
  @apply shadow-md shadow-gray p-3;
  @apply hover:bg-lightblue hover:text-blue;
}

img {
  @apply w-48 h-48 rounded-xl mx-auto;
  @apply dark:border-2 dark:border-blue;
}
</style>
