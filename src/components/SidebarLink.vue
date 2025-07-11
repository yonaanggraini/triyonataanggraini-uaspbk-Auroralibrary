<template>
  <router-link
    :to="to"
    class="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-blue-100 transition-all text-gray-700 font-medium"
  >
    <span class="text-xl">{{ icon }}</span>
    <span>{{ label }}</span>
  </router-link>
</template>

<script setup>
defineProps({
  to: String,
  icon: String,
  label: String
})
</script>
