import { Link } from "react-router-dom";
import {
  MessageSquare,
  Users,
  Lightbulb,
  Brain,
  RefreshCw,
  Heart,
  Clock,
  BookOpen,
  ArrowLeft,
  Code,
  Palette,
  Gamepad2,
  Globe,
  GraduationCap
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/assets/components/ui/card";
import { Badge } from "@/assets/components/ui/badge";
import { Button } from "@/assets/components/ui/button";
import { aboutMe, interests, workExperience, personalInfo } from "@/data/personal";
import { technicalSkills, softSkills } from "@/data/skills";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquare,
  Users,
  Lightbulb,
  Brain,
  RefreshCw,
  Heart,
  Clock,
  BookOpen,
};

export default function AboutMe() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-20 overflow-hidden bg-[#22252e]">
        <div className="container px-4 md:px-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#912fa0] rounded-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>

          <div className="w-full flex flex-col ">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
              Sobre Mí
            </h1>
            <p className="text-xl text-muted-foreground">
              Conoce más sobre mi historia, mi enfoque de trabajo y lo que me apasiona.
            </p>
          </div>
        </div>
      </section>

      {/* Mi Historia */}
      <section aria-labelledby="historia-heading" className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 id="historia-heading" className="text-3xl font-bold tracking-tighter mb-8">
            Mi Historia
          </h2>
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-4">
              {aboutMe.historia.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-muted-foreground text-lg leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
            <Card className="bg-[#22252e] h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-[#912fa0]" />
                  Información
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p><strong>Nombre:</strong> {personalInfo.name}</p>
                <p><strong>Ubicación:</strong> {personalInfo.location}</p>
                <p><strong>Rol:</strong> {personalInfo.title}</p>
                <p><strong>Formación:</strong> Informática y Tecnología Multimedia - UCR</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mi Enfoque */}
      <section aria-labelledby="enfoque-heading" className="py-12 md:py-16 bg-[#22252e]/50">
        <div className="container px-4 md:px-6">
          <h2 id="enfoque-heading" className="text-3xl font-bold tracking-tighter mb-8">
            Mi Enfoque
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              {aboutMe.enfoque.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-muted-foreground text-lg leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
            <Card className="bg-[#22252e]">
              <CardHeader>
                <CardTitle>Mi Filosofía</CardTitle>
                <CardDescription>Principios que guían mi trabajo</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {aboutMe.filosofia.map((principio, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#912fa0] mt-1">✓</span>
                      <span>{principio}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Habilidades Blandas */}
      <section aria-labelledby="soft-skills-heading" className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 id="soft-skills-heading" className="text-3xl font-bold tracking-tighter mb-4">
            Habilidades Blandas
          </h2>
          <p className="text-muted-foreground mb-8 w-full">
            Las habilidades interpersonales que me permiten colaborar efectivamente y crear mejores experiencias de usuario.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {softSkills.map((skill) => {
              const IconComponent = iconMap[skill.icon];
              return (
                <Card key={skill.name} className="bg-[#22252e] hover:border-[#912fa0]/50 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      {IconComponent && <IconComponent className="h-5 w-5 text-[#912fa0]" />}
                      <CardTitle className="text-base">{skill.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Intereses y Gustos */}
      <section aria-labelledby="intereses-heading" className="py-12 md:py-16 bg-[#22252e]/50">
        <div className="container px-4 md:px-6">
          <h2 id="intereses-heading" className="text-3xl font-bold tracking-tighter mb-8">
            Intereses y Gustos
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-[#22252e]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-[#912fa0]" />
                  Tecnologías que me emocionan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {interests.tecnologias.map((tech, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#912fa0]" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#22252e]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gamepad2 className="h-5 w-5 text-[#912fa0]" />
                  Hobbies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {interests.hobbies.map((hobby, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#912fa0]" />
                      {hobby}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#22252e]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-[#912fa0]" />
                  Proyectos que me apasionan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {interests.proyectosQueMeApasionan.map((proyecto, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#912fa0]" />
                      {proyecto}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Habilidades Técnicas */}
      <section aria-labelledby="tech-skills-heading" className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 id="tech-skills-heading" className="text-3xl font-bold tracking-tighter mb-8">
            Habilidades Técnicas
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-[#22252e]">
              <CardHeader>
                <CardTitle>Frontend</CardTitle>
                <CardDescription>Tecnologías de interfaz de usuario</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {technicalSkills.frontend.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm">{skill.name}</span>
                      <Badge variant={skill.level === "Avanzado" ? "default" : "secondary"}>
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#22252e]">
              <CardHeader>
                <CardTitle>Backend</CardTitle>
                <CardDescription>Tecnologías de servidor</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {technicalSkills.backend.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm">{skill.name}</span>
                      <Badge variant={skill.level === "Avanzado" ? "default" : "secondary"}>
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#22252e]">
              <CardHeader>
                <CardTitle>Herramientas</CardTitle>
                <CardDescription>Entornos y utilidades</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {technicalSkills.tools.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm">{skill.name}</span>
                      <Badge variant={skill.level === "Avanzado" ? "default" : "secondary"}>
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#22252e]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-[#912fa0]" />
                  UX/UI
                </CardTitle>
                <CardDescription>Diseño de experiencia de usuario</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {technicalSkills.ux.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm">{skill.name}</span>
                      <Badge variant={skill.level === "Avanzado" ? "default" : "secondary"}>
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experiencia Laboral */}
      <section aria-labelledby="experiencia-heading" className="py-12 md:py-16 bg-[#22252e]/50">
        <div className="container px-4 md:px-6">
          <h2 id="experiencia-heading" className="text-3xl font-bold tracking-tighter mb-8">
            Experiencia Laboral
          </h2>
          <div className="grid gap-6">
            {workExperience.map((job, index) => (
              <Card key={index} className="bg-[#22252e]">
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
                  <p className="text-muted-foreground">{job.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Logros principales:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {job.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Te gustaría ver mi trabajo?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Explora mis proyectos y casos de estudio para ver cómo aplico estos conocimientos en situaciones reales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="customRed" size="lg" asChild>
              <Link to="/#proyectos">Ver Proyectos</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={`mailto:${personalInfo.email}`}>Contactarme</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
