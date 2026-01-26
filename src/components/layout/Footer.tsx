import { Link, useLocation } from "react-router-dom";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { personalInfo } from "@/data/personal";

export function Footer() {
  const location = useLocation();

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith("#") && location.pathname === "/") {
      e.preventDefault();
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contacto" aria-label="Pie de página" className="w-full border-t bg-background py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Mi Portafolio</h3>
          <p className="text-muted-foreground">
            Desarrollador web y diseñador UX especializado en crear experiencias digitales excepcionales.
          </p>
          <div className="flex gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil de GitHub"
              className="hover:text-[#912fa0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#912fa0] rounded-sm p-1"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil de LinkedIn"
              className="hover:text-[#912fa0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#912fa0] rounded-sm p-1"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Enviar correo electrónico"
              className="hover:text-[#912fa0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#912fa0] rounded-sm p-1"
            >
              <MailIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Enlaces</h3>
          <nav aria-label="Enlaces del pie de página" className="flex flex-col gap-2">
            <Link
              to="/"
              className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#912fa0] rounded-sm w-fit"
            >
              Inicio
            </Link>
            <Link
              to="/about"
              className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#912fa0] rounded-sm w-fit"
            >
              Sobre Mí
            </Link>
            <a
              href="/#proyectos"
              onClick={(e) => handleNavClick("#proyectos", e)}
              className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#912fa0] rounded-sm w-fit"
            >
              Proyectos
            </a>
            <a
              href="#contacto"
              onClick={(e) => handleNavClick("#contacto", e)}
              className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#912fa0] rounded-sm w-fit"
            >
              Contacto
            </a>
          </nav>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Contacto</h3>
          <address className="space-y-2 not-italic">
            <p className="text-muted-foreground">
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#912fa0] rounded-sm"
              >
                {personalInfo.email}
              </a>
            </p>
            <p className="text-muted-foreground">
              <strong>Teléfono:</strong>{" "}
              <a
                href={`tel:${personalInfo.phone}`}
                className="hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#912fa0] rounded-sm"
              >
                {personalInfo.phone}
              </a>
            </p>
            <p className="text-muted-foreground">
              <strong>Ubicación:</strong> {personalInfo.location}
            </p>
          </address>
        </div>
      </div>
      <div className="container mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
