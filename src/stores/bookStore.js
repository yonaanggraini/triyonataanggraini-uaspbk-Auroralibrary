import { defineStore } from 'pinia'
import axios from 'axios'

export const useBookStore = defineStore('bookStore', {
  state: () => ({
    books: [],
    searchQuery: ''
  }),
  getters: {
    filteredBooks(state) {
      if (!state.searchQuery) return state.books
      const query = state.searchQuery.toLowerCase()
      return state.books.filter(book =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.category.toLowerCase().includes(query)
      )
    }
  },
  actions: {
    async fetchBooks() {
      try {
        const res = await axios.get('http://localhost:3000/books')
        this.books = res.data
      } catch (err) {
        console.error('Gagal mengambil data buku:', err)
      }
    }
  }
})
