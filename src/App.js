import React from "react";
import "./App.css";
import Header from "./components/Header";
import Intro from "./sections/Intro";
import About from "./sections/About";
import History from "./sections/History";
import Footer from "./components/Footer";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <History />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
