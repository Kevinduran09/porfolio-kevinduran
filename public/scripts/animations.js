import { animate } from "https://cdn.jsdelivr.net/npm/motion@12.23.0/+esm";
import { animatedElements } from "./animationState.js"; // Set global

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const el = entry.target;

    if (entry.isIntersecting) {
      const id = el.dataset.animId;
      const direction = el.dataset.direction || "bottom";
      const delay = parseFloat(el.dataset.delay || "0");
      const duration = parseFloat(el.dataset.duration || "0.8");

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
          transform: [transformStart, "translate(0)"],
        },
        {
          delay,
          duration,
          easing: "ease-out",
        }
      );

      animatedElements.add(id);
      observer.unobserve(el); // Solo una vez
    }
  });
}, { threshold: 0.2 });

// Inicialización
document.querySelectorAll(".animate-on-visible").forEach((el) => {
  const id = el.dataset.animId;
  const direction = el.dataset.direction || "bottom";

  const transformStart = {
    right: "translateX(200px)",
    left: "translateX(-200px)",
    top: "translateY(-50px)",
    bottom: "translateY(50px)",
    default: "translate(0)",
  }[direction];

  if (!animatedElements.has(id)) {
    // Estado inicial antes de animar (evita parpadeo)
    el.style.opacity = 0;
    el.style.transform = transformStart;
    observer.observe(el);
  } else {
    // Ya animado → aplicar estado final
    el.style.opacity = 1;
    el.style.transform = "none";
  }
});
