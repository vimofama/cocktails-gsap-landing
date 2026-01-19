# 🍹 Cocktails GSAP Landing Page

Una landing page moderna y animada para una tienda de cócteles, desarrollada con React, TypeScript y Vite. Este proyecto demuestra el poder de **GSAP (GreenSock Animation Platform)** para crear experiencias web fluidas y atractivas.

## 🎯 Descripción

Este proyecto es una página web educativa que combina lo mejor del desarrollo frontend moderno con animaciones profesionales usando GSAP. La landing page presenta una tienda ficticia de cócteles con secciones interactivas, animaciones suaves y un diseño responsivo.

Ideal para aprender:
- ✨ Animaciones avanzadas con GSAP
- 🎨 Integración de GSAP con React
- 📱 Diseño responsivo con Tailwind CSS
- ⚡ Desarrollo rápido con Vite
- 📝 Type safety con TypeScript

## 🚀 Características

- **Animaciones fluidas**: Implementadas con GSAP para transiciones y efectos visuales profesionales
- **Diseño responsivo**: Adaptable a cualquier dispositivo usando Tailwind CSS v4
- **Type Safety**: Desarrollado completamente en TypeScript
- **Componentes modulares**: Arquitectura de componentes React reutilizables
- **Optimización de videos**: Procesamiento con FFmpeg para reproducción web optimizada
- **Performance**: Construcción optimizada con Vite para tiempos de carga rápidos

## 🛠️ Tecnologías

- **React 19** - Biblioteca UI
- **TypeScript** - Type safety
- **Vite** - Build tool y dev server
- **GSAP 3.14** - Animaciones
- **@gsap/react** - Hooks de GSAP para React
- **Tailwind CSS 4** - Framework CSS
- **react-responsive** - Media queries en React
- **ESLint** - Linting de código

## 📦 Instalación

### Prerequisitos

- Node.js (versión 18 o superior)
- pnpm (recomendado) o npm

### Pasos

1. Clona el repositorio:
```bash
git clone https://github.com/vimofama/cocktails-gsap-landing.git
cd cocktails-gsap-landing
```

2. Instala las dependencias:
```bash
pnpm install
# o
npm install
```

3. Inicia el servidor de desarrollo:
```bash
pnpm dev
# o
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 📜 Scripts Disponibles

```bash
pnpm dev      # Inicia el servidor de desarrollo
pnpm build    # Compila el proyecto para producción
pnpm lint     # Ejecuta ESLint
pnpm preview  # Previsualiza la build de producción
```

## 📁 Estructura del Proyecto

```
jsm_gsap_landing/
├── public/              # Archivos estáticos
│   ├── fonts/          # Fuentes personalizadas
│   ├── images/         # Imágenes del proyecto
│   └── videos/         # Videos optimizados
├── src/
│   ├── components/     # Componentes React
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   └── Cocktails.tsx
│   ├── constants/      # Constantes y configuraciones
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Punto de entrada
│   └── index.css       # Estilos globales
├── index.html          # HTML template
├── vite.config.ts      # Configuración de Vite
└── tsconfig.json       # Configuración de TypeScript
```

## 🎬 Optimización de Videos con FFmpeg

Para optimizar videos para la web, este proyecto utiliza FFmpeg. El siguiente comando genera un video optimizado para reproducción progresiva en navegadores:

### Prerequisitos
Instala [FFmpeg](https://ffmpeg.org/download.html) en tu máquina.

### Comando

Navega al directorio donde está tu video de entrada y ejecuta:

```bash
ffmpeg -i input.mp4 -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output.mp4
```

**Explicación de parámetros:**
- `-i input.mp4` - Archivo de entrada
- `-vf scale=960:-1` - Escala el video a 960px de ancho manteniendo la relación de aspecto
- `-movflags faststart` - Optimiza para streaming web (reproducción progresiva)
- `-vcodec libx264` - Codec H.264 para máxima compatibilidad
- `-crf 20` - Factor de calidad constante (menor = mejor calidad)
- `-g 1` - Cada frame es un keyframe (mejora la precisión de seek)
- `-pix_fmt yuv420p` - Formato de píxel compatible con todos los navegadores
- `output.mp4` - Archivo de salida optimizado

## 🔗 Enlaces

- **Repositorio**: [github.com/vimofama/cocktails-gsap-landing](https://github.com/vimofama/cocktails-gsap-landing)
- **GSAP Docs**: [gsap.com/docs](https://gsap.com/docs/v3/)
- **React Docs**: [react.dev](https://react.dev)
- **Vite Docs**: [vitejs.dev](https://vitejs.dev)
