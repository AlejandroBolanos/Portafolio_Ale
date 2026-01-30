
import { Button } from "./ui/button"
import { Code, Terminal } from "lucide-react"
import SocialLinks from "./SocialLinks"

export function Hero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-27 overflow-hidden mt-2 rounded-2xl bg-[#22252e]">
{/* 353B84 */}
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
          {/* Content Column */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-left">
                Alejandro Robles Bolaños
              </h1>
              <p className="text-xl text-muted-foreground text-left">Desarrollador Web</p>
            </div>
            <div className="max-w-[600px] text-muted-foreground md:text-xl text-left">
              <p>
                Creo experiencias digitales centradas en el usuario, combinando desarrollo web
                con principios de diseño UX para soluciones que realmente funcionan.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <a href="#contacto">Contactarme</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#proyectos">Ver Proyectos</a>
                </Button>
              </div>
              <div className="flex gap-4 mt-">
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* Terminal/Code Column */}
          <div className="flex items-start justify-center">
            <div className="w-full max-w-md overflow-hidden rounded-lg border bg-card shadow-sm">
              <div className="flex items-center gap-2 border-b bg-muted/50 px-4 py-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="ml-2 flex-1">
                  <p className="text-xs font-medium">terminal</p>
                </div>
                <Terminal className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="bg-card p-4 font-mono text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>$</span>
                  <span className="flex-1">npm run dev</span>
                </div>
                <div className="mt-2 text-primary">
                  <p>{"> portfolio@1.0.0 dev"}</p>
                  <p>{"> next dev"}</p>
                </div>
                <div className="mt-2">
                  <p className="text-muted-foreground">- ready started server on 0.0.0.0:3000</p>
                  <p className="text-green-500">✓ Compiled successfully</p>
                  <div className="mt-1 flex items-center gap-2">
                    <Code className="h-4 w-4 text-primary" aria-hidden="true" />
                    <p>Desarrollando experiencias de usuario...</p>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <span className="h-4 w-2 animate-pulse bg-primary"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech stack badges */}
        <div className="mt-3 flex flex-wrap justify-center gap-4" role="list" aria-label="Tecnologías principales">
          {["JavaScript", "React", "Laravel", "Figma", "MySQL", "Tailwind"].map((tech) => (
            <div key={tech} role="listitem" className="rounded-full px-4 py-1 text-sm font-medium shadow-sm border bg-[#912fa0] text-white hover:bg-[#7f2c8b] transition-colors">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
