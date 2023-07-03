import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function Calendario({ eventos, agregarEvento }) {
  const handleSelectSlot = ({ start, end }) => {
    const evento = {
      start,
      end,
      title: 'Nuevo evento',
    };
    agregarEvento(evento);
  };

  return (
    <div className="calendario-wrapper">
      <Calendar
        localizer={localizer}
        events={eventos}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        className="calendario-custom"
      />
    </div>
  );
}


export default Calendario;
