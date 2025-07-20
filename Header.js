import React from 'react';
import Menu from './components/Menu';

function Header() {
  return (
    <header className="cabecalho-portfolio">
      <div className="title">
        <h1>Andrecode</h1>
      </div>
      {/* Menu de navegação principal */}
      <Menu />
    </header>
  );
};
export default Header;