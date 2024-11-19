import React from 'react'
import { Link } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

export const ListadoTrabajos = ({limite}) => {
  return (
      <section className='works'>
        {
          trabajos.slice(0, limite).map(trabajo => {
            return (
              <article key={trabajo.id} className='work-item'>
                <div className='mask'>
                  <img src={'/images/proyectos/'+trabajo.id+'.png'} alt="" />
                </div>
                <span>{trabajo.categorias}</span>
                <h2><strong><Link to={'/proyecto/'+trabajo.id}>{trabajo.nombre}</Link></strong></h2>
                <h3>{trabajo.tecnologias}</h3>
              </article>
            );
          })
        }
      </section>
  )
}