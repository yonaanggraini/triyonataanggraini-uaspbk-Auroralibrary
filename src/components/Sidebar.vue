<template>
  <aside class="h-full flex flex-col justify-between p-4 bg-white border-r">
    <!-- Logo -->
    <router-link to="/" class="text-2xl font-bold text-indigo-600 mb-8">
      Aurora Library
    </router-link>

    <!-- Menu Utama -->
    <nav class="space-y-4 text-sm font-medium text-gray-700">
      <router-link to="/" class="block px-4 py-2 rounded hover:bg-indigo-100" active-class="bg-indigo-100 text-indigo-600" exact>
        Home
      </router-link>
      <router-link to="/books" class="block px-4 py-2 rounded hover:bg-indigo-100" active-class="bg-indigo-100 text-indigo-600">
        Buku
      </router-link>
      <router-link to="/register" class="block px-4 py-2 rounded hover:bg-indigo-100" active-class="bg-indigo-100 text-indigo-600">
        Registrasi
      </router-link>
      <router-link to="/borrow" class="block px-4 py-2 rounded hover:bg-indigo-100" active-class="bg-indigo-100 text-indigo-600">
        Peminjaman
      </router-link>
      <router-link to="/reviews" class="block px-4 py-2 rounded hover:bg-indigo-100" active-class="bg-indigo-100 text-indigo-600">
        Ulasan
      </router-link>
      <router-link to="/reservation" class="block px-4 py-2 rounded hover:bg-indigo-100" active-class="bg-indigo-100 text-indigo-600">
        Reservasi
      </router-link>
      <router-link to="/notifications" class="block px-4 py-2 rounded hover:bg-indigo-100" active-class="bg-indigo-100 text-indigo-600">
        Notifikasi
      </router-link>
    </nav>

    <!-- Bawah (optional) -->
    <div class="mt-10 space-y-4 text-sm font-medium text-gray-600">
      <router-link to="/settings" class="block px-4 py-2 rounded hover:bg-gray-100" active-class="bg-gray-100 text-indigo-600">
        ⚙️ Settings
      </router-link>
      <router-link to="/logout" class="block px-4 py-2 rounded hover:bg-gray-100" active-class="bg-gray-100 text-indigo-600">
        🚪 Logout
      </router-link>
    </div>
  </aside>
</template>
