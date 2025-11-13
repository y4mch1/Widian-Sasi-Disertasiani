<template>
  <div class="slide-container" @wheel="handleWheel" @touchstart="handleTouchStart" @touchmove="handleTouchMove">
    <!-- Section 1: Contact Info -->
    <section 
      class="slide-section"
      :class="{ 'slide-up': currentSection > 0 }"
    >
      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
      </div>

      <div class="h-full flex items-center justify-center px-8 md:px-16 relative z-10">
        <div class="w-full max-w-6xl">
          <!-- Header -->
          <div class="mb-16" ref="headerRef">
            <div class="flex items-center mb-6">
              <div class="w-1 h-16 bg-yellow-500 mr-6"></div>
              <p class="text-yellow-500 text-sm md:text-base tracking-wide uppercase">Let's Get In Touch</p>
            </div>
            <h1 
  class="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-wide uppercase"
  :style="{ transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)` }"
>
  Contact Me
</h1>
          </div>

          <!-- Contact Info Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <!-- Phone -->
            <div 
              @mouseenter="hoveredCard = 'phone'"
              @mouseleave="hoveredCard = null"
              class="relative p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer group"
              :class="hoveredCard === 'phone' ? 'border-yellow-500 bg-yellow-500/10 scale-105' : 'border-gray-800'"
              :style="{ transform: hoveredCard === 'phone' ? 'translateY(-8px)' : '' }"
            >
              <div class="flex items-center gap-4">
                <div 
                  class="w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-500 flex-shrink-0"
                  :class="hoveredCard === 'phone' ? 'border-yellow-500 bg-yellow-500 text-black' : 'border-gray-700'"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span class="text-sm md:text-base font-medium">+62 852 8342 6511</span>
              </div>
            </div>

            <!-- Email -->
            <div 
              @mouseenter="hoveredCard = 'email'"
              @mouseleave="hoveredCard = null"
              class="relative p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer group"
              :class="hoveredCard === 'email' ? 'border-yellow-500 bg-yellow-500/10 scale-105' : 'border-gray-800'"
              :style="{ transform: hoveredCard === 'email' ? 'translateY(-8px)' : '' }"
            >
              <div class="flex items-center gap-4">
                <div 
                  class="w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-500 flex-shrink-0"
                  :class="hoveredCard === 'email' ? 'border-yellow-500 bg-yellow-500 text-black' : 'border-gray-700'"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span class="text-sm md:text-base font-medium">widianogik@gmail.com</span>
              </div>
            </div>

            <!-- Location -->
            <div 
              @mouseenter="hoveredCard = 'location'"
              @mouseleave="hoveredCard = null"
              class="relative p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer group"
              :class="hoveredCard === 'location' ? 'border-yellow-500 bg-yellow-500/10 scale-105' : 'border-gray-800'"
              :style="{ transform: hoveredCard === 'location' ? 'translateY(-8px)' : '' }"
            >
              <div class="flex items-center gap-4">
                <div 
                  class="w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-500 flex-shrink-0"
                  :class="hoveredCard === 'location' ? 'border-yellow-500 bg-yellow-500 text-black' : 'border-gray-700'"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span class="text-sm md:text-base font-medium">Jambi, Indonesia</span>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="flex gap-4">
            <a 
              v-for="social in socials"
              :key="social.name"
              href="#" 
              @mouseenter="hoveredSocial = social.name"
              @mouseleave="hoveredSocial = null"
              class="relative w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 overflow-hidden group"
              :class="hoveredSocial === social.name ? 'border-yellow-500 scale-110' : 'border-gray-700'"
            >
              <div 
                class="absolute inset-0 bg-yellow-500 transition-transform duration-500 origin-center rounded-full"
                :class="hoveredSocial === social.name ? 'scale-100' : 'scale-0'"
              ></div>
              <component :is="social.icon" class="relative z-10 w-5 h-5 transition-colors duration-300" :class="hoveredSocial === social.name ? 'text-black' : ''" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Contact Form -->
    <section 
      class="slide-section"
      :class="{ 'slide-in': currentSection > 0 }"
    >
      <div class="h-full flex items-center justify-center px-8 md:px-16 relative z-10">
        <div class="w-full max-w-4xl">
<h2 class="text-4xl md:text-6xl font-extrabold tracking-wide uppercase mb-12">Leave a Message</h2>
          
          <form @submit.prevent="handleSubmit" class="space-y-8">
            <!-- Name and Email Row -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Name -->
              <div class="relative group">
                <label class="block text-base font-semibold mb-3 transition-colors duration-300 uppercase tracking-wide" :class="focusedField === 'name' ? 'text-yellow-500' : ''">Name</label>
                <input 
                  v-model="form.name"
                  @focus="focusedField = 'name'"
                  @blur="focusedField = null"
                  type="text" 
                  placeholder="Your name"
                  class="w-full bg-transparent border-b-2 outline-none py-3 text-base transition-all duration-300 placeholder-gray-600"
                  :class="focusedField === 'name' ? 'border-yellow-500' : 'border-gray-700'"
                />
                <div 
                  class="absolute bottom-0 left-0 h-0.5 bg-yellow-500 transition-all duration-500"
                  :style="{ width: focusedField === 'name' ? '100%' : '0%' }"
                ></div>
              </div>

              <!-- Email -->
              <div class="relative group">
                <label class="block text-base font-semibold mb-3 transition-colors duration-300" :class="focusedField === 'email' ? 'text-yellow-500' : ''">EMAIL</label>
                <input 
                  v-model="form.email"
                  @focus="focusedField = 'email'"
                  @blur="focusedField = null"
                  type="email" 
                  placeholder="Your e-mail"
                  class="w-full bg-transparent border-b-2 outline-none py-3 text-base transition-all duration-300 placeholder-gray-600"
                  :class="focusedField === 'email' ? 'border-yellow-500' : 'border-gray-700'"
                />
                <div 
                  class="absolute bottom-0 left-0 h-0.5 bg-yellow-500 transition-all duration-500"
                  :style="{ width: focusedField === 'email' ? '100%' : '0%' }"
                ></div>
              </div>
            </div>

            <!-- Message -->
            <div class="relative group">
              <label class="block text-base font-semibold mb-3 transition-colors duration-300" :class="focusedField === 'message' ? 'text-yellow-500' : ''">MESSAGE</label>
              <textarea 
                v-model="form.message"
                @focus="focusedField = 'message'"
                @blur="focusedField = null"
                placeholder="Your message"
                rows="4"
                class="w-full bg-transparent border-b-2 outline-none py-3 text-base transition-all duration-300 placeholder-gray-600 resize-none"
                :class="focusedField === 'message' ? 'border-yellow-500' : 'border-gray-700'"
              ></textarea>
              <div 
                class="absolute bottom-0 left-0 h-0.5 bg-yellow-500 transition-all duration-500"
                :style="{ width: focusedField === 'message' ? '100%' : '0%' }"
              ></div>
            </div>

            <!-- Submit Button -->
            <button 
              type="submit"
              @mouseenter="isButtonHovered = true"
              @mouseleave="isButtonHovered = false"
              class="relative w-32 h-32 rounded-full border-2 flex items-center justify-center text-lg font-bold transition-all duration-500 group overflow-hidden mt-8"
              :class="isButtonHovered ? 'border-yellow-500 scale-110' : 'border-white'"
            >
              <span class="relative z-10 transition-colors duration-300" :class="isButtonHovered ? 'text-black' : ''">SUBMIT</span>
              <div 
                class="absolute inset-0 bg-yellow-500 transition-transform duration-500 rounded-full origin-center"
                :class="isButtonHovered ? 'scale-100' : 'scale-0'"
              ></div>
              
              <!-- Ripple effect on click -->
              <div 
                v-if="showRipple"
                class="absolute inset-0 border-2 border-yellow-500 rounded-full animate-ping"
              ></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({ name: '', email: '', message: '' })
const currentSection = ref(0)
const isScrolling = ref(false)
const isNavigating = ref(false)
const touchStartY = ref(0)

const mousePos = reactive({ x: 0, y: 0 })
const headerRef = ref(null)
const hoveredCard = ref(null)
const hoveredSocial = ref(null)
const focusedField = ref(null)
const isButtonHovered = ref(false)
const showRipple = ref(false)

const bgBlobs = ref(
  Array.from({ length: 3 }).map((_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: `${i * 0.5}s`,
    duration: `${15 + i * 2}s`
  }))
)

const socials = [
  { 
    name: 'twitter',
    icon: { template: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>' }
  },
  { 
    name: 'linkedin',
    icon: { template: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>' }
  },
  { 
    name: 'facebook',
    icon: { template: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>' }
  }
]

// --- Infinite scroll logic ---
const handleWheel = (e) => {
  if (isScrolling.value || isNavigating.value) return

  if (e.deltaY > 0) {
    if (currentSection.value < 1) {
      isScrolling.value = true
      currentSection.value = 1
      setTimeout(() => isScrolling.value = false, 1000)
    }
  } else if (e.deltaY < 0) {
    if (currentSection.value > 0) {
      isScrolling.value = true
      currentSection.value = 0
      setTimeout(() => isScrolling.value = false, 1000)
    } else {
      isNavigating.value = true
      setTimeout(() => router.push('/skill'), 300)
    }
  }
}

const handleTouchStart = (e) => { touchStartY.value = e.touches[0].clientY }
const handleTouchMove = (e) => {
  if (isScrolling.value || isNavigating.value) return
  const touchEndY = e.touches[0].clientY
  const diff = touchStartY.value - touchEndY

  if (diff > 50) {
    if (currentSection.value < 1) {
      isScrolling.value = true
      currentSection.value = 1
      setTimeout(() => isScrolling.value = false, 1000)
    }
  } else if (diff < -50) {
    if (currentSection.value > 0) {
      isScrolling.value = true
      currentSection.value = 0
      setTimeout(() => isScrolling.value = false, 1000)
    } else {
      isNavigating.value = true
      setTimeout(() => router.push('/skill'), 300)
    }
  }
}

// --- Mouse parallax ---
const handleMouseMove = (e) => {
  if (headerRef.value) {
    const rect = headerRef.value.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mousePos.x = (e.clientX - centerX) / 30
    mousePos.y = (e.clientY - centerY) / 30
  }
}

const handleSubmit = () => {
  showRipple.value = true
  setTimeout(() => {
    console.log('Form submitted:', form.value)
    alert('Message sent successfully! 🎉')
    form.value = { name: '', email: '', message: '' }
    showRipple.value = false
  }, 600)
}

onMounted(() => { window.addEventListener('mousemove', handleMouseMove) })
onBeforeUnmount(() => { window.removeEventListener('mousemove', handleMouseMove) })
</script>

<style scoped>
.slide-section:first-child .w-full.max-w-6xl,
.slide-section:last-child .w-full.max-w-4xl {
  transform: scale(1.2);
  transform-origin: center;
  transition: transform 0.8s ease-in-out;
}

@media (max-width: 768px) {
  /* biar di HP gak terlalu mepet */
  .slide-section:first-child .w-full.max-w-6xl,
  .slide-section:last-child .w-full.max-w-4xl {
    transform: scale(1.05);
  }
}
.slide-container {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  background: #1A1A1A;
  color: white;
}

.slide-section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: transform 0.8s cubic-bezier(0.65, 0, 0.35, 1);
  will-change: transform;
  background: #1A1A1A;
  color: white;
}

/* Section slides */
.slide-section:first-child { transform: translateY(0); z-index: 2; }
.slide-section:first-child.slide-up { transform: translateY(-100%); }
.slide-section:last-child { transform: translateY(100%); z-index: 1; }
.slide-section:last-child.slide-in { transform: translateY(0); }

@keyframes float {
  0%,100% { transform: translate(0,0) scale(1); }
  33% { transform: translate(30px,-30px) scale(1.1); }
  66% { transform: translate(-20px,20px) scale(0.9); }
}
.animate-float { animation: float 20s ease-in-out infinite; }

/* Hover / focus / ripple styles putih */
.border-yellow-500, .bg-yellow-500, .text-yellow-500 { border-color: white !important; background-color: rgba(255,255,255,0.1) !important; color: white !important; }
.scale-105:hover { transform: scale(1.05); }
input:focus, textarea:focus { border-color: white !important; }
button:hover { border-color: white !important; }
</style>
