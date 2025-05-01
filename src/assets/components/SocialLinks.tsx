import { useState } from "react"
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { cn } from "@/lib/utils"

const links = {
  github: "https://github.com/AlejandroBolanos",
  linkedin: "https://www.linkedin.com/in/alejandro-bola%C3%B1os-3b0349363/",
  email: "mailto:alejandrorb0803@gmail.com",
}

export default	function SocialLinks() {
  const [copied, setCopied] = useState(false)
  const [currentLink, setCurrentLink] = useState("")

  const handleCopy = () => {
    navigator.clipboard.writeText(currentLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
    
  }

  return (
    <div className="flex gap-1 ">
      {Object.entries(links).map(([name, url]) => (
        <Dialog key={name}>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentLink(url)}
            >
              {name === "github" && <GithubIcon className="h-5 w-5" />}
              {name === "linkedin" && <LinkedinIcon className="h-5 w-5" />}
              {name === "email" && <MailIcon className="h-5 w-5" />}
              <span className="sr-only">{name}</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>¿Qué querés hacer?</DialogTitle>
              <DialogDescription className="mt-2">
                Podés abrir el enlace o copiarlo al portapapeles.
              </DialogDescription>
            </DialogHeader>
            <div className="flex gap-4 mt-4">
              <a href={currentLink} target="_blank" rel="noopener noreferrer">
                <Button variant="default">Abrir enlace</Button>
              </a>
              <Button variant="secondary" onClick={handleCopy}>
                Copiar enlace
              </Button>
            </div>
            {copied && (
              <p className="text-sm text-green-500 mt-2 animate-fade-in">
                Enlace copiado ✅
              </p>
            )}
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}

