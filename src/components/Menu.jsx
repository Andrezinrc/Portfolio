import React from 'react';

function Menu() {
  
  return (
    <nav className="nav-bar">
      <ul className="menu">
        <li className="nav-list">
          <a href="#" className="nav-link">
            <i className="fas fa-home"></i>
          </a>
        </li>
        
        <li className="nav-list">
          <a href="#about" className="nav-link">
            <i className="fas fa-user"></i>
          </a>
        </li>
        
        <li className="nav-list">
          <a href="#skills" className="nav-link">
            <i className="fas fa-tools"></i>
          </a>
        </li>
        
        <li className="nav-list">
          <a href="#projects" className="nav-link">
            <i className="fas fa-code"></i>
          </a>
        </li>
        
        <li className="nav-list">
          <a href="#contact" className="nav-link">
            <i className="fas fa-envelope"></i>
          </a>
        </li>
      </ul>
    </nav>
  )
};

export default Menu;