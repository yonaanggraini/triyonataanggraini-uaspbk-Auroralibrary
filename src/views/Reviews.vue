<template>
  <div class="max-w-3xl mx-auto p-6 space-y-6">
    <h1 class="text-2xl font-bold text-indigo-600">📝 Ulasan Buku</h1>

    <!-- Form Tambah Ulasan -->
    <form @submit.prevent="submitReview" class="space-y-4 bg-white p-4 shadow rounded">
      <select v-model="review.bookId" required class="w-full px-3 py-2 border rounded">
        <option disabled value="">Pilih Buku</option>
        <option v-for="book in books" :key="book.id" :value="book.id">
          {{ book.title }}
        </option>
      </select>
      <input
        v-model="review.name"
        type="text"
        placeholder="Nama Anda"
        class="w-full px-3 py-2 border rounded"
        required
      />
      <textarea
        v-model="review.comment"
        placeholder="Tulis ulasan..."
        class="w-full px-3 py-2 border rounded"
        required
      ></textarea>
      <select v-model.number="review.rating" class="w-full px-3 py-2 border rounded" required>
        <option disabled value="">Pilih Rating</option>
        <option v-for="n in 5" :key="n" :value="n">{{ n }} ⭐</option>
      </select>
      <button type="submit" class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
        Kirim Ulasan
      </button>
    </form>

    <!-- Daftar Ulasan -->
    <div v-if="reviews.length" class="space-y-4">
      <div
        v-for="rev in reviews"
        :key="rev.id"
        class="p-4 bg-gray-100 rounded shadow-sm"
      >
        <p class="font-semibold">{{ rev.name }} - {{ rev.rating }} ⭐</p>
        <p class="text-sm text-gray-600">Untuk Buku: {{ getBookTitle(rev.bookId) }}</p>
        <p class="mt-1 text-gray-700">{{ rev.comment }}</p>
      </div>
    </div>
    <div v-else class="text-gray-500 text-center py-10">
      Belum ada ulasan tersedia.
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const books = ref([])
const reviews = ref([])

const review = ref({
  bookId: '',
  name: '',
  comment: '',
  rating: ''
})

const fetchBooks = async () => {
  const res = await axios.get('http://localhost:3000/books')
  books.value = res.data
}

const fetchReviews = async () => {
  const res = await axios.get('http://localhost:3000/reviews')
  reviews.value = res.data
}

const submitReview = async () => {
  await axios.post('http://localhost:3000/reviews', review.value)
  review.value = { bookId: '', name: '', comment: '', rating: '' }
  fetchReviews()
}

const getBookTitle = (bookId) => {
  const book = books.value.find(b => b.id === bookId)
  return book ? book.title : 'Buku tidak ditemukan'
}

onMounted(() => {
  fetchBooks()
  fetchReviews()
})
</script>
