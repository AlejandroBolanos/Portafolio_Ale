export interface Project {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  // Metadata
  rol: string;
  duracion: string;
  herramientas: string[];
  // Caso de estudio UX
  problema: string;
  proceso: {
    investigacion?: string;
    desarrollo?: string;
    prototipo?: string;
    testing?: string;
  };
  hallazgos: string[];
  solucion: string;
  resultados: string[];
  // Links
  githubUrl?: string;
  liveUrl?: string;
  // Tags
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "ticolancer",
    title: "Ticolancer",
    subtitle: "Plataforma de servicios freelance en Costa Rica",
    heroImage: "/imgs/Ticolancer.png",
    rol: "Desarrollador Fullstack & UX Designer",
    duracion: "Agosto 2024 - Noviembre 2024",
    herramientas: ["Figma", "React", "Laravel", "MySQL", "Tailwind CSS", "Cypress"],
    problema: "Los freelancers en Costa Rica carecen de una plataforma local que les permita ofrecer sus servicios de manera profesional y ser contratados por clientes que buscan talento nacional.",
    proceso: {
      investigacion: "Se realizaron entrevistas con freelancers locales para entender sus necesidades y frustraciones con plataformas existentes como Fiverr o Upwork.",
      desarrollo: "Se implementó el frontend con React y el backend con Laravel, incluyendo la integración con bases de datos MySQL.",
      prototipo: "Se creó un prototipo interactivo en Figma para validar la navegación y la experiencia del usuario.",
      testing: "Se realizaron pruebas de usabilidad con 5 usuarios para identificar puntos de fricción en el proceso de contratación."
    },
    hallazgos: [
      "Los usuarios valoraban la posibilidad de filtrar por ubicación geográfica",
      "El sistema de membresías generaba confusión en el onboarding",
      "Los freelancers querían destacar sus mejores trabajos de forma visual"
    ],
    solucion: "Se desarrolló una plataforma web completa con sistema de membresías, perfiles de freelancer con portafolio visual, y un sistema de contratación simplificado.",
    resultados: [
      "Plataforma funcional con más de 50 servicios publicados en fase de pruebas",
      "Reducción del 40% en el tiempo de registro gracias a la simplificación del onboarding",
      "Feedback positivo de usuarios en pruebas de usabilidad"
    ],
    githubUrl: "https://github.com/TottoWolff/Ticolancer-Desarrollo",
    tags: ["React", "Tailwind", "MySQL", "Laravel", "PHP", "Vite", "JavaScript", "Cypress"]
  },
  {
    id: "gestion-hotelera",
    title: "Gestión Hotelera",
    subtitle: "Sistema de base de datos para cadena de hoteles",
    heroImage: "/imgs/HOTELES.png",
    rol: "Administrador de Base de Datos",
    duracion: "Enero 2025 - Febrero 2025",
    herramientas: ["Oracle 21C", "SQL Developer", "Power BI", "R-MAN", "PL/SQL"],
    problema: "Una cadena de hoteles necesitaba un sistema de base de datos robusto que permitiera gestionar reservaciones, clientes y reportes de manera eficiente y segura.",
    proceso: {
      investigacion: "Se analizaron los procesos de negocio de la cadena hotelera para identificar entidades y relaciones clave.",
      desarrollo: "Se diseñó e implementó la base de datos en Oracle 21C, incluyendo procedimientos almacenados y triggers para auditoría.",
      prototipo: "Se implementó un prototipo de base de datos con datos de prueba para validar el diseño.",
      testing: "Se realizaron pruebas de rendimiento y se validó la integridad de los datos con diferentes escenarios."
    },
    hallazgos: [
      "La necesidad de reportes en tiempo real era crítica para la toma de decisiones",
      "Los backups automáticos eran esenciales para la continuidad del negocio",
      "Se requería un sistema de auditoría para rastrear cambios en reservaciones"
    ],
    solucion: "Se desarrolló una base de datos completa en Oracle 21C con procedimientos almacenados, triggers para auditoría, y dashboards en Power BI para visualización de datos.",
    resultados: [
      "Sistema de base de datos optimizado con tiempos de consulta reducidos en 60%",
      "Implementación exitosa de backups automáticos con R-MAN",
      "Dashboards interactivos que facilitan la toma de decisiones"
    ],
    githubUrl: "https://lucid.app/lucidchart/144e214c-895b-412b-b7e0-7e3b2d980202/edit?viewport_loc=-3602%2C-4143%2C10036%2C4615%2C0_0&invitationId=inv_d5c6ebeb-c4b2-48ad-92af-89e740822abb",
    tags: ["Oracle 21C", "SQL", "R-MAN", "Power BI", "PL/SQL", "SQL_Dev"]
  },
  {
    id: "sistema-karate",
    title: "Sistema de Karate",
    subtitle: "Gestión de torneos de karate en tiempo real",
    heroImage: "/imgs/karate-proyecto.png",
    rol: "Desarrollador Fullstack & UX Designer",
    duracion: "Diciembre 2024 - Presente",
    herramientas: ["Figma", "React", "Laravel", "MySQL", "Tailwind CSS", "WebSockets"],
    problema: "La academia de karate necesitaba un sistema que permitiera gestionar torneos, llevar el puntaje en tiempo real y generar llaves de competencia de forma automática.",
    proceso: {
      investigacion: "Se observaron torneos presenciales para entender el flujo de competencia y las necesidades de jueces y organizadores.",
      desarrollo: "Se implementó el frontend con React y el backend con Laravel, incluyendo la integración con bases de datos MySQL y WebSockets para la actualización en tiempo real.",
      prototipo: "Se creó un prototipo funcional de la pantalla de puntaje en tiempo real para validar con los instructores.",
      testing: "Se realizó una prueba piloto durante un torneo interno para validar el sistema en condiciones reales."
    },
    hallazgos: [
      "Los jueces necesitaban una interfaz simple y con botones grandes para marcar puntos rápidamente",
      "La generación automática de llaves debía considerar categorías y pesos",
      "Se requería una pantalla de visualización para espectadores"
    ],
    solucion: "Se desarrolló un sistema web completo con pantalla de puntaje en tiempo real, generación automática de llaves por categoría, y panel de administración para gestionar participantes.",
    resultados: [
      "Sistema en desarrollo activo con feedback positivo de instructores",
      "Reducción del tiempo de organización de torneos en un 50%",
      "Mejora en la experiencia de espectadores con pantallas en tiempo real"
    ],
    githubUrl: "https://github.com/AlejandroBolanos/Karate-Scoreboard",
    tags: ["React", "Tailwind", "MySQL", "Laravel", "PHP", "Vite"]
  },
  {
    id: "eventmate",
    title: "EventMate",
    subtitle: "Gestión de eventos y tareas académicas",
    heroImage: "/imgs/Homepage Students2.PNG",
    rol: "Desarrollador Fullstack",
    duracion: "Marzo 2024 - Julio 2024",
    herramientas: ["React", "PHP", "MySQL", "CSS", "Ajax", "Vite"],
    problema: "Los estudiantes universitarios tienen dificultades para organizar sus tareas, eventos y actividades académicas de manera efectiva.",
    proceso: {
      investigacion: "Se realizaron encuestas a estudiantes para entender cómo gestionaban actualmente sus actividades académicas.",
      desarrollo: "Se implementó el frontend con React y el backend con PHP, incluyendo la integración con bases de datos MySQL.",
      prototipo: "Se desarrolló un MVP funcional para validar las funcionalidades principales.",
      testing: "Se realizaron pruebas con un grupo de estudiantes durante un semestre académico."
    },
    hallazgos: [
      "Los estudiantes preferían una vista de calendario para visualizar sus tareas",
      "Las notificaciones y recordatorios eran funcionalidades muy solicitadas",
      "La categorización por curso facilitaba la organización"
    ],
    solucion: "Se desarrolló una aplicación web que permite a los estudiantes crear, organizar y gestionar sus tareas y eventos académicos con vista de calendario y sistema de recordatorios.",
    resultados: [
      "Aplicación funcional utilizada por compañeros de clase",
      "Mejora en la organización académica de los usuarios de prueba",
      "Feedback positivo sobre la facilidad de uso"
    ],
    githubUrl: "https://github.com/AlejandroBolanos/eventmate_frontend",
    tags: ["React", "CSS", "MySQL", "PHP", "Ajax", "Vite"]
  },
  {
    id: "le-gourmet-parisien",
    title: "Le Gourmet Parisien",
    subtitle: "Sistema web para restaurante parisino",
    heroImage: "/imgs/Desktop - Homepage2.PNG",
    rol: "Desarrollador Fullstack",
    duracion: "2023",
    herramientas: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    problema: "Un restaurante hipotético necesitaba una presencia web profesional con capacidad de gestionar pedidos, reservas y mostrar su menú en múltiples idiomas.",
    proceso: {
      investigacion: "Se analizaron sitios web de restaurantes exitosos para identificar las mejores prácticas de UX.",
      prototipo: "Se desarrolló un prototipo HTML/CSS para validar el diseño visual.",
      desarrollo: "Se implementó el backend con PHP y MySQL para gestionar reservas y pedidos.",
      testing: "Se realizaron pruebas de usabilidad para validar el flujo de reservas y pedidos."
    },
    hallazgos: [
      "Los usuarios valoraban la capacidad de ver el menú en su idioma nativo",
      "El proceso de reserva debía ser simple y con confirmación inmediata",
      "La pasarela de pago debía ser segura y confiable"
    ],
    solucion: "Se desarrolló un sitio web completo con sistema de reservas, pedidos en línea, menú multiidioma y pasarela de pago integrada.",
    resultados: [
      "Sitio web funcional con diseño elegante acorde a la temática del restaurante",
      "Sistema de reservas operativo con confirmación por email",
      "Soporte para múltiples idiomas implementado"
    ],
    githubUrl: "https://github.com/AlejandroBolanos/backend-pagina-web",
    tags: ["HTML", "CSS", "MySQL", "PHP", "JavaScript"]
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectNavigation = (currentId: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex(p => p.id === currentId);
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  };
};
