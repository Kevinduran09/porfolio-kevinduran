import { animate } from "https://cdn.jsdelivr.net/npm/motion@12.23.0/+esm";

let threshold = 0.2;
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const direction = el.dataset.direction || "bottom";
        const delay = parseFloat(el.dataset.delay || "0");
        const duration = parseFloat(el.dataset.duration || "0.8");
        threshold = parseFloat(el.dataset.threshold || "0.2");
        const transformStart = {
          right: "translateX(50px)",
          left: "translateX(-50px)",
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

        observer.unobserve(el); // Detener después de animar
      }
    });
  },
  {
    threshold: threshold,
  }
);

document
  .querySelectorAll(".animate-on-visible")
  .forEach((el) => observer.observe(el));
