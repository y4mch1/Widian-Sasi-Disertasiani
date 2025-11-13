<template>
  <div class="bg-black text-white h-screen overflow-hidden relative">
    <!-- Custom cursor - warna berubah tergantung page -->
    <div
      ref="cursor"
      class="fixed pointer-events-none w-6 h-6 rounded-full z-50 transition-all duration-40"
      :class="{
        'bg-white': !isLightPage,
        'bg-yellow-500': isLightPage
      }"
    ></div>

    <Navbar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './Components/Navbar.vue'

const cursor = ref(null)
const route = useRoute()

// Detect kalau page punya background putih
const isLightPage = computed(() => {
  return route.path === '/skill' // Tambahkan path lain kalau ada page putih lainnya
})

// Klik efek - warna menyesuaikan page
const handleClick = (e) => {
  const effect = document.createElement('div')
  const bgColor = isLightPage.value ? 'bg-yellow-500/50' : 'bg-white/50'
  effect.className = `fixed w-6 h-6 rounded-full ${bgColor} pointer-events-none animate-clickEffect z-50`
  effect.style.left = `${e.clientX - 12}px`
  effect.style.top = `${e.clientY - 12}px`
  document.body.appendChild(effect)

  setTimeout(() => {
    if (document.body.contains(effect)) {
      document.body.removeChild(effect)
    }
  }, 400)
}

const moveCursor = (e) => {
  if (cursor.value) {
    cursor.value.style.transform = `translate3d(${e.clientX - 12}px, ${e.clientY - 12}px, 0)`
  }
}

onMounted(() => {
  window.addEventListener('mousemove', moveCursor)
  window.addEventListener('click', handleClick)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', moveCursor)
  window.removeEventListener('click', handleClick)
})
</script>

<style>
/* fade transition */
.fade-enter-active {
  transition: opacity 0.4s ease;
}

.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* sembunyikan cursor default */
* {
  cursor: none !important;
}

/* Animasi klik */
@keyframes clickEffect {
  0% {
    transform: scale(0.5);
    opacity: 0.7;
  }
  50% {
    transform: scale(2);
    opacity: 0.5;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}

.animate-clickEffect {
  animation: clickEffect 0.4s ease-out forwards;
}
</style>
