import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="w-full border-t bg-background py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Mi Portafolio</h3>
          <p className="text-muted-foreground">
            Desarrollador web especializado en crear experiencias digitales excepcionales.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/AlejandroBolanos" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/alejandro-bola%C3%B1os-3b0349363/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:alejandrorb0803@gmail.com">
              <MailIcon className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Enlaces</h3>
          <nav className="flex flex-col gap-2">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Inicio
            </a>
            <a href="#sobre-mi" className="text-muted-foreground hover:text-foreground">
              Sobre Mí
            </a>
            <a href="#proyectos" className="text-muted-foreground hover:text-foreground">
              Proyectos
            </a>
            <a href="#contacto" className="text-muted-foreground hover:text-foreground">
              Contacto
            </a>
          </nav>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Contacto</h3>
          <div className="space-y-2">
            <p className="text-muted-foreground">
              <strong>Email:</strong> alejandrorb0803@gmail.com
            </p>
            <p className="text-muted-foreground">
              <strong>Teléfono:</strong> +506 85119661
            </p>
            <p className="text-muted-foreground">
              <strong>Ubicación:</strong> Costa Rica
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Alejandro Robles Bolaños. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
