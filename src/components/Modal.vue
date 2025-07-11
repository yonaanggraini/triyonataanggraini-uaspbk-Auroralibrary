<template>
  <transition name="fade">
    <div v-if="modelValue" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        class="bg-white rounded-xl shadow-lg max-w-lg w-full mx-4 p-6 relative animate-fade-in"
        @click.stop
      >
        <!-- Tombol Close -->
        <button
          class="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          @click="$emit('update:modelValue', false)"
        >
          ✕
        </button>

        <!-- Header -->
        <h3 v-if="title" class="text-lg font-semibold text-gray-800 mb-4">
          {{ title }}
        </h3>

        <!-- Isi Modal -->
        <div>
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  modelValue: Boolean,
  title: String
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
