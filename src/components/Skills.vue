<!-- Skills.vue -->
<template>
  <section id="skills" class="relative py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
        Stack Tecnológico
      </h2>

      <div class="skills-cloud" ref="skillsContainer">
        <canvas ref="canvas" width="800" height="500" loading="lazy"></canvas>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skills: [
        // Tecnologías principales
        ['JavaScript', 28],
        ['Vue.js', 28],
        ['Node.js', 28],
        ['Python', 26],
        
        // Frontend
        ['React', 24],
        ['TypeScript', 24],
        ['TailwindCSS', 24],
        ['HTML5', 24],
        ['CSS3', 24],
        ['Angular', 22],
        ['Astro', 22],
        ['Sass', 22],
        ['Bootstrap', 22],
        
        // Backend
        ['Express', 24],
        ['Django', 24],
        ['MongoDB', 22],
        ['PostgreSQL', 22],
        ['MySQL', 22],
        ['Firebase', 22],
        ['GraphQL', 22],
        
        // Herramientas y otros
        ['Git', 24],
        ['Docker', 22],
        ['AWS', 22],
        ['Linux', 22],
        ['DevOps', 24],
        ['Webpack', 20],
        ['Jest', 20],
        ['Redux', 20],
        ['REST API', 22]
      ],
      observer: null,
      wordCloudInstance: null
    }
  },
  mounted() {
    // Usar Intersection Observer para lazy loading
    this.observer = new IntersectionObserver(this.handleIntersection, {
      root: null,
      threshold: 0.1
    });
    
    if (this.$refs.skillsContainer) {
      this.observer.observe(this.$refs.skillsContainer);
    }
  },
  beforeDestroy() {
    // Limpiar recursos
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.wordCloudInstance) {
      // Limpiar instancia de wordcloud si existe un método de limpieza
      this.wordCloudInstance = null;
    }
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    async handleIntersection(entries) {
      const isVisible = entries[0]?.isIntersecting;
      
      if (isVisible) {
        // Cargar WordCloud dinámicamente solo cuando sea visible
        const WordCloud = (await import('wordcloud')).default;
        this.createWordCloud(WordCloud);
        this.observer.disconnect();
        
        // Agregar listener de resize después de crear el wordcloud
        window.addEventListener('resize', this.debounce(this.handleResize, 250));
      }
    },
    debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },
    handleResize() {
      this.createWordCloud();
    },
    async createWordCloud(WordCloud) {
      const options = {
        list: this.skills,
        gridSize: 8,
        weightFactor: 1.8,
        fontFamily: 'Inter, sans-serif',
        fontWeight: 700,
        color: (word) => this.getColor(word),
        backgroundColor: 'transparent',
        rotateRatio: 0.5,
        rotationSteps: 2,
        minRotation: -Math.PI/6,
        maxRotation: Math.PI/6,
        shrinkToFit: true,
        shape: 'circle',
        drawOutOfBound: false,
        classes: 'skill-word',
        clearCanvas: true
      }

      const canvas = this.$refs.canvas;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Usar requestAnimationFrame para mejor rendimiento
        requestAnimationFrame(() => {
          if (!WordCloud) {
            import('wordcloud').then(module => {
              this.wordCloudInstance = module.default(canvas, options);
            });
          } else {
            this.wordCloudInstance = WordCloud(canvas, options);
          }
        });
      }
    },
    getColor(word) {
      const colors = {
        // Frontend
        'JavaScript': '#f7df1e',
        'TypeScript': '#3178c6',
        'Vue.js': '#42b883',
        'React': '#61dafb',
        'Angular': '#dd1b16',
        'Astro': '#ff5d01',
        'TailwindCSS': '#38bdf8',
        'HTML5': '#e34f26',
        'CSS3': '#1572b6',
        'Sass': '#cc6699',
        'Bootstrap': '#7952b3',
        
        // Backend
        'Node.js': '#339933',
        'Python': '#3776ab',
        'Django': '#092e20',
        'Express': '#ffffff',
        'MongoDB': '#47a248',
        'PostgreSQL': '#336791',
        'MySQL': '#4479a1',
        'Firebase': '#ffca28',
        'GraphQL': '#e10098',
        
        // Herramientas y otros
        'Git': '#f05032',
        'Docker': '#2496ed',
        'AWS': '#ff9900',
        'Linux': '#fcc624',
        'DevOps': '#ff6b6b',
        'Webpack': '#8dd6f9',
        'Jest': '#c21325',
        'Redux': '#764abc',
        'REST API': '#009688'
      }
      return colors[word] || '#ffffff'
    }
  }
}
</script>

<style scoped>
.skills-cloud {
  @apply relative flex justify-center items-center min-h-[500px] bg-opacity-10 rounded-xl backdrop-blur-sm p-6 mx-auto;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 800px;
  will-change: transform;
  contain: content;
}

canvas {
  @apply w-full h-full;
  image-rendering: optimizeSpeed;
  transform: translateZ(0);
}

:global(.skill-word) {
  @apply uppercase font-bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

/* Responsive */
@media (max-width: 768px) {
  .skills-cloud {
    min-height: 400px;
  }
  canvas {
    width: 500px;
    height: 400px;
  }
}

@media (max-width: 640px) {
  .skills-cloud {
    min-height: 300px;
  }
  canvas {
    width: 300px;
    height: 250px;
  }
}
</style> 