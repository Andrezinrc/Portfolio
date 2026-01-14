import React from 'react';

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-title">
        <h1>Minhas Habilidades<span>.</span></h1>
      </div>

      <div>
        <p className="skills-description">
          Utilizo ferramentas e tecnologias modernas para criar interfaces dinâmicas e sistemas robustos, com foco em performance e usabilidade.
        </p>
      </div>

      <div className="carousel-wrapper">
        <div className="carousel-track">
          <img src="/assets/images/ts.png" alt="TypeScript logo" />
          <img src="/assets/images/react.png" alt="React logo" />
          <img src="/assets/images/node.png" alt="Node.js logo" />
          <img src="/assets/images/express.png" alt="Express logo" />
          <img src="/assets/images/mongodb.png" alt="MongoDB logo" />
          <img src="/assets/images/mysql.png" alt="MySQL logo" />
          <img src="/assets/images/firebase.png" alt="Firebase logo" />
          <img src="/assets/images/git.png" alt="Git logo" />
          <img src="/assets/images/c.png" alt="C logo" />
         
          <img src="/assets/images/ts.png" alt="TypeScript logo" />
          <img src="/assets/images/react.png" alt="React logo" />
          <img src="/assets/images/node.png" alt="Node.js logo" />
          <img src="/assets/images/express.png" alt="Express logo" />
          <img src="/assets/images/mongodb.png" alt="MongoDB logo" />
          <img src="/assets/images/mysql.png" alt="MySQL logo" />
          <img src="/assets/images/firebase.png" alt="Firebase logo" />
          <img src="/assets/images/git.png" alt="Git logo" />
          <img src="/assets/images/c.png" alt="C logo" />
        </div>
      </div>

      <p className="skills-description" style={{ marginTop: '15px' }}>
        Busco evoluir constantemente, mantendo-me alinhado às tendências e boas práticas do desenvolvimento web.
      </p>
    </section>
  );
}

export default Skills;