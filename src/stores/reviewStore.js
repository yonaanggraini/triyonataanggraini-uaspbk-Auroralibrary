import { defineStore } from 'pinia'
import axios from 'axios'

export const useReviewStore = defineStore('reviewStore', {
  state: () => ({
    reviews: []
  }),

  actions: {
    async fetchReviews() {
      try {
        const res = await axios.get('http://localhost:3000/reviews')
        this.reviews = res.data.reverse() // tampilkan terbaru dulu
      } catch (err) {
        console.error('Gagal mengambil ulasan:', err)
      }
    },

    async addReview(data) {
      try {
        const res = await axios.post('http://localhost:3000/reviews', data)
        this.reviews.unshift(res.data) // tambah ke atas
      } catch (err) {
        console.error('Gagal menambahkan ulasan:', err)
      }
    }
  }
})
