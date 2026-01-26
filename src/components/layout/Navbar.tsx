import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/assets/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/assets/components/ui/sheet";

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>("");

  const navItems = [
    { name: "Inicio", href: "/", section: null },
    { name: "Sobre Mí", href: "/about", section: null },
    { name: "Proyectos", href: "/#proyectos", section: "proyectos" },
    { name: "Contacto", href: "/#contacto", section: "contacto" },
  ];

  // Detectar la sección activa en el scroll
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const handleScroll = () => {
      const sections = ["proyectos", "contacto"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            return;
          }
        }
      }

      // Si estamos arriba de todo, no hay sección activa (solo "Inicio")
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecutar al montar

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const isActive = (href: string, section: string | null) => {
    // Si estamos en /about
    if (location.pathname === "/about") {
      return href === "/about";
    }

    // Si estamos en home
    if (location.pathname === "/") {
      // Si es un link de sección
      if (section) {
        return activeSection === section;
      }
      // Si es el link de Inicio y no hay sección activa
      if (href === "/") {
        return activeSection === "";
      }
    }

    // Para páginas de proyecto
    if (location.pathname.startsWith("/proyecto")) {
      return false;
    }

    return false;
  };

  const handleNavClick = (e: React.MouseEvent, href: string, section: string | null) => {
    if (href.startsWith("/#") && section) {
      e.preventDefault();

      if (location.pathname === "/") {
        // Ya estamos en home, solo scroll
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navegamos a home y luego hacemos scroll
        navigate("/");
        // Esperamos a que la navegación termine y luego hacemos scroll
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav aria-label="Navegación principal" className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="font-bold text-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#912fa0] focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
          >
            Mi Portafolio
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            item.href.startsWith("/#") ? (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.section)}
                aria-current={isActive(item.href, item.section) ? "page" : undefined}
                className={`text-sm font-medium transition-colors hover:text-[#912fa0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#912fa0] focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm px-1 ${
                  isActive(item.href, item.section) ? "text-[#912fa0]" : ""
                }`}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                aria-current={isActive(item.href, item.section) ? "page" : undefined}
                className={`text-sm font-medium transition-colors hover:text-[#912fa0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#912fa0] focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm px-1 ${
                  isActive(item.href, item.section) ? "text-[#912fa0]" : ""
                }`}
              >
                {item.name}
              </Link>
            )
          ))}
          <Button variant="customRed" asChild>
            <a
              href="/imgs/Alejandro_Robles_CV.pdf"
              download
              className="focus-visible:ring-2 focus-visible:ring-white"
            >
              Descargar CV
            </a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden focus-visible:ring-2 focus-visible:ring-[#912fa0]"
              aria-label="Abrir menú de navegación"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" aria-label="Menú de navegación móvil">
            <nav className="flex flex-col gap-4 mt-8 px-8">
              {navItems.map((item) => (
                item.href.startsWith("/#") ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.section)}
                    aria-current={isActive(item.href, item.section) ? "page" : undefined}
                    className={`text-lg font-medium transition-colors hover:text-[#912fa0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#912fa0] rounded-sm px-1 ${
                      isActive(item.href, item.section) ? "text-[#912fa0]" : ""
                    }`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={isActive(item.href, item.section) ? "page" : undefined}
                    className={`text-lg font-medium transition-colors hover:text-[#912fa0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#912fa0] rounded-sm px-1 ${
                      isActive(item.href, item.section) ? "text-[#912fa0]" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="flex flex-col gap-4 px-12">
                <Button variant="customRed" asChild className="mt-4">
                  <a href="/imgs/Alejandro_Robles_CV.pdf" download>
                    Descargar CV
                  </a>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
