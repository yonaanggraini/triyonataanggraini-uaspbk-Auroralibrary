// src/stores/auth.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null, // menyimpan user yang sedang login
  }),
  actions: {
    login(userData) {
      this.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
    },
    logout() {
      this.user = null
      localStorage.removeItem('user')
    },
    loadUserFromStorage() {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        this.user = JSON.parse(storedUser)
      }
    }
  }
})
