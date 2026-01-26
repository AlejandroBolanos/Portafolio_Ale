import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/assets/components/Hero";
import { Button } from "@/assets/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/assets/components/ui/card";
import { Badge } from "@/assets/components/ui/badge";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* About Preview Section */}
      <section aria-labelledby="about-preview-heading" className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="about-preview-heading" className="text-3xl font-bold tracking-tighter mb-4">
              Sobre Mí
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Soy un desarrollador web apasionado por crear experiencias digitales
              que realmente impacten a las personas. Me especializo en entender primero el problema
              antes de escribir código, creando soluciones centradas en el usuario.
            </p>
            <Button variant="outline" asChild>
              <Link to="/about" className="inline-flex items-center gap-2">
                Conoce más sobre mí
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" aria-labelledby="proyectos-heading" className="py-12 md:py-24 bg-[#22252e]/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 id="proyectos-heading" className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Mis Proyectos
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explora mis casos de estudio donde aplico principios de UX y desarrollo para crear soluciones efectivas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/proyecto/${project.id}`}
                className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#912fa0] focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
              >
                <Card className="bg-[#22252e] h-full overflow-hidden transition-all duration-300 group-hover:border-[#912fa0]/50 group-hover:shadow-lg group-hover:shadow-[#912fa0]/10">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.heroImage}
                      alt={`Vista previa del proyecto ${project.title}`}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#22252e] to-transparent opacity-60" />
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-[#912fa0] transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.tags.length - 4}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-[#912fa0] font-medium">
                      Ver caso de estudio
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
