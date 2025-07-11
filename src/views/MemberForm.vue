<template>
  <div class="max-w-lg mx-auto py-10 px-4">
    <h2 class="text-2xl font-bold text-indigo-600 mb-6">📝 Daftar Anggota Perpustakaan</h2>
    
    <form @submit.prevent="submitForm" class="space-y-4">
      <input v-model="name" type="text" placeholder="Nama lengkap" class="w-full px-4 py-2 border rounded" required />
      <input v-model="email" type="email" placeholder="Email" class="w-full px-4 py-2 border rounded" required />
      
      <select v-model="category" class="w-full px-4 py-2 border rounded" required>
        <option disabled value="">Pilih Kategori Anggota</option>
        <option>Reguler</option>
        <option>VIP</option>
        <option>Premium</option>
      </select>

      <button type="submit" class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
        Daftar Sekarang
      </button>
    </form>

    <p v-if="success" class="text-green-600 mt-4">✅ Pendaftaran berhasil!</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const name = ref('')
const email = ref('')
const category = ref('')
const success = ref(false)

const submitForm = async () => {
  if (!name.value || !email.value || !category.value) {
    alert('Mohon lengkapi semua data.')
    return
  }

  try {
    const newMember = {
      name: name.value,
      email: email.value,
      category: category.value,
      joinDate: new Date().toISOString().split('T')[0]
    }

    // Kirim data member ke JSON Server
    await axios.post('http://localhost:3000/members', newMember)

    // Simpan nama ke localStorage agar bisa ditampilkan di Topbar
    localStorage.setItem('username', name.value)

    // Tandai sebagai sukses
    success.value = true

    // Reset form
    name.value = ''
    email.value = ''
    category.value = ''
  } catch (err) {
    console.error('❌ Gagal mendaftar:', err)
  }
}
</script>

