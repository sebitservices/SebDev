<template>
  <section id="inicio" class="relative overflow-hidden bg-gray-900 text-white">
    <ContactModal :isOpen="isContactModalOpen" @close="closeContactModal" />
    <!-- Fondo con efecto de gradient y patrón sutiles -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
    <div class="absolute inset-0 opacity-10 bg-grid-pattern"></div>
    
    <!-- Partículas animadas -->
    <div class="absolute inset-0 overflow-hidden opacity-30">
      <div v-for="n in 20" :key="n" 
           class="particle absolute rounded-full bg-emerald-500"
           :style="{
             width: `${Math.random() * 6 + 2}px`,
             height: `${Math.random() * 6 + 2}px`,
             top: `${Math.random() * 100}%`,
             left: `${Math.random() * 100}%`,
             animationDelay: `${Math.random() * 5}s`,
             animationDuration: `${Math.random() * 10 + 10}s`
           }">
      </div>
    </div>
    
    <!-- Contenido principal del hero -->
    <div class="container-custom relative z-10 pt-20 pb-24 lg:pt-32 lg:pb-36">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- Contenido de texto -->
        <div class="lg:w-1/2 text-center lg:text-left fade-in-up">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight slide-in-left">
            <span class="inline-block">Desarrollo</span>
            <span class="inline-block text-emerald-500 ml-2 sm:ml-3">Web</span>
            <span class="inline-block text-emerald-500 mt-2">Full Stack</span>
          </h1>
          <p class="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0 fade-in" style="animation-delay: 0.4s">
            Especializado en el desarrollo de soluciones web profesionales y de alto rendimiento con tecnologías frontend y backend. Creo experiencias digitales modernas usando múltiples lenguajes y frameworks.
          </p>
          <div class="mt-6 flex flex-wrap items-center gap-3 justify-center lg:justify-start fade-in" style="animation-delay: 0.6s">
            <a 
              href="#proyectos"
              class="btn-primary inline-flex items-center gap-2"
              aria-label="Ver mis proyectos"
              role="button">
              Ver Proyectos
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <span class="sr-only">Navega a la sección de proyectos</span>
            </a>
            <a 
              href="#contacto" 
              class="btn-secondary hover-float inline-flex items-center gap-2"
              aria-label="Contáctame"
              role="button"
              @click.prevent="openContactModal">
              Contáctame
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="sr-only">Navega a la sección de contacto</span>
            </a>
            <a 
              href="/assets/cv/CV Sebastián Peña.pdf" 
              download="CV_Sebastian_Pena.pdf" 
              class="btn-secondary hover-float inline-flex items-center gap-2"
              aria-label="Descargar mi CV"
              role="button">
              Descargar CV
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span class="sr-only">Descarga mi currículum en formato PDF</span>
            </a>
            <a href="https://github.com/sebitservices" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="btn-icon hover-float" 
               aria-label="GitHub">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
          
          <!-- Tecnologías -->
          <div class="mt-10 pt-6 border-t border-gray-700 fade-in" style="animation-delay: 0.8s">
            <p class="text-sm font-medium text-gray-400 mb-3">Tecnologías que domino:</p>
            <div class="flex flex-wrap gap-2 justify-center lg:justify-start">
              <span v-for="(tech, index) in technologies" :key="tech" 
                    class="tech-badge animate-fade-in-up"
                    :style="{ animationDelay: `${0.8 + index * 0.1}s` }">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
        
        <!-- Imagen/Logo -->
        <div class="lg:w-1/2 flex justify-center relative fade-in-up" style="animation-delay: 0.3s">
          <div class="w-64 h-64 lg:w-80 lg:h-80 relative">
            <!-- Círculo decorativo -->
            <div class="absolute inset-0 rounded-full bg-gray-800 border-4 border-emerald-500/20"></div>
            
            <!-- Efecto de resplandor -->
            <div class="absolute inset-4 lg:inset-6 rounded-full bg-emerald-500/10 animate-pulse-slow"></div>
            
            <!-- Logo -->
            <div class="absolute inset-0 flex items-center justify-center logo-hover">
              <img 
                :src="logoUrl" 
                alt="SebDev Logo" 
                width="192"
                height="192"
                loading="eager"
                decoding="async"
                fetchpriority="high"
                class="w-40 h-40 lg:w-48 lg:h-48 object-contain z-10"
                sizes="(max-width: 768px) 160px, 192px"
                srcset="/assets/img/sp-sm.webp 160w,
                        /assets/img/sp.webp 192w"
              >
            </div>
            
            <!-- Elementos decorativos animados -->
            <div class="absolute top-0 right-0 w-16 h-16 bg-emerald-500 rounded-full opacity-20 transform translate-x-1/4 -translate-y-1/4 floating"></div>
            <div class="absolute bottom-0 left-0 w-24 h-24 bg-emerald-500 rounded-full opacity-20 transform -translate-x-1/4 translate-y-1/4 floating" style="animation-delay: 1s"></div>
            
            <!-- Anillo animado -->
            <div class="absolute inset-[-15px] border-4 border-dashed border-emerald-500/20 rounded-full animate-spin-slow"></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Decoración en la parte inferior -->
    <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-800 to-transparent"></div>
    <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent shine-animation"></div>
  </section>
</template>

<script>
import ContactModal from './ContactModal.vue'

export default {
  name: 'Hero',
  components: {
    ContactModal
  },
  data() {
    return {
      technologies: [
        'JavaScript', 'Python', 'React', 'Vue.js', 'Angular', 
        'Astro', 'Node.js', 'Django', 'Express', 'MongoDB', 
        'PostgreSQL', 'TailwindCSS', 'DevOps'
      ],
      isContactModalOpen: false
    }
  },
  computed: {
    logoUrl() {
      return '/assets/img/sp-sm.webp';
    }
  },
  methods: {
    openContactModal() {
      this.isContactModalOpen = true
    },
    closeContactModal() {
      this.isContactModalOpen = false
    }
  }
}
</script>

<style scoped>
.btn-primary {
  @apply inline-flex items-center px-4 py-1.5 text-sm rounded-md bg-emerald-500 text-white font-medium transition-all duration-200 hover:bg-emerald-600 hover:shadow-lg;
}

.btn-secondary {
  @apply inline-flex items-center px-4 py-1.5 text-sm rounded-md bg-gray-800 text-white font-medium border border-gray-700 transition-all duration-200 hover:bg-gray-700 hover:border-gray-600;
}

.tech-badge {
  @apply px-3 py-1 rounded-full bg-gray-800 text-sm font-medium text-emerald-400 border border-gray-700;
}

.bg-grid-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

/* Animaciones */
.fade-in {
  animation: fadeIn 0.8s ease-out forwards;
  opacity: 0;
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.slide-in-left {
  animation: slideInLeft 0.8s ease-out forwards;
  opacity: 0;
}

.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out forwards;
  opacity: 0;
}

.hover-float {
  transition: transform 0.3s ease;
}

.hover-float:hover {
  transform: translateY(-5px);
}

.floating {
  animation: floating 6s ease-in-out infinite;
}

.shine-animation {
  position: relative;
  overflow: hidden;
}

.shine-animation::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shine 5s infinite;
}

.logo-hover {
  transition: transform 0.3s ease;
}

.logo-hover:hover {
  transform: scale(1.05);
}

.rotate-animation {
  animation: slowRotate 15s linear infinite;
  animation-play-state: paused;
}

.rotate-animation:hover {
  animation-play-state: running;
}

.particle {
  opacity: 0;
  animation: floatingParticle 20s linear infinite;
}

.animate-spin-slow {
  animation: spin 20s linear infinite;
}

.animate-bounce-x {
  animation: bounceX 1.5s infinite;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes floating {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(0, 15px); }
}

@keyframes shine {
  0% { left: -100%; }
  20% { left: 100%; }
  100% { left: 100%; }
}

@keyframes slowRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes floatingParticle {
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-100vh);
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes bounceX {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(5px); }
}

/* Animación para el pulso lento */
@keyframes pulse-slow {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}

.animate-pulse-slow {
  animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.btn-icon {
  @apply inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white transition-all duration-200 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 text-emerald-400;
}
</style> 