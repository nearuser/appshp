import React, { useState } from "react"; // Importa useState
import DatePicker from 'react-datepicker';
import { es } from 'date-fns/locale'; // Importa idio español para el calendario
import 'react-datepicker/dist/react-datepicker.css';

function CalendarioSelector({ eventos, agregarEvento }) { // Cambia el nombre del componente a CalendarioSelector
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);

  const handleFechaSeleccionada = (fecha) => {
    setFechaSeleccionada(fecha);
  };

  return (
    <div>
      {/** <h2>Selecciona una fecha</h2> */}
      <DatePicker
        selected={fechaSeleccionada}
        onChange={handleFechaSeleccionada}
        dateFormat="dd/MM/yyyy"
        placeholderText="Selecciona una fecha"
        locale={es}
      />
    </div>
  );
}

export default CalendarioSelector;
