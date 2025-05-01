import { ProjectCard } from "../Project-card"
import { Navbar } from "../Navbar"
import { Hero } from "../Hero"
import { Footer } from "../Footer"
import { Experience } from "../Experience"



export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <section id="proyectos" className="container py-12 md:py-24">
          <h2 className="text-5xl font-bold mb-12 tracking-tighter">Mis Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <ProjectCard
              title="Ticolancer"
              description="Aplicación web para la publicación de servicios brindados por freelancers en Costa Rica."
              img="/imgs/Ticolancer.png"
              tags={["React", "Tailwind", "MySQL","Laravel", "PHP", "Vite","JavaScript","Cypress"]}
               githubUrl="https://github.com/TottoWolff/Ticolancer-Desarrollo"
              descripcionDetallada="Este proyecto académico se enfoca en el desarrollo de una aplicación web para la publicación de servicios brindados por freelancers en Costa Rica, el cual se gestiona con membresías por parte de los freelancers para mostrar sus servicios y ser contratados por potenciales clientes."
            />
            <ProjectCard
              title="Gestión Hotelera"
              description="Este sistema es desarrollado para una cadena de hoteles con Oracle Database 21C."
              img="/imgs/HOTELES.png"
              tags={["Oracle 21C", "SQL", "R-MAN", "Power BI", "PL/SQL","SQL_Dev"]}
              githubUrl="https://lucid.app/lucidchart/144e214c-895b-412b-b7e0-7e3b2d980202/edit?viewport_loc=-3602%2C-4143%2C10036%2C4615%2C0_0&invitationId=inv_d5c6ebeb-c4b2-48ad-92af-89e740822abb"
              descripcionDetallada="Este proyecto es académico pero se enfoca con un caso real al cual se le dio solución de la forma mas optima y eficiente, es este proyecto se realizaron diferentes tipos de procedimientos almacenados, funciones, triggers y bitacoras, todo esto para tener una buena gestión de la base de datos y el mejor rendimiento."
            />
             <ProjectCard
              title="Sistema de Karate"
              description="Sistema de gestión de torneos de karate desarrollado desde cero."
              img="/imgs/karate-proyecto.png"
              tags={[ "React", "Tailwind", "MySQL","Laravel", "PHP", "Vite" ]}
              githubUrl="https://github.com/AlejandroBolanos/Karate-Scoreboard"
              descripcionDetallada="Este proyecto está en desarrollo actualmente, se enfoca en la administración de un dojo de karate, el cual desea llevar el puntaje de los alumnos y crear torneos de karate, al realizar los torneos se generan llaves de forma aletoria entre los participantes de la misma categoría y cada tatami lleva una pantalla en timepo real donde se ve la puntuación de la pelea y al finalizar se actualiza la puntuación de los participantes y las llaves del torneo."
            />
            <ProjectCard
              title="EventMate"
              description="Aplicación web para el gestionamiento de eventos, tareas y actividades ."
              img="/imgs/Homepage Students2.PNG"
              tags={["React", "CSS", "MySQL", "PHP","Ajax", "Vite"]}
              githubUrl="https://github.com/AlejandroBolanos/eventmate_frontend"
              descripcionDetallada="Esta aplicacion web es un projecto académico, el cual está enfocado en gestionar actividades, eventos o tareas de estudiantes y poder llevar una mejor oraganización en la vida académica de los estudiantes."
            />
            <ProjectCard
              title="Le Gourmet Parisien"
              description="Aplicación web para el restaurante parisino."
              img="/imgs/Desktop - Homepage2.PNG"
              tags={["HTML", "CSS", "MySQL", "PHP","JavaScript"]}
              githubUrl="https://github.com/AlejandroBolanos/backend-pagina-web"
              descripcionDetallada="Este proyecto academico fue realizado para un hipotetico restaurante parisino, esta web lleva el control de pedidos, reservas y el menu del restaurante y es adaptativa para diferentes idiomas y con una pasarela de pago para realizar las transacciones de los clientes."
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
