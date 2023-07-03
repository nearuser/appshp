/**PENDIENTES -------- 
 * 
 * REVISAR QUE POR QUE SE ARROJA UN WARNING A LA HORA DE HACER USO DE MODAL , TAL PARECE QUE SE ENCUENTRA DUPLICADO PERO NO ENCUENTRO DODNDE
 * MODIFICAR LA DUNCION DE SELECCIONAR LOCACION , Y HACER QUE ESTE BOTON APAREZCA EN LocacionVentan.js
 * MODIFICAR LA APARIENCIE DE LAS TARJETAS DE LOCACIONES Y HACER QUE SEA POSIBLE ABIRR LA VENTANA MODAL DE CADA UNA AL HACER CLICK EN CUALQUIER LUGAR DE LA TARJETA 
 * 
*/

import React from 'react';
import '../hojas-de.estilo/LocacionVentana.css';

function VentanaLocacion({ locacion, cerrarVentana, seleccionarLocacion }) {
  const { id, nombre, descripcion, galeria, localizacion, locacionSeleccionada } = locacion;

  const handleClick = () => {
    seleccionarLocacion(id);
  };

  return (
    <div className='locacion-ventana'>
      <div className='cerrar-ventana' onClick={cerrarVentana}>
        <button>X</button>
      </div>
      <div className='contenido-ventana'>
        <div className='banner-locacion'>
          <img src={galeria[0]} alt='Imagen principal' />
          <h2 className='nombre-locacion'>{nombre}</h2>
          {/** A continuacion se agrega el boton cotizaro o seleccionar locacion y su logica para mantener y no duplicar una locacion seleccionada mas de una vez */}
          <button className={`seleccionar-locacion ${locacionSeleccionada ? 'seleccionada' : ''}`} disabled={locacionSeleccionada} onClick={handleClick}>
            {locacionSeleccionada ? 'Seleccionada' : 'Seleccionar'}
          </button>
        </div>
        <div className='descripcion-locacion'>
          <div className='descripcion-texto'>
            <p>{descripcion}</p>
          </div>
          <div className='galeria-imagenes'>
            {galeria.slice(1, 4).map((imagen, index) => (
              <img key={index} src={imagen} alt={`Imagen ${index + 1}`} />
            ))}
          </div>
        </div>
        <p>Coordenadas: {localizacion}</p>
        <div className='contenedor-mapa'>
          {/*<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1rQqHfWiDfBT1OmIfpD6w5GPyiznmj50&ehbc=2E312F" title='mapa' width="100%" height="400"></iframe>*/}
        </div>
      </div>
    </div>
  );
}

export default VentanaLocacion;

