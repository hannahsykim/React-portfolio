import React from 'react'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";


function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <AboutMe  />
      <Portfolio />
      <Contact />
      <Resume />
    </div>
  );
}

export default App
