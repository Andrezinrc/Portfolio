import React from 'react';
import Form from './Form.js';

function Hero(){
  return (
    <div className="hero" id="#">
      <div className="hero-text">
        <div>
          <h1>Transformando ideias em <span>soluções digitais</span></h1>
        </div>
          
        <div>
          <p>Desenvolvedor focado em criar experiências web modernas e funcionais.</p>
        </div>
          
        <div className="social-links">
          <a href="https://github.com/Andrezinrc" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/andr%C3%A9-moreira-940886233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/andrezin.dev" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    
      <div className="hero-contact">
        {/* Formulário de contato ou botão de ação */}
      </div>
    </div>
  );
};
export default Hero;
