import React from 'react';
import './Navbar.css';
import Toggle from '../Toggle/Toggle';
import { Link } from 'react-scroll';
import Experience from '../Experience/Experience';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Achievements from '../Achievements/Achievements';

const Navbar = () => {
  return (
    <div className="n-wrapper">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Vishaka Parab</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: 'none' }}>
            <Link
              spy={true}
              to={'Navbar'}
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link spy={true} to={'Services'} smooth={true}>
              <li>Serivces</li>
            </Link>
            <Link spy={true} to={'Experience'} smooth={true}>
              <li>Experience</li>
            </Link>
            <Link spy={true} to={'Portfolio'} smooth={true}>
              <li>Portfolio</li>
            </Link>
            <Link spy={true} to={'Achievements'} smooth={true}>
              <li>Achievements</li>
            </Link>
          </ul>
        </div>

        <a href="tel:7721821770" className="button n-button">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
