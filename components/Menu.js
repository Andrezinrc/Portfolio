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
      {/* Menu Hamburguer */}
      <div className={`hamburguer ${menuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') toggleMenu(); }}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      
      {/* Menu Desktop */}
      <ul className="menu-desk">
        <li className="nav-list"><a href="#" className="nav-link">Inicio</a></li>
        <li className="nav-list"><a href="#about" className="nav-link">Sobre mim</a></li>
        <li className="nav-list"><a href="#skills" className="nav-link">Habilidades</a></li>
        <li className="nav-list"><a href="#certificates" className="nav-link">Certificados</a></li>
        <li className="nav-list"><a href="#projects" className="nav-link">Projetos</a></li>
        <li className="nav-list"><a href="#contact" className="nav-link">Contato</a></li>
      </ul>
      
      {menuOpen && <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>}
      
      {/* Menu Mobile */}
      <ul className={`menu-mobile ${menuOpen ? 'open' : ''}`}>
        <li className="nav-list">
          <a href="#" className="nav-link" onClick={handleLinkClick}>
            <i className="fas fa-home"></i> Início
          </a>
        </li>
        <li className="nav-list">
          <a href="#about" className="nav-link" onClick={handleLinkClick}>
            <i className="fas fa-user"></i> Sobre mim
          </a>
        </li>
        <li className="nav-list">
          <a href="#skills" className="nav-link" onClick={handleLinkClick}>
            <i className="fas fa-tools"></i> Habilidades
          </a>
        </li>
        <li className="nav-list">
          <a href="#certificates" className="nav-link" onClick={handleLinkClick}>
            <i className="fas fa-certificate"></i> Certificados
          </a>
        </li>
        <li className="nav-list">
          <a href="#projects" className="nav-link" onClick={handleLinkClick}>
            <i className="fas fa-code"></i> Projetos
          </a>
        </li>
        <li className="nav-list">
          <a href="#contact" className="nav-link" onClick={handleLinkClick}>
            <i className="fas fa-envelope"></i> Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
