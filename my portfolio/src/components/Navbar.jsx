import React from 'react';
import '../styles/Navbar.css';
import AboutMe from '../components/AboutMe';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Resume from '../components/Resume';
import { useState } from 'react';

const Navbar = () => {
  return (
  <nav>
    <div className="navbar">
          <a href='/'>About Me</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>
          <a href="/resume">Resume</a>

    </div>
  </nav>
  );
};


export default Navbar;
