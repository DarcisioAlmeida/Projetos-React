import React from 'react';
import logo from './logo.svg';
import './App.css';
import './componentes/Header';
import {Header} from './componentes/Header';
import {Footer} from './componentes/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Este é meu primeiro App React com uso de Typescript.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello Word!
        <p> Darcisio Almeida - DEV </p>
        </a>
      </header>
      <Footer/>
    </div>
    
  );
}

export default App;
