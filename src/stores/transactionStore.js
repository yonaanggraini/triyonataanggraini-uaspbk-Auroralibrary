import { defineStore } from 'pinia'
import axios from 'axios'

export const useTransactionStore = defineStore('transactionStore', {
  state: () => ({
    transactions: []
  }),

  actions: {
    async fetchTransactions() {
      try {
        const res = await axios.get('http://localhost:3000/transactions')
        this.transactions = res.data
      } catch (err) {
        console.error('Gagal fetch transaksi:', err)
      }
    },

    async borrowBook(data) {
      try {
        const payload = {
          ...data,
          date: new Date().toISOString().split('T')[0]
        }
        const res = await axios.post('http://localhost:3000/transactions', payload)
        this.transactions.push(res.data)
      } catch (err) {
        console.error('Gagal menyimpan transaksi:', err)
      }
    },

    async returnBook(id) {
      try {
        await axios.delete(`http://localhost:3000/transactions/${id}`)
        this.transactions = this.transactions.filter(t => t.id !== id)
      } catch (err) {
        console.error('Gagal menghapus transaksi:', err)
      }
    }
  }
})
