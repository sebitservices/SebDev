<template>
  <section id="sobre-mi" class="pb-0 pt-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative">
    <div class="container-custom relative">
      <!-- Decorative elements -->
      <div class="absolute top-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <!-- Header -->
      <div class="text-center mb-16 relative">
        <h2 class="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-400">
          Sobre Mí
        </h2>
        <div class="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-emerald-500 to-teal-400 rounded shine-animation"></div>
      </div>

      <div class="grid lg:grid-cols-12 gap-12 relative pb-8">
        <!-- Left Column - Image and Personal Info -->
        <div class="lg:col-span-4 space-y-8">
          <!-- Profile Image -->
          <div class="relative mx-auto max-w-sm">
            <div class="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
            <div class="relative rounded-2xl overflow-hidden border-2 border-emerald-500/20 bg-gray-800/50 backdrop-blur-sm">
              <img 
                :src="profileImage.src" 
                :alt="profileImage.alt"
                :width="profileImage.width"
                :height="profileImage.height"
                loading="lazy"
                decoding="async"
                @error="handleImageError"
                fetchpriority="high"
                class="w-full h-auto rounded-xl shadow-lg custom-transition transform hover:scale-105"
              >
            </div>
          </div>

          <!-- Contact Info -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <div class="space-y-4">
              <div class="flex items-center space-x-3 group">
                <span class="p-2 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 custom-transition">
                  <svg class="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </span>
                <span class="text-gray-300">admin@sebitservices.cl</span>
              </div>
              <div class="flex items-center space-x-3 group">
                <span class="p-2 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 custom-transition">
                  <svg class="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span class="text-gray-300">Concepción, Chile</span>
              </div>
              <div class="flex items-center space-x-3 group">
                <span class="p-2 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 custom-transition">
                  <svg class="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span class="text-gray-300">Disponible para proyectos</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Content -->
        <div class="lg:col-span-8 space-y-8">
          <!-- About Text -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 class="text-2xl font-bold mb-6 text-emerald-400">Desarrollador Full Stack</h3>
            <div class="space-y-4 text-gray-300">
              <p>
                Desarrollador web full stack especializado en crear soluciones digitales de alto rendimiento. Domino tecnologías frontend y backend, lo que me permite abordar proyectos con una visión integral y transformar necesidades de negocio en arquitecturas técnicas sólidas.
              </p>
              <p>
                Me enfoco en escribir código limpio y mantenible, aplicando las mejores prácticas del sector. Tengo experiencia en Vue.js, React, Angular y Astro para frontend, así como Node.js, Express y tecnologías DevOps para backend.
              </p>
              <p>
                Valoro la adaptación a nuevas tecnologías y el aprendizaje continuo. Disfruto trabajando en equipos multidisciplinarios, combinando experiencia técnica y comunicación efectiva para crear soluciones que aportan valor real y mejoran la experiencia del usuario.
              </p>
            </div>
          </div>

          <!-- Education -->
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Academic Formation -->
            <div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h4 class="text-xl font-bold mb-4 text-emerald-400 flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5m0 0l9-5m-9 5v9.5m0 0V14m0 0l-9-5m9 5l9-5" />
                </svg>
                Formación Académica
              </h4>
              <div class="space-y-4">
                <div class="p-4 rounded-lg bg-gray-700/30 border border-gray-600/30 hover:border-emerald-500/30 transition-colors duration-300">
                  <h5 class="font-medium text-emerald-400">Ingeniería en Informática</h5>
                  <p class="text-sm text-gray-400">Universidad Tecnológica de Chile INACAP</p>
                  <div class="flex justify-between mt-2 text-xs text-gray-500">
                    <span>Sede Concepción, Chile</span>
                    <span>2020 - 2024</span>
                  </div>
                </div>
                <div class="p-4 rounded-lg bg-gray-700/30 border border-gray-600/30 hover:border-emerald-500/30 transition-colors duration-300">
                  <h5 class="font-medium text-emerald-400">Analista Programador</h5>
                  <p class="text-sm text-gray-400">Universidad Tecnológica de Chile INACAP</p>
                  <div class="flex justify-between mt-2 text-xs text-gray-500">
                    <span>Sede Concepción, Chile</span>
                    <span>2017 - 2019</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Certifications -->
            <div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h4 class="text-xl font-bold mb-4 text-emerald-400 flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Certificaciones
              </h4>
              <div class="grid gap-3">
                <div class="p-3 rounded-lg bg-gray-700/30 border border-gray-600/30 hover:border-emerald-500/30 transition-colors duration-300">
                  <span class="text-sm font-medium text-gray-200">Desarrollador Full Stack</span>
                  <span class="block text-xs text-emerald-400 mt-1">Universidad Tecnológica de Chile INACAP</span>
                </div>
                <div class="p-3 rounded-lg bg-gray-700/30 border border-gray-600/30 hover:border-emerald-500/30 transition-colors duration-300">
                  <span class="text-sm font-medium text-gray-200">Desarrollo de Aplicaciones</span>
                  <span class="block text-xs text-emerald-400 mt-1">Universidad Tecnológica de Chile INACAP</span>
                </div>
                <div class="p-3 rounded-lg bg-gray-700/30 border border-gray-600/30 hover:border-emerald-500/30 transition-colors duration-300">
                  <span class="text-sm font-medium text-gray-200">Diseño Ágil de Sistemas</span>
                  <span class="block text-xs text-emerald-400 mt-1">Universidad Tecnológica de Chile INACAP</span>
                </div>
                <div class="p-3 rounded-lg bg-gray-700/30 border border-gray-600/30 hover:border-emerald-500/30 transition-colors duration-300">
                  <span class="text-sm font-medium text-gray-200">Diseño y Gestión de Base de Datos</span>
                  <span class="block text-xs text-emerald-400 mt-1">Universidad Tecnológica de Chile INACAP</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Additional Courses -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <h4 class="text-xl font-bold mb-4 text-emerald-400 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Cursos y Formación Complementaria
            </h4>
            <div class="space-y-4">
              <div class="p-4 rounded-lg bg-gray-700/30 border border-gray-600/30 hover:border-emerald-500/30 transition-colors duration-300">
                <h5 class="font-medium text-emerald-400">Curso IT Essentials</h5>
                <p class="text-sm text-gray-400">Universidad Tecnológica de Chile INACAP</p>
                <div class="flex justify-between mt-2 text-xs text-gray-500">
                  <span>70 hrs pedagógicas</span>
                  <span>Sede Concepción, Chile • 2019</span>
                </div>
              </div>
              <div class="p-4 rounded-lg bg-gray-700/30 border border-gray-600/30 hover:border-emerald-500/30 transition-colors duration-300">
                <h5 class="font-medium text-emerald-400">CCNA Routing and Switching</h5>
                <p class="text-sm text-gray-400">Universidad Tecnológica de Chile INACAP</p>
                <div class="flex justify-between mt-2 text-xs text-gray-500">
                  <span>1 semestre</span>
                  <span>Sede Concepción, Chile • 16 Enero, 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Decorative bottom wave -->
    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg class="relative block w-full h-[2px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 2" preserveAspectRatio="none">
        <path d="M0 1 L1200 1" stroke-width="2" class="stroke-emerald-500/20"></path>
      </svg>
    </div>

    <!-- Decorative line -->
    <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400"></div>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      profileImage: {
        src: '/public/assets/img/SebDev.webp',
        fallbackSrc: '/public/assets/img/sp.webp',
        width: 400,
        height: 400,
        alt: 'Foto de perfil de Sebastian Pizarro'
      }
    }
  },
  methods: {
    handleImageError(e) {
      console.error('Error cargando imagen:', e.target.src);
      e.target.src = this.profileImage.fallbackSrc;
      
      // Si también falla el fallback, mostrar un placeholder
      e.target.onerror = () => {
        console.error('Error cargando imagen de fallback');
        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 24 24"%3E%3Cpath fill="%234ade80" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/%3E%3C/svg%3E';
      };
    }
  },
  mounted() {
    // Precarga de imágenes
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };
    
    preloadImage(this.profileImage.src);
    preloadImage(this.profileImage.fallbackSrc);
  }
}
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
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
  width: 50%;
  height: 100%;
  background: linear-gradient(
    to right,
    transparent 0%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 100%
  );
  animation: shine 3s infinite;
}

@keyframes shine {
  0% {
    left: -100%;
  }
  20% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
}

.animate-pulse-slow {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.1;
  }
}

/* Transiciones suaves */
.custom-transition {
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Efectos hover para las tarjetas */
.bg-gray-700\/30:hover {
  @apply bg-gray-700/40 border-emerald-500/30;
  transform: translateY(-2px);
}

/* Animación para los iconos en hover */
.group:hover svg {
  @apply text-emerald-400 transform scale-110;
}

/* Gradiente de fondo con animación */
.bg-gradient-radial {
  background: radial-gradient(circle at center, var(--tw-gradient-from), var(--tw-gradient-to));
}

/* Efecto de brillo para elementos decorativos */
.glow {
  box-shadow: 0 0 15px theme('colors.emerald.500' / 20%);
}

/* Animaciones de entrada */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}
</style> 