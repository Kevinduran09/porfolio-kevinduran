import { animate } from "https://cdn.jsdelivr.net/npm/motion@12.23.0/+esm";
import { animatedElements } from "./animationState.js";
let threshold = 0.2;
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

document.querySelectorAll(".animate-on-visible").forEach((el) => {
  const id = el.dataset.animId;
  if (!animatedElements.has(id)) {
    observer.observe(el);
  } else {
    // Ya animado → aplicar visibilidad inmediatamente
    el.style.opacity = 1;
    el.style.transform = "none";
  }
});
