export interface Skill {
  name: string;
  level: "Avanzado" | "Intermedio" | "Básico";
}

export interface SoftSkill {
  name: string;
  description: string;
  icon: string;
}

export const technicalSkills = {
  frontend: [
    { name: "HTML5", level: "Avanzado" },
    { name: "CSS3/SASS", level: "Avanzado" },
    { name: "JavaScript", level: "Avanzado" },
    { name: "TypeScript", level: "Básico" },
    { name: "React", level: "Avanzado" },
    { name: "Tailwind CSS", level: "Avanzado" },
    { name: "Blade-Laravel", level: "Avanzado" },
  ] as Skill[],
  backend: [
    { name: "PHP", level: "Avanzado" },
    { name: "Laravel", level: "Avanzado" },
    { name: "SQL", level: "Avanzado" },
    { name: "MySQL", level: "Avanzado" },
    { name: "Oracle", level: "Avanzado" },
    { name: "Java", level: "Avanzado" },
    { name: "Python", level: "Básico" },
    { name: "Redes", level: "Intermedio" },
    { name: "Linux", level: "Intermedio" },
  ] as Skill[],
  tools: [
    { name: "Git", level: "Avanzado" },
    { name: "GitHub/GitLab", level: "Avanzado" },
    { name: "Docker", level: "Básico" },
    { name: "CI/CD", level: "Intermedio" },
    { name: "Figma", level: "Intermedio" },
    { name: "Cisco-Packet Tracer", level: "Intermedio" },
    { name: "Microsoft Office", level: "Avanzado" },
    { name: "Power BI", level: "Intermedio" },
    { name: "Visual Studio Code", level: "Avanzado" },
    { name: "AWS", level: "Intermedio" },
  ] as Skill[],
  ux: [
    { name: "Figma", level: "Intermedio" },
    { name: "Wireframing", level: "Intermedio" },
    { name: "Prototipado", level: "Intermedio" },
    { name: "User Research", level: "Básico" },
    { name: "Usability Testing", level: "Básico" },
  ] as Skill[],
};

export const softSkills: SoftSkill[] = [
  {
    name: "Comunicación Efectiva",
    description: "Capacidad para transmitir ideas de forma clara y escuchar activamente a los demás.",
    icon: "MessageSquare"
  },
  {
    name: "Trabajo en Equipo",
    description: "Colaboro de manera efectiva con otros, valorando las contribuciones de cada miembro.",
    icon: "Users"
  },
  {
    name: "Resolución de Problemas",
    description: "Analizo situaciones complejas y encuentro soluciones creativas y efectivas.",
    icon: "Lightbulb"
  },
  {
    name: "Pensamiento Crítico",
    description: "Evalúo información objetivamente para tomar decisiones fundamentadas.",
    icon: "Brain"
  },
  {
    name: "Adaptabilidad",
    description: "Me ajusto rápidamente a nuevos entornos, tecnologías y metodologías de trabajo.",
    icon: "RefreshCw"
  },
  {
    name: "Empatía",
    description: "Entiendo las necesidades y perspectivas de los usuarios para crear mejores experiencias.",
    icon: "Heart"
  },
  {
    name: "Gestión del Tiempo",
    description: "Organizo y priorizo tareas para cumplir con los plazos establecidos.",
    icon: "Clock"
  },
  {
    name: "Aprendizaje Continuo",
    description: "Busco constantemente nuevos conocimientos y me mantengo actualizado en mi campo.",
    icon: "BookOpen"
  }
];
