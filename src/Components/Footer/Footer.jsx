import React from 'react';
import './Footer.css';
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin';
import Gitub from '@iconscout/react-unicons/icons/uil-github';

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: '100%' }} />
      <div className="f-content">
        <span>Vishaka7721@gmail.com</span>
        <div className="f-icons">
          <LinkedIn color="white" size={'3rem'} />
          <Insta color="white" size={'3rem'} />
          <Gitub color="white" size={'3rem'} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
