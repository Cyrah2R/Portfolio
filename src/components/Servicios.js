import React from 'react'

export const Servicios = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Servicios</h1>

      <section className='services'>
        <article className='service'>
          <h2>Diseño web</h2>
          <p>Haz que tu web se vea profesional</p>
        </article>

        <article className='service'>
          <h2>Desarrollo web</h2>
          <p>Creación de páginas web desde cero</p>
        </article>

        <article className='service'>
          <h2>Posicionamiento web</h2>
          <p>Haz que tu web aparezca en Google</p>
        </article>
      </section>
    </div>
  )
}
