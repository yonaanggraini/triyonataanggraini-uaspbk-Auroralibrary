<template>
  <div class="max-w-2xl mx-auto py-10 px-4 space-y-6">
    <h1 class="text-2xl font-bold text-indigo-600">📅 Reservasi Ruang Baca</h1>

    <!-- Form Reservasi -->
    <form @submit.prevent="submitReservation" class="space-y-4">
      <input
        v-model="name"
        type="text"
        placeholder="Nama lengkap"
        required
        class="w-full px-4 py-2 border rounded"
      />

      <input
        v-model="date"
        type="date"
        required
        class="w-full px-4 py-2 border rounded"
      />

      <select v-model="time" required class="w-full px-4 py-2 border rounded">
        <option disabled value="">Pilih Waktu</option>
        <option>08:00 - 10:00</option>
        <option>10:00 - 12:00</option>
        <option>13:00 - 15:00</option>
        <option>15:00 - 17:00</option>
      </select>

      <select v-model="room" required class="w-full px-4 py-2 border rounded">
        <option disabled value="">Pilih Ruang</option>
        <option>Ruang A</option>
        <option>Ruang B</option>
        <option>Ruang C</option>
      </select>

      <button
        type="submit"
        class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Reservasi Sekarang
      </button>
    </form>

    <!-- Daftar Reservasi -->
    <div class="mt-8">
      <h2 class="text-lg font-semibold mb-2">📋 Reservasi Anda</h2>
      <ul v-if="reservations.length > 0" class="space-y-3">
        <li
          v-for="res in reservations"
          :key="res.id"
          class="bg-white shadow p-4 rounded"
        >
          <p class="font-medium">{{ res.name }} - {{ res.room }}</p>
          <p class="text-sm text-gray-600">{{ res.date }} | {{ res.time }}</p>
        </li>
      </ul>
      <p v-else class="text-gray-500">Belum ada reservasi.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Form input
const name = ref('')
const date = ref('')
const time = ref('')
const room = ref('')

// Pesan sukses
const successMessage = ref('')

// Opsi ruang baca
const rooms = ['Ruang A', 'Ruang B', 'Ruang C']

// Daftar reservasi
const reservations = ref([])

// Ambil data reservasi dari server
const fetchReservations = async () => {
  try {
    const res = await axios.get('http://localhost:3000/reservations')
    reservations.value = res.data
  } catch (err) {
    console.error('❌ Gagal memuat reservasi:', err)
  }
}

// Submit reservasi
const submitReservation = async () => {
  if (!name.value || !date.value || !time.value || !room.value) {
    alert('Mohon lengkapi semua data.')
    return
  }

  const newReservation = {
    name: name.value,
    date: date.value,
    time: time.value,
    room: room.value
  }

  try {
    // 1. Tambahkan ke /reservations
    await axios.post('http://localhost:3000/reservations', newReservation)

    // 2. Tambahkan notifikasi otomatis
    await axios.post('http://localhost:3000/notifications', {
      title: 'Reservasi Ruang Berhasil',
      message: `Reservasi Anda untuk ${room.value} pada ${date.value} pukul ${time.value} telah dikonfirmasi.`,
      date: new Date().toISOString().split('T')[0]
    })

    // 3. Tampilkan pesan sukses
    successMessage.value = '✅ Reservasi berhasil dikirim dan notifikasi dibuat!'

    // 4. Reset form
    name.value = ''
    date.value = ''
    time.value = ''
    room.value = ''

    // 5. Refresh data reservasi
    await fetchReservations()

    // 6. Hilangkan pesan sukses otomatis
    setTimeout(() => {
      successMessage.value = ''
    }, 4000)
  } catch (error) {
    console.error('❌ Gagal mengirim reservasi atau notifikasi:', error)
  }
}

// Panggil saat halaman dimuat
onMounted(() => {
  fetchReservations()
})
</script>
