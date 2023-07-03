import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './imagenes/logos/logo-rectagular.png'
import Ecosistemas from './componentes/Ecosistema';
import CatalogoLocaciones from './componentes/CatalogoLocaciones';
import Menu from './componentes/Menu';
import LocacionGuardada from './componentes/LocacionGuardada';
import { LocacionesProvider } from './componentes/LocacionContext';


function App() {

  return (
    <Router>
      <header className="header">
        <div className='logo-contenedor'>
          <img
            src={logo}
            className='logo'
            alt='logo del proyecto' 
          />
        </div>
        <Menu />
      </header>
      <div className="aplicacion-tareas">
        <div className='componentes-principales'>
          <Routes>
            <Route path="/" element={''} />
            <Route path="/ecosistemas" element={<LocacionesProvider> <Ecosistemas /> </LocacionesProvider>} />
            <Route path="/catalogo" element={<LocacionesProvider> <CatalogoLocaciones /> </LocacionesProvider>} />
            <Route path="/seleccion" element={<LocacionesProvider> <LocacionGuardada /> </LocacionesProvider> } />
            {/* Agrega aquí más rutas para las secciones de tu página web */}
          </Routes>
        </div>
      </div>
      <footer className="footer">
        Concéntrate en la creatividad, nosotros en la producción local | Shoot in Patagonia | 2023
      </footer>
    </Router>
  );
}


export default App;