import { defineStore } from 'pinia'
import axios from 'axios'

export const useReservationStore = defineStore('reservationStore', {
  state: () => ({
    reservations: []
  }),

  actions: {
    async fetchReservations() {
      try {
        const res = await axios.get('http://localhost:3000/reservations')
        this.reservations = res.data.reverse()
      } catch (err) {
        console.error('Gagal mengambil data reservasi:', err)
      }
    },

    async addReservation(data) {
      try {
        const res = await axios.post('http://localhost:3000/reservations', data)
        this.reservations.unshift(res.data)
      } catch (err) {
        console.error('Gagal menambahkan reservasi:', err)
      }
    }
  }
})
