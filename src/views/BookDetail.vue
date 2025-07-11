<template>
  <div class="max-w-4xl mx-auto py-10 px-4">
    <div v-if="book" class="bg-white rounded-lg shadow-md p-6">
      <div class="flex flex-col md:flex-row gap-6">
        <img :src="book.cover" alt="Cover Buku" class="w-full md:w-64 object-cover rounded" />
        
        <div class="flex-1">
          <h1 class="text-2xl font-bold text-indigo-600 mb-2">{{ book.title }}</h1>
          <p class="text-gray-700 mb-1"><strong>Penulis:</strong> {{ book.author }}</p>
          <p class="text-gray-700 mb-1"><strong>Kategori:</strong> {{ book.category }}</p>
          <p class="text-yellow-500 mb-4"><strong>Rating:</strong> ⭐ {{ book.rating }}</p>

          <button class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">
            Pinjam Buku Ini
          </button>
        </div>
      </div>
    </div>

    <div v-else class="text-center text-gray-500 py-10">
      📭 Buku tidak ditemukan.
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const book = ref(null)

onMounted(async () => {
  const id = route.params.id
  console.log('Book ID:', id)

  try {
    const res = await axios.get(`http://localhost:3000/books/${id}`)
    if (Object.keys(res.data).length === 0) {
      console.warn('Buku tidak ditemukan di database.')
    }
    book.value = res.data
    console.log('Book Data:', res.data)
  } catch (error) {
    console.error('Gagal mengambil data buku:', error)
  }
})
</script>

