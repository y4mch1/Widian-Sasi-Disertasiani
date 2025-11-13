<template>
  <div 
    class="h-screen w-screen bg-black relative overflow-hidden text-white"
    @wheel="handleWheel"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
   
    <div
      class="absolute top-1/2 left-4 sm:left-16 md:left-100 transform -translate-y-1/2 flex flex-col space-y-2 z-30"
    >
      <p class="text-xs sm:text-sm tracking-widest text-white uppercase">VR Software Engineer</p>
      <p class="text-xs sm:text-sm tracking-widest text-white uppercase">Front End Developer</p>
    </div>

    <h1 ref="nameRef" class="absolute inset-0 font-extrabold leading-tight">

      <template v-if="!isMobile">
        <span
          class="absolute z-5 text-[6vw] sm:text-[6rem] md:text-[10rem] tracking-wide uppercase drop-shadow-md"
          :style="{ top: '10%', left: '10%', transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }"
        >
          WIDIAN
        </span>
        <span
          class="absolute z-5 text-[6vw] sm:text-[6rem] md:text-[10rem] tracking-wide uppercase drop-shadow-md"
          :style="{ top: '35%', left: '60%', transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }"
        >
          SASI
        </span>
      </template>

      <template v-else>
        <span
          class="absolute z-5 text-[10vw] sm:text-[6rem] tracking-wide uppercase drop-shadow-md text-center w-full"
          :style="{ top: '20%', left: '50%', transform: 'translate(-50%, 0)' }"
        >
          WIDIAN SASI
        </span>
      </template>

      <span
        class="absolute z-15 text-[8vw] sm:text-[6rem] md:text-[15rem] tracking-wide uppercase drop-shadow-lg"
        :style="{ top: isMobile ? '30%' : '75%', left: '50%', transform: `translate(${mousePos.x}px, ${mousePos.y}px) translate(-50%, -50%)` }"
      >
        DISERTASIANI
      </span>
    </h1>

    <img
      src="@/assets/aku1.png"
      alt="My Photo"
      class="absolute z-10 w-[40vw] w-[1400px] h-auto object-cover rounded-full"
      :style="{
        top: '55%',
        left: '50%',
        transform: `translate(-50%, -50%) translate(${-mousePos.x}px, ${-mousePos.y}px)`
      }"
    />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const nameRef = ref(null)
const mousePos = reactive({ x: 0, y: 0 })
const windowSize = reactive({ width: window.innerWidth })

// Scroll navigation variables
const isNavigating = ref(false)
const touchStartY = ref(0)
const touchEndY = ref(0)

const handleMouseMove = (e) => {
  if (nameRef.value) {
    const rect = nameRef.value.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mousePos.x = (e.clientX - centerX) / 25
    mousePos.y = (e.clientY - centerY) / 25
  }
}

const handleResize = () => {
  windowSize.width = window.innerWidth
}

const handleWheel = (e) => {
  if (isNavigating.value) return
  
  // Only navigate on scroll down
  if (e.deltaY > 50) {
    isNavigating.value = true
    setTimeout(() => {
      router.push('/work')
    }, 300)
  }
}


const handleTouchStart = (e) => {
  touchStartY.value = e.touches[0].clientY
}

const handleTouchMove = (e) => {
  touchEndY.value = e.touches[0].clientY
}

const handleTouchEnd = () => {
  if (isNavigating.value) return
  
  const diff = touchStartY.value - touchEndY.value
  

  if (diff > 50) {
    isNavigating.value = true
    setTimeout(() => {
      router.push('/work')
    }, 300)
  }
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('resize', handleResize)
})

// Computed responsive
const isMobile = computed(() => windowSize.width < 768)
</script>