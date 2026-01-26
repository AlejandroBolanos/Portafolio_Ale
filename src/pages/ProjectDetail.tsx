import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  User,
  Wrench,
  ExternalLink,
  Github,
  Search,
  Lightbulb,
  CheckCircle,
  Target
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/assets/components/ui/card";
import { Badge } from "@/assets/components/ui/badge";
import { Button } from "@/assets/components/ui/button";
import { getProjectById, getProjectNavigation } from "@/data/projects";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;
  const navigation = id ? getProjectNavigation(id) : { prev: null, next: null };

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <article className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-20 overflow-hidden bg-[#22252e]">
        <div className="container px-4 md:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#912fa0] rounded-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a proyectos
          </Link>

          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {project.subtitle}
              </p>

              {/* Metadata */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span>{project.rol}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{project.duracion}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {project.githubUrl && (
                  <Button variant="outline" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Ver Código
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button variant="customRed" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Ver Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Project Image */}
            <div className="relative">
              <img
                src={project.heroImage}
                alt={`Captura de pantalla del proyecto ${project.title}`}
                className="rounded-lg shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Herramientas */}
      <section aria-labelledby="herramientas-heading" className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 id="herramientas-heading" className="text-2xl font-bold tracking-tighter mb-6 flex items-center gap-2">
            <Wrench className="h-6 w-6 text-[#912fa0]" />
            Herramientas Utilizadas
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.herramientas.map((herramienta) => (
              <Badge
                key={herramienta}
                className="bg-[#912fa0] text-white hover:bg-[#7f2c8b] px-4 py-2 text-sm"
              >
                {herramienta}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* El Problema */}
      <section aria-labelledby="problema-heading" className="py-12 md:py-16 bg-[#22252e]/50">
        <div className="container px-4 md:px-6">
          <h2 id="problema-heading" className="text-2xl font-bold tracking-tighter mb-6 flex items-center gap-2">
            <Target className="h-6 w-6 text-[#912fa0]" />
            El Problema
          </h2>
          <Card className="bg-[#22252e]">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.problema}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Proceso UX */}
      <section aria-labelledby="proceso-heading" className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 id="proceso-heading" className="text-2xl font-bold tracking-tighter mb-8 flex items-center gap-2">
            <Search className="h-6 w-6 text-[#912fa0]" />
            Proceso de Diseño
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {project.proceso.investigacion && (
              <Card className="bg-[#22252e]">
                <CardHeader>
                  <CardTitle className="text-lg">1. Investigación</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.proceso.investigacion}</p>
                </CardContent>
              </Card>
            )}
            {project.proceso.wireframes && (
              <Card className="bg-[#22252e]">
                <CardHeader>
                  <CardTitle className="text-lg">2. Wireframes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.proceso.wireframes}</p>
                </CardContent>
              </Card>
            )}
            {project.proceso.prototipo && (
              <Card className="bg-[#22252e]">
                <CardHeader>
                  <CardTitle className="text-lg">3. Prototipado</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.proceso.prototipo}</p>
                </CardContent>
              </Card>
            )}
            {project.proceso.testing && (
              <Card className="bg-[#22252e]">
                <CardHeader>
                  <CardTitle className="text-lg">4. Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.proceso.testing}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Hallazgos */}
      <section aria-labelledby="hallazgos-heading" className="py-12 md:py-16 bg-[#22252e]/50">
        <div className="container px-4 md:px-6">
          <h2 id="hallazgos-heading" className="text-2xl font-bold tracking-tighter mb-6 flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-[#912fa0]" />
            Hallazgos Clave
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {project.hallazgos.map((hallazgo, index) => (
              <Card key={index} className="bg-[#22252e]">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#912fa0] text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <p className="text-muted-foreground">{hallazgo}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solución */}
      <section aria-labelledby="solucion-heading" className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 id="solucion-heading" className="text-2xl font-bold tracking-tighter mb-6 flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-[#912fa0]" />
            La Solución
          </h2>
          <Card className="bg-[#22252e]">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.solucion}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resultados */}
      <section aria-labelledby="resultados-heading" className="py-12 md:py-16 bg-[#22252e]/50">
        <div className="container px-4 md:px-6">
          <h2 id="resultados-heading" className="text-2xl font-bold tracking-tighter mb-6">
            Resultados
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {project.resultados.map((resultado, index) => (
              <Card key={index} className="bg-[#22252e] border-[#912fa0]/30">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#912fa0] flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{resultado}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Navegación entre proyectos */}
      <nav aria-label="Navegación entre proyectos" className="py-12 md:py-16 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {navigation.prev ? (
              <Link
                to={`/proyecto/${navigation.prev.id}`}
                className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#912fa0] rounded-lg p-2 -m-2"
              >
                <ArrowLeft className="h-5 w-5 group-hover:text-[#912fa0] transition-colors" />
                <div>
                  <p className="text-sm text-muted-foreground">Proyecto anterior</p>
                  <p className="font-medium group-hover:text-[#912fa0] transition-colors">
                    {navigation.prev.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {navigation.next ? (
              <Link
                to={`/proyecto/${navigation.next.id}`}
                className="flex items-center gap-3 text-right group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#912fa0] rounded-lg p-2 -m-2"
              >
                <div>
                  <p className="text-sm text-muted-foreground">Siguiente proyecto</p>
                  <p className="font-medium group-hover:text-[#912fa0] transition-colors">
                    {navigation.next.title}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 group-hover:text-[#912fa0] transition-colors" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </nav>
    </article>
  );
}
