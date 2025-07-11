<template>
  <router-link
    :to="{ name: 'BookList', query: { category: category } }"
    class="bg-indigo-100 text-indigo-700 text-sm font-medium px-4 py-2 rounded-full text-center hover:bg-indigo-200 transition"
  >
    {{ category }}
  </router-link>
</template>

<script setup>
defineProps({
  category: String
})
</script>
