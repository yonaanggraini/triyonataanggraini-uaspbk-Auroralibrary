<template>
  <div class="p-6 space-y-4">
    <h1 class="text-2xl font-bold text-indigo-600">🔔 Notifikasi</h1>

    <ul v-if="notifications.length > 0" class="space-y-3">
      <li v-for="notif in notifications" :key="notif.id" class="bg-white shadow p-4 rounded">
        <h2 class="text-lg font-semibold">{{ notif.title }}</h2>
        <p class="text-gray-700">{{ notif.message }}</p>
        <p class="text-sm text-gray-400">{{ formatDate(notif.date) }}</p>
      </li>
    </ul>

    <p v-else class="text-gray-500">Belum ada notifikasi saat ini.</p>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const notifications = ref([])

const fetchNotifications = async () => {
  try {
    const res = await axios.get('http://localhost:3000/notifications')
    notifications.value = res.data
  } catch (err) {
    console.error('Gagal memuat notifikasi:', err)
  }
}

const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

onMounted(() => {
  fetchNotifications()
})
</script>

