import React from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './sections/Intro';
import About from './sections/About';
import History from './sections/History';
import Footer from './components/Footer';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';

function App() {


  
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <div className='info'>
        <a href="https://www.linkedin.com/in/ecaterinamihai/" target="_blank"><i className="fab fa-linkedin fa-2x"></i></a>
        <a href="https://github.com/ecaterinamh" target="_blank"><i className="fab fa-github fa-2x"></i></a>
        <div id='whiteline'></div> 
      </div>
      <History />
      <Portfolio />
      <Contact />
      <Footer />


    </div>
  );
}

export default App;
