import React from 'react';
import Hero from './components/Hero.js';
import About from './sections/About.js';
import Skills from './sections/Skills.js';
import Certificates from './sections/Certificates.js';

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
    </main>
  );
};
export default Content;
