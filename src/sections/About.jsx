import React from 'react';

function About() {
  return (
    <section className="about-text" id="about">
      <div className="about-title">
        <h1>Sobre Mim<span>.</span></h1>
      </div>
      
      <div>
        <p>
          Sou André, dev autodidata desde 2020, focado em web, mas sempre explorando outras coisas.
        </p>
      </div>

      <div>
        <p>
          Coloco meu conhecimento em prática em projetos pessoais e open source, tentando sempre aprender e melhorar com cada linha de código.
        </p>
      </div>
      
      <div className="about-button-container">
        <a className="about-button" href="#projects">Ver projetos</a>
      </div>
    </section>
  );
};

export default About;