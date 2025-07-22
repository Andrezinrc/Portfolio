import React from 'react';
import Hero from './components/Hero.js';
import About from './sections/About.js';
import Skills from './sections/Skills.js';
import Certificates from './sections/Certificates.js';
import Projects from './sections/Projects.js';
import Contact from './sections/Contact.js';

function Content(){
  return (
    <main className="content">
      {/* Seção Hero: destaque inicial com título, parágrafo e links sociais */}
      <Hero />
      
      {/* Seção Sobre Mim */}
      <About />
      
      { /* Seção Habiliades */ }
      <Skills />
      
      { /* Seção Certificados */ }
      <Certificates />
      
      { /* Seção Projetos */ }
      <Projects />
      
      { /* Seção contato */ }
      <Contact />
    </main>
  );
};
export default Content;
