<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <!-- Fondo oscuro -->
    <div class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity backdrop-blur-sm"></div>

    <!-- Contenedor del modal -->
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div class="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg border border-emerald-500/20">
        <!-- Contenido del modal -->
        <div class="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <!-- Icono -->
            <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 sm:mx-0 sm:h-10 sm:w-10">
              <svg class="h-6 w-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <!-- Título -->
            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 class="text-xl font-semibold leading-6 text-white" id="modal-title">
                Contáctame
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-300">
                  Completa el formulario y me pondré en contacto contigo lo antes posible.
                </p>
              </div>
            </div>
          </div>

          <!-- Formulario -->
          <form class="mt-6 space-y-4" @submit.prevent="handleSubmit">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-300">Nombre</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name"
                class="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                required
              >
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email"
                class="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                required
              >
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-300">Mensaje</label>
              <textarea 
                id="message" 
                v-model="formData.message"
                rows="4" 
                class="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                required
              ></textarea>
            </div>
            <div v-if="error" class="text-red-500 text-sm mt-2">{{ error }}</div>
            <div v-if="success" class="text-emerald-500 text-sm mt-2">{{ success }}</div>
          </form>
        </div>

        <!-- Botones de acción -->
        <div class="bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 border-t border-gray-700">
          <button 
            type="button" 
            class="inline-flex w-full justify-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 sm:ml-3 sm:w-auto"
            :class="{'btn-loading': isLoading}"
            @click="handleSubmit"
          >
            Enviar mensaje
          </button>
          <button 
            type="button" 
            class="mt-3 inline-flex w-full justify-center rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-gray-300 shadow-sm ring-1 ring-inset ring-gray-600 hover:bg-gray-600 sm:mt-0 sm:w-auto"
            @click="closeModal"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
  name: 'ContactModal',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      error: null,
      success: null,
      isLoading: false
    }
  },
  mounted() {
    emailjs.init("cM1U6QE7PGKxeEewo")
  },
  methods: {
    closeModal() {
      this.formData = {
        name: '',
        email: '',
        message: ''
      }
      this.error = null
      this.success = null
      this.$emit('close')
    },
    async handleSubmit() {
      try {
        this.isLoading = true
        this.error = null
        this.success = null

        // Enviar notificación al cliente
        await emailjs.send(
          "service_qp3bchf",
          "template_0fnlghz",
          {
            to_name: this.formData.name,
            to_email: this.formData.email,
            message: this.formData.message
          }
        )

        // Enviar notificación al admin
        await emailjs.send(
          "service_qp3bchf",
          "template_wvgk1f2",
          {
            from_name: this.formData.name,
            from_email: this.formData.email,
            message: this.formData.message
          }
        )

        this.success = "¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto."
        setTimeout(() => {
          this.closeModal()
        }, 2000)
      } catch (error) {
        console.error('Error al enviar el mensaje:', error)
        this.error = "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente."
      } finally {
        this.isLoading = false
      }
    }
  },
  watch: {
    isOpen(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    }
  },
  beforeDestroy() {
    document.body.style.overflow = 'auto'
  }
}
</script>

<style scoped>
/* Animaciones para el modal */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Transiciones suaves */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Estado de carga del botón */
.btn-loading {
  position: relative;
  cursor: not-allowed;
  opacity: 0.7;
}

.btn-loading::after {
  content: '';
  position: absolute;
  width: 1rem;
  height: 1rem;
  top: 50%;
  left: 50%;
  margin: -0.5rem 0 0 -0.5rem;
  border: 2px solid transparent;
  border-top-color: currentColor;
  border-left-color: currentColor;
  border-radius: 50%;
  animation: button-loading-spinner 0.6s linear infinite;
}

@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(1turn);
  }
}
</style> 