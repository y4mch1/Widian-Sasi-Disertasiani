<template> 
  <div ref="containerRef" class="h-screen w-full overflow-hidden relative" style="background-color: #F6CD45;">
    <!-- Sticky Title -->
    <div 
      class="fixed top-0 left-0 right-0 z-40 py-6 transition-all duration-500"
      :style="{ 
        transform: currentSection > 0 ? 'translateY(0)' : 'translateY(-100%)',
        backgroundColor: currentSection > 0 ? '#F6CD45' : 'transparent'
      }"
    >
      <h1 class="text-4xl font-bold text-white text-center">{{ projectData.title }}</h1>
    </div>

    <!-- Sections -->
    <div 
      class="h-full transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateY(-${currentSection * 100}vh)` }"
    >


      <section class="h-screen w-full flex items-center justify-center px-6 sm:px-8 lg:px-12">
        <div class="w-full text-center">
          <h1 class="text-8xl sm:text-9xl font-extrabold text-white mb-10 animate-fade-in tracking-wider uppercase">
            {{ projectData.title }}
          </h1>
          <div class="bg-white rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
            <img 
              :src="projectData.heroImage" 
              :alt="projectData.title" 
              class="w-full h-[80vh] object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
            />
          </div>
        </div>
      </section>

   
<section class="h-screen w-full flex items-center justify-center px-6 sm:px-10 lg:px-20">
  <div class="w-full fade-section">
    <div class="grid grid-cols-12 gap-8 sm:gap-12">
      <div class="col-span-3">
        <h2 class="text-2xl font-semibold text-white mb-8 tracking-wide">PROJECT INFO</h2>
      </div>
      <div class="col-span-9">
        <p class="text-white text-6xl font-light leading-snug mb-20">
          {{ projectData.description }}
        </p>

        <div class="grid grid-cols-2 gap-16">
          <div>
            <div class="border-t border-white w-full mb-4"></div>
            <h3 class="text-white font-semibold text-xl tracking-wide mb-4 opacity-90">CLIENT</h3>
            <div class="space-y-2">
              <p v-for="(client, idx) in projectData.client" :key="idx" class="text-white text-xl opacity-80">
                {{ client }}
              </p>
            </div>
          </div>
          <div>
            <div class="border-t border-white w-full mb-4"></div>
            <h3 class="text-white font-semibold text-xl tracking-wide mb-4 opacity-90">TOOLS</h3>
            <div class="space-y-2">
              <p v-for="(tool, idx) in projectData.tools" :key="idx" class="text-white text-xl opacity-80">
                {{ tool }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="h-screen w-full flex items-center justify-center px-6 sm:px-8 lg:px-12">
  <div class="w-full text-center fade-section">
    <div class="relative bg-white rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
      <img 
        :src="projectData.teamImage"
        alt="Team"
        class="w-full h-[80vh] object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end justify-center pb-10">
        <p class="text-white text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
          Our Research Team
        </p>
      </div>
    </div>
  </div>
</section>


<section class="h-screen w-full flex items-center justify-center px-6 sm:px-10 lg:px-20">
  <div class="w-full fade-section">
    <div class="grid grid-cols-12 gap-8 sm:gap-12">
      <div class="col-span-3">
        <h2 class="text-2xl font-semibold text-white mb-8 tracking-wide">MY ROLE</h2>
      </div>
      <div class="col-span-9">
        <p class="text-white text-6xl font-light leading-snug mb-20">
          {{ projectData.responsibilitiesDescription }}
        </p>
      </div>
    </div>
  </div>
</section>
    </div>


    <div class="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
      <button 
        v-for="section in sections" 
        :key="section.id"
        @click="scrollToSection(section.id)"
        :class="`w-3 h-3 rounded-full transition-all duration-300 ${currentSection === section.id ? 'bg-white h-8' : 'bg-white/40 hover:bg-white/60'}`"
      />
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'

const currentSection = ref(0)
const containerRef = ref(null)
const isScrolling = ref(false)

const projectData = {
  title: "ASA VR",
  heroImage: new URL('@/assets/asa.png', import.meta.url).href,
  description: "ASA VR is a VR-based dementia care training simulator that helps nurses practice interacting with patients. NPC responses use OpenAI API to deliver realistic and natural dialogue.",
  client: [
    "UNIVERSITY OF TOKYO",
    "AIRLANGGA UNIVERSITY",
    "SEPULUH NOPEMBER INSTITUTE"
  ],
  tools: [
    "UNITY",
    "PICO 4 HEADSET",
    "FUSE",
    "3DS MAX",
    "OPEN AI API"
  ],
  teamImage: new URL('@/assets/asa2.jpeg', import.meta.url).href,
  responsibilitiesDescription:
    "In this project, I was responsible for developing immersive VR interactions, optimizing performance for Pico 4 headset, and designing spatial environments that supported user engagement and comfort. My focus was to merge technical execution with user-centered design to create a seamless and memorable experience within the virtual space."
}


const sections = [
  { id: 0, name: 'hero' },
  { id: 1, name: 'info' },
  { id: 2, name: 'team' },
  { id: 3, name: 'role' }
]

const scrollToSection = (index) => {
  currentSection.value = index
}

onMounted(() => {
  const container = containerRef.value
  if (!container) return

  const handleWheel = (e) => {
    e.preventDefault()
    if (isScrolling.value) return

    if (e.deltaY > 50 && currentSection.value < sections.length - 1) {
      isScrolling.value = true
      currentSection.value += 1
      setTimeout(() => isScrolling.value = false, 800)
    } else if (e.deltaY < -50 && currentSection.value > 0) {
      isScrolling.value = true
      currentSection.value -= 1
      setTimeout(() => isScrolling.value = false, 800)
    }
  }

  container.addEventListener('wheel', handleWheel, { passive: false })
})

import { useRouter } from 'vue-router'

const router = useRouter()
const isNavigating = ref(false)
const touchStartY = ref(0)
const touchEndY = ref(0)

onMounted(() => {
  const container = containerRef.value
  if (!container) return

  const handleWheel = (e) => {
    e.preventDefault()
    if (isScrolling.value || isNavigating.value) return

    if (e.deltaY > 50) {
      if (currentSection.value < sections.length - 1) {
        isScrolling.value = true
        currentSection.value += 1
        setTimeout(() => isScrolling.value = false, 800)
      } else {
        isNavigating.value = true
        setTimeout(() => router.push('/work2'), 300)
      }
    } else if (e.deltaY < -50) {
      if (currentSection.value > 0) {
        isScrolling.value = true
        currentSection.value -= 1
        setTimeout(() => isScrolling.value = false, 800)
      } else {
        isNavigating.value = true
        setTimeout(() => router.push('/'), 300)
      }
    }
  }

  container.addEventListener('wheel', handleWheel, { passive: false })

  // --- Tambahan swipe mobile ---
  container.addEventListener('touchstart', (e) => { touchStartY.value = e.touches[0].clientY })
  container.addEventListener('touchmove', (e) => { touchEndY.value = e.touches[0].clientY })
  container.addEventListener('touchend', () => {
    if (isScrolling.value || isNavigating.value) return
    const diff = touchStartY.value - touchEndY.value
    if (diff > 50) {
      if (currentSection.value < sections.length - 1) {
        isScrolling.value = true
        currentSection.value += 1
        setTimeout(() => isScrolling.value = false, 800)
      } else {
        isNavigating.value = true
        setTimeout(() => router.push('/work2'), 300)
      }
    } else if (diff < -50) {
      if (currentSection.value > 0) {
        isScrolling.value = true
        currentSection.value -= 1
        setTimeout(() => isScrolling.value = false, 800)
      } else {
        isNavigating.value = true
        setTimeout(() => router.push('/'), 300)
      }
    }
  })
})

onMounted(() => {
  // existing scroll listener tetap
  const container = containerRef.value
  if (!container) return

  // tambahkan Intersection Observer untuk fade animation
  const fadeSections = document.querySelectorAll('.fade-section')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      })
    },
    { threshold: 0.3 }
  )

  fadeSections.forEach((section) => observer.observe(section))
})

</script>

<style scoped>
.fade-section {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1.2s ease, transform 1.2s ease;
}

.fade-section.show {
  opacity: 1;
  transform: translateY(0);
}

.animate-fade-in {
  animation: fade-in 1.2s ease-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

img {
  will-change: transform;
}
</style>
