import { animate } from "https://cdn.jsdelivr.net/npm/motion@12.23.0/+esm";
import { animatedElements } from "./animationState.js";
let threshold = 0.2;

// Ocultar elementos inmediatamente antes de que sean visibles
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.animate-on-visible').forEach(el => {
    const id = el.dataset.animId;
    if (!animatedElements.has(id)) {
      el.style.opacity = '0';
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.bento').forEach(el => {
    const id = el.dataset.animId;
    if (!animatedElements.has(id)) {
     
      el.style.opacity = '0';
   
      el.style.transform = 'scale(0.75)';
      el.style.transition = 'none';
    }
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;

      if (entry.isIntersecting) {
        const direction = el.dataset.direction || "bottom";
        const delay = parseFloat(el.dataset.delay || "0");
        const duration = parseFloat(el.dataset.duration || "0.8");
        threshold = parseFloat(el.dataset.threshold || "0.2");
        const transformStart = {
          right: "translateX(200px)",
          left: "translateX(-200px)",
          top: "translateY(-50px)",
          bottom: "translateY(50px)",
          default: "translate(0)",
        }[direction];

        animate(
          el,
          {
            opacity: [0, 1],
            transform: [transformStart, "translateX(0)", "translateY(0)"],
          },
          {
            delay,
            duration,
            easing: "ease-out",
          }
        );
        el.classList.add("animated");
        observer.unobserve(el); // Detener después de animar
      }
    });
  },
  {
    threshold: threshold,
  }
);

// Función para inicializar las animaciones
function initializeAnimations() {
  document.querySelectorAll(".animate-on-visible").forEach((el) => {
    const id = el.dataset.animId;
    if (!animatedElements.has(id)) {
      // Asegurarse de que el elemento esté oculto antes de observarlo
      el.style.opacity = '0';
      observer.observe(el);
    } else {
      // Si ya fue animado anteriormente, mostrarlo sin animación
      el.style.opacity = '1';
      el.style.transform = "none";
      el.classList.add("animated");
    }
  });

  // Para los bentos, no los observamos con el observer global (su script maneja la animación),
  // pero sí nos aseguramos de que si ya fueron animados se muestren correctamente.
  document.querySelectorAll('.bento').forEach(el => {
    const id = el.dataset.animId;
    if (animatedElements.has(id)) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.classList.add('animated');
    }
  });
}

// Inicializar tan pronto como sea posible
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAnimations);
} else {
  initializeAnimations();
}
