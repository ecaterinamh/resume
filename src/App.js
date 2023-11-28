import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Intro from "./sections/Intro";
import About from "./sections/About";
import History from "./sections/History";
import Footer from "./components/Footer";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Loading from "./components/Loading.jsx";
import "./index.css";


export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
        setTimeout(() => setLoading(false), 3300)
    }, [])
    if (loading) {
        return <Loading/>
    }

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

