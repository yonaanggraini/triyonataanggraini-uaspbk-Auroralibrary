<template>
  <div class="p-6 space-y-6">
    <h1 class="text-2xl font-bold text-gray-800">📚 Daftar Buku</h1>

    <!-- Pencarian dan Filter -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <input
        v-model="search"
        type="text"
        placeholder="Cari judul atau penulis..."
        class="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />
      <select
        v-model="selectedCategory"
        class="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
      >
        <option value="">📂 Semua Kategori</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>

    <!-- Jumlah Hasil -->
    <p class="text-sm text-gray-500">
      Menampilkan {{ filteredBooks.length }} dari {{ books.length }} buku.
    </p>

    <!-- Daftar Buku -->
    <div v-if="filteredBooks.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <BookCard
        v-for="book in filteredBooks"
        :key="book.id"
        :book="book"
      />
    </div>

    <!-- Jika tidak ada hasil -->
    <div v-else class="text-center text-gray-500 mt-10">
      📭 Tidak ditemukan buku yang sesuai dengan pencarian/kategori.
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useBookStore } from '@/stores/bookStore'
import { storeToRefs } from 'pinia'
import BookCard from '@/components/BookCard.vue'

const route = useRoute()
const store = useBookStore()
const { books } = storeToRefs(store)

const search = ref('')
const selectedCategory = ref('')
const categories = ref(['Fiksi', 'Teknologi', 'Sejarah', 'Anak', 'Komik', 'Sains'])

// Isi kategori dari query jika ada
watch(
  () => route.query.category,
  (newCategory) => {
    if (newCategory) selectedCategory.value = newCategory
  },
  { immediate: true }
)

const filteredBooks = computed(() =>
  books.value.filter(book =>
    (book.title.toLowerCase().includes(search.value.toLowerCase()) ||
     book.author.toLowerCase().includes(search.value.toLowerCase())) &&
    (selectedCategory.value === '' || book.category.toLowerCase() === selectedCategory.value.toLowerCase())
  )
)

onMounted(() => {
  store.fetchBooks()
})
</script>
