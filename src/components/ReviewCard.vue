<template>
  <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
    <div class="flex justify-between items-center mb-1">
      <p class="font-semibold text-gray-800">{{ review.name }}</p>
      <p class="text-sm text-yellow-500">{{ '⭐'.repeat(review.rating) }}</p>
    </div>
    <p class="text-sm text-gray-600 italic mb-1">“{{ review.comment }}”</p>
    <p class="text-sm text-gray-500">Buku: {{ bookTitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  review: Object,
  bookTitle: String
})
</script>
