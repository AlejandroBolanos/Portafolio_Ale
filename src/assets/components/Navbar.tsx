"use client"


import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

export function Navbar() {

  const navItems = [
    { name: "Inicio", href: "#" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contacto" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between ">
        <div className="flex items-center gap-2">
          <a href="/" className="font-bold text-xl">
            Mi Portafolio
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center ">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
              {item.name}
            </a>
          ))}
          <Button variant="customRed" asChild>
            <a href="/imgs/Alejandro_Robles_CV.pdf" download>
              Descargar CV
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8 px-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col gap-4  px-12">
              <Button variant={"customRed"} asChild className="mt-4">
            <a href="/imgs/Alejandro_Robles_CV.pdf" download>
              Descargar CV
            </a>
          </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
