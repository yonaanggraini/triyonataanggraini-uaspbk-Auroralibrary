<template>
  <div class="min-h-screen flex bg-gray-50 text-gray-800">
    <!-- Sidebar -->
    <Sidebar class="w-64 border-r bg-white" />

    <!-- Main Content -->
    <main class="flex-1 p-6 overflow-y-auto">
      <router-view />
    </main>

    <!-- Optional: Right Book Preview -->
    <BookPreview class="w-80 bg-blue-900 text-white p-6 hidden lg:block" />
  </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue'
import BookPreview from '@/components/BookPreview.vue'
</script>
