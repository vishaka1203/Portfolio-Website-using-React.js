import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import anime from '../../img/anime.png';
import shopping from '../../img/shopping.jpeg';
import restaurant from '../../img/restaurant.png';
import homemade from '../../img/homemade.png';
import 'swiper/css';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={homemade} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={shopping}
            alt=""
            style={{ height: '10rem', width: '19rem' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={anime} alt="" style={{ height: '10rem', width: '19rem' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={restaurant}
            alt=""
            style={{ height: '10rem', width: '19rem' }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
