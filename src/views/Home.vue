<template>
  <div class="space-y-8">
    <!-- Top Bar -->
    <Topbar @search="search = $event" />

    <!-- Rekomendasi Buku -->
    <section>
      <h2 class="text-xl font-semibold mb-4">📚 Rekomendasi Buku</h2>

      <div v-if="filteredBooks.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <BookCard
          v-for="book in filteredBooks"
          :key="book.id"
          :book="book"
        />
      </div>

      <div v-else class="text-center text-gray-500 py-10">
        📭 Buku tidak ditemukan.
      </div>
    </section>

    <!-- Kategori Populer -->
    <section>
      <h2 class="text-xl font-semibold mb-4">📂 Kategori Populer</h2>
      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
        <CategoryCard
          v-for="category in popularCategories"
          :key="category"
          :category="category"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import Topbar from '@/components/Topbar.vue'
import BookCard from '@/components/BookCard.vue'
import CategoryCard from '@/components/CategoryCard.vue'
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

const search = ref('')
const recommendedBooks = ref([]) // hanya akan memuat 8 buku pertama dari database
const popularCategories = ref(['Fiksi', 'Teknologi', 'Sejarah', 'Anak', 'Komik', 'Sains'])

// Filter berdasarkan input pencarian (judul atau kategori)
const filteredBooks = computed(() => {
  const keyword = search.value.toLowerCase()
  return recommendedBooks.value.filter(book =>
    book.title.toLowerCase().includes(keyword) ||
    book.category.toLowerCase().includes(keyword)
  )
})

// Ambil buku saat komponen dimuat
onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3000/books?_limit=8')
    recommendedBooks.value = res.data // ✅ Jangan gunakan push
  } catch (error) {
    console.error('Gagal mengambil data buku:', error)
  }
})
</script>

