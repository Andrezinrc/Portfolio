import React, { useState } from 'react';

function Menu() {
  const [menuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!menuOpen);
  }
  
  function handleLinkClick() {
    setIsMenuOpen(false); // Fecha o menu ao clicar no link
  }


  return (
    <nav className="nav-bar">
      {/* Menu */}
      <ul className="menu">
        <li className="nav-list">
          <a href="#" className="nav-link" onClick={handleLinkClick}>
            <i className="fas fa-home"></i>
          </a>
        </li>
        <li className="nav-list">
          <a href="#about" className="nav-link" onClick={handleLinkClick}>
            <i className="fas fa-user"></i>
          </a>
        </li>
        <li className="nav-list">
          <a href="#skills" className="nav-link" onClick={handleLinkClick}>
            <i className="fas fa-tools"></i>
          </a>
        </li>
        <li className="nav-list">
          <a href="#certificates" className="nav-link" onClick={handleLinkClick}>
            <i className="fas fa-certificate"></i>
          </a>
        </li>
        <li className="nav-list">
          <a href="#projects" className="nav-link" onClick={handleLinkClick}>
            <i className="fas fa-code"></i>
          </a>
        </li>
        <li className="nav-list">
          <a href="#contact" className="nav-link" onClick={handleLinkClick}>
            <i className="fas fa-envelope"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
