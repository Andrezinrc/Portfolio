import React from 'react';
import Form from '../components/Form.js';

function Contact(){
  return (
    <section className="contact-section" id="contact">
      <div>
        <h1>Vamos conversar sobre seu projeto?</h1>
      </div>
      
      <div>
        <p>
          Tem uma ideia em mente ou precisa de ajuda em um projeto ?
          Fique à vontade para me enviar uma mensagem pelo formulário abaixo.
          <small> Respostas rápidas— em até 24 h.</small>
        </p>
      </div>
      
      <div>
        <Form buttonText="Solicitar orçamento" />
      </div>
      
      <div>
        <p>
        Ou, se preferir, entre em contato pelas redes sociais:
        </p>
      </div>
    
      <div className="contact-links">
        <a href="https://github.com/Andrezinrc" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://instagram.com/andrezin.dev" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.linkedin.com/in/andr%C3%A9-moreira-940886233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  );
};
export default Contact;

