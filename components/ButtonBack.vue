<template>
  <button class="button-back" @click="$router.back()">
    <icons-back />
    <div>Go back</div>
  </button>
</template>

<style scoped lang="scss">
.button-back {
  @apply flex flex-row gap-2 items-center;
  @apply border px-4 py-2 bg-slate-600 text-white;
  @apply cursor-pointer rounded-2xl;
}
</style>
