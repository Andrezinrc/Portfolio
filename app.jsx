import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';
import './style.css';

const App = (props) => {
  return (
    <div className="App">
      <Header />
    </div>
  );
};

ReactDOM.render(
  <App title="React" text="Caution: do not look into laser with remaining eye." />,
  document.getElementById('react-app')
);