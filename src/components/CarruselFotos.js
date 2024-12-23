import React, { useState } from 'react';
import { fotos } from '../data/fotos';

const CarruselFotos = () => {

  const [id, setId] = useState(0);

  const siguiente = () => {
    setId((prev) => (prev + 1) % fotos.length);
  };

  const anterior = () => {
    setId((prev) => (prev - 1 + fotos.length) % fotos.length);
  };

  return (
    <div className='carrusel'>

      <div className='contenedor-fotos'>
        <button className='flecha' onClick={anterior}>←</button>
        <img src={`/images/personal/${fotos[id].id}.png`} alt={`foto ${id + 1}`} />
        <button className='flecha' onClick={siguiente}>→</button>
      </div>

    </div>
  );
};

export default CarruselFotos;