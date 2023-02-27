import React from 'react';
import '../styles/Navbar.css';
import AboutMe from '../components/AboutMe';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Resume from '../components/Resume';
import { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from '../components/Navbar/NavbarElements';


const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About Me
          </NavLink>
          <NavLink to='/portfolio' activeStyle>
            Portfolio
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>
          <NavLink to='/resume' activeStyle>
            Resume
          </NavLink>
  
        </NavMenu>
        
      </Nav>
    </>
  );
};
  
export default Navbar;