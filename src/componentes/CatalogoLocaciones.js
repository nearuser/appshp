import React, { useState, useContext } from "react";
import Modal from 'react-modal';
import { v4 as uuidv4 } from 'uuid';
import Locacion from "./Locacion";
import LocacionVentana from './LocacionVentana';
import Calendario from './Calendario';
import "../hojas-de.estilo/CatalogoLocaciones.css";
import { LocacionesContext } from './LocacionContext';

Modal.setAppElement('#root');


function CatalogoLocaciones() {
  // ESTADOS PATA CONTROLAR LA APERTURA Y CIERRE DE LA VENTANA EMERGENTE DE CALENDARIO , ASI COMO PARA ALMACENAR LOS EVENTOS CREADOS 
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [eventos, setEventos] = useState([]);

  const agregarEvento = (evento) => {
    setEventos([...eventos, evento]);
    //setMostrarCalendario(false); // Cerrar la ventana emergente después de agregar el evento
  };
  

  const [locaciones, setLocaciones] = useState([
    {
      id: uuidv4(),
      nombre: "Locación 1",
      descripcion: "Recorriendo el camino, unos 28 kms desde Puerto Williams hacia Puerto Navarino, podrás descubrir lo que ofrece esta locación donde habitaron los últimos yaganes de la región. Un cementerio construido de madera natural, lleno de pequeñas cruces como estacas, con vista al canal y cordones montañosos argentinos. Bosques húmedos a la orilla del camino que durante los meses de invierno se pinta de blanco, y se mezcla con la espesa niebla en el horizonte. El sonido constante del río que recorre pequeñas cascadas y que desemboca en la Bahía Mejillones.",
      galeria: [
        require("../imagenes/locaciones/locacion1/DJI_Landscape.jpg"),
        require("../imagenes/locaciones/locacion1/DJI_Landscape.jpg"),
        require("../imagenes/locaciones/locacion1/DJI_Landscape.jpg"),
      ],
      localizacion: "40.7128° N, 74.0060° W",
      locacionSeleccionada: false,
    },
    {
      id: uuidv4(),
      nombre: "Locación 2",
      descripcion: "Descripción de la locación 2",
      galeria: ["foto4.jpg", "foto5.jpg", "foto6.jpg"],
      localizacion: "40.7128° N, 74.0060° W",
      locacionSeleccionada: false,
    },
    {
      id: uuidv4(),
      nombre: "Locación 3",
      descripcion: "Descripción de la locación 3",
      galeria: ["foto7.jpg", "foto8.jpg", "foto9.jpg"],
      localizacion: "40.7128° N, 74.0060° W",
      locacionSeleccionada: false,
    },
    {
      id: uuidv4(),
      nombre: "Locación 4",
      descripcion: "Descripción de la locación 4",
      galeria: ["foto10.jpg", "foto11.jpg", "foto12.jpg"],
      localizacion: "40.7128° N, 74.0060° W",
      locacionSeleccionada: false,
    },
    {
      id: uuidv4(),
      nombre: "Locación 5",
      descripcion: "Descripción de la locación 5",
      galeria: ["foto13.jpg", "foto14.jpg", "foto15.jpg"],
      localizacion: "40.7128° N, 74.0060° W",
      locacionSeleccionada: false,
    },
    {
      id: uuidv4(),
      nombre: "Locación 6",
      descripcion: "Descripción de la locación 6",
      galeria: ["foto16.jpg", "foto17.jpg", "foto18.jpg"],
      localizacion: "40.7128° N, 74.0060° W",
      locacionSeleccionada: false,
    },
  ]);

  //const [locacionesGuardadas, setLocacionesGuardadas] = useState([]);
  const [locacionSeleccionada, setLocacionSeleccionada] = useState(null); // Nuevo estado
  const [locacionesGuardadas, setLocacionesGuardadas] = useContext(LocacionesContext);

  const seleccionarLocacion = (id) => {
    const locacionesActualizadas = locaciones.map((locacion) => {
      if (locacion.id === id) {
        locacion.locacionSeleccionada = !locacion.locacionSeleccionada;
      }
      return locacion;
    });
    setLocaciones(locacionesActualizadas);
    const locacionSeleccionada = locaciones.find((locacion) => locacion.id === id);
    setLocacionSeleccionada(locacionSeleccionada);
  };

  const agregarALocacionesGuardadas = (locacion) => {
    setLocacionesGuardadas([...locacionesGuardadas, locacion]);
  };

  const abrirVentana = (locacion) => {
    setLocacionSeleccionada(locacion);
  };

  const cerrarVentana = () => {
    setLocacionSeleccionada(null);
  };

  return (
    <div>
      <h2>Catálogo de Locaciones</h2>
      <div className="catalogo-locaciones">
        {locaciones.map((locacion) => (
          <Locacion
            key={locacion.id}
            id={locacion.id}
            locacion={locacion}
            seleccionarLocacion={seleccionarLocacion}
            agregarALocacionesGuardadas={agregarALocacionesGuardadas}
            abrirVentana={abrirVentana} // Pasamos la función abrirVentana como prop
          />
        ))}
      </div>
      <h2>Locaciones Guardadas</h2>
      {console.log(locacionesGuardadas)}
      <div className="locaciones-guardadas">
        {locacionesGuardadas.map((locacion) => (
          <div key={locacion.id}>
            <h3 className="locacion-nombre">{locacion.nombre}</h3>
            <p className="locacion-descripcion">{locacion.descripcion}</p>
            {/** SE AGREGA AQUI UN BOTON QUE PERMITA SETEAR UNA FECHA MEDIANTE EL COMPONENTE CALENDARIO.JS */}
            <button className="calendario" onClick={() => setMostrarCalendario(true)}>Calendario</button>
          </div>
        ))}
      </div>
      {locacionSeleccionada && (
        <Modal isOpen={locacionSeleccionada !== null} onRequestClose={cerrarVentana}>
        <LocacionVentana locacion={locacionSeleccionada} cerrarVentana={cerrarVentana} seleccionarLocacion={seleccionarLocacion} agregarALocacionesGuardadas={agregarALocacionesGuardadas} />
      </Modal>
      )}

      {/** SE AGREGA UNA CONDICION PARA MOSTRAR LA VENTANA EMERGENTE DEL CALENDARIO CUANDO "mostrarCalendario" sea "true" */}
      {mostrarCalendario && (
        <Modal isOpen={mostrarCalendario} onRequestClose={() => setMostrarCalendario(false)}>
          <Calendario eventos={eventos} agregarEvento={agregarEvento}/>
          <Modal isOpen={locacionSeleccionada !== null} onRequestClose={cerrarVentana}></Modal>
        </Modal>
)}

    </div>
  );
}



export default CatalogoLocaciones;
