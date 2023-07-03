import React, { useState } from 'react';

import '../hojas-de.estilo/Ecosistema.css';

import montañasImg from '../imagenes/locaciones/ecosistemas_img/montaña.jpg';
import riosImg from '../imagenes/locaciones/ecosistemas_img/rios_lagos_mar.jpg';
import bosquesImg from '../imagenes/locaciones/ecosistemas_img/bosque.jpg';
import estepaImg from '../imagenes/locaciones/ecosistemas_img/estepa.jpg';


function Ecosistemas() {

  const [hovered, setHovered] = useState(false);
  return (
    <div className="ecosistemas">
      <h2>Selector de Ecosistemas</h2>
      <div className="ecosistema-montañas ecosistema-item"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={`ecosistema-contenido ${hovered ? 'active' : ''}`}>
          <h3>Locaciones de montañas</h3>
          <p> Las montañas son grandes elevaciones de terreno que se caracterizan por su altura y pronunciadas pendientes. Estos ecosistemas albergan una gran diversidad de vida, desde plantas adaptadas a las condiciones extremas hasta animales especializados en habitar en estas alturas. Las montañas son importantes para el mantenimiento del equilibrio ecológico, ya que proporcionan agua dulce, regulan el clima y ofrecen hábitats únicos.</p>
          
        </div>
        <img src={montañasImg} alt="Montañas" />
      </div>
      <div className="ecosistema-rios ecosistema-item"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={`ecosistema-contenido ${hovered ? 'active' : ''}`}>
          <h3>Locaciones de Lagos, Ríos y Mar</h3>
          <p>Los ecosistemas acuáticos incluyen ríos, lagos y el mar. Estas masas de agua albergan una amplia variedad de vida acuática, como peces, algas, crustáceos, aves acuáticas y mamíferos marinos. Los ecosistemas acuáticos desempeñan un papel crucial en la regulación del ciclo del agua, la provisión de alimentos y recursos naturales, y la conservación de la biodiversidad.</p>
          
        </div>
        <img src={riosImg} alt="Ríos, Lagos y Mar" />
      </div>
      <div className="ecosistema-bosques ecosistema-item"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={`ecosistema-contenido ${hovered ? 'active' : ''}`}>
          <h3>Locaciones de bosques</h3>
          <p>Los bosques son ecosistemas dominados por árboles que cubren extensas áreas de la tierra. Pueden ser bosques tropicales, templados o boreales, cada uno con características distintas. Los bosques son esenciales para la salud del planeta, ya que ayudan a mantener la calidad del aire, regulan el clima, albergan una amplia diversidad de flora y fauna, y proporcionan recursos vitales como madera, alimentos y medicinas.</p>
          
        </div>
        <img src={bosquesImg} alt="Bosques" />
      </div>
      <div className="ecosistema-estepa ecosistema-item"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={`ecosistema-contenido ${hovered ? 'active' : ''}`}>
          <h3>Locaciones de estepas</h3>
          <p>Las estepas son ecosistemas semiáridos caracterizados por su vegetación baja y dispersa, compuesta principalmente por pastizales. Estas regiones se encuentran en áreas con precipitaciones limitadas, pero aún pueden albergar una diversidad de animales adaptados a estas condiciones. Las estepas desempeñan un papel importante en la producción de alimentos, ya que son utilizadas para la agricultura y la cría de ganado en muchas partes del mundo.</p>
          
        </div>
        <img src={estepaImg} alt="Estepas" />
      </div>
    </div>
  );
}

export default Ecosistemas;
