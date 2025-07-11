<template>
<router-link :to="{ name: 'BookDetail', params: { id: book.id } }" class="block">
  <div class="bg-white rounded-xl shadow p-4 hover:shadow-md transition">
    <img :src="book.cover || 'https://via.placeholder.com/300x400?text=No+Cover'"
         alt="cover"
         class="w-full h-48 object-cover rounded-md mb-3" />
    <h3 class="font-semibold text-lg text-gray-800 truncate">{{ book.title }}</h3>
    <p class="text-gray-500 text-sm">{{ book.author }}</p>
    <p class="text-yellow-500 text-sm mt-1">⭐ {{ book.rating }}</p>
  </div>
</router-link>

  
</template>

<script setup>
defineProps({
  book: Object
})
</script>
