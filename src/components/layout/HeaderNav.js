import React from 'react'
import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
  return (
    <header className='header'>

      <div className='logo'>
        <span className='iniciales'>DЯ</span>
        <h3>David Rivera Ruz</h3>
        <img src="/images/logo.png" alt="Logo" />
      </div>

      <nav>
          <ul>
              <li>
                <NavLink to="/inicio" className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink>
              </li>
              {/* <li>
                <NavLink to="/portafolio"className={({isActive}) => isActive ? "active" : ""}>Portafolio</NavLink>
              </li> */}
              <li>
                <NavLink to="/bio"className={({isActive}) => isActive ? "active" : ""}>Bio</NavLink>
              </li>
              <li>
                <NavLink to="/formacion"className={({isActive}) => isActive ? "active" : ""}>Formacion</NavLink>
              </li>
              <li>
                <NavLink to="/contacto"className={({isActive}) => isActive ? "active" : ""}>Contacto</NavLink>
              </li>
          </ul>
      </nav>

    </header>
  )
}
