<template>
  <div class="relative">
    <input
      type="text"
      v-model="bookStore.searchQuery"
      placeholder="Cari buku berdasarkan judul, penulis, atau kategori..."
      class="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>
</template>

<script setup>
import { useBookStore } from '@/stores/bookStore'
const bookStore = useBookStore()
</script>
