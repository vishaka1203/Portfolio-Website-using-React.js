import React from 'react';
import './Experience.css';
const Experience = () => {
  return (
    <div className="experience" id="Experience">
      <div className="achievement">
        <div className="circle">1+</div>
        <span>years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">5+</div>
        <span>completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">3+</div>
        <span>companies</span>
        <span>Work</span>
      </div>
      <div
        className="redblur"
        style={{ background: 'rgba (242 8 8 100' }}
      ></div>
      <div
        className="pinkblur"
        style={{ background: 'rgba (247 4 234 100' }}
      ></div>
    </div>
  );
};

export default Experience;
