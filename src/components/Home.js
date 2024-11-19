import React from 'react'
import { Link } from 'react-router-dom';
import { ListadoTrabajos } from './ListadoTrabajos';

export const Home = () => {

  return (
    <div className='home'>

      <h2 className='presentacion'>
        Hola, soy <strong>David</strong> y soy Desarrollador Web.
      </h2>

      <h2 className='marca'>
        <strong>Cyrah Code</strong><br />
        es mi marca dedicada al desarrollo de aplicaciones web y al diseño profesional de páginas web.
      </h2>

      <h2 className='contacto'>
        Ofrezco mis servicios para todo tipo de proyectos
        <Link to="/contacto">Contacta conmigo.</Link>
      </h2>
      
      <section className='last-works'>
        
        <h1 className='heading'>Proyectos</h1>
        <p>Estos son mis trabajos de desarrollo web</p>
          
        <ListadoTrabajos limite='6' />

      </section>

    </div>

  )
}