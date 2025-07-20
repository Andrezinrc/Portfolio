import React from 'react';
import Menu from './components/Menu';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="title">
          <h1>Andrecode</h1>
        </div>
        
        <div className="hamburguer">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
      
      { /* Menu de navegação principal */ }
      <Menu />
    </header>
  );
};
export default Header;
