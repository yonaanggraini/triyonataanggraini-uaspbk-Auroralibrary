<template>
  <div class="space-y-4">
    <h2 class="text-xl font-semibold">📖 Book Preview</h2>

    <div v-if="book" class="bg-white p-4 rounded shadow text-black space-y-2">
      <img :src="book.cover" :alt="book.title" class="w-32 h-auto rounded" />
      <h3 class="text-lg font-bold">{{ book.title }}</h3>
      <p class="text-gray-700">Penulis: <span class="font-medium">{{ book.author }}</span></p>
      <p class="text-gray-700">Kategori: {{ book.category }}</p>
      <p class="text-yellow-500">⭐ {{ book.rating }}</p>
    </div>

    <div v-else class="bg-white p-4 rounded shadow text-gray-600">
      Pilih buku dari daftar untuk melihat detailnya di sini.
    </div>
  </div>
</template>

<script setup>
defineProps({
  book: Object
})
</script>
