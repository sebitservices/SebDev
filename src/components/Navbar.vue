<template>
  <header class="fixed w-full top-0 left-0 z-50">
    <ContactModal :isOpen="isContactModalOpen" @close="closeContactModal" />
    <!-- Barra superior con estadísticas/tecnología -->
    <div class="hidden lg:block bg-gray-900 py-1">
      <div class="container-custom">
        <div class="flex justify-between text-xs font-mono">
          <div class="flex space-x-4 text-gray-500">
            <span class="flex items-center">
              <span class="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
              <span class="text-emerald-500">Status: Active</span>
            </span>
            <span>Node v18.x</span>
            <span>Vue 2.7.16</span>
            <span>TailwindCSS 3.4.1</span>
          </div>
          <div class="flex space-x-3 text-gray-500">
            <span class="flex items-center">
              <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                </path>
              </svg>
              <span>HTTPS</span>
            </span>
            <span class="flex items-center">
              <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M13 10V3L4 14h7v7l9-11h-7z">
                </path>
              </svg>
              <span>High Performance</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Barra de navegación principal -->
    <nav class="bg-gray-900 border-b border-gray-800 transition-all duration-300" 
         :class="{'shadow-lg': scrolled}">
      <div class="container-custom">
        <div class="flex items-center justify-between h-16">
          <!-- Logo y Nombre -->
          <div class="flex items-center">
            <div class="relative flex items-center space-x-3">
              <img :src="logoUrl" alt="SP Logo" class="h-10 w-10">
              <div class="flex flex-col">
                <span class="text-lg font-bold text-white">SebDev</span>
                <div class="flex items-center">
                  <span class="text-xs text-gray-400">Developer</span>
                  <span class="block ml-1 w-8 h-px bg-gradient-to-r from-emerald-500 to-transparent"></span>
                </div>
              </div>
            </div>
          </div>

          <!-- Enlaces de navegación para pantallas medianas y grandes -->
          <div class="hidden md:flex items-center">
            <div class="flex">
              <a v-for="(item, index) in navItems" 
                 :key="item.name" 
                 @click.prevent="scrollToSection(item.href)"
                 :href="item.href" 
                 class="nav-link relative overflow-hidden group"
                 :class="{ 'active': item.active }">
                {{ item.name }}
                <div class="absolute bottom-0 left-0 h-0.5 w-0 bg-emerald-500 group-hover:w-full transition-all duration-300"></div>
              </a>
            </div>
            <a href="#contacto" 
               @click.prevent="openContactModal"
               class="ml-6 flex items-center justify-center px-4 py-2 border border-transparent rounded-md bg-emerald-500 hover:bg-emerald-600 text-sm font-medium text-white transition duration-150 ease-in-out shadow-md hover:shadow-lg">
              <span>Contacto</span>
              <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>

          <!-- Botón de menú móvil -->
          <div class="md:hidden flex items-center">
            <button 
              @click="toggleMenu" 
              class="hamburger-button z-50"
              aria-label="Menú principal"
              aria-expanded="isMenuOpen"
              aria-controls="main-menu">
              <div class="hamburger" :class="{ active: isMenuOpen }">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <!-- Menú móvil -->
      <div 
        class="mobile-menu-wrapper md:hidden"
        :class="{ 'active': isMenuOpen }">
        <nav 
          id="main-menu"
          class="mobile-menu"
          aria-hidden="!isMenuOpen">
          <div class="flex flex-col space-y-4">
            <a 
              v-for="(item, index) in navItems" 
              :key="item.name" 
              @click.prevent="scrollToSection(item.href)"
              :href="item.href" 
              class="mobile-nav-link"
              :class="{ 'active': item.active }"
              :style="{ animationDelay: `${index * 0.1 + 0.1}s` }"
              @click="closeMenu">
              <span>{{ item.name }}</span>
              <svg v-if="item.active" class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </a>
            
            <a 
              href="#contacto" 
              class="mobile-nav-link-cta"
              :style="{ animationDelay: `${navItems.length * 0.1 + 0.2}s` }"
              @click.prevent="openContactModal">
              <span>Contacto</span>
              <svg class="ml-1.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </nav>
  </header>
</template>

<script>
import ContactModal from './ContactModal.vue'

export default {
  name: 'Navbar',
  components: {
    ContactModal
  },
  data() {
    return {
      isMenuOpen: false,
      scrolled: false,
      isContactModalOpen: false,
      navItems: [
        { name: 'Inicio', href: '#inicio', active: true, id: 'inicio' },
        { name: 'Sobre Mí', href: '#sobre-mi', active: false, id: 'sobre-mi' },
        { name: 'Proyectos', href: '#proyectos', active: false, id: 'proyectos' },
        { name: 'Habilidades', href: '#skills', active: false, id: 'skills' },
      ],
      activeSection: 'inicio'
    }
  },
  computed: {
    logoUrl() {
      return '/assets/img/sp.webp';
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('scroll', this.checkActiveSection);
    this.checkActiveSection();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('scroll', this.checkActiveSection);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.classList.toggle('menu-open', this.isMenuOpen);
    },
    closeMenu() {
      this.isMenuOpen = false;
      document.body.classList.remove('menu-open');
    },
    handleScroll() {
      this.scrolled = window.scrollY > 20;
    },
    checkActiveSection() {
      const sections = this.navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section, index) => {
        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          this.navItems.forEach(item => item.active = false);
          this.navItems[index].active = true;
          this.activeSection = this.navItems[index].id;
        }
      });
    },
    scrollToSection(href) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      this.closeMenu();
    },
    openContactModal() {
      this.isContactModalOpen = true
      this.closeMenu()
    },
    closeContactModal() {
      this.isContactModalOpen = false
    }
  }
}
</script>

<style scoped>
/* Clases de navegación */
.nav-link {
  @apply px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-200;
}

.nav-link.active {
  @apply text-white;
}

/* Estilo del botón hamburguesa */
.hamburger-button {
  @apply p-2 rounded-md bg-transparent focus:outline-none;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.hamburger {
  @apply relative;
  width: 24px;
  height: 20px;
}

.hamburger-line {
  @apply absolute bg-gray-300 rounded-full;
  height: 2px;
  width: 100%;
  left: 0;
  transition: all 0.3s ease;
}

.hamburger-line:nth-child(1) {
  top: 0;
}

.hamburger-line:nth-child(2) {
  top: 50%;
  transform: translateY(-50%);
}

.hamburger-line:nth-child(3) {
  bottom: 0;
}

.hamburger.active .hamburger-line:nth-child(1) {
  @apply bg-emerald-500;
  transform: translateY(9px) rotate(45deg);
}

.hamburger.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger.active .hamburger-line:nth-child(3) {
  @apply bg-emerald-500;
  transform: translateY(-9px) rotate(-45deg);
}

/* Estilos del menú móvil */
.mobile-menu-wrapper {
  @apply fixed inset-0 bg-gray-900/95 backdrop-blur-sm;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
}

.mobile-menu-wrapper.active {
  opacity: 1;
  visibility: visible;
}

.mobile-menu {
  @apply fixed right-0 top-0 h-screen w-4/5 max-w-xs bg-gray-800 p-6 pt-24;
  transform: translateX(100%);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.mobile-menu-wrapper.active .mobile-menu {
  transform: translateX(0);
}

.mobile-nav-link {
  @apply flex items-center justify-between px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-200;
  opacity: 0;
  transform: translateX(20px);
}

.mobile-nav-link.active {
  @apply bg-gray-700/50 text-white;
}

.mobile-nav-link-cta {
  @apply flex items-center justify-between px-4 py-3 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-all duration-200 mt-4;
  opacity: 0;
  transform: translateX(20px);
}

.mobile-menu-wrapper.active .mobile-nav-link,
.mobile-menu-wrapper.active .mobile-nav-link-cta {
  animation: slideIn 0.4s forwards;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Animación personalizada para el pulso lento */
@keyframes pulse-slow {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}

.animate-pulse-slow {
  animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style> 