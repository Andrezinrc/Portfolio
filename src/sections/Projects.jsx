import React from 'react';

function Projects() {
  return (
    <section className="projects-section" id="projects">
      
      <div className="projects-title">
        <h1>Projetos<span>.</span></h1>
      </div>
    
      <p className="projects-description">
        Meu foco principal é desenvolvimento web, criando soluções que envolvem frontend, backend e experiências digitais para usuários e aprendizado.
      </p>
    
      <div className="project-wrapper">
        <div className="project-card">
          <img 
            src="/assets/images/micro-store.png" 
            alt="Projeto Micro-Store" 
            loading="lazy" 
          />
          <div className="project-info">
            <div>
              <h2 className="card-title">Micro-Store</h2>
            </div>
        
            <div>
              <p>
                Catálogo digital de produtos de moda. Usuário pode navegar pelo catálogo e finalizar compras diretamente pelo WhatsApp.
              </p>
            </div>
            
            <div className="tech">
              <span>React.js</span>
              <span>Context API</span>
            </div>
        
            <div>
              <a 
                href="https://micro-store-eta.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-button"
              >
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img 
            src="/assets/images/dev-mini-blog.png" 
            alt="Projeto Dev Mini Blog" 
            loading="lazy" 
          />
          <div className="project-info">
            <div>
              <h2 className="card-title">Dev Mini Blog</h2>
            </div>
        
            <div>
              <p>
                Blog estático educacional focado em desenvolvimento de software. Conteúdo em Markdown e JSON, com exemplos práticos de HTML, CSS, JS e React.
              </p>
            </div>
            
            <div className="tech">
              <span>React.js</span>
              <span>Markdown</span>
            </div>
        
            <div>
              <a 
                href="https://dev-mini-blog.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-button"
              >
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
     
      <p className="projects-description">
        Esses são alguns dos meus projetos em desenvolvimento web. Se quiser conversar sobre tecnologia, parcerias ou ideias, fique à vontade para me chamar!
      </p>
    
    </section>
  );
};

export default Projects;