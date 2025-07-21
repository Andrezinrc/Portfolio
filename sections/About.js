import React from 'react';

function About(){
  return (
    <section className="about-text" id="about">
      <div className="about-title">
        <h1>Sobre Mim<span>.</span></h1>
      </div>
      
      <div>
        <p>
          Sou um desenvolvedor autodidata que iniciou sua jornada no final de 2019, explorando o universo da programação com foco em resolver problemas de forma prática e criativa. No começo, mergulhei em lógicas básicas e pequenos desafios, o que logo despertou meu interesse por criar soluções que pudessem impactar o dia a dia das pessoas.
        </p>
      </div>
      
      <div>
        <p>
          Desde 2020 venho construindo projetos reais com tecnologias web, sempre buscando clareza no código, design minimalista e soluções eficientes que façam sentido no mundo real. Gosto de transformar ideias em aplicações funcionais e de manter o código limpo, legível e escalável, mesmo nos detalhes.
        </p>
      </div>
      
      <div className="about-button-container">
        <a className="about-button" href="#projetos">Ver Projetos</a>
      </div>
    </section>
  );
};
export default About;
