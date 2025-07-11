# Estructura de Datos

Esta carpeta contiene todos los datos estructurados del portfolio en formato TypeScript para mejor tipado y organización.

## Archivos

### `technologies.ts`
Contiene todas las tecnologías disponibles con sus iconos SVG, URLs y colores.

**Estructura:**
```typescript
interface Technology {
  name: string;
  icon: string;
  url: string;
  color: string;
  category: 'frontend' | 'backend' | 'database' | 'mobile' | 'devops' | 'other';
}
```

**Funciones disponibles:**
- `getAllTechnologies()` - Obtiene todas las tecnologías
- `getTechnologiesByCategory(category)` - Obtiene tecnologías por categoría
- `getDuplicatedTechnologies()` - Obtiene tecnologías duplicadas para carruseles

### `portfolioData.ts`
Contiene todos los datos del portfolio con tipos TypeScript.

**Estructuras principales:**
- `PersonalInformation` - Información personal
- `Experience` - Experiencia laboral/educativa
- `Project` - Proyectos del portfolio
- `ProjectTechnology` - Tecnologías de cada proyecto

**Funciones disponibles:**
- `getPersonalInformation()` - Datos personales
- `getSkills()` - Habilidades
- `getTechnologies()` - Lista de tecnologías
- `getExperience()` - Experiencia
- `getProjects()` - Todos los proyectos
- `getProjectById(id)` - Proyecto específico por ID

## Uso

```typescript
// Importar tecnologías
import { getAllTechnologies, getTechnologiesByCategory } from '../data/technologies';

// Importar datos del portfolio
import { getProjects, getPersonalInformation } from '../data/portfolioData';

// Usar en componentes
const technologies = getAllTechnologies();
const frontendTechs = getTechnologiesByCategory('frontend');
const projects = getProjects();
```

## Tecnologías Disponibles

### Frontend
- React
- JavaScript
- HTML5
- Tailwind CSS
- Astro

### Backend
- Python
- FastAPI
- Java
- Spring
- NestJS
- GraphQL

### Database
- PostgreSQL
- MySQL
- Supabase

### DevOps
- Docker

### Other
- Firebase
- C++
- React Query

Todas las tecnologías tienen iconos SVG correspondientes en `/public/tech-icons/`. 