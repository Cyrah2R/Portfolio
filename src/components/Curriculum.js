import React from 'react'

export const Curriculum = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Curriculum</h1>

      <h2>Experiencia</h2>
        <ul>
          <li>
            <strong>Desarrollador Front-end con React - N-Way Group</strong>
            <em>Prácticas FCT: Junio - Septiembre 2024</em>
            <p>Participación en el desarrollo de la aplicación
              <a href="https://brodriver.com/website/" target="_blank" rel="noopener noreferrer"> Brodrivers</a>
              , encargándome de:
            </p>
            <ul>
              <li>Creación de vistas principales y formularios dinámicos.</li>
              <li>Desarrollo y mantenimiento de estilos CSS personalizados.</li>
              <li>Colaboración en la integración de APIs y optimización de la experiencia de usuario.</li>
            </ul>
          </li>
        </ul>

      <h2>Conocimientos</h2>
        <ul>
            <li>Master en React: ReactJS, Hooks, MERN, NodeJS, JWT+ (Udemy - Victor Robles - 2024)</li>
            <li>Como crear una tienda online con Wordpress 2024 (Udemy - 2024)</li>
            <li>Master Completo en Java cero a experto (Udemy - Andres Guzman - 2023)</li>
            <li>Fundamentos del desarrollo web: Full Stack o Front-end (LinkedIn - 2023)</li>
            <li>Aprende Java con 100 ejercicios prácticos (incluye JavaFX) (Udemy - Fernando Ureña - 2022)</li>
        </ul>

      <h2>Educacion</h2>
        <ul>
          <li>Grado Superior de Desarrollo de Aplicaciones Web (DAW)</li>
        </ul>

      {/* <h2>Proyectos personales</h2>
        <ul>
          <li>
          </li>
        </ul> */}

    </div>
  )
}
