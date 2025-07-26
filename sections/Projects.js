import React from 'react';

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-title">
        <h1>Projetos<span>.</span></h1>
      </div>
    
      <p className="projects-description">
        Mesmo com foco atual em desenvolvimento web, aqui estão dois projetos desenvolvidos em C puro, com desafios reais envolvendo redes, algoritmos e manipulação de arquivos.
      </p>
    
      <div className="project-wrapper">
    
        {/* Projeto 1 - Huffman */}
        <div className="project-card">
          <img src="/assets/images/huffman.jpeg" alt="Projeto Huffman" loading="lazy" />
          <div className="project-info">
            <div>
              <h2 className="card-title">Compactador Huffman</h2>
            </div>
            
            <div>
              <p>
                Algoritmo completo de compressão e descompressão de arquivos em C. Utiliza estrutura de árvore binária e codificação de Huffman para otimizar espaço de armazenamento.
              </p>
            </div>
            
            <div>
              <a href="https://github.com/AndreDev/huffman" target="_blank" className="project-button">
                Ver no GitHub
              </a>
            </div>
          </div>
        </div>
    
        {/* Projeto 2 - TCP Chat */}
        <div className="project-card">
          <img src="/assets/images/chat.jpeg" alt="Projeto TCP Chat" loading="lazy" />
          <div className="project-info">
            <div>
              <h2 className="card-title">TCP Chat Seguro</h2>
            </div>
            
            <div>
              <p>
                Sistema de chat com cliente e servidor TCP, escrito em C, com criptografia própria para proteger as mensagens em tempo real. Ideal para aprender redes e segurança.
              </p>
            </div>
            
            <div>
              <a href="https://github.com/AndreDev/tcp_secure_chat" target="_blank" className="project-button">
                Ver no GitHub
              </a>
            </div>
          </div>
        </div>
        
        { /* Projeto 3 - Task API */ }
        <div className="project-card">
          <img src="/assets/images/task-api.jpeg" alt="Projeto Task API" loading="lazy" />
          <div className="project-info">
            <div>
              <h2 className="card-title">Task API</h2>
            </div>
        
            <div>
              <p>
                API RESTful para gerenciamento de tarefas, construída com Node.js, Express e Mongoose. Permite operações CRUD, autenticação de usuários e segue boas práticas de organização.
              </p>
            </div>
        
            <div>
              <a href="https://github.com/Andrezinrc/task-api" target="_blank" className="project-button">
                Ver no GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <p className="projects-description">
        Esses são apenas os primeiros passos. Se quiser conversar sobre tecnologia ou possíveis parcerias, fique à vontade para me chamar.
      </p>
    
    </section>
  );
};

export default Projects;
