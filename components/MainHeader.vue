<template>
  <header class="header">
    <div class="header-left">
      <h1 class="header-title">
        <nuxt-link :to="{ name: 'index' }">Countries Directory</nuxt-link>
      </h1>
    </div>
    <div class="header-right">
      <country-search-bar />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  @apply w-full bg-slate-700 text-white p-4 px-6 flex flex-row gap-6 justify-between items-center;
  &-title {
    @apply font-bold;
  }
}
</style>
