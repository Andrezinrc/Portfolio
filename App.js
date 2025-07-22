import React from 'react';
import Header from './Header';
import Content from './Content.js';
import Footer from './Footer.js';

function App() {
  return (
    <div>
      { /* Cabeçalho do Portfólio */ }
      <Header />
      
      { /* Conteúdo Principal do Portfólio */ }
      <Content />
      
      {/* Rodapé do Portfólio */}
      <Footer />
    </div>
  );
}
export default App;
