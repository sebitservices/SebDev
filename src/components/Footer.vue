<template>
  <footer class="bg-gray-900 border-t border-gray-800">
    <div class="container-custom py-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <!-- Logo y Copyright -->
        <div class="flex items-center space-x-3">
          <img 
            :src="logoUrl" 
            alt="SebDev Logo" 
            class="w-8 h-8"
            @error="handleImageError"
          >
          <div>
            <p class="text-gray-400 text-sm">
              © {{ currentYear }} SebDev. Todos los derechos reservados.
            </p>
          </div>
        </div>

        <!-- Enlaces Sociales -->
        <div class="flex items-center space-x-4">
          <a href="https://github.com/sebitservices" 
             target="_blank" 
             rel="noopener noreferrer"
             class="text-gray-400 hover:text-emerald-500 transition-colors duration-300"
             aria-label="GitHub">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
            </svg>
          </a>
          <a href="mailto:admin@sebitservices.cl"
             class="text-gray-400 hover:text-emerald-500 transition-colors duration-300"
             aria-label="Email">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>
        </div>

        <!-- Créditos -->
        <div class="text-gray-500 text-xs">
          Desarrollado con
          <span class="text-emerald-500">❤</span>
          usando
          <span class="text-emerald-500">Vue.js</span>
          y
          <span class="text-emerald-500">TailwindCSS</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      fallbackLogo: '/assets/img/sp-sm.webp'
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
    logoUrl() {
      return '/assets/img/sp.webp';
    }
  },
  methods: {
    handleImageError(e) {
      e.target.src = this.fallbackLogo;
    }
  }
}
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style> 