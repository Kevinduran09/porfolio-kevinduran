/**
 * Configuración centralizada del portafolio
 * Aquí puedes editar fácilmente toda la información del sitio
 */

// ============================================================================
// INFORMACIÓN PERSONAL
// ============================================================================

export const personalInfo = {
  name: "Kevin Durán",
  fullName: "Kevin Andrey Durán Martínez",
  titles: [
    "Ingeniero de Software",
    "Desarrollador Full Stack",
    "Apasionado por la tecnología",
  ],
  email: "kduran.091001@gmail.com",
  phone: "+506 8123 4567", // Opcional
  location: "Costa Rica",
  linkedin: "https://www.linkedin.com/in/kevin-durán-martínez-1b6868151/",
  github: "https://github.com/Kevinduran09",
  cv: "/Curriculum vitae Kevin Andrey Duran Martinez.pdf",
};

// ============================================================================
// BIOGRAFÍA (Sección Acerca de mí)
// ============================================================================

export const biography = {
  enabled: true,
  paragraphs: [
    {
      text: "Soy Kevin Andrey Durán Martínez, estudiante de Ingeniería en Sistemas de Información y desarrollador de software <strong>con pasión por la tecnología, la innovación y el aprendizaje continuo.</strong>",
      delay: 400,
    },
    {
      text: "Me especializo en crear soluciones modernas, escalables y centradas en resolver problemas reales, aplicando buenas prácticas y priorizando la calidad. <strong>He participado en proyectos como MYPIMES</strong>, una plataforma para la encuestación y diagnóstico digital de pequeñas y medianas empresas en Costa Rica, desarrollada en colaboración con CEMEDE.",
      delay: 600,
    },
    {
      text: "Me defino como una persona <strong>responsable, proactiva y comprometida</strong>, en constante búsqueda de nuevos desafíos que impulsen mi crecimiento y el de quienes usan la tecnología que construyo.",
      delay: 800,
    },
  ],
};

// ============================================================================
// HABILIDADES / SKILLS
// ============================================================================

export const skills = {
  enabled: true,
  list: [
    "Trabajo en equipo",
    "Resolución de problemas",
    "Adaptabilidad",
    "Liderazgo técnico",
    "Comunicación efectiva",
  ],
};

// ============================================================================
// SECCIONES HABILITADAS/DESHABILITADAS
// ============================================================================

export const sectionsConfig = {
  hero: { enabled: true, label: "Hero" },
  projects: { enabled: true, label: "Proyectos" },
  aboutMe: { enabled: true, label: "Acerca de mí" },
  experience: { enabled: true, label: "Experiencia" },
  contact: { enabled: true, label: "Contacto" },
  technicalSkills: { enabled: true, label: "Habilidades Técnicas" },
};

// ============================================================================
// TECNOLOGÍAS POR CATEGORÍA
// ============================================================================

export const technologiesConfig = {
  enabledCategories: ["frontend", "backend", "database", "devops", "other"],
  carouselEnabled: true,
  carouselDuplicateForLoop: true, // Duplicar tecnologías para efecto de carrusel infinito
};

// ============================================================================
// FILTROS Y LÍMITES
// ============================================================================

export const displayConfig = {
  projectsToShow: 5, // Número de proyectos a mostrar en la grid
  experienceItemsToShow: 100, // Mostrar todos por defecto
  technologiesToShow: 100, // Mostrar todas por defecto
};

// ============================================================================
// ANIMACIONES
// ============================================================================

export const animationConfig = {
  enableAOS: true, // Habilitar AOS (Animate On Scroll)
  enableCustomAnimations: true,
  defaultDuration: 900, // ms
  defaultDelay: 200, // ms
  scrollThreshold: 0.3,
};

// ============================================================================
// COLORES Y TEMA
// ============================================================================

export const themeConfig = {
  primaryColor: "fuchsia",
  accentColor: "fuchsia",
  backgroundColor: "#000",
  textColor: "#fff",
};

// ============================================================================
// SEO Y METADATOS
// ============================================================================

export const seoConfig = {
  siteTitle: "Kevin Duran | Portafolio - Desarrollador de software",
  siteDescription:
    "Ingeniero en sistemas de información. Contactame para convertir tus ideas en proyectos geniales. Comprometido con la calidad y soluciones escalables.",
  siteUrl: "https://kevinduran.vercel.app/",
  keywords: [
    "desarrollador",
    "software",
    "ingeniería de sistemas",
    "fullstack",
    "react",
    "node.js",
  ],
};
