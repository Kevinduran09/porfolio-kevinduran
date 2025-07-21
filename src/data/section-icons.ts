import FrontendIcon from "@/components/icons/FrontendIcon.astro";
import BackendIcon from "@/components/icons/BackendIcon.astro";
import DatabaseIcon from "@/components/icons/DatabaseIcon.astro";
import DeploymentIcon from "@/components/icons/DeploymentIcon.astro";

export type SectionSlug = "frontend" | "backend" | "database" | "deployment";

export interface SectionIcon {
  component: typeof FrontendIcon;
  label: string;
}

export const sectionIcons: Record<SectionSlug, SectionIcon> = {
  frontend: {
    component: FrontendIcon,
    label: "Frontend"
  },
  backend: {
    component: BackendIcon,
    label: "Backend"
  },
  database: {
    component: DatabaseIcon,
    label: "Base de Datos"
  },
  deployment: {
    component: DeploymentIcon,
    label: "Despliegue"
  }
};

// Función helper para obtener un icono de sección
export const getSectionIcon = (slug: SectionSlug): SectionIcon | undefined => {
  return sectionIcons[slug];
};

// Función helper para obtener todos los slugs disponibles
export const getAvailableSectionSlugs = (): SectionSlug[] => {
  return Object.keys(sectionIcons) as SectionSlug[];
}; 