<template>
  <div class="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
    <!-- Search -->
    <input
      type="text"
      placeholder="Cari buku atau kategori..."
      v-model="searchTerm"
      @input="$emit('search', searchTerm)"
      class="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
    />

    <!-- Profile -->
    <div class="flex items-center gap-2">
      <img
        src="https://i.pravatar.cc/40"
        alt="Profile"
        class="w-10 h-10 rounded-full"
      />
      <span class="font-medium">Hi, {{ username || 'User' }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const searchTerm = ref('')
const username = ref('')

onMounted(() => {
  username.value = localStorage.getItem('username') || ''
})
</script>
