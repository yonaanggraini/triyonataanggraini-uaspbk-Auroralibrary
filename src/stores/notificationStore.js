import { defineStore } from 'pinia'
import axios from 'axios'

export const useNotificationStore = defineStore('notificationStore', {
  state: () => ({
    notifications: []
  }),

  actions: {
    async fetchNotifications() {
      try {
        const res = await axios.get('http://localhost:3000/notifications')
        this.notifications = res.data.reverse()
      } catch (err) {
        console.error('Gagal mengambil notifikasi:', err)
      }
    }
  }
})
