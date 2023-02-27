import React from 'react';
import '../styles/Navbar.css';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './Navbar/NavbarElements';


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