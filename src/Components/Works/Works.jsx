import React from 'react';
import './Works.css';
import creativejoules from '../../img/creativejoules.png';
import gml from '../../img/gml.png';
import cyberhost from '../../img/cyberhost.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="skills">
        <span style={{ color: darkMode ? 'white' : '' }}>
          Have Experience Working
        </span>
        <span>for these Companies</span>
        <span>
          I gained experience as an intern at a designing and testing company,
          <br />
          contributing to various projects. Subsequently,
          <br />
          I transitioned to a full-time position at a development cloud-based
          company,
          <br />
          where I continued to refine my skills and actively participated in
          innovative projects and initiatives.
        </span>
        <button className="button s-button">Hire Me</button>
        <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
      </div>

      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img
              src={creativejoules}
              alt=""
              style={{ height: '120px', width: '90px' }}
            />
          </div>
          <div className="w-secCircle">
            <img
              src={cyberhost}
              alt=""
              style={{ height: '80px', width: '120px' }}
            />
          </div>
          <div className="w-secCircle">
            <img src={gml} alt="" style={{ height: '34px', width: '114px' }} />
          </div>
        </div>

        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
