import React from 'react';

function Menu() {
  return (
    <nav className="nav-bar">
      {/* Menu Desktop */}
      <ul className="menu-desk">
        <li className="nav-list"><a className="nav-link">Inicio</a></li>
        <li className="nav-list"><a className="nav-link">Sobre mim</a></li>
        <li className="nav-list"><a className="nav-link">Habilidades</a></li>
        <li className="nav-list"><a className="nav-link">Projetos</a></li>
        <li className="nav-list"><a className="nav-link">Contato</a></li>
      </ul>
      
      {/* Menu Mobile */}
      <ul className="menu-mobile">
        <li className="nav-list"><a className="nav-link">Inicio</a></li>
        <li className="nav-list"><a className="nav-link">Sobre mim</a></li>
        <li className="nav-list"><a className="nav-link">Habilidades</a></li>
        <li className="nav-list"><a className="nav-link">Projetos</a></li>
        <li className="nav-list"><a className="nav-link">Contato</a></li>
      </ul>
    </nav>
  );
};
export default Menu;
