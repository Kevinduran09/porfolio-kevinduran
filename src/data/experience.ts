export interface experienceIA{
    order:number;
    title:string;
    institution:string
    description:string;
    date:string
    certificate?:string
}

export const experience:experienceIA[] = [
    {
        order: 1,
        title: "Bachillerato en Ingenieria en Sistemas de Información",
        institution: "Universidad Nacional de Costa Rica",
        description: "Grado de bachiller universitaria en la carrera de ingenieria en sistemas de información con enfasis en el desarrollo de software y soluciones tecnologicas.",
        date: "Julio 2024 - Actualmente",
        certificate: ''
    },
    {
        order: 2,
        title: "Diplomado en Ingenieria en Sistemas de Información",
        institution: "Universidad Nacional de Costa Rica",
        description: "Grado de diplomado universitaria en la carrera de ingenieria en sistemas de información con enfasis en el desarrollo de software y soluciones tecnologicas.",
        date: "Feb 2021 - Junio 2024",
        certificate: 'Certificado diplomado.jpg'
    },
    {
        order: 4,
        title: 'Desarrollo de Aplicación Web',
        institution: 'Interfrutd Frutas Del Mundo S.A',
        description: 'Participo en el desarrollo de una aplicación web para mejorar la visibilidad digital de la empresa y optimizar el servicio al cliente.La plataforma permite realizar pedidos en línea, compras de productos y registro de nuevos proveedores.',
        date: 'Febrero 2024 - Actualmente'
    },
    {
        order: 5,
        title: "Aprende Javascript ES9, HTML, CSS3 y NodeJS desde cero",
        institution: "Udemy",
        description: "Curso online sobre desarrollo de software Frontend y Backend con tecnologías como NodeJS, React, Javascript, HTML y CSS. Impartido por Nicolas Schurmann desarrollador de software y creador de contenido además de instructor en la plataforma de cursos UDEMY.",
        date: "2025",
        certificate: 'Certificado Aprende Javascript ES9, HTML, CSS3 y NodeJS desde cero.jpg'
    },
    {
        order: 3,
        title: "Desarrollo de MYPYMES",
        institution: "Centro Mesoamericano de Desarrollo Sostenible del Trópico seco(CEMEDE)",
        description: "Desarrollé una app web para gestión de pymes, con registro de empresas, formularios personalizados y asignación de usuarios. La solución permite recolectar y visualizar información clave mediante encuestas dinámicas",
        date: "Febrero 2024 - Diciembre 2024",
    }
]