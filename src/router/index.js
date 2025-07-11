import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '@/layouts/MainLayout.vue'
import Home from '@/views/Home.vue'
import BookList from '@/views/BookList.vue'
import BookDetail from '@/views/BookDetail.vue'
import MemberForm from '@/views/MemberForm.vue'
import BorrowReturn from '@/views/BorrowReturn.vue'
import Reviews from '@/views/Reviews.vue'
import Reservation from '@/views/Reservation.vue'
import Notifications from '@/views/Notifications.vue'
import NotFound from '@/views/NotFound.vue'


const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: 'Home', component: Home },
      { path: 'books', name: 'BookList', component: BookList },
      { path: 'books/:id', name: 'BookDetail', component: BookDetail, props: true },
      { path: 'register', name: 'MemberForm', component: MemberForm },
      { path: 'borrow', name: 'BorrowReturn', component: BorrowReturn },
      { path: 'reviews', name: 'Reviews', component: Reviews },
      { path: 'reservation', name: 'Reservation', component: Reservation },
      { path: 'notifications', name: 'Notifications', component: Notifications }
     
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

// ✅ Buat instance router
const router = createRouter({
  history: createWebHistory(),
  routes
})

// ✅ Export default router agar bisa digunakan di main.js
export default router
