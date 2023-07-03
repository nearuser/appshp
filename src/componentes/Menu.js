import React, { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import '../hojas-de.estilo/Menu.css';
import { Link, useLocation } from 'react-router-dom';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className={`menu ${isOpen ? 'open' : ''}`} ref={menuRef}>
      <div className={`menu-contenido ${isOpen ? 'visible' : ''}`}>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/ecosistemas">Ecosistemas</Link>
          </li>
          <li>
            <Link to="/catalogo">Catalogo</Link>
          </li>
          <li>
            <Link to="/seleccion">Seleccion</Link>
          </li>
          {/* <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li> */}
        </ul>
      </div>

      <button className="menu-button" onClick={toggleMenu}>
        <FaBars />
      </button>
    </div>
  );
}

export default Menu;



// CODIGO ANTERIO A INTEGRAR react-route

/*import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import '../hojas-de.estilo/Menu.css';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      <div className={`menu-contenido ${isOpen ? 'visible' : ''}`}>
        <ul>
          <li>
            <a href="www.youtube.com">Inicio</a>
          </li>
          <li>
            <a href="www.youtube.com">Locaciones</a>
          </li>
          <li>
            <a href="www.youtube.com">Nosotros</a>
          </li>
          <li>
            <a href="www.youtube.com">Contacto</a>
          </li>
        </ul>
      </div>

      <button className="menu-button" onClick={toggleMenu}>
        <FaBars />
      </button>
    </div>
  );
}

export default Menu; */
