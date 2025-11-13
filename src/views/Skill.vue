<template>
  <div 
    class="h-screen flex flex-col items-center justify-center bg-white text-black px-4 sm:px-6 py-8 sm:py-12 overflow-hidden relative transition-transform duration-[2000ms] ease-out"
    :class="{ 'scale-110 opacity-0': !entered, 'scale-100 opacity-100': entered }"
    @wheel="handleWheel"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-6 sm:mb-8 w-full max-w-7xl">
      <div
        v-for="skill in topSkills"
        :key="skill.name"
        class="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-12 flex flex-col items-center justify-center text-center cursor-pointer
               transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-yellow-500 group"
      >
        <div class="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4 sm:mb-6 flex items-center justify-center">
          <img 
            v-if="skill.icon" 
            :src="skill.icon" 
            :alt="skill.name" 
            class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" 
          />
        </div>
        <span class="text-sm sm:text-base lg:text-lg font-semibold text-black">{{ skill.name }}</span>
      </div>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 w-full max-w-7xl">
      <div
        v-for="skill in bottomSkills"
        :key="skill.name"
        class="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-12 flex flex-col items-center justify-center text-center cursor-pointer
               transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-yellow-500 group"
      >
        <div class="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4 sm:mb-6 flex items-center justify-center">
          <img 
            v-if="skill.icon" 
            :src="skill.icon" 
            :alt="skill.name" 
            class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" 
          />
        </div>
        <span class="text-sm sm:text-base lg:text-lg font-semibold text-black">{{ skill.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isNavigating = ref(false)
const entered = ref(false)
const touchStartY = ref(0)
const touchEndY = ref(0)

onMounted(() => {
  setTimeout(() => {
    entered.value = true
  }, 100) // delay biar animasinya terasa smooth masuk
})

import unityIcon from '@/assets/icons/unity.png'
import vrIcon from '@/assets/icons/vr-glasses.png'
import cIcon from '@/assets/icons/c-sharp.png'
import pythonIcon from '@/assets/icons/python.png'
import sqlIcon from '@/assets/icons/sql.png'
import vueIcon from '@/assets/icons/vue.png'
import htmlIcon from '@/assets/icons/html.png'
import cssIcon from '@/assets/icons/css.png'
import excelIcon from '@/assets/icons/excel.png'
import fuseIcon from '@/assets/icons/fuse.png'

const topSkills = [
  { name: 'Unity', icon: unityIcon },
  { name: 'VR', icon: vrIcon },
  { name: 'C#', icon: cIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'SQL', icon: sqlIcon },
]

const bottomSkills = [
  { name: 'Vue.js', icon: vueIcon },
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'Excel', icon: excelIcon },
  { name: 'Fuse', icon: fuseIcon },
]

const handleWheel = (e) => {
  if (isNavigating.value) return
  
  if (e.deltaY > 50) {
    isNavigating.value = true
    setTimeout(() => router.push('/contact'), 300)
  } else if (e.deltaY < -50) {
    isNavigating.value = true
    setTimeout(() => router.push('/WORK3'), 300)
  }
}

const handleTouchStart = (e) => (touchStartY.value = e.touches[0].clientY)
const handleTouchMove = (e) => (touchEndY.value = e.touches[0].clientY)
const handleTouchEnd = () => {
  if (isNavigating.value) return
  const diff = touchStartY.value - touchEndY.value
  if (diff > 50) {
    isNavigating.value = true
    setTimeout(() => router.push('/contact'), 300)
  } else if (diff < -50) {
    isNavigating.value = true
    setTimeout(() => router.push('/WORK3'), 300)
  }
}
</script>
