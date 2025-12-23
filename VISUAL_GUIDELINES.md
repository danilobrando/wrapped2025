# Manual de Manejo Visual - Tribu iA 2025 Wrapped

## 📋 Descripción General

Este documento establece las directrices visuales para el proyecto **2025 Wrapped de Tribu iA**, un carrusel interactivo que presenta los logros y métricas de la comunidad durante el año 2025.

---

## 🎨 Identidad de Marca

### Logo Principal
- **Archivo**: `Icono tribu IA fondo blanco.png`
- **Uso**: Slide de introducción, slide final, marca de agua opcional
- **Tamaño mínimo**: 120px de altura
- **Espaciado**: Mantener espacio mínimo de 20px alrededor del logo

### Paleta de Colores Principal

#### Colores Corporativos
```css
--tribu-primary: #FF6B35;      /* Naranja vibrante - Acción/CTA */
--tribu-secondary: #6C5CE7;    /* Púrpura - Innovación/IA */
--tribu-accent: #00D9FF;       /* Cyan - Energía/Comunidad */
--tribu-dark: #0F0F1E;         /* Fondo oscuro principal */
--tribu-dark-alt: #1A1A2E;     /* Fondo oscuro secundario */
--tribu-dark-subtle: #2E3A59;  /* Elementos sobre oscuro */
--tribu-light: #F8F9FA;        /* Texto sobre oscuro */
--tribu-white: #FFFFFF;        /* Texto destacado */
```

#### Colores Temáticos por Slide
Cada slide tiene un gradiente característico:

- **Eventos**: Púrpura → Azul (`#6C5CE7 → #4834DF`)
- **YouTube**: Rojo → Naranja (`#FF3838 → #FF6B35`)
- **Product/Learning**: Verde → Cyan (`#1DD1A1 → #00D9FF`)
- **Community**: Naranja → Púrpura (`#FF6B35 → #6C5CE7`)
- **Tech/Agentes**: Azul oscuro → Cyan (`#1B2A49 → #00D9FF`)
- **Impact/Startups**: Dorado → Naranja (`#FFC312 → #FF6B35`)

---

## 🔤 Tipografía

### Sistema de Fuentes

**Fuente Principal** (Títulos y Números):
- **Familia**: `'Outfit', sans-serif`
- **Pesos**: 
  - Extra Bold (800): Números grandes
  - Bold (700): Títulos principales
  - Semi-Bold (600): Subtítulos

**Fuente Secundaria** (Cuerpo):
- **Familia**: `'Inter', sans-serif`
- **Pesos**:
  - Medium (500): Texto descriptivo
  - Regular (400): Texto general

### Escalas de Tamaño
```css
--text-display: 120px;   /* Números destacados */
--text-h1: 56px;         /* Títulos principales */
--text-h2: 40px;         /* Subtítulos */
--text-h3: 28px;         /* Secciones */
--text-body-lg: 20px;    /* Cuerpo grande */
--text-body: 16px;       /* Cuerpo normal */
--text-small: 14px;      /* Texto pequeño */
```

### Jerarquía Visual
1. **Números/Estadísticas**: Display (120px) + Extra Bold + Color accent
2. **Títulos**: H1 (56px) + Bold + Blanco
3. **Descripciones**: Body-lg (20px) + Medium + Color sutil

---

## 📸 Tratamiento de Imágenes

### Inventario de Imágenes por Categoría

#### Eventos Presenciales (6 imágenes)
- `IMG_3091.jpeg` - Evento con audiencia
- `IMG_4460.jpeg` - Presentación en vivo
- `IMG_4463.jpeg` - Networking
- `IMG_6707.jpeg` - Audiencia comprometida
- `IMG_6708.jpeg` - Evento nocturno
- `IMG_6945.jpeg` - Meetup informal

#### Charlas y Educación (4 imágenes)
- `IMG_3445.jpeg` - Presentación técnica
- `IMG_4099.jpeg` - Workshop/taller
- `IMG_5241.jpeg` - Clase o sesión
- `IMG_5566.jpeg` - Formación grupal

#### Comunidad y Networking (3 imágenes)
- `IMG_3736.jpeg` - Grupo reunido
- `IMG_5321.jpeg` - Actividad comunitaria
- `6430a628-db9c-4673-8cdc-a0cfee85b790.jpeg` - Evento especial
- `c6749662-9b68-449b-abdb-82be9f0e6e72.jpeg` - Celebración

### Efectos de Imagen

#### 1. Efecto Duotone
Aplicar dos colores a las imágenes para mantener cohesión:
```css
.duotone-purple {
  filter: grayscale(1) contrast(1.2) brightness(0.9);
  mix-blend-mode: multiply;
  background: linear-gradient(135deg, #6C5CE7, #4834DF);
}
```

#### 2. Overlays de Color
Capas semitransparentes sobre las fotos:
```css
.image-overlay {
  position: relative;
}

.image-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(108, 92, 231, 0.6), rgba(0, 217, 255, 0.4));
  mix-blend-mode: multiply;
}
```

#### 3. Máscaras y Recortes
- **Círculos**: Para fotos de perfil o destacados
- **Formas orgánicas**: Para composiciones artísticas
- **Diagonales**: Para dividir contenido

#### 4. Blur + Focus
```css
.blur-background {
  filter: blur(40px) brightness(0.7);
}

.focus-element {
  filter: none;
  z-index: 10;
}
```

---

## 🧩 Composiciones de Layout

### 1. Bento Grid (Mosaico Moderno)
Diseño tipo dashboard con elementos de diferentes tamaños:
```
┌──────┬─────┐
│      │  2  │
│  1   ├─────┤
│      │  3  │
├──────┴─────┤
│      4     │
└────────────┘
```

### 2. Diagonal Split
División diagonal de la pantalla:
```
┌──────────╲
│  Imagen   ╲
│            ╲
╲  Stats     │
 ╲           │
  ╲──────────┘
```

### 3. Collage Circular
Imágenes en círculos superpuestos:
```
    ●
  ●   ●
    ●
```

### 4. Full Bleed con Overlay
Imagen a pantalla completa con texto superpuesto:
```
┌────────────┐
│ [IMAGEN]   │
│            │
│  TEXTO     │
└────────────┘
```

---

## ✨ Efectos Visuales

### Glassmorphism
```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.37);
}
```

### Sombras Premium
```css
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.15);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.25);
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.35);
--shadow-glow: 0 0 40px rgba(108, 92, 231, 0.4);
```

### Gradientes
```css
--gradient-primary: linear-gradient(135deg, #FF6B35, #6C5CE7);
--gradient-dark: linear-gradient(180deg, #0F0F1E, #1A1A2E);
--gradient-accent: linear-gradient(90deg, #00D9FF, #6C5CE7);
```

---

## 🎬 Animaciones y Transiciones

### Tiempos de Animación
```css
--duration-fast: 200ms;
--duration-normal: 400ms;
--duration-slow: 600ms;
--easing: cubic-bezier(0.4, 0, 0.2, 1);
```

### Animaciones Clave

#### Slide In
```css
@keyframes slideInUp {
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

#### Fade Scale
```css
@keyframes fadeScale {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
```

#### Pulse (Para números)
```css
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
```

---

## 📱 Responsive Design

### Breakpoints
```css
--mobile: 320px;
--tablet: 768px;
--desktop: 1024px;
--wide: 1440px;
```

### Adaptaciones por Dispositivo

#### Mobile (< 768px)
- Font display: 72px
- Font h1: 40px
- Padding: 24px
- Imágenes: Layout vertical
- Carrusel: Swipe obligatorio

#### Tablet (768px - 1024px)
- Font display: 96px
- Font h1: 48px
- Padding: 40px
- Imágenes: Grid 2 columnas

#### Desktop (> 1024px)
- Font display: 120px
- Font h1: 56px
- Padding: 60px
- Imágenes: Composiciones complejas

---

## 🎯 Mejores Prácticas

### DO ✅
- Usar imágenes reales de la comunidad
- Mantener alto contraste entre texto y fondo
- Aplicar efectos visuales consistentes a todas las fotos
- Respetar espaciado mínimo entre elementos (24px)
- Usar números grandes y llamativos para estadísticas
- Incluir micro-animaciones sutiles

### DON'T ❌
- No usar más de 3 colores principales por slide
- No colocar texto sobre áreas complejas de la imagen sin overlay
- No mezclar diferentes estilos de tratamiento de imagen
- No usar animaciones que duren más de 600ms
- No saturar el diseño con demasiados elementos

---

## 📊 Especificaciones por Slide

### Slide 1: Intro
- **Layout**: Logo centrado + texto
- **Fondo**: Gradiente purple-orange + partículas
- **Animación**: Fade in + scale

### Slide 2: Eventos Virtuales
- **Layout**: Bento grid (3 imágenes)
- **Imágenes**: IMG_3091, IMG_4099, IMG_5241
- **Overlay**: Púrpura 60%
- **Estadísticas**: 109 eventos | 9,400 registros

### Slide 3: YouTube
- **Layout**: Full bleed con overlay
- **Imagen**: IMG_3445
- **Overlay**: Rojo-naranja duotone
- **Estadísticas**: 44k vistas | 7,200 horas

### Slide 4-13: [Seguir patrón similar]
Ver `implementation_plan.md` para detalles específicos.

### Slide 14: Cierre
- **Layout**: Mosaico de todas las fotos
- **Opacidad**: 20%
- **Texto**: Centrado con logo
- **CTA**: Botones de compartir

---

## 🔗 Recursos

### Fuentes
- **Outfit**: https://fonts.google.com/specimen/Outfit
- **Inter**: https://fonts.google.com/specimen/Inter

### Inspiración Visual
- Spotify Wrapped
- Apple Year in Review
- Behance Year End Reports

---

## 📝 Notas de Implementación

- Todas las imágenes deben optimizarse para web (WebP, max 1200px width)
- Usar lazy loading para imágenes
- Precarga del slide siguiente para transiciones suaves
- Incluir fallbacks para navegadores sin soporte de backdrop-filter
- Asegurar contraste WCAG AA mínimo para accesibilidad

---

**Versión**: 1.0  
**Última actualización**: 2025-12-23  
**Autor**: Tribu iA Design Team
