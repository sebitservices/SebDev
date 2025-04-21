# SebDev - Portfolio Personal

![SebDev Logo](public/assets/img/sp.webp)

Portfolio personal desarrollado con Vue.js y TailwindCSS, mostrando proyectos, habilidades y experiencia profesional.

## 🚀 Características

- Diseño moderno y responsivo
- Animaciones suaves y transiciones
- Modo oscuro por defecto
- Formulario de contacto con EmailJS
- Optimización de rendimiento
- Sección de habilidades interactiva
- Integración con proyectos de GitHub

## 🛠️ Tecnologías Utilizadas

- Vue.js 2.7
- TailwindCSS 3.4
- Webpack 5
- EmailJS
- Node.js 18.x

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tuusuario/sebdev.git
cd sebdev
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno:
```env
VUE_APP_EMAILJS_PUBLIC_KEY=tu_clave_publica
VUE_APP_EMAILJS_SERVICE_ID=tu_service_id
VUE_APP_EMAILJS_TEMPLATE_ID=tu_template_id
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## 🚀 Despliegue

El proyecto está configurado para ser desplegado en Vercel:

1. Asegúrate de tener la CLI de Vercel instalada:
```bash
npm install -g vercel
```

2. Despliega a Vercel:
```bash
vercel
```

O simplemente conecta tu repositorio de GitHub a Vercel para despliegues automáticos.

## 📁 Estructura del Proyecto

```
sebdev/
├── src/
│   ├── components/     # Componentes Vue
│   ├── assets/         # Recursos estáticos
│   ├── templates/      # Plantillas de correo
│   └── main.js         # Punto de entrada
├── public/             # Archivos públicos
├── dist/              # Archivos de producción
└── webpack.config.js  # Configuración de Webpack
```

## 🔧 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run build:analyze`: Analiza el bundle de producción
- `npm start`: Inicia el servidor de producción

## 📧 Configuración de EmailJS

El proyecto utiliza EmailJS para el formulario de contacto. Se utilizan dos plantillas:
- `template_0fnlghz`: Confirmación para el cliente
- `template_wvgk1f2`: Notificación para el administrador

## 🎨 Personalización

El diseño utiliza TailwindCSS y puede ser personalizado modificando:
- `tailwind.config.js` para temas y configuración
- Clases de utilidad en los componentes
- Variables CSS en `src/assets/main.css`

## 📝 Licencia

ISC

## 👤 Autor

- Sebastián Peña
- Email: admin@sebitservices.cl
- Website: [sebitservices.cl](https://sebitservices.cl)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

## 💫 Agradecimientos

- [Vue.js](https://vuejs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)
- [Vercel](https://vercel.com/) 