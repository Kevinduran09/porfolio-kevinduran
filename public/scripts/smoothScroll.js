/**
 * Sistema de desplazamiento suave entre secciones
 * Permite navegar entre secciones sin modificar la URL
 */

class SmoothScrollNavigation {
    constructor() {
        this.navLinks = document.querySelectorAll('[data-section]');
        this.sections = document.querySelectorAll('section[id]');
        this.currentSection = null;
        this.isScrolling = false;
        this.scrollTimeout = null;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupIntersectionObserver();
        this.setupScrollThrottling();
    }

    setupEventListeners() {
        // Interceptar clics en enlaces de navegación
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.scrollToSection(link.dataset.section);
            });
        });

        // Prevenir comportamiento por defecto de enlaces con hash
        document.addEventListener('click', (e) => {
            const target = e.target.closest('a[href^="#"]');
            if (target && target.dataset.section) {
                e.preventDefault();
                this.scrollToSection(target.dataset.section);
            }
        });
    }

    scrollToSection(sectionId) {
        const targetSection = document.getElementById(sectionId);
        if (!targetSection) return;

        this.isScrolling = true;
        
        // Calcular offset para el header fijo
        const headerHeight = document.getElementById('site-header')?.offsetHeight || 0;
        const targetPosition = targetSection.offsetTop - headerHeight - 20;

        // Desplazamiento suave con easing personalizado
        this.smoothScrollTo(targetPosition, 800, (t) => {
            // Función de easing cubic-bezier para movimiento más natural
            return t < 0.5 
                ? 4 * t * t * t 
                : 1 - Math.pow(-2 * t + 2, 3) / 2;
        });

        // Actualizar estado de navegación
        this.updateActiveNavLink(sectionId);
        
        // Resetear flag de desplazamiento después de completar
        setTimeout(() => {
            this.isScrolling = false;
        }, 800);
    }

    smoothScrollTo(targetPosition, duration, easingFunction) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const startTime = performance.now();

        const animateScroll = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easingFunction(progress);
            
            window.scrollTo(0, startPosition + distance * easedProgress);

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    }

    setupIntersectionObserver() {
        const observerOptions = {
            rootMargin: window.innerWidth <= 768 
                ? '0px 0px -50% 0px' 
                : '0px 0px -20% 0px',
            threshold: 0.6
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.isScrolling) {
                    this.updateActiveNavLink(entry.target.id);
                    this.currentSection = entry.target.id;
                }
            });
        }, observerOptions);

        this.sections.forEach(section => {
            observer.observe(section);
        });
    }

    setupScrollThrottling() {
        let ticking = false;

        const updateOnScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.handleScrollUpdate();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', updateOnScroll, { passive: true });
    }

    handleScrollUpdate() {
        // Actualizar visibilidad del header
        const header = document.getElementById('site-header');
        if (!header) return;

        const currentScroll = window.scrollY;
        const lastScroll = this.lastScroll || 0;
        const scrollDelta = currentScroll - lastScroll;
        
        // Mostrar header cuando se hace scroll hacia arriba o en el tope
        const shouldShow = currentScroll < 100 || scrollDelta < 0;
        
        if (shouldShow) {
            header.classList.remove('hidden');
            header.classList.add('visible');
        } else if (currentScroll > 200) {
            // Ocultar solo cuando se hace scroll hacia abajo y no estamos cerca del tope
            header.classList.add('hidden');
            header.classList.remove('visible');
        }
        
        this.lastScroll = currentScroll;
    }

    updateActiveNavLink(sectionId) {
        this.navLinks.forEach(link => {
            const isActive = link.dataset.section === sectionId;
            link.classList.toggle('active', isActive);
        });
    }

    // Método público para navegar programáticamente
    navigateTo(sectionId) {
        this.scrollToSection(sectionId);
    }

    // Método para obtener la sección actual
    getCurrentSection() {
        return this.currentSection;
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.smoothScrollNav = new SmoothScrollNavigation();
});

// Exportar para uso en otros scripts si es necesario
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SmoothScrollNavigation;
} 