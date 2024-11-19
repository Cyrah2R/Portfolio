import React from 'react'
import { Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import { Home } from "../components/Home";
// import { Portafolio } from "../components/Portafolio";
import { Bio } from "../components/Bio";
import { Formacion } from "../components/Formacion";
import { Contacto } from "../components/Contacto";
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';
import { Proyecto } from '../components/Proyecto';

export const MisRutas = () => {

  return (
    <BrowserRouter>
        {/* HEADER Y NAVEGACION */}
        <HeaderNav />

        {/* CONTENIDO CENTRAL */}
        <section className="content">
          <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              {/* <Route path="/portafolio" element={<Portafolio />} /> */}
              <Route path="/bio" element={<Bio />} />
              <Route path="/formacion" element={<Formacion />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/proyecto/:id" element={<Proyecto />} />
              <Route path="*" element={
                  <div className='page'>
                    <h1 className='heading'>Error 404</h1>
                  </div>
                } 
              />
          </Routes>
        </section>

        {/* FOOTER */}
        <Footer />

    </BrowserRouter>
  )
}
