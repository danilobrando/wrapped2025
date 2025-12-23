# Tribu iA 2025 Wrapped 🚀

Un carrusel interactivo que celebra los logros de Tribu iA durante 2025, presentando estadísticas, eventos, comunidad y el impacto en Latinoamérica.

![Tribu iA 2025 Wrapped](assets/images/logo/Icono%20tribu%20IA%20fondo%20blanco.png)

## ✨ Características

- **14 slides interactivos** con contenido único
- **Navegación múltiple**: Flechas, teclado, indicadores y touch/swipe
- **Animaciones premium**: Transiciones suaves y efectos visuales
- **Diseño responsive**: Optimizado para móvil, tablet y desktop
- **Compartir en redes**: Botones para Twitter, LinkedIn y copiar link
- **Performance optimizado**: Precarga de imágenes y animaciones GPU-aceleradas

## 🎯 Contenido del Wrapped

1. **Introducción** - Bienvenida con logo
2. **Eventos Virtuales** - 109 eventos, 9,400 registros
3. **YouTube** - 44k vistas, 7,200 horas
4. **Product Managers** - 20 PMs entrenados
5. **AI Tinkerers** - 40+ encuentros, 2000+ builders
6. **Hackathons** - 1000+ personas impactadas
7. **IA Fácil** - 40 clases con Ana Milena
8. **Papers & LLMs** - Especialistas graduados
9. **Agentes - Sesiones** - 45 sesiones, 1,400 personas
10. **Curso Agentes Básico** - 119 estudiantes
11. **Curso Agentes Intermedio** - 80 personas, 8 clases
12. **Comunidades & Conferencias** - Expansión en LATAM
13. **Startups & Igniters** - 10+ startups impulsadas
14. **Cierre** - Agradecimiento a la comunidad

## 🚀 Inicio Rápido

### Opción 1: Abrir Directamente
1. Abre `index.html` en tu navegador favorito
2. ¡Listo! Navega con las flechas o teclas ← →

### Opción 2: Servidor Local (Recomendado)
```bash
# Usando Python
python3 -m http.server 8000

# O usando npx
npx http-server -p 8000
```

Luego abre: `http://localhost:8000`

## ⌨️ Navegación

| Método | Acción |
|--------|--------|
| **Flechas laterales** | Click para siguiente/anterior |
| **Indicadores** | Click para ir a slide específico |
| **← →** | Flechas del teclado |
| **Espacio** | Siguiente slide |
| **Home/End** | Primer/último slide |
| **Swipe** | Deslizar en móvil/tablet |

## 📁 Estructura del Proyecto

```
2025wrapped/
├── index.html                              # Página principal
├── css/
│   ├── reset.css                           # CSS reset
│   ├── variables.css                       # Design tokens
│   ├── global.css                          # Estilos globales
│   ├── components.css                      # Componentes reutilizables
│   └── slides.css                          # Estilos específicos por slide
├── js/
│   ├── utils.js                            # Funciones utilitarias
│   ├── animations.js                       # Sistema de animaciones
│   └── carousel.js                         # Controlador principal
├── assets/
│   └── images/
│       ├── logo/                           # Logo de Tribu iA
│       └── community/                      # 13 fotos de la comunidad
├── VISUAL_GUIDELINES.md                    # Manual de diseño
└── README.md                               # Este archivo
```

## 🎨 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Diseño y animaciones
  - CSS Grid & Flexbox
  - Custom Properties (Variables CSS)
  - Glassmorphism effects
  - Responsive design
- **JavaScript (Vanilla)** - Interactividad
  - ES6+ features
  - Intersection Observer API
  - Touch events

**Sin dependencias externas** ✨

## 🎨 Sistema de Diseño

### Colores Principales
- **Primary**: `#FF6B35` (Naranja)
- **Secondary**: `#6C5CE7` (Púrpura)
- **Accent**: `#00D9FF` (Cyan)

### Tipografía
- **Display**: Outfit (800, 700, 600)
- **Body**: Inter (500, 400)

Ver [`VISUAL_GUIDELINES.md`](VISUAL_GUIDELINES.md) para más detalles.

## 📱 Responsive

El carrusel se adapta automáticamente a:
- **Móvil** (< 768px): Layout vertical, touch-first
- **Tablet** (768px - 1024px): Grids de 2 columnas
- **Desktop** (> 1024px): Composiciones completas

## 🔧 Personalización

### Cambiar Colores
Edita las variables en `css/variables.css`:
```css
:root {
  --tribu-primary: #TU_COLOR;
  --tribu-secondary: #TU_COLOR;
}
```

### Añadir/Modificar Slides
1. Duplica una sección `<section class="slide">` en `index.html`
2. Añade estilos específicos en `css/slides.css`
3. Actualiza `totalSlides` en `js/carousel.js`

### Cambiar Velocidad de Animación
En `css/variables.css`:
```css
--duration-normal: 400ms;  /* Cambiar valor */
```

## ✅ Características de Accesibilidad

- ✅ Navegación completa por teclado
- ✅ ARIA labels en elementos interactivos  
- ✅ Contraste de colores WCAG AA
- ✅ Focus indicators visibles
- ✅ Soporte para `prefers-reduced-motion`

## 🌐 Compatibilidad de Navegadores

| Navegador | Versión Mínima |
|-----------|----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Mobile Safari | iOS 14+ |
| Chrome Mobile | Android 90+ |

## 📊 Performance

- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Tamaño total**: ~2MB (incluye imágenes)

### Optimizaciones Aplicadas
- Lazy loading de imágenes
- CSS containment
- Transform-based animations (GPU)
- Preload de siguiente slide

## 🤝 Compartir

El botón de compartir en el último slide permite:
- 🐦 Compartir en Twitter
- 💼 Compartir en LinkedIn
- 🔗 Copiar link al portapapeles

## 📝 Próximas Mejoras (Opcional)

- [ ] Modo auto-play con controles
- [ ] Exportar como PDF
- [ ] Modo presentación fullscreen
- [ ] Animaciones de partículas más complejas
- [ ] Música de fondo (opcional)
- [ ] Progressive Web App (PWA)

## 📄 Licencia

© 2025 Tribu iA. Todos los derechos reservados.

## 👥 Créditos

**Desarrollado con ❤️ para la comunidad de Tribu iA**

### Equipo
- Contenido: Tribu iA Team
- Desarrollo: Antigravity AI
- Diseño: Basado en manual de marca Tribu iA
- Fotografía: Eventos de la comunidad 2025

---

## 🆘 Soporte

¿Problemas o preguntas?
- Email: [contacto@tribuia.com](mailto:contacto@tribuia.com)
- Twitter: [@TribuiA](https://twitter.com/TribuiA)

---

**¡Gracias por ser parte de Tribu iA en 2025! 🚀**
# wrapped2025
