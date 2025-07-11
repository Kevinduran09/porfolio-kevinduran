export interface Technology {
  name: string;
  icon: string;
  url: string;
  color: string;
  category: 'frontend' | 'backend' | 'database' | 'mobile' | 'devops' | 'other';
}

export const technologies: Technology[] = [
  // Frontend
  {
    name: "React",
    icon: "/tech-icons/react.svg",
    url: "https://react.dev",
    color: "#61dafb",
    category: "frontend"
  },
  {
    name: "JavaScript",
    icon: "/tech-icons/javascript-original.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    color: "#f7df1e",
    category: "frontend"
  },
  {
    name: "HTML5",
    icon: "/tech-icons/html5.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    color: "#e34f26",
    category: "frontend"
  },
  {
    name: "Tailwind CSS",
    icon: "/tech-icons/tailwindcss.svg",
    url: "https://tailwindcss.com",
    color: "#44b9eb",
    category: "frontend"
  },
  {
    name: "Astro",
    icon: "/tech-icons/astro-icon-light.svg",
    url: "https://astro.build",
    color: "#ff5d01",
    category: "frontend"
  },

  // Backend
  {
    name: "Python",
    icon: "/tech-icons/python.svg",
    url: "https://python.org",
    color: "#4fa0e3",
    category: "backend"
  },
  {
    name: "FastAPI",
    icon: "/tech-icons/fastapi.svg",
    url: "https://fastapi.tiangolo.com",
    color: "#009688",
    category: "backend"
  },
  {
    name: "Java",
    icon: "/tech-icons/java.svg",
    url: "https://www.java.com",
    color: "#ed8b00",
    category: "backend"
  },
  {
    name: "Spring",
    icon: "/tech-icons/spring.svg",
    url: "https://spring.io",
    color: "#6db33f",
    category: "backend"
  },
  {
    name: "NestJS",
    icon: "/tech-icons/nestjs.svg",
    url: "https://nestjs.com",
    color: "#e0234e",
    category: "backend"
  },
  {
    name: "GraphQL",
    icon: "/tech-icons/graphql-icon.svg",
    url: "https://graphql.org",
    color: "#e10098",
    category: "backend"
  },

  // Database
  {
    name: "PostgreSQL",
    icon: "/tech-icons/postgresql.svg",
    url: "https://www.postgresql.org",
    color: "#336791",
    category: "database"
  },
  {
    name: "MySQL",
    icon: "/tech-icons/mysql.svg",
    url: "https://www.mysql.com",
    color: "#4479a1",
    category: "database"
  },
  {
    name: "Supabase",
    icon: "/tech-icons/supabase.svg",
    url: "https://supabase.com",
    color: "#3ecf8e",
    category: "database"
  },

  // Mobile
  {
    name: "React Query",
    icon: "/tech-icons/reactquery.svg",
    url: "https://tanstack.com/query",
    color: "#ff4154",
    category: "mobile"
  },

  // DevOps
  {
    name: "Docker",
    icon: "/tech-icons/docker.svg",
    url: "https://www.docker.com",
    color: "#2496ed",
    category: "devops"
  },

  // Other
  {
    name: "Firebase",
    icon: "/tech-icons/firebase.svg",
    url: "https://firebase.google.com",
    color: "#ffca28",
    category: "other"
  },
  {
    name: "C++",
    icon: "/tech-icons/c-plusplus.svg",
    url: "https://isocpp.org",
    color: "#00599c",
    category: "other"
  }
];

// Función helper para obtener tecnologías por categoría
export const getTechnologiesByCategory = (category: Technology['category']) => {
  return technologies.filter(tech => tech.category === category);
};

// Función helper para obtener todas las tecnologías
export const getAllTechnologies = () => technologies;

// Función helper para duplicar tecnologías (útil para carruseles)
export const getDuplicatedTechnologies = () => [...technologies, ...technologies]; 