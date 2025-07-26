import React, { useEffect, useState } from 'react';
import Menu from './components/Menu';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  // Adiciona efeito ao header ao rolar mais de 50px
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="title">
          <h1>Andrecode</h1>
        </div>
        
        {/* Menu de navegação principal */}
        <Menu />
      </div>
    </header>
  );
};
export default Header;

