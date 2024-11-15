import React from 'react'
import { Link } from 'react-router-dom';
import { ListadoTrabajos } from './ListadoTrabajos';

export const Inicio = () => {

  return (
    <div className='home'>

      <div className='presentacion'>
        
        <img src='/images/david.png' alt='foto' className='foto'/>

        <h2 className='textoini'>
          Hola, soy <strong>David</strong> y me complace presentaros mi marca
          <br /><strong>Cyrah Code</strong><br />
          dedicada al desarrollo de aplicaciones web y al diseño profesional de páginas web.
        </h2>

      </div>

      <h2 className='tittle'>
        Ofrezco mis servicios en todo tipo de proyectos.
        <Link to="/contacto">Contacta conmigo.</Link>
      </h2>

      
      <section className='last-works'>
        
        <h2 className='heading'>Proyectos</h2>
        <p>Estos son mis trabajos de desarrollo web</p>
          
        <ListadoTrabajos limite='6' />

      </section>

    </div>

  )
}