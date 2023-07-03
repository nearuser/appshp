import React, { useState, useContext } from "react";
//import Modal from 'react-modal';
import { useLocation } from 'react-router-dom';
import CalendarioSelector from './CalendarioSelector';
import "../hojas-de.estilo/CatalogoLocaciones.css";
import { LocacionesContext } from './LocacionContext';
import galeria from "./LocacionVentana";

function LocacionGuardada() {
  const location = useLocation();
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null); // se agrega esta linea para setear la fecha aqui mismo en cada locacion ** 
  const [eventos, setEventos] = useState([]);
  const [locacionSeleccionada, setLocacionSeleccionada] = useState(null);
  const [locacionesGuardadas] = useContext(LocacionesContext);

  const seleccionarLocacion = (id) => {
    const locacionSeleccionada = locacionesGuardadas.find((locacion) => locacion.id === id);
    setLocacionSeleccionada(locacionSeleccionada);
    setFechaSeleccionada(null); // Reiniciar la fecha seleccionada cuando se selecciona una nueva locación **
    setMostrarCalendario(true);
  };
/*
  const cerrarVentana = () => {
    setLocacionSeleccionada(null);
  }; */

  return (
    <div>
      <h2>Locaciones Guardadas</h2>
      <div className="locaciones-guardadas">
        {locacionesGuardadas.map((locacion) => (
          <div key={locacion.id}>
            <div className='banner-locacion'>
              <img src={galeria[0]} alt='Imagen principal' />
            </div>
            <h3 className="locacion-nombre">{locacion.nombre}</h3>
            <p className="locacion-descripcion">{locacion.descripcion}</p>
            <div className="calendario-container">
              <button
                className={`calendario ${location.pathname === '/locaciones-guardadas' && locacionSeleccionada === locacion.id ? 'seleccionada' : ''}`}
                onClick={() => seleccionarLocacion(locacion.id)}
              >
                Calendario
              </button>
              {mostrarCalendario && locacionSeleccionada === locacion.id && (
                <CalendarioSelector
                  eventos={eventos}
                  agregarEvento={evento => setEventos([...eventos, evento])}
                  fechaSeleccionada={fechaSeleccionada}
                  setFechaSeleccionada={setFechaSeleccionada}
                />
              )}
            </div>
          </div>
        ))}
      </div>
       {mostrarCalendario && (<CalendarioSelector eventos={eventos} agregarEvento={evento => setEventos([...eventos, evento])} />)}
    </div>
  );
}

export default LocacionGuardada;
