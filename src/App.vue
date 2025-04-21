<template>
  <div id="app" class="min-h-screen bg-gray-900">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    About,
    Projects,
    Skills,
    Footer
  }
}
</script> 