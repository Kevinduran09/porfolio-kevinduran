export interface PersonalInformation {
  name: string;
  titles: string[];
  email: string;
  github: string;
  linkedin: string;
}

export interface Experience {
  order: number;
  title: string;
  institution: string;
  description: string;
  date: string;
  certificate?: string;
}

export interface ProjectTechnology {
  description: string;
  technologies: string[];
  imageUrl?: string;
}

export interface Project {
  id: string;
  order: number;
  name: string;
  imageUrl: string;
  images: string[];
  description: string;
  technologies: string[];
  demo?: string;
  github?: string;
  frontend?: ProjectTechnology;
  backend?: ProjectTechnology;
  database?: ProjectTechnology;
}

export interface PortfolioData {
  personalInformation: PersonalInformation;
  skills: string[];
  technologies: string[];
  experience: Experience[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  "personalInformation": {
    "name": "Kevin Durán",
    "titles": [
      "Desarrollador de software",
      "Ingeniero en sistemas"
    ],
    "email": "kduran.091001@gmail.com",
    "github": "https://github.com/Kevinduran09",
    "linkedin": "https://www.linkedin.com/in/kevin-durán-martínez-1b6868151/"
  },
  "skills": [
    "Trabajo en equipo",
    "Resolución de problemas",
    "Adaptabilidad"
  ],
  "technologies": [
    "React",
    "JavaScript",
    "Python",
    "FastAPI",
    "Java",
    "Spring",
    "NestJS",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "Firebase",
    "GraphQL",
    "Astro",
    "Tailwind CSS",
    "HTML5",
    "C++",
    "Supabase",
    "React Query"
  ],
  "experience": [
    {
      "order": 1,
      "title": "Bachillerato en Ingeniería en Sistemas de Información",
      "institution": "Universidad Nacional de Costa Rica",
      "description": "Grado de bachiller universitario en ingeniería en sistemas de información con énfasis en desarrollo de software y soluciones tecnológicas.",
      "date": "Julio 2024 - Actualmente",
      "certificate": ""
    },
    {
      "order": 2,
      "title": "Diplomado en Ingeniería en Sistemas de Información",
      "institution": "Universidad Nacional de Costa Rica",
      "description": "Grado de diplomado universitario con énfasis en desarrollo de software y soluciones tecnológicas.",
      "date": "Feb 2021 - Junio 2024",
      "certificate": "Certificado diplomado.jpg"
    },
    {
      "order": 3,
      "title": "Desarrollo de MYPYMES",
      "institution": "CEMEDE",
      "description": "Desarrollé una app web para gestión de pymes con registro de empresas, formularios personalizados y encuestas dinámicas.",
      "date": "Febrero 2024 - Diciembre 2024"
    },
    {
      "order": 4,
      "title": "Desarrollo de Aplicación Web",
      "institution": "Interfrutd Frutas Del Mundo S.A",
      "description": "Participo en el desarrollo de una app web para mejorar la visibilidad digital, pedidos en línea y gestión de proveedores.",
      "date": "Febrero 2024 - Actualmente"
    },
    {
      "order": 5,
      "title": "Curso: Aprende JavaScript ES9, HTML, CSS3 y NodeJS",
      "institution": "Udemy",
      "description": "Curso completo de desarrollo frontend y backend con tecnologías modernas, impartido por Nicolás Schurmann.",
      "date": "2025",
      "certificate": "Certificado Aprende Javascript ES9, HTML, CSS3 y NodeJS desde cero.jpg"
    }
  ],
  "projects": [
    {
      "id": "volunthub",
      "order": 1,
      "name": "VoluntHub",
      "imageUrl": "/VoluntHub-preview.webp",
      "images": [
        "/VoluntHub-preview.webp",
        "/VoluntHub-preview.webp",
        "/VoluntHub-preview.webp"
      ],
      "description": "Plataforma para fomentar la participación ciudadana en eventos de voluntariado. En desarrollo activo.",
      "technologies": ["React", "TailwindCSS"],
      "demo": "https://volunthub-app.netlify.app/",
      "github": "https://github.com/Kevinduran09/Plataforma-de-Voluntariado-para-Eventos",
      "frontend": {
        "description": "Desarrollado con React y Tailwind para una experiencia rápida y responsiva.",
        "technologies": ["React", "TailwindCSS"]
      }
    },
    {
      "id": "mypimes-cemede",
      "order": 2,
      "name": "MYPIMES CEMEDE",
      "imageUrl": "/CEMEDE.webp",
      "images": [
        "/CEMEDE.webp",
        "/CEMEDE.webp"
      ],
      "description": "Sistema web para gestión de pymes mediante encuestas dinámicas y formularios personalizados.",
      "technologies": ["React", "NestJS", "MySQL"],
      "frontend": {
        "description": "Interfaz desarrollada con React para una gestión fluida y dinámica.",
        "technologies": ["React"]
      },
      "backend": {
        "description": "API construida con NestJS siguiendo principios RESTful.",
        "technologies": ["NestJS"]
      },
      "database": {
        "description": "Base de datos relacional MySQL optimizada para múltiples formularios.",
        "technologies": ["MySQL"],
        "imageUrl": ""
      }
    },
    {
      "id": "remesas-yabi",
      "order": 3,
      "name": "Proyecto Remesas Yabi",
      "imageUrl": "/Yabi_captura.webp",
      "images": [
        "/Yabi_captura.webp",
        "/Yabi_captura.webp"
      ],
      "description": "Sistema de gestión de rutas, personal y entregas para empresas de remesas.",
      "technologies": ["React", "Laravel", "SQL Server"],
      "github": "https://github.com/Kevinduran09/RemesasYabi",
      "frontend": {
        "description": "Aplicación desarrollada en React con paneles administrativos intuitivos.",
        "technologies": ["React"]
      },
      "backend": {
        "description": "Backend robusto en Laravel con autenticación y manejo de relaciones.",
        "technologies": ["Laravel"]
      },
      "database": {
        "description": "Uso de SQL Server para mantener la integridad de los datos empresariales.",
        "technologies": ["SQL Server"],
        "imageUrl": ""
      }
    }
  ]
};

// Función helper para obtener datos personales
export const getPersonalInformation = () => portfolioData.personalInformation;

// Función helper para obtener habilidades
export const getSkills = () => portfolioData.skills;

// Función helper para obtener tecnologías
export const getTechnologies = () => portfolioData.technologies;

// Función helper para obtener experiencia
export const getExperience = () => portfolioData.experience;

// Función helper para obtener proyectos
export const getProjects = () => portfolioData.projects;

// Función helper para obtener un proyecto específico
export const getProjectById = (id: string) => 
  portfolioData.projects.find(project => project.id === id); 