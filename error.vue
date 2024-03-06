<template>
  <nuxt-layout>
    <div class="flex flex-col items-center gap-3">
      <h2 class="text-2xl">Error! Country not found!!!</h2>
      <nuxt-link to="/" class="underline text-blue-950">Go to home</nuxt-link>
    </div>
  </nuxt-layout>
</template>

<script setup lang="ts">
useHead({
  title: `Not Found! Error 404 - Countries Directory`,
});
</script>
