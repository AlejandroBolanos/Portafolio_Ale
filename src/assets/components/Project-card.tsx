"use client"

import { useState } from "react"
//import Image from "next/image"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  img: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  descripcionDetallada?: string
}

export function ProjectCard({ title, description, img, tags, githubUrl, liveUrl, descripcionDetallada }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="overflow-hidden bg-red">
      <div className="aspect-video relative overflow-hidden flex items-center justify-center">
        <img
          src={img || "/placeholder.svg"}
          alt={title}
          className="object-cover transition-transform duration-300 hover:scale-105 w-[95%] rounded-sm"
          //fill
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Ver Detalles</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <img src={img || "/placeholder.svg"} alt={title} className="object-cover" />
              </div>
              <div>
                <h4 className="font-medium mb-2">Tecnologías utilizadas:</h4>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Descripción detallada:</h4>
                <p className="text-sm text-muted-foreground">
                {descripcionDetallada || "No se ha proporcionado una descripción detallada para este proyecto."}
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                {githubUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </a>
                  </Button>
                )}
                {liveUrl && (
                  <Button size="sm" asChild>
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <div className="flex gap-2">
          {githubUrl && (
            <Button variant="ghost" size="icon" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button variant="ghost" size="icon" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">Demo</span>
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
