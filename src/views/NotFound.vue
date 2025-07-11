<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
    <h1 class="text-6xl font-bold text-indigo-600 mb-4">404</h1>
    <p class="text-xl text-gray-800 font-semibold mb-2">Halaman Tidak Ditemukan</p>
    <p class="text-gray-600 mb-6 text-center">Maaf, halaman yang kamu cari tidak tersedia atau telah dipindahkan.</p>
    <router-link
      to="/"
      class="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
    >
      Kembali ke Beranda
    </router-link>
  </div>
</template>
