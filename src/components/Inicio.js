import React from 'react'
import { Link } from 'react-router-dom';
import { ListadoTrabajos } from './ListadoTrabajos';

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, soy <strong>David Rivera Ruz</strong> y soy Desarrollador Web.
      </h1>
      <h2 className='tittle'>
        Ofrezco mis servicios de <strong>programacion y desarrollo en todo</strong> 
        tipo de proyectos web. <Link to="/contacto">Contacta conmigo.</Link>
      </h2>

      <section className='last-works'>

        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Esto son algunos de mis trabajos de desarrollo web</p>
          <ListadoTrabajos limite='2' />

      </section>
    </div>
  )
}