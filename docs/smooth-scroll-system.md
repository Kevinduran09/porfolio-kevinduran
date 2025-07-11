# Sistema de Desplazamiento Suave

## Descripción

Este sistema implementa navegación suave entre secciones sin modificar la URL del navegador. Utiliza JavaScript puro para interceptar clics en enlaces de navegación y desplazar la página a la sección correspondiente.

## Características

- ✅ **No modifica la URL**: Los enlaces con `#` no alteran la barra de direcciones
- ✅ **Desplazamiento suave**: Animación fluida con easing personalizado
- ✅ **Detección de sección activa**: Actualiza automáticamente el enlace activo
- ✅ **Header inteligente**: Se oculta/muestra según el scroll
- ✅ **Optimizado para rendimiento**: Usa `requestAnimationFrame` y throttling
- ✅ **Responsive**: Adapta el comportamiento según el tamaño de pantalla

## Cómo funciona

### 1. Interceptación de clics
```javascript
// Intercepta clics en enlaces con data-section
this.navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        this.scrollToSection(link.dataset.section);
    });
});
```

### 2. Desplazamiento suave personalizado
```javascript
// Función de easing cubic-bezier para movimiento natural
this.smoothScrollTo(targetPosition, 800, (t) => {
    return t < 0.5 
        ? 4 * t * t * t 
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
});
```

### 3. Detección de sección activa
```javascript
// Usa IntersectionObserver para detectar sección visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !this.isScrolling) {
            this.updateActiveNavLink(entry.target.id);
        }
    });
});
```

## Estructura de archivos

```
public/
  └── scripts/
      └── smoothScroll.js    # Sistema principal de navegación

src/
  ├── components/
  │   └── Header.astro      # Componente de navegación
  └── pages/
      └── index.astro        # Página principal con secciones
```

## Configuración

### Enlaces de navegación
```astro
<a href="#projects" class="nav-link" data-section="projects">
    Proyectos
</a>
```

### Secciones de la página
```astro
<section id="projects" class="min-h-screen w-full">
    <Projects />
</section>
```

## API del sistema

### Métodos públicos
```javascript
// Navegar programáticamente
window.smoothScrollNav.navigateTo('projects');

// Obtener sección actual
const currentSection = window.smoothScrollNav.getCurrentSection();
```

### Eventos personalizados
```javascript
// Escuchar cambios de sección
document.addEventListener('sectionChange', (e) => {
    console.log('Nueva sección:', e.detail.sectionId);
});
```

## Personalización

### Duración de animación
```javascript
// En smoothScroll.js, línea 45
this.smoothScrollTo(targetPosition, 800, easingFunction);
```

### Offset del header
```javascript
// En smoothScroll.js, línea 42
const targetPosition = targetSection.offsetTop - headerHeight - 20;
```

### Umbral de detección
```javascript
// En smoothScroll.js, línea 95
threshold: 0.6
```

## Compatibilidad

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## Rendimiento

- **Throttling**: Los eventos de scroll están optimizados
- **Passive listeners**: Usa `{ passive: true }` para mejor rendimiento
- **RequestAnimationFrame**: Animaciones suaves sin bloquear el hilo principal
- **IntersectionObserver**: Detección eficiente de secciones visibles

## Troubleshooting

### El scroll no funciona
1. Verifica que las secciones tengan IDs únicos
2. Asegúrate de que los enlaces tengan `data-section`
3. Confirma que el script se cargue correctamente

### Animación muy rápida/lenta
1. Ajusta la duración en `smoothScrollTo(targetPosition, 800, ...)`
2. Modifica la función de easing para cambiar la curva

### Header no se oculta
1. Verifica que el header tenga ID `site-header`
2. Confirma que las clases CSS estén definidas

## Mejoras futuras

- [ ] Soporte para navegación con teclado
- [ ] Animaciones más avanzadas
- [ ] Soporte para scroll horizontal
- [ ] Integración con History API (opcional)
- [ ] Animaciones de entrada/salida de secciones 