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
            "/tech-icons/react-original.svg",
            "/tech-icons/nodejs-original.svg",
            "/tech-icons/express-original.svg",
            "/tech-icons/tailwindcss-icon.svg",
            "/tech-icons/supabase-icon.svg",
            "/tech-icons/redis.svg"
        ],
        images: [
            "/projects/volumehub/landing.png",
            "/projects/volumehub/event-detail.png"
        ],
        sections: [
            {
                title: "Frontend",
                description:
                    "Desarrollado con React y Tailwind CSS, utilizando una arquitectura modular y Clean Code. Se implementa un diseño atractivo y elegante para una experiencia de usuario optimizada.",
                image: "/projects/volumehub/frontend-ui.png"
            },
            {
                title: "Backend",
                description:
                    "API REST construida con Express y GraphQL. Utiliza Redis para la gestión de caché y notificaciones en tiempo real. La arquitectura modular permite una fácil expansión y mantenimiento.",
                image: "/projects/volumehub/backend-diagram.png"
            },
            {
                title: "Base de Datos",
                description:
                    "Se utiliza Supabase, una solución que aprovecha la potencia de Postgres y ofrece almacenamiento de imágenes, gestión de usuarios y autenticación mediante proveedores como Google."
            }
        ]
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
            "/tech-icons/supabase-icon.svg"
        ],
        images: [
            "/projects/ecoscan/home.png",
            "/projects/ecoscan/mission-complete.png",
            "/projects/ecoscan/ai-scan-result.png"
        ],
        sections: [
            {
                title: "Frontend Móvil",
                description:
                    "Construido con Ionic y React, utilizando Tailwind CSS para los estilos. Se adapta perfectamente a dispositivos móviles y navegadores mediante WebView.",
                image: "/projects/ecoscan/mobile-ui.png"
            },
            {
                title: "Gamificación",
                description:
                    "Sistema de niveles, experiencia, logros y medallas que motivan al usuario a reciclar todos los días. Las misiones varían por tipo de material, producto o cantidad reciclada.",
                image: "/projects/ecoscan/gamification.png"
            },
            {
                title: "Inteligencia Artificial",
                description:
                    "Se integra con Vortex (Gemini 2.0 Flash) para clasificar objetos mediante fotos, detectar su categoría y brindar recomendaciones de reciclaje.",
                image: "/projects/ecoscan/ai-engine.png"
            },
            {
                title: "Backend y Almacenamiento",
                description:
                    "Utiliza Supabase para almacenar datos y archivos, incluyendo imágenes de reciclaje. Se integra con Firebase para autenticación con Google y otras opciones de login.",
                image: "/projects/ecoscan/backend.png"
            }
        ]
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
            "/tech-icons/tanstack-query.svg"
        ],
        images: [
            "/projects/remesas-javier/dashboard.png",
            "/projects/remesas-javier/service-request.png",
            "/projects/remesas-javier/admin-panel.png"
        ],
        sections: [
            {
                title: "Frontend",
                description:
                    "Construido con React, usando Bootstrap y MIUI para la interfaz. Se emplea Zustand para manejo de estados globales y TanStack Query para la gestión de datos asincrónicos.",
                image: "/projects/remesas-javier/frontend.png"
            },
            {
                title: "Backend",
                description:
                    "El backend está desarrollado con Laravel, proporcionando una estructura robusta y completa para la gestión de servicios, rutas, usuarios y facturación.",
                image: "/projects/remesas-javier/backend-structure.png"
            },
            {
                title: "Gestión de Servicios",
                description:
                    "Los usuarios pueden solicitar servicios seleccionando origen y destino en el mapa. Los servicios son asignados a rutas diarias por los administradores.",
                image: "/projects/remesas-javier/service-mapping.png"
            },
            {
                title: "Optimización de Rutas",
                description:
                    "El sistema genera rutas optimizadas considerando los servicios del día, vehículos disponibles y encargados asignados, evitando solapamientos y asegurando eficiencia.",
                image: "/projects/remesas-javier/optimized-route.png"
            }
        ]
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
            "/tech-icons/jwt-icon.svg"
        ],
        images: [
            "/projects/mypms/form-builder.png",
            "/projects/mypms/company-dashboard.png",
            "/projects/mypms/user-access.png"
        ],
        sections: [
            {
                title: "Frontend",
                description:
                    "Desarrollado con React, MIUI y React Hook Form para crear interfaces responsivas y formularios eficientes. Utiliza TanStack Query y Zustand para el manejo óptimo del estado global.",
                image: "/projects/mypms/frontend.png"
            },
            {
                title: "Backend",
                description:
                    "Construido con NestJS bajo una arquitectura modular, separando controladores, servicios, entidades y DTOs. Se implementa autenticación con JWT para rutas protegidas y control de sesiones.",
                image: "/projects/mypms/backend.png"
            },
            {
                title: "Base de Datos y Despliegue",
                description:
                    "Utiliza MySQL como sistema de base de datos relacional y se encuentra desplegada en Netlify, permitiendo acceso rápido y seguro desde cualquier parte.",
                image: "/projects/mypms/deployment.png"
            }
        ]
    },
    {
        id: "api-animes",
        title: "API ANIMES - React Project",
        description: `Esta aplicación web desarrollada en React consume la API de Jikan (no oficial de MyAnimeList), permitiendo explorar animes populares, ver detalles, sinopsis, tráileres y más. Fue diseñada con enfoque en aprender el uso de PWAs y trabajar con una API pública.`,
        images: [
            // Puedes agregar aquí una o varias rutas relativas a imágenes si lo deseas
            "/projects/api-animes/cover.png",
        ],
        technologies: [
            "/tech-icons/react-original.svg",
            "/tech-icons/styledcomponents-icon.svg",
            "/tech-icons/javascript-original.svg",
            "/tech-icons/pwa-icon.svg", // si tienes un ícono PWA
            "/tech-icons/serviceworker-icon.svg", // opcional
        ],
        sections:[
            {
                title:'Frontend',
                description: `Aplicación construida en React, utilizando React Router para navegación, styled-components para los estilos y Axios para consumir la API. Está optimizada como una Progressive Web App (PWA), implementando un Service Worker que permite funcionalidades offline, instalación en dispositivos y mejora de rendimiento general. La configuración incluye manifest.json y cacheo de recursos estáticos mediante el SW.`,
            }
        ]
    }
];

// Función helper para obtener proyectos
export const getProjects = () => projects;

// Función helper para obtener un proyecto específico
export const getProjectById = (id: string) =>
    projects.find(project => project.id === id); 