export interface ProjectSection {
  title: string;
  description: string;
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[]; // rutas de íconos SVG
  images: string[]; // una o varias imágenes
  sections?: ProjectSection[]; // secciones opcionales
}

export const projects: Project[] = [
  {
    id: "volunthub",
    title: "VoluntHub",
    description:
      "VoluntHub es una aplicación web centrada en la gestión y realización de eventos comunitarios. Permite a los usuarios registrarse, inscribirse a eventos, crear eventos y cumplir tareas para mejorar la comunidad. Está pensada para solucionar problemáticas locales a través de eventos comunitarios, como limpieza de playas, recolección de basura, campañas de donación, entre otros.",
    technologies: [
      "/tech-icons/react.svg",
      "/tech-icons/nodejs.svg",
      "/tech-icons/expressjs.svg",
      "/tech-icons/tailwindcss.svg",
      "/tech-icons/supabase.svg",
      "/tech-icons/graphql-icon.svg",
    ],
    images: [
      "/volunthub/volunthub-001.png",
      "/volunthub/volunthub-002.png",
      "/volunthub/volunthub-003.png",
      "/volunthub/volunthub-004.png",
    ],
    sections: [
      {
        title: "frontend",
        description:
          "Desarrollado con React y Tailwind CSS, siguiendo una arquitectura modular basada en principios de Clean Code. Se implementó un diseño atractivo y elegante para ofrecer una experiencia de usuario fluida y optimizada.",
      },
      {
        title: "backend",
        description:
          "API REST construida con Express y GraphQL. Se utiliza Redis para la gestión de caché y notificaciones en tiempo real. La arquitectura modular facilita la escalabilidad y el mantenimiento del sistema. Redis se emplea para manejar suscripciones y notificaciones en tiempo real con GraphQL, gracias a su versatilidad en sistemas pub/sub.",
      },
      {
        title: "database",
        description:
          "La base de datos está gestionada con Supabase, aprovechando la potencia de PostgreSQL. Se incluye almacenamiento de imágenes, autenticación mediante proveedores como Google y gestión de usuarios.",
      },
      {
        title: "deployment",
        description:
          "El proyecto fue dockerizado, utilizando Docker y Docker Compose para facilitar el despliegue completo del sistema y su orquestación.",
      },
    ],
  },
  {
    id: "ecoscan",
    title: "Ecoscan",
    description:
      "Ecoscan es una aplicación móvil híbrida enfocada en promover el reciclaje a través de un sistema de gamificación. Motiva a los usuarios a reciclar diariamente mediante misiones, metas, logros y recompensas. Utiliza inteligencia artificial para clasificar objetos reciclables mediante imágenes, brindando recomendaciones y consejos para su correcto reciclaje.",
    technologies: [
      "/tech-icons/ionic-original.svg",
      "/tech-icons/react-original.svg",
      "/tech-icons/tailwindcss-icon.svg",
      "/tech-icons/capacitor-original.svg",
      "/tech-icons/firebase-icon.svg",
      "/tech-icons/supabase-icon.svg",
    ],
    images: [],
    sections: [
      {
        title: "Frontend Móvil",
        description:
          "Construido con Ionic y React, utilizando Tailwind CSS para los estilos. Se adapta perfectamente a dispositivos móviles y navegadores mediante WebView.",
      },
      {
        title: "Gamificación",
        description:
          "Sistema de niveles, experiencia, logros y medallas que motivan al usuario a reciclar todos los días. Las misiones varían por tipo de material, producto o cantidad reciclada.",
      },
      {
        title: "Inteligencia Artificial",
        description:
          "Se integra con Vortex (Gemini 2.0 Flash) para clasificar objetos mediante fotos, detectar su categoría y brindar recomendaciones de reciclaje.",
      },
      {
        title: "Backend y Almacenamiento",
        description:
          "Utiliza Supabase para almacenar datos y archivos, incluyendo imágenes de reciclaje. Se integra con Firebase para autenticación con Google y otras opciones de login.",
      },
    ],
  },
  {
    id: "remesas-yabi",
    title: "Remesas Yabí",
    description:
      "Remesas Yabí es una aplicación web enfocada en la gestión de una empresa de remesas. Permite a los usuarios solicitar servicios con origen y destino en el mapa, mientras que la administración puede gestionar clientes, empleados, vehículos, rutas y facturación. Incluye lógica de optimización de rutas para asegurar una entrega eficiente.",
    technologies: [
      "/tech-icons/react-original.svg",
      "/tech-icons/bootstrap-plain.svg",
      "/tech-icons/laravel-original.svg",
      "/tech-icons/zustand.svg",
      "/tech-icons/tanstack-query.svg",
    ],
    images: [],
    sections: [
      {
        title: "Frontend",
        description:
          "Construido con React, usando Bootstrap y MIUI para la interfaz. Se emplea Zustand para manejo de estados globales y TanStack Query para la gestión de datos asincrónicos.",
        image: "/projects/remesas-javier/frontend.png",
      },
      {
        title: "Backend",
        description:
          "El backend está desarrollado con Laravel, proporcionando una estructura robusta y completa para la gestión de servicios, rutas, usuarios y facturación.",
      },
      {
        title: "Gestión de Servicios",
        description:
          "Los usuarios pueden solicitar servicios seleccionando origen y destino en el mapa. Los servicios son asignados a rutas diarias por los administradores.",
      },
      {
        title: "Optimización de Rutas",
        description:
          "El sistema genera rutas optimizadas considerando los servicios del día, vehículos disponibles y encargados asignados, evitando solapamientos y asegurando eficiencia.",
      },
    ],
  },
  {
    id: "mypms",
    title: "MYPIMES",
    description:
      "MYPIMES es una iniciativa desarrollada junto a la organización CEMEDE, enfocada en brindar soluciones digitales a pequeñas y medianas empresas en Costa Rica. La plataforma permite gestionar información empresarial y aplicar formularios personalizados, fortaleciendo la digitalización del sector PYME.",
    technologies: [
      "/tech-icons/react-original.svg",
      "/tech-icons/miui-icon.svg",
      "/tech-icons/reacthookform.svg",
      "/tech-icons/tanstack-query.svg",
      "/tech-icons/zustand.svg",
      "/tech-icons/nestjs-icon.svg",
      "/tech-icons/mysql-original.svg",
      "/tech-icons/jwt-icon.svg",
    ],
    images: [],
    sections: [
      {
        title: "Frontend",
        description:
          "Desarrollado con React, MIUI y React Hook Form para crear interfaces responsivas y formularios eficientes. Utiliza TanStack Query y Zustand para el manejo óptimo del estado global.",
      },
      {
        title: "Backend",
        description:
          "Construido con NestJS bajo una arquitectura modular, separando controladores, servicios, entidades y DTOs. Se implementa autenticación con JWT para rutas protegidas y control de sesiones.",
      },
      {
        title: "Base de Datos y Despliegue",
        description:
          "Utiliza MySQL como sistema de base de datos relacional y se encuentra desplegada en Netlify, permitiendo acceso rápido y seguro desde cualquier parte.",
      },
    ],
  },
  {
    id: "api-animes",
    title: "API ANIMES - React Project",
    description: `Esta aplicación web desarrollada en React consume la API de Jikan (no oficial de MyAnimeList), permitiendo explorar animes populares, ver detalles, sinopsis, tráileres y más. Fue diseñada con enfoque en aprender el uso de PWAs y trabajar con una API pública.`,
    images: [],
    technologies: [
      "/tech-icons/react.svg",
      "/tech-icons/tailwindcss.svg",
      "/tech-icons/javascript-original.svg",
      "/tech-icons/pwa.svg",
    ],
    sections: [
      {
        title: "Frontend",
        description: `Aplicación construida en React, utilizando React Router para navegación, styled-components para los estilos y Axios para consumir la API. Está optimizada como una Progressive Web App (PWA), implementando un Service Worker que permite funcionalidades offline, instalación en dispositivos y mejora de rendimiento general. La configuración incluye manifest.json y cacheo de recursos estáticos mediante el SW.`,
      },
    ],
  },
];

// Función helper para obtener proyectos
export const getProjects = () => projects;

// Función helper para obtener un proyecto específico
export const getProjectById = (id: string) =>
  projects.find((project) => project.id === id);
