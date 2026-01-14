import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <div>
            <h2>André Moreira</h2>
            <address>
              <a className="email" href="mailto:dev.contactandre@gmail.com">dev.contactandre@gmail.com</a>
            </address>
            <div>
              <a href="tel:+5519997269646">(19) 99726-9646</a>
            </div>
            <small>Respostas em até 24 h.</small>
          </div>
        </div>

        <div className="footer-menu">
          <h2>Menu do site</h2>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#about">Sobre mim</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>
        
        <div className="footer-social">
          <h2>Entre em contato</h2>
          <ul>
            <li><a href="https://github.com/Andrezinrc" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://instagram.com/andrezin.dev" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/andr%C3%A9-moreira-940886233" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://andrezin-blog.vercel.app/" target="_blank" rel="noopener noreferrer">Ler blog</a></li>
          </ul>
        </div>
      </div>
     
      <div className="footer-copy">
        <p>&copy; 2025 Desenvolvido por <span>André Moreira.</span></p>
      </div>
    </footer>
  );
}

export default Footer;
