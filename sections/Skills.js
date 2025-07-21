import React from 'react';

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-title">
        <h1>Minhas Habilidade<span>.</span></h1>
      </div>
      
      <div>
        <p className="skills-description">
          Essas são algumas das tecnologias que utilizo para transformar ideias em soluções funcionais, com código limpo, visual agradável e foco na experiência do usuário.
        </p>
        
        <p className="skills-description" style={{ marginTop: '15px' }}>
          Busco sempre aprimorar minhas habilidades, mantendo-me atualizado com as melhores práticas e tendências modernas do desenvolvimento web.
        </p>
      </div>

      <div className="carousel-wrapper">
        <div className="carousel-track">
          <img src="/assets/images/c.png" alt="C logo" />
          <img src="/assets/images/js.png" alt="JavaScript logo" />
          <img src="/assets/images/ts.png" alt="TypeScript logo" />
          <img src="/assets/images/react.png" alt="React logo" />
          <img src="/assets/images/node.png" alt="Node.js logo" />
          <img src="/assets/images/mysql.png" alt="MySql logo" />
          <img src="/assets/images/git.png" alt="Git logo" />
          
          {/* Duplicado para loop contínuo */}
          <img src="/assets/images/c.png" alt="C logo" />
          <img src="/assets/images/js.png" alt="JavaScript logo" />
          <img src="/assets/images/ts.png" alt="TypeScript logo" />
          <img src="/assets/images/react.png" alt="React logo" />
          <img src="/assets/images/node.png" alt="Node.js logo" />
          <img src="/assets/images/mysql.png" alt="MySql logo" />
          <img src="/assets/images/git.png" alt="Git logo" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
