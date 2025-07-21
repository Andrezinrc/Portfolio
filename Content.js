import React from 'react';
import Hero from './components/Hero.js';
import About from './sections/About.js';

function Content(){
  return (
    <main className="content">
      {/* Seção Hero: destaque inicial com título, parágrafo e links sociais */}
      <Hero />
      
      {/* Seção Sobre Mim */}
      <About />
    </main>
  );
};
export default Content;
