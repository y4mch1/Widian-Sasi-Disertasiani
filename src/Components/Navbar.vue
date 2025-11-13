<template>
  <div
    class="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 sm:gap-6 z-50"
  >
    <router-link
      v-for="(item, index) in links"
      :key="index"
      :to="item.path"
      class="transition-all duration-300 text-xs sm:text-sm relative"
      :class="{
    
        'w-14 h-14 sm:w-16 sm:h-16 border-2 flex items-center justify-center rounded-full':
          $route.path === item.path,
        'border-white text-white':
          $route.path === item.path && item.path !== '/skill',
        'border-yellow-500 text-black':
          $route.path === item.path && item.path === '/skill',
   
        'hover:glow-text':
          $route.path !== item.path && item.path !== '/skill',
        'hover:glow-text-yellow':
          $route.path !== item.path && item.path === '/skill',
        'text-gray-500 hover:text-white':
          $route.path !== item.path && item.path !== '/skill',
        'text-gray-400 hover:text-yellow-500':
          $route.path !== item.path && item.path === '/skill'
      }"
    >
      {{ item.name.toUpperCase() }}
    </router-link>
  </div>
</template>

<script setup>
const links = [
  { name: 'home', path: '/' },
  { name: 'work', path: '/work' },
  { name: 'skill', path: '/skill' },
  { name: 'contact', path: '/contact' }
]
</script>

<style scoped>

.hover\:glow-text:hover {
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
    0 0 20px rgba(255, 255, 255, 0.6),
    0 0 30px rgba(255, 255, 255, 0.4);
  transition: text-shadow 0.3s ease;
}


.hover\:glow-text-yellow:hover {
  text-shadow: 0 0 10px rgba(234, 179, 8, 0.8),
    0 0 20px rgba(234, 179, 8, 0.6),
    0 0 30px rgba(234, 179, 8, 0.4);
  transition: text-shadow 0.3s ease;
}
</style>