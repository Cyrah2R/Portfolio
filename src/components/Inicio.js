import React from 'react'
import { Link } from 'react-router-dom';
import { ListadoTrabajos } from './ListadoTrabajos';
import CarruselFotos from './CarruselFotos';

export const Inicio = () => {

  return (
    <div className='home'>

      <h1>
        Hola, soy <strong>David Rivera Ruz</strong> y soy Desarrollador Web.
      </h1>

      <h2 className='tittle'>
        Ofrezco mis servicios de <strong>desarrollo web </strong> 
        en todo tipo de proyectos. <Link to="/contacto">Contacta conmigo.</Link>
      </h2>

      <section className='about-me'>

        <h2 className='heading'>Sobre mi:</h2>
        <p>
          Soy una persona comprometida, con gran capacidad de aprendizaje rápido y eficaz. 
          Me adapto con facilidad a los cambios, abordo los retos de manera resolutiva y 
          mantengo una comunicación clara y efectiva.
          <br/><br/>
          Después de una larga trayectoria profesional en el sector de la hostelería, decidí 
          redirigir mi carrera y enfocarme en el desarrollo web, donde he encontrado una nueva 
          pasión y motivación para seguir creciendo profesionalmente.
          <br/><br/>
          Aunque mi trayectoria como desarrollador web está en sus primeros pasos, no puedo dejar 
          de lado el camino recorrido en mi carrera anterior. A lo largo de esa experiencia, he 
          tenido la oportunidad de trabajar en diversos lugares y adquirir habilidades que hoy 
          complementan mi formación en el mundo digital, aportándome una perspectiva única y 
          enriquecedora.
        </p>
      </section>
        
      <section>
      <h2 className='heading'>Trayectoria profesional previa:</h2>
        <p>
          A los 19 años, me trasladé al norte de España para trabajar en un restaurante ubicado en 
          Hondarribia, en el País Vasco.  Se trataba de una franquicia llamada Il Capo, donde llegué 
          a desempeñar el rol de encargado del restaurante. Mis funciones principales incluían la 
          contratación de personal, la dirección y supervisión de las operaciones, así como el control de
          pedidos y la gestión tanto de la sala como de la cocina. Además, seguí siendo un miembro activo 
          del equipo, contribuyendo de manera directa como un trabajador más.
          <br/><br/>
          <CarruselFotos limite='' />
        </p>
      </section>
      
      <section className='last-works'>
        
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>
          
        <ListadoTrabajos limite='6' />

      </section>

    </div>

  )
}