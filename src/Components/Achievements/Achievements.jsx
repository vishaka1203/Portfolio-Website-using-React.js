import React from 'react';
import './Achievements.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

import certificate1 from '../../img/certificate1.jpg';
import certificate2 from '../../img/certificate2.jpg';
import certificate3 from '../../img/certificate3.jpg';
import certificate4 from '../../img/certificate4.jpg';
import certificate5 from '../../img/certificate5.jpg';
import certificate6 from '../../img/certificate6.jpg';

const Achievements = () => {
  const certification = [
    { img: certificate1, description: 'Prompt Engineering 2024' },
    { img: certificate2, description: 'Oracle Apex Developer 2023' },
    {
      img: certificate3,
      description: 'Oracle Foundational Data Management 2023',
    },
    { img: certificate4, description: 'Oracle Cloud Infrastructure 2023' },
    { img: certificate5, description: 'Cybersecurity 2023' },
    { img: certificate6, description: 'UI/UX Designer 2022' },
  ];
  return (
    <div className="a-wrapper " id="Achievements">
      <div className="a-heading">
        <span>Tech-Stack Triumphs:</span>
        <span>Celebrating Certifications</span>
        <span> and Awards Across Diverse Domains...</span>
        <div
          className="purple-blur1"
          style={{ background: 'rgb (238 210 255' }}
        ></div>
        <div
          className="purple-blur2"
          style={{ background: 'rgb (238 210 255' }}
        ></div>
      </div>

      <Swiper
        // // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {certification.map((certification, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="achievements">
                <img src={certification.img} alt="" />
                <span>{certification.description}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Achievements;
