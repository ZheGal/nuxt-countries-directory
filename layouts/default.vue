<template>
  <div class="layout">
    <main-header />
    <div class="main-container">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  @apply w-full flex flex-col items-center gap-4;
}
.main-container {
  @apply container;
}
</style>
