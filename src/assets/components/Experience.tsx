import { Badge } from "./ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

export function Experience() {
  // Datos de experiencia laboral
  const workExperience = [
    {
      company: "Academia Nakayama Karate-Do",
      position: "Desarrollador fullstack",
      period: "Diciembre 2024 - Presente",
      description:
        "Desarrollo y mantenimiento de la plataforma de puntaje de la academia y desarrollo del systema para la creación de torneos de karate.",
      achievements: [
        "Control de puntaje y calificaciones de los alumnos.",
        "Desarrollo de sistema para la creación de torneos de karate.",
        "Control en tiempo real de los enfrentamientos de los torneos.",
      ],
    },
    {
      company: "Proyecto Academico",
      position: "Administrador de Base de Datos",
      period: "Enero 2025 - Febrero 2025",
      description:
        "Desarrollo completo de una base de datos para una cadena de hoteles a nivel nacional con Oracle Database 21C enterprise edition. Se realizó con bases de seguridad, integridad y calidad.",
      achievements: [
        "Implementación de R-MAN para la gestión de backups de la información de la base de datos.",
        "Se protegió la integridad de la base de datos con restricciones de integridad.",
        "Se realizaron vistas para la visualización de la información de la base de datos con reportes dinámicos utilizando Power BI.",
        "Desarrollo de procedimientos almacenados, funciones, triggers y bitacoras para la gestión de la base de datos.",
      ],
    },
    {
      company: "Proyecto Academico Ticolancer",
      position: "Desarrollador Fullstack",
      period: "Agosto 2024 - Noviembre 2024",
      description:
        "Desarrollo de una aplicacion web para la contratación de servicios profesionales proporcionados por freelancers en Costa Rica utilizando Laravel.",
      achievements: [
        "Desarrollo de un sistema de autenticación y gestión de usuarios con Laravel Sanctum.",
        "Implementación de membresías autimaticas para los usuarios por mes, 6 meses o año.",
        "Creación de una base de datos escable usando MariaDB, altamente escalable para un uso en la nube.",
        "Funcionalidad de servicios favoritos y freelancers destacados en el home-page.",
      ],
    },
    {
      company: "Proyecto Academico EventMate",
      position: "Desarrollador Fullstack",
      period: "Marzo 2024 - Julio 2024",
      description:
        "Desarrollo de una aplicacion web para administrar tareas y proyectos por curso academico.",
      achievements: [
        "Desarrollo de un sistema de autenticación y gestión de usuarios con Laravel Sanctum.",
        "Desarroolo del frontend con React y Tailwind CSS.",
        "Manejo de .",
        "Funcionalidad de servicios favoritos y freelancers destacados en el home-page.",
      ],
    },
  ]

  // Datos de habilidades técnicas
  const skills = {
    frontend: [
      { name: "HTML5", level: "Avanzado" },
      { name: "CSS3/SASS", level: "Avanzado" },
      { name: "JavaScript", level: "Avanzado" },
      { name: "TypeScript", level: "Básico" },
      { name: "React", level: "Avanzado" },
      { name: "Tailwind CSS", level: "Avanzado" },
      { name: "Blade-Laravel", level: "Avanzado" },
    ],
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
    ],
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
    ],
  }

  return (
    <section id="sobre-mi" className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experiencia & Habilidades</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Mi trayectoria profesional y conocimientos técnicos
            </p>
          </div>
        </div>

        <Tabs defaultValue="experience" className="mt-12">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="experience">Experiencia Laboral</TabsTrigger>
              <TabsTrigger value="skills">Habilidades Técnicas</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="experience" className="space-y-8">
            <div className="grid gap-6">
              {workExperience.map((job, index) => (
                <Card className="bg-[#22252e]" key={index}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle>{job.position}</CardTitle>
                        <CardDescription className="text-base">{job.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {job.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p >{job.description}</p>
                    <div>
                      <h4 className="font-medium mb-2">Logros principales:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {job.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skills">
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-[#22252e]">
                <CardHeader>
                  <CardTitle>Frontend</CardTitle>
                  <CardDescription>Tecnologías de desarrollo frontend</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    {skills.frontend.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span>{skill.name}</span>
                        <Badge variant={skill.level === "Avanzado" ? "default" : "secondary"}>{skill.level}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#22252e]">
                <CardHeader>
                  <CardTitle>Backend</CardTitle>
                  <CardDescription>Tecnologías de desarrollo backend</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    {skills.backend.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span>{skill.name}</span>
                        <Badge variant={skill.level === "Avanzado"  ? "default" : "secondary"}>{skill.level}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#22252e]">
                <CardHeader>
                  <CardTitle>Herramientas</CardTitle>
                  <CardDescription>Herramientas y entornos de desarrollo</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    {skills.tools.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span>{skill.name}</span>
                        <Badge variant={skill.level === "Avanzado" ? "default" : "secondary"}>{skill.level}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
