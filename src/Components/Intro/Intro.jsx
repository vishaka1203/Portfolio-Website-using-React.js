import React from 'react';
import './Intro.css';
import Linkedin from '../../img/linkedin.png';
import Github from '../../img/github.png';
import Instagram from '../../img/instagram.png';
import vishaka from '../../img/vishaka.jpg';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';

function Intro() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? 'white' : '' }}>Hi, I Am</span>
          <span>Vishaka Parab</span>
          <span>
            Aspiring full-stack developer skilled in React.js, Node.js, MySQL,
            and RESTful API integration. Excited to bring innovative solutions
            to life, with additional skills in Prompt Engineering. Eager to
            embark on new challenges and contribute value as a fresher in the
            field.
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <a href="https://www.linkedin.com/in/vishaka-parab-4aa505244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <img src={Linkedin} alt=""></img>
          </a>
          <a href="https://github.com/vishaka1203">
            <img src={Github} alt=""></img>
          </a>
          <a href="https://www.instagram.com/vishakha_parab?igsh=YzBtZnR0bnd3MTJq">
            <img src={Instagram} alt=""></img>
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={vishaka} alt="" />

        <img src={glassesimoji} alt="" />

        <FloatingDiv
          image={Crown}
          text1="Web"
          text2="Developer"
          className="floating-div"
        />

        <div style={{ top: '15rem', left: '-9rem' }}>
          <FloatingDiv image={thumbup} text1="Achievements &" text2="Awards" />
        </div>

        <div className="blur" style={{ background: 'rgb (238 210 255' }}></div>

        <div
          className="blueblur"
          style={{ background: 'rgb (238 210 255' }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
