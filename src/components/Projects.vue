<template>
  <section id="proyectos" class="pt-20 pb-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative">
    <div class="container-custom relative">
      <!-- Decorative elements -->
      <div class="absolute top-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <!-- Header -->
      <div class="text-center mb-16 relative">
        <h2 class="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-400">
          Proyectos
        </h2>
        <div class="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-emerald-500 to-teal-400 rounded shine-animation"></div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 pb-8">
        <!-- Project Card 1 - TaskMaster (Grande) -->
        <div class="md:col-span-7 group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
          <div class="relative w-full h-52 md:h-64 overflow-hidden">
            <!-- Skeleton loader -->
            <div 
              v-show="!imageLoaded[projects[0].id]"
              class="absolute inset-0 bg-gray-800 animate-pulse"
            >
              <div class="h-full w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-shimmer"></div>
            </div>
            
            <img 
              :src="projects[0].image.src" 
              :alt="projects[0].image.alt"
              :width="projects[0].image.width"
              :height="projects[0].image.height"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              :class="{ 'opacity-0': !imageLoaded[projects[0].id] }"
              :sizes="projects[0].image.sizes"
              :srcset="projects[0].image.srcset"
              @load="handleImageLoad(projects[0].id)"
              @error="handleImageError(projects[0])"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl md:text-2xl font-bold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors duration-300">{{ projects[0].name }}</h3>
            <p class="text-gray-300 text-sm mb-4">{{ projects[0].description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tech in projects[0].technologies" :key="tech" class="px-2 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">{{ tech }}</span>
            </div>
            <div class="flex justify-between items-center">
              <a v-if="projects[0].demoUrl" :href="projects[0].demoUrl" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:text-emerald-300 flex items-center gap-2 text-sm font-medium group/link">
                <span>Ver demo</span>
                <svg class="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a :href="projects[0].githubUrl" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-emerald-400 transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Project Card 2 - Clima (Mediano) -->
        <div class="md:col-span-5 md:mt-8 group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
          <div class="relative w-full h-40 md:h-48 overflow-hidden">
            <!-- Skeleton loader -->
            <div 
              v-show="!imageLoaded[projects[1].id]"
              class="absolute inset-0 bg-gray-800 animate-pulse"
            >
              <div class="h-full w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-shimmer"></div>
            </div>
            
            <img 
              :src="projects[1].image.src" 
              :alt="projects[1].image.alt"
              :width="projects[1].image.width"
              :height="projects[1].image.height"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              :class="{ 'opacity-0': !imageLoaded[projects[1].id] }"
              :sizes="projects[1].image.sizes"
              :srcset="projects[1].image.srcset"
              @load="handleImageLoad(projects[1].id)"
              @error="handleImageError(projects[1])"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
          </div>
          <div class="p-6">
            <h3 class="text-lg md:text-xl font-bold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors duration-300">{{ projects[1].name }}</h3>
            <p class="text-gray-300 text-sm mb-4">{{ projects[1].description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tech in projects[1].technologies" :key="tech" class="px-2 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">{{ tech }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span v-if="!projects[1].demoUrl" class="text-gray-400 text-sm opacity-50">Demo no disponible</span>
              <a v-else :href="projects[1].demoUrl" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:text-emerald-300 flex items-center gap-2 text-sm font-medium group/link">
                <span>Ver demo</span>
                <svg class="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a :href="projects[1].githubUrl" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-emerald-400 transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Project Card 3 - Sebitservices (Grande) -->
        <div class="md:col-span-12 group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
          <div class="relative w-full h-48 md:h-64 overflow-hidden">
            <!-- Skeleton loader -->
            <div 
              v-show="!imageLoaded[projects[2].id]"
              class="absolute inset-0 bg-gray-800 animate-pulse"
            >
              <div class="h-full w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-shimmer"></div>
            </div>
            
            <img 
              :src="projects[2].image.src" 
              :alt="projects[2].image.alt"
              :width="projects[2].image.width"
              :height="projects[2].image.height"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              :class="{ 'opacity-0': !imageLoaded[projects[2].id] }"
              :sizes="projects[2].image.sizes"
              :srcset="projects[2].image.srcset"
              @load="handleImageLoad(projects[2].id)"
              @error="handleImageError(projects[2])"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl md:text-2xl font-bold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors duration-300">{{ projects[2].name }}</h3>
            <p class="text-gray-300 text-sm mb-4">{{ projects[2].description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tech in projects[2].technologies" :key="tech" class="px-2 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">{{ tech }}</span>
            </div>
            <div class="flex justify-between items-center">
              <a v-if="projects[2].demoUrl" :href="projects[2].demoUrl" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:text-emerald-300 flex items-center gap-2 text-sm font-medium group/link">
                <span>Ver sitio web</span>
                <svg class="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a :href="projects[2].githubUrl" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-emerald-400 transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative line -->
    <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400"></div>
  </section>
</template>

<script>
import TaskMasterImage from '../../public/assets/img/taskMaster.webp';
import ClimaImage from '../../public/assets/img/clima.webp';
import SebitservicesImage from '../../public/assets/img/sebitservices.webp';

export default {
  name: 'Projects',
  data() {
    return {
      imageLoaded: {},
      projects: [
        {
          id: 1,
          name: 'TaskMaster',
          image: {
            src: TaskMasterImage,
            alt: 'TaskMaster App - Aplicación de gestión de tareas',
            width: 800,
            height: 400,
            sizes: '100vw'
          },
          description: 'Aplicación de gestión de tareas con autenticación y persistencia de datos.',
          technologies: ['Vue.js', 'TailwindCSS', 'Firebase'],
          demoUrl: 'https://tareas-pij7.vercel.app/',
          githubUrl: 'https://github.com/sebitservices/lista'
        },
        {
          id: 2,
          name: 'Buscador de Clima',
          image: {
            src: ClimaImage,
            alt: 'Buscador de Clima - Aplicación meteorológica',
            width: 600,
            height: 300,
            sizes: '100vw'
          },
          description: 'Aplicación web para consultar el clima actual y pronóstico de cualquier ciudad.',
          technologies: ['Vue.js', 'TailwindCSS', 'OpenWeather API'],
          demoUrl: 'https://clima-sebitservices.vercel.app/',
          githubUrl: 'https://github.com/sebitservices/clima'
        },
        {
          id: 3,
          name: 'Sebitservices Website',
          image: {
            src: SebitservicesImage,
            alt: 'Sebitservices Website - Sitio web corporativo',
            width: 1200,
            height: 600,
            sizes: '100vw'
          },
          description: 'Sitio web corporativo con diseño moderno y responsive.',
          technologies: ['Vue.js', 'TailwindCSS', 'Vercel'],
          demoUrl: 'https://sebitservices.cl',
          githubUrl: 'https://github.com/sebitservices/sebitservices'
        }
      ]
    }
  },
  created() {
    // Inicializar el estado de carga de imágenes
    this.projects.forEach(project => {
      this.$set(this.imageLoaded, project.id, false);
    });
  },
  methods: {
    handleImageLoad(id) {
      this.imageLoaded[id] = true;
    },
    handleImageError(project) {
      console.error(`Error cargando imagen para ${project.name}`);
      // Mostrar un placeholder con el nombre del proyecto
      const canvas = document.createElement('canvas');
      canvas.width = project.image.width;
      canvas.height = project.image.height;
      const ctx = canvas.getContext('2d');
      
      // Dibujar fondo
      ctx.fillStyle = '#1f2937';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Dibujar texto
      ctx.fillStyle = '#34d399';
      ctx.font = 'bold 24px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(project.name, canvas.width / 2, canvas.height / 2);
      
      // Actualizar la imagen
      project.image.src = canvas.toDataURL();
    }
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
  contain: content;
  will-change: transform;
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
  will-change: transform;
}

@keyframes shine {
  0% {
    transform: translateX(-100%);
  }
  20% {
    transform: translateX(200%);
  }
  100% {
    transform: translateX(200%);
  }
}

.animate-shimmer {
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* Transición suave para la imagen */
img {
  transition: opacity 0.3s ease-in-out;
}

.opacity-0 {
  opacity: 0;
}
</style> 