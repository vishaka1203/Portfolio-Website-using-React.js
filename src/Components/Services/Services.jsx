import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './Resume.pdf';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      <div className="skills">
        <span style={{ color: darkMode ? 'white' : '' }}>Skills & </span>
        <span>Services</span>
        <span>
          Expert in development, UI/UX design, and prompt engineering services.
          Offering innovative
          <br />
          solutions for your projects with precision and creativity.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
      </div>

      <div className="cards">
        <div style={{ left: '14rem' }}>
          <Card
            emoji={HeartEmoji}
            heading={'Design'}
            detail={'UI/UX designing using Figma, Adobe, Adobe xd, Canva'}
          />
        </div>
        <div style={{ top: '12rem', left: '-4rem' }}>
          <Card
            emoji={Glasses}
            heading={'Developer'}
            detail={
              'Html, Css, JavaScript, React.js, Node.js, MySql, Restful APIs'
            }
          />
        </div>
        <div style={{ top: '19rem', left: '12rem' }}>
          <Card
            emoji={Humble}
            heading={'Prompt Engineering'}
            detail={'Mid Journey, Stable Diffusion, ChatGPT and its Plugins'}
          />
        </div>
      </div>
      <div
        className="greenblur"
        style={{ background: 'rgb (238 210 255' }}
      ></div>
    </div>
  );
};

export default Services;
