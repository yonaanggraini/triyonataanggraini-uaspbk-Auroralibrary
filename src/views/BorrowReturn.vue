<template>
  <div class="max-w-4xl mx-auto py-10 px-4 space-y-6">
    <h1 class="text-2xl font-bold text-indigo-600">📖 Peminjaman & Pengembalian Buku</h1>

    <!-- Form Peminjaman -->
    <form @submit.prevent="borrowBook" class="space-y-4">
      <select v-model="selectedBookId" class="w-full px-4 py-2 border rounded-md">
        <option disabled value="">Pilih buku untuk dipinjam</option>
        <option v-for="book in availableBooks" :key="book.id" :value="book.id">
          {{ book.title }} - {{ book.author }}
        </option>
      </select>
      <button
        type="submit"
        class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        :disabled="!selectedBookId"
      >
        Pinjam Buku
      </button>
    </form>

    <!-- Daftar Buku yang Dipinjam -->
    <div>
      <h2 class="text-lg font-semibold mb-2">📚 Buku yang Dipinjam</h2>
      <ul v-if="borrowedBooks.length > 0" class="space-y-3">
        <li
          v-for="book in borrowedBooks"
          :key="book.id"
          class="bg-white shadow rounded p-4 flex justify-between items-center"
        >
          <div>
            <p class="font-medium">{{ book.title }}</p>
            <p class="text-sm text-gray-500">oleh {{ book.author }}</p>
          </div>
          <button
            @click="returnBook(book.id)"
            class="text-red-500 hover:underline text-sm"
          >
            Kembalikan
          </button>
        </li>
      </ul>
      <p v-else class="text-gray-500">Belum ada buku yang dipinjam.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const availableBooks = ref([])
const borrowedBooks = ref([])
const selectedBookId = ref('')

const fetchBooks = async () => {
  const res = await axios.get('http://localhost:3000/books')
  availableBooks.value = res.data
}

const fetchBorrowed = async () => {
  const res = await axios.get('http://localhost:3000/borrowed')
  borrowedBooks.value = res.data
}

const borrowBook = async () => {
  const book = availableBooks.value.find(b => b.id === selectedBookId.value)
  if (!book) return

  // Buang ID agar tidak bentrok
  const { id: _, ...bookData } = book

  try {
    // Tambahkan ke borrowed
    await axios.post('http://localhost:3000/borrowed', bookData)

    // Hapus dari books
    await axios.delete(`http://localhost:3000/books/${book.id}`)

    selectedBookId.value = ''
    await fetchBooks()
    await fetchBorrowed()
    alert('✅ Buku berhasil dipinjam!')
  } catch (err) {
    console.error('Gagal meminjam buku:', err)
  }
}

const returnBook = async (id) => {
  try {
    // Ambil data buku dari borrowed
    const { data: book } = await axios.get(`http://localhost:3000/borrowed/${id}`)

    // Hapus ID agar bisa dimasukkan kembali ke books
    const { id: _, ...bookData } = book

    // Tambahkan kembali ke books
    await axios.post('http://localhost:3000/books', bookData)

    // Hapus dari borrowed
    await axios.delete(`http://localhost:3000/borrowed/${id}`)

    await fetchBooks()
    await fetchBorrowed()
    alert('✅ Buku berhasil dikembalikan!')
  } catch (err) {
    console.error('Gagal mengembalikan buku:', err)
  }
}

onMounted(() => {
  fetchBooks()
  fetchBorrowed()
})
</script>
