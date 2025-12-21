# 🎯 Configuración Centralizada del Portafolio

Este portafolio utiliza un sistema centralizado de configuración que facilita editar la información sin tocar el código base.

## 📍 Archivo Principal

**`src/data/config.ts`** - Aquí se centraliza toda la información editable del portafolio.

## 📝 Guía de Uso

### 1️⃣ **Información Personal**

```typescript
export const personalInfo = {
  name: "Kevin Durán",
  fullName: "Kevin Andrey Durán Martínez",
  titles: ["Ingeniero de Software", "Desarrollador Full Stack"],
  email: "tu-email@ejemplo.com",
  linkedin: "https://linkedin.com/...",
  github: "https://github.com/...",
  cv: "/ruta-a-tu-cv.pdf",
};
```

**Usada en:**
- `Hero.astro` - Nombres, títulos, email, enlaces sociales
- `AboutMe.astro` - CV download button

---

### 2️⃣ **Biografía (Sección Acerca de mí)**

```typescript
export const biography = {
  enabled: true,
  paragraphs: [
    {
      text: "Tu texto aquí con <strong>HTML permitido</strong>",
      delay: 400, // ms - animación
    },
    // ... más párrafos
  ],
};
```

**Usada en:**
- `AboutMe.astro` - Se renderiza dinámicamente con animaciones

**Para agregar/editar párrafos:**
1. Abre `src/data/config.ts`
2. Modifica el array `biography.paragraphs`
3. Cada párrafo puede tener `delay` diferente para animación escalonada

---

### 3️⃣ **Habilidades / Skills**

```typescript
export const skills = {
  enabled: true,
  list: ["Trabajo en equipo", "Resolución de problemas", ...],
};
```

---

### 4️⃣ **Secciones Habilitadas/Deshabilitadas**

```typescript
export const sectionsConfig = {
  hero: { enabled: true, label: "Hero" },
  projects: { enabled: true, label: "Proyectos" },
  aboutMe: { enabled: true, label: "Acerca de mí" },
  experience: { enabled: true, label: "Experiencia" },
  contact: { enabled: true, label: "Contacto" },
};
```

**Para ocultar una sección:**
- Cambia `enabled: true` → `enabled: false`

**Usada en:**
- `Header.astro` - Muestra solo enlaces de secciones habilitadas
- Pronto en más componentes

---

### 5️⃣ **Tecnologías por Categoría**

```typescript
export const technologiesConfig = {
  enabledCategories: ["frontend", "backend", "database", "devops"],
  carouselEnabled: true,
  carouselDuplicateForLoop: true,
};
```

**Las tecnologías se definen en `src/data/technologies.ts`**

Para agregar una nueva tecnología:

```typescript
// En src/data/technologies.ts
{
  name: "Docker",
  icon: "/tech-icons/docker.svg",
  url: "https://docker.com",
  color: "#2496ed",
  category: "devops",
}
```

---

### 6️⃣ **Límites de Visualización**

```typescript
export const displayConfig = {
  projectsToShow: 5,        // Cuántos proyectos mostrar en la grid
  experienceItemsToShow: 100, // Todos por defecto
  technologiesToShow: 100,   // Todas por defecto
};
```

**Usada en:**
- `Projects.astro` - Limita proyectos mostrados: `projects.slice(0, displayConfig.projectsToShow)`

Para mostrar más/menos proyectos, simplemente cambia este número.

---

### 7️⃣ **Configuración de Animaciones**

```typescript
export const animationConfig = {
  enableAOS: true,
  enableCustomAnimations: true,
  defaultDuration: 900,    // milliseconds
  defaultDelay: 200,       // milliseconds
  scrollThreshold: 0.3,    // Cuándo triggerea animación
};
```

---

### 8️⃣ **Tema y Colores**

```typescript
export const themeConfig = {
  primaryColor: "fuchsia",
  accentColor: "fuchsia",
  backgroundColor: "#000",
  textColor: "#fff",
};
```

---

## 🔄 **Flujo Actual - Cómo se Usan los Datos**

```
config.ts (datos centralizados)
    ↓
    ├─→ personalInfo → Hero.astro, AboutMe.astro
    ├─→ biography → AboutMe.astro (párrafos dinámicos)
    ├─→ sectionsConfig → Header.astro (menú dinámico)
    ├─→ displayConfig → Projects.astro (límite de proyectos)
    └─→ Other configs → futuros componentes

experience.ts (datos de experiencias)
    ↓
    └─→ Experience.astro

technologies.ts (datos de tecnologías)
    ↓
    └─→ TechCarousel.astro

projects.ts (datos de proyectos)
    ↓
    └─→ Projects.astro, [slug].astro
```

---

## 🎯 **Casos de Uso Comunes**

### ✏️ **Cambiar nombre o email**
```typescript
// src/data/config.ts
export const personalInfo = {
  name: "Tu Nuevo Nombre",
  email: "nuevo-email@ejemplo.com",
  // ...
};
```

### ➕ **Agregar un párrafo a la biografía**
```typescript
export const biography = {
  paragraphs: [
    // ... párrafos existentes
    {
      text: "Tu nuevo párrafo aquí <strong>con HTML</strong>",
      delay: 1000,
    },
  ],
};
```

### 👁️ **Ocultar la sección de Experiencia**
```typescript
export const sectionsConfig = {
  experience: { enabled: false, label: "Experiencia" }, // ← Cambio
  // ...
};
```

### 📊 **Mostrar solo 3 proyectos**
```typescript
export const displayConfig = {
  projectsToShow: 3, // ← Cambio
  // ...
};
```

---

## 📚 **Otros Datos (Aún Separados)**

Estos archivos aún tienen sus propias estructuras pero pueden centralizarse después:

- **`src/data/experience.ts`** - Experiencias/educación
- **`src/data/technologies.ts`** - Tecnologías disponibles
- **`src/data/projects.ts`** - Proyectos del portafolio

---

## 🔮 **Próximos Pasos (Futura Expansión)**

- [ ] Centralizar experiencias en config
- [ ] Centralizar proyectos en config
- [ ] Migrar a Astro Collections (opcional)
- [ ] Admin panel para editar config sin código
- [ ] Persistencia en base de datos

---

## ✅ **Ventajas del Sistema Actual**

✔️ Todo en **un único archivo** (`config.ts`)  
✔️ **TypeScript** con autocompletado  
✔️ **Fácil de editar** sin tocar código de componentes  
✔️ **Escalable** sin cambios mayores  
✔️ **Flexible** para agregar más secciones  
✔️ **Sin dependencias** adicionales  

---

**¿Preguntas?** Revisa los comentarios en `src/data/config.ts` 📖
