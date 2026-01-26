# Estructura del Proyecto - Portafolio UX

Este documento explica la arquitectura del portafolio para facilitar futuras modificaciones.

---

## Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| React | 19.0.0 | Framework de UI |
| TypeScript | 5.7.2 | Tipado estático |
| Vite | 6.3.3 | Build tool y dev server |
| Tailwind CSS | 4.1.4 | Estilos utility-first |
| React Router | 6.x | Navegación entre páginas |
| Radix UI | - | Componentes accesibles (Dialog, Tabs, Sheet) |
| Lucide React | 0.503.0 | Iconos SVG |

---

## Estructura de Carpetas

```
src/
├── assets/
│   └── components/           # Componentes originales (legacy)
│       ├── pages/
│       │   └── Home.tsx      # (No se usa - reemplazado por src/pages/Home.tsx)
│       ├── ui/               # Componentes UI reutilizables
│       │   ├── badge.tsx
│       │   ├── button.tsx
│       │   ├── card.tsx
│       │   ├── dialog.tsx
│       │   ├── sheet.tsx
│       │   └── tabs.tsx
│       ├── Experience.tsx    # (No se usa - movido a AboutMe)
│       ├── Footer.tsx        # (No se usa - reemplazado)
│       ├── Hero.tsx          # ✅ Sección hero del home
│       ├── Navbar.tsx        # (No se usa - reemplazado)
│       ├── Project-card.tsx  # (No se usa - reemplazado)
│       └── SocialLinks.tsx   # ✅ Links de redes sociales
│
├── components/
│   ├── accessibility/
│   │   └── SkipLink.tsx      # Skip link para accesibilidad
│   └── layout/
│       ├── Layout.tsx        # Wrapper principal (Navbar + Footer)
│       ├── Navbar.tsx        # ✅ Navegación principal
│       ├── Footer.tsx        # ✅ Pie de página
│       └── ScrollToTop.tsx   # Reset scroll al cambiar página
│
├── data/                     # Datos del portafolio
│   ├── projects.ts           # Proyectos y casos de estudio
│   ├── skills.ts             # Habilidades técnicas y blandas
│   └── personal.ts           # Información personal, historia, intereses
│
├── pages/                    # Páginas principales
│   ├── Home.tsx              # Página de inicio
│   ├── AboutMe.tsx           # Página "Sobre Mí"
│   └── ProjectDetail.tsx     # Página de detalle de proyecto
│
├── lib/
│   └── utils.ts              # Utilidad cn() para clases Tailwind
│
├── App.tsx                   # Configuración de rutas
├── App.css                   # Estilos adicionales
├── index.css                 # Estilos globales y tema
└── main.tsx                  # Entry point
```

---

## Sistema de Rutas

Las rutas están definidas en `src/App.tsx`:

```tsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />           // Ruta: /
      <Route path="about" element={<AboutMe />} /> // Ruta: /about
      <Route path="proyecto/:id" element={<ProjectDetail />} /> // Ruta: /proyecto/ticolancer
    </Route>
  </Routes>
</BrowserRouter>
```

### Agregar una nueva página

1. Crear el archivo en `src/pages/NuevaPagina.tsx`
2. Importar en `src/App.tsx`
3. Agregar la ruta dentro del `<Route path="/" element={<Layout />}>`

```tsx
// En App.tsx
import NuevaPagina from "./pages/NuevaPagina";

// Dentro de Routes
<Route path="nueva-ruta" element={<NuevaPagina />} />
```

4. Agregar enlace en el Navbar si es necesario (`src/components/layout/Navbar.tsx`)

---

## Componentes de Layout

### Layout.tsx
Wrapper que envuelve todas las páginas. Incluye:
- `ScrollToTop` - Resetea scroll al cambiar de página
- `SkipLink` - Accesibilidad para saltar al contenido
- `Navbar` - Navegación principal
- `<Outlet />` - Donde se renderiza la página actual
- `Footer` - Pie de página

### Navbar.tsx
Navegación principal con:
- Detección de sección activa al hacer scroll
- Navegación con hash (/#proyectos, /#contacto)
- Menú móvil con Sheet de Radix UI
- Indicador visual de página/sección activa (color púrpura)

**Para agregar un nuevo enlace:**
```tsx
// En src/components/layout/Navbar.tsx
const navItems = [
  { name: "Inicio", href: "/", section: null },
  { name: "Sobre Mí", href: "/about", section: null },
  { name: "Proyectos", href: "/#proyectos", section: "proyectos" },
  { name: "Contacto", href: "/#contacto", section: "contacto" },
  // Agregar nuevo:
  { name: "Nuevo", href: "/nueva-ruta", section: null },
];
```

---

## Sistema de Datos

Los datos están separados en archivos TypeScript en `src/data/`:

### projects.ts
Define la estructura de proyectos con enfoque UX:

```typescript
interface Project {
  id: string;              // ID para la URL (/proyecto/ticolancer)
  title: string;
  subtitle: string;
  heroImage: string;       // Ruta a imagen en /public/imgs/
  rol: string;
  duracion: string;
  herramientas: string[];
  problema: string;        // Descripción del problema UX
  proceso: {               // Proceso de diseño
    investigacion?: string;
    wireframes?: string;
    prototipo?: string;
    testing?: string;
  };
  hallazgos: string[];     // Insights encontrados
  solucion: string;
  resultados: string[];
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
}
```

**Para agregar un nuevo proyecto:**
1. Agregar imagen a `public/imgs/`
2. Agregar objeto al array `projects` en `src/data/projects.ts`

### skills.ts
Habilidades técnicas y blandas:

```typescript
// Técnicas (frontend, backend, tools, ux)
technicalSkills.frontend.push({ name: "Vue.js", level: "Básico" });

// Blandas
softSkills.push({
  name: "Creatividad",
  description: "Descripción de la habilidad",
  icon: "Palette"  // Nombre del icono de Lucide
});
```

### personal.ts
Información personal, historia, intereses y experiencia laboral.

---

## Componentes UI

Los componentes UI están en `src/assets/components/ui/` y siguen el patrón de [shadcn/ui](https://ui.shadcn.com/).

### Button
```tsx
import { Button } from "@/assets/components/ui/button";

// Variantes disponibles:
<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="customRed">Púrpura (#912fa0)</Button>
<Button variant="destructive">Destructivo</Button>
<Button variant="link">Link</Button>

// Tamaños:
<Button size="sm">Pequeño</Button>
<Button size="default">Default</Button>
<Button size="lg">Grande</Button>
<Button size="icon">Solo icono</Button>
```

### Card
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/assets/components/ui/card";

<Card className="bg-[#22252e]">
  <CardHeader>
    <CardTitle>Título</CardTitle>
    <CardDescription>Descripción</CardDescription>
  </CardHeader>
  <CardContent>
    Contenido
  </CardContent>
  <CardFooter>
    Footer
  </CardFooter>
</Card>
```

### Badge
```tsx
import { Badge } from "@/assets/components/ui/badge";

<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
```

### Dialog (Modal)
```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/assets/components/ui/dialog";

<Dialog>
  <DialogTrigger asChild>
    <Button>Abrir Modal</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Título</DialogTitle>
      <DialogDescription>Descripción</DialogDescription>
    </DialogHeader>
    Contenido del modal
  </DialogContent>
</Dialog>
```

### Tabs
```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/assets/components/ui/tabs";

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Contenido 1</TabsContent>
  <TabsContent value="tab2">Contenido 2</TabsContent>
</Tabs>
```

---

## Sistema de Colores

Los colores principales están definidos en `src/index.css`:

| Color | Código | Uso |
|-------|--------|-----|
| Púrpura (primario) | `#912fa0` | Botones CTA, acentos, enlaces activos |
| Púrpura hover | `#7f2c8b` | Estado hover del púrpura |
| Negro fondo | `#020818` | Fondo principal |
| Gris oscuro | `#22252e` | Fondo de cards y secciones |

### Usar los colores en componentes:
```tsx
// Tailwind classes
className="bg-[#912fa0]"        // Fondo púrpura
className="text-[#912fa0]"      // Texto púrpura
className="hover:bg-[#7f2c8b]"  // Hover púrpura oscuro
className="bg-[#22252e]"        // Fondo card
```

### Variables CSS del tema (dark mode):
```css
--background: #020818;
--foreground: oklch(0.985 0 0);
--muted-foreground: oklch(0.75 0 0);
```

---

## Accesibilidad

### Características implementadas:

1. **Skip Link** (`src/components/accessibility/SkipLink.tsx`)
   - Permite saltar al contenido principal con Tab

2. **Focus States**
   - Todos los elementos interactivos tienen `focus-visible:ring-2 focus-visible:ring-[#912fa0]`

3. **ARIA Labels**
   - `aria-label` en botones de solo icono
   - `aria-current="page"` en navegación activa
   - `role="list"` y `role="listitem"` en listas visuales

4. **Reducción de movimiento**
   ```css
   @media (prefers-reduced-motion: reduce) {
     /* Animaciones desactivadas */
   }
   ```

5. **Contraste mejorado**
   - Texto muted con mayor contraste en dark mode

### Agregar accesibilidad a nuevos componentes:
```tsx
// Botón con solo icono
<Button aria-label="Descripción de la acción">
  <Icon />
</Button>

// Link externo
<a
  href="url"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Descripción del enlace"
>

// Sección con heading
<section aria-labelledby="seccion-id">
  <h2 id="seccion-id">Título</h2>
</section>
```

---

## Cómo hacer cambios comunes

### Cambiar información personal
Editar `src/data/personal.ts`:
- `personalInfo` - Nombre, email, teléfono, links
- `aboutMe` - Historia, enfoque, filosofía
- `interests` - Tecnologías, hobbies, proyectos que apasionan
- `workExperience` - Experiencia laboral

### Agregar un nuevo proyecto
1. Agregar imagen a `public/imgs/nombre-proyecto.png`
2. En `src/data/projects.ts`, agregar al array `projects`:
```typescript
{
  id: "nombre-proyecto",  // Será la URL: /proyecto/nombre-proyecto
  title: "Nombre del Proyecto",
  subtitle: "Descripción corta",
  heroImage: "/imgs/nombre-proyecto.png",
  rol: "Tu rol",
  duracion: "Fecha inicio - Fecha fin",
  herramientas: ["Figma", "React", "etc"],
  problema: "Descripción del problema...",
  proceso: {
    investigacion: "Qué investigaste...",
    wireframes: "Cómo diseñaste...",
    prototipo: "Cómo prototipaste...",
    testing: "Cómo probaste..."
  },
  hallazgos: ["Hallazgo 1", "Hallazgo 2"],
  solucion: "Cómo lo resolviste...",
  resultados: ["Resultado 1", "Resultado 2"],
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",
  tags: ["React", "Tailwind", "etc"]
}
```

### Agregar una nueva habilidad blanda
En `src/data/skills.ts`:
```typescript
softSkills.push({
  name: "Nombre",
  description: "Descripción",
  icon: "NombreIconoLucide"  // Ver: https://lucide.dev/icons
});
```

Luego en `src/pages/AboutMe.tsx`, agregar el icono al `iconMap`:
```typescript
import { NuevoIcono } from "lucide-react";

const iconMap = {
  // ... iconos existentes
  NuevoIcono,
};
```

### Cambiar el CV
Reemplazar el archivo `public/imgs/Alejandro_Robles_CV.pdf` con el nuevo CV.

### Agregar una nueva sección al Home
En `src/pages/Home.tsx`, agregar después de la sección de proyectos:
```tsx
<section id="nueva-seccion" aria-labelledby="nueva-seccion-heading" className="py-12 md:py-24">
  <div className="container px-4 md:px-6">
    <h2 id="nueva-seccion-heading" className="text-4xl font-bold mb-8">
      Nueva Sección
    </h2>
    {/* Contenido */}
  </div>
</section>
```

Si quieres que aparezca en el navbar, agregar en `src/components/layout/Navbar.tsx`:
```typescript
const navItems = [
  // ... items existentes
  { name: "Nueva Sección", href: "/#nueva-seccion", section: "nueva-seccion" },
];
```

---

## Comandos útiles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linter
npm run lint
```

---

## Despliegue

El proyecto está configurado para Netlify. El build genera los archivos en `dist/`.

Para desplegar:
1. `npm run build`
2. Subir contenido de `dist/` al hosting
3. Configurar redirects para SPA (ya incluido en Netlify)

---

## Troubleshooting

### El navbar no detecta la sección activa
Verificar que el `id` de la sección coincida con el `section` en `navItems`.

### Los estilos no se aplican
1. Verificar que las clases de Tailwind estén correctas
2. Ejecutar `npm run dev` de nuevo
3. Limpiar caché del navegador

### Error de módulo no encontrado
Verificar que el path alias `@/` esté funcionando. El archivo `tsconfig.app.json` debe tener:
```json
"paths": {
  "@/*": ["src/*"]
}
```

### Imágenes no cargan
Las imágenes públicas deben estar en `public/imgs/` y referenciarse como `/imgs/nombre.png`.
