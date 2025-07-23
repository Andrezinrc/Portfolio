import React, { useEffect } from 'react';
import Header from './Header';
import Content from './Content.js';
import Footer from './Footer.js';

function App() {
  useEffect(() => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.style.display = 'none';
    }
  }, []);
  
  return (
    <div>
        {/* Cabeçalho do Portfólio */}
        <Header />
        
        {/* Conteúdo Principal do Portfólio */}
        <Content />
        
        {/* Rodapé do Portfólio */}
        <Footer />
      </div>
  );
}

export default App;
