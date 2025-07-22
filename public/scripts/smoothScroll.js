/**
 * Sistema de desplazamiento suave optimizado
 * Versión simplificada y optimizada para rendimiento
 */

class SmoothScrollNavigation {
  constructor() {
    this.navLinks = document.querySelectorAll("[data-section]");
    this.sections = document.querySelectorAll("section[id]");
    this.isScrolling = false;
    this.topThreshold = 100; // Umbral para considerar "tope" de la página
    this.bottomThreshold = 100; // Umbral para considerar "final" de la página

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.setupIntersectionObserver();
    this.setupScrollHandler();
  }

  setupEventListeners() {
    // Guardar referencia al handler para poder removerlo después
    this.handleNavClick = (e) => {
      e.preventDefault();
      this.scrollToSection(e.currentTarget.dataset.section);
    };

    // Interceptar clics en enlaces de navegación
    this.navLinks.forEach((link) => {
      link.addEventListener("click", this.handleNavClick);
    });

    // Prevenir comportamiento por defecto de enlaces con hash
    this.handleDocumentClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target && target.dataset.section) {
        e.preventDefault();
        this.scrollToSection(target.dataset.section);
      }
    };

    document.addEventListener("click", this.handleDocumentClick);
  }

  scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (!targetSection || this.isScrolling) return;

    this.isScrolling = true;
    const headerHeight =
      document.getElementById("site-header")?.offsetHeight || 0;
    const targetPosition = targetSection.offsetTop - headerHeight - 20;

    this.smoothScrollTo(targetPosition, 600);

    // Resetear flag después de completar
    setTimeout(() => (this.isScrolling = false), 600);
  }

  smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing cubic-bezier simplificado
      const ease =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startPosition + distance * ease);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }

  setupIntersectionObserver() {
    const threshold = window.innerWidth < 768 ? 0.1 : 0.3;
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.isScrolling) {
            this.updateActiveNavLink(entry.target.id);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px -10% ",
      }
    );

    this.sections.forEach((section) => this.observer.observe(section));
  }

  setupScrollHandler() {
    let ticking = false;

    this.handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          this.checkTopPosition();
          this.checkBottomPosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", this.handleScroll, { passive: true });
  }

  checkTopPosition() {
    const currentScroll = window.scrollY;
    const isAtTop = currentScroll <= this.topThreshold;

    // Si estamos en el tope, quitar todos los efectos active
    if (isAtTop) {
      this.clearAllActiveStates();
    }
  }
  checkBottomPosition() {
    const currentScroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Calcular si estamos cerca del final de la página
    const isAtBottom =
      currentScroll + windowHeight >= documentHeight - this.bottomThreshold;

    // Si estamos en el final, quitar todos los efectos active
    if (isAtBottom) {
      this.clearAllActiveStates();
    }
  }

  clearAllActiveStates() {
    this.navLinks.forEach((link) => {
      link.classList.remove("active");
    });
  }

  updateActiveNavLink(sectionId) {
    const currentScroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Solo actualizar si no estamos en el tope ni en el final
    const isAtTop = currentScroll <= this.topThreshold;
    const isAtBottom =
      currentScroll + windowHeight >= documentHeight - this.bottomThreshold;

    if (!isAtTop && !isAtBottom) {
      this.navLinks.forEach((link) => {
        link.classList.toggle("active", link.dataset.section === sectionId);
      });
    }
  }

  // Métodos públicos para compatibilidad
  navigateTo(sectionId) {
    this.scrollToSection(sectionId);
  }

  getCurrentSection() {
    // Retornar la sección actual basada en el scroll
    const currentScroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // No retornar sección si estamos en el tope o en el final
    const isAtTop = currentScroll <= this.topThreshold;
    const isAtBottom =
      currentScroll + windowHeight >= documentHeight - this.bottomThreshold;

    if (isAtTop || isAtBottom) return null;

    for (const section of this.sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        return section.id;
      }
    }
    return null;
  }

  // Método para limpiar recursos
  destroy() {
    // Remover event listeners de navegación
    if (this.navLinks) {
      this.navLinks.forEach((link) => {
        link.removeEventListener("click", this.handleNavClick);
      });
    }

    // Remover document click listener
    if (this.handleDocumentClick) {
      document.removeEventListener("click", this.handleDocumentClick);
    }

    // Remover scroll listener
    if (this.handleScroll) {
      window.removeEventListener("scroll", this.handleScroll);
    }

    // Limpiar observers
    if (this.observer) {
      this.observer.disconnect();
    }

    // Limpiar referencias
    this.navLinks = null;
    this.sections = null;
    this.observer = null;
    this.handleNavClick = null;
    this.handleDocumentClick = null;
    this.handleScroll = null;
  }
}

// Función para limpiar instancias previas
function cleanupSmoothScroll() {
  if (window.smoothScrollNav) {
    // Usar el método destroy para limpiar correctamente
    window.smoothScrollNav.destroy();
    window.smoothScrollNav = null;
  }
}

// Inicializar solo cuando sea necesario (página principal con navegación)
function initializeSmoothScroll() {
  // Limpiar instancia previa si existe
  cleanupSmoothScroll();

  // Solo inicializar si estamos en la página principal y hay elementos de navegación
  const navLinks = document.querySelectorAll("[data-section]");
  const sections = document.querySelectorAll("section[id]");

  // Verificar que estamos en una página con navegación
  if (navLinks.length > 0 && sections.length > 0) {
    window.smoothScrollNav = new SmoothScrollNavigation();
  }
}

// Inicializar en DOMContentLoaded
document.addEventListener("DOMContentLoaded", initializeSmoothScroll);

// Limpiar en transiciones de Astro
document.addEventListener("astro:before-swap", cleanupSmoothScroll);
document.addEventListener("astro:page-load", initializeSmoothScroll);

// Exportar para uso en otros scripts si es necesario
if (typeof module !== "undefined" && module.exports) {
  module.exports = SmoothScrollNavigation;
}
