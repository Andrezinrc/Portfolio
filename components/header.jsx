import React from 'react';
import Hamburguer from './hamburguer.jsx';
import Menu from './Menu.jsx';

const Header = () => {
  return(
    <div>
      <header className="cabecalho">
        <nav className="nav-bar">
        <Hamburguer />
          <div className="container-cabecalho">
            <h2>Andre <span>Moreira</span></h2>
            <Menu />
          </div>
        </nav>
      </header>
    </div>
  )
}
export default Header;