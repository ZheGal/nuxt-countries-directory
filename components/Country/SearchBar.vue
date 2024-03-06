<template>
  <form class="search-bar" @submit.prevent="handleSubmit">
    <button type="submit">
      <Icon name="uil:search" color="white" />
    </button>
    <input
      type="text"
      placeholder="Search for Country..."
      v-model="store.search"
    />
  </form>
</template>

<script setup lang="ts">
const store = useCountriesStore();
const router = useRouter();

function handleSubmit() {
  console.log(store.search);
  router.push({
    name: 'index',
    query: store.search ? { search: store.search } : undefined,
  });
}
</script>

<style lang="scss" scoped>
.search-bar {
  @apply px-4 py-2 rounded-full bg-slate-500 text-white flex flex-row gap-4 items-center w-[350px];
  > button {
    @apply flex items-center;
  }
  > input {
    @apply bg-transparent outline-none;
  }
}
</style>
