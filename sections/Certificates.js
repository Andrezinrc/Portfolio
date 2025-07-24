import React from 'react';

function Certificates() {
  return (
    <section className="certificates-section" id="certificates">
      <div className="certificates-title">
        <h1>Certificados<span>.</span></h1>
      </div>
      
      <div>
        <p className="certificates-description">
          Acredito na importância do aprendizado contínuo. Estes certificados representam minha dedicação em dominar os fundamentos do desenvolvimento web e back-end, com foco em práticas modernas e projetos reais.
        </p>
      </div>

      <div className="certificates-container">
        {/* Certificado 1 */}
        <div className="certificate-card">
          <img src="/assets/images/frecodecamp.jpeg" alt="FreeCodeCamp Logo" className="certificate-logo" />
          <p className="certificate-text">
            Legacy JavaScript Algorithms and Data Structures<br />
            <strong>300 horas - Dezembro 2022</strong>
          </p>
          <a
            href="https://freecodecamp.org/certification/AndreDev/javascript-algorithms-and-data-structures"
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-button"
          >
            Ver Certificado
          </a>
        </div>

        {/* Certificado 2 */}
        <div className="certificate-card">
          <img src="/assets/images/frecodecamp.jpeg" alt="FreeCodeCamp Logo" className="certificate-logo" />
          <p className="certificate-text">
            Back End Development and<br></br> APIs<br />
            <strong>300 horas - Setembro 2024</strong>
          </p>
          <a
            href="https://freecodecamp.org/certification/AndreDev/back-end-development-and-apis"
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-button"
          >
            Ver Certificado
          </a>
        </div>
      </div>
      
      <p className="certificates-description">
        Estude também com a <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer"><strong>freeCodeCamp</strong></a>
      </p>
    </section>
  );
}

export default Certificates;
