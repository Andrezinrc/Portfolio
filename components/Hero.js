import React from 'react';
import Form from './Form.js';

function Hero(){
  return (
    <div className="hero" id="#">
      <div className="hero-text">
        <div>
          <h1>Transformando ideias em soluções digitais</h1>
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
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          bottom: "-50px",
          right: "-50px",
          zIndex: 0,
          opacity: 0.08,
          width: "300px",
          height: "300px",
        }}
      >
        <path
          fill="hsl(205, 100%, 45%)"
          d="M48.1,-57.7C60.4,-43.5,66.4,-21.8,63.4,-3.5C60.4,14.8,48.5,29.7,36.2,42.4C23.9,55.1,11.9,65.5,-3.5,69.7C-18.9,73.9,-37.8,72,-47.8,60.2C-57.7,48.4,-58.7,26.6,-58.5,6.5C-58.3,-13.6,-56.9,-32.1,-46.8,-45.6C-36.7,-59,-18.8,-67.3,1.4,-68.7C21.6,-70.1,43.1,-64,48.1,-57.7Z"
          transform="translate(100 100)"
        />
      </svg>
      
       <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: "-60px",
          left: "-60px",
          zIndex: 0,
          opacity: 0.06,
          width: "250px",
          height: "250px",
          transform: "rotate(180deg)",
        }}
      >
        <path
          fill="hsl(205, 100%, 60%)"
          d="M44.8,-50.3C56.1,-38.9,62.5,-19.5,61.1,-1.5C59.7,16.4,50.4,32.9,38.2,46.5C26.1,60.1,11,70.8,-6.3,74.2C-23.6,77.7,-47.3,73.9,-59.5,60.1C-71.7,46.3,-72.4,22.5,-67.8,2.2C-63.1,-18,-53.1,-35.9,-39.5,-47.6C-26,-59.3,-13,-64.8,3.4,-68.1C19.9,-71.4,39.7,-72.6,44.8,-50.3Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};
export default Hero;

