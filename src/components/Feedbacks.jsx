import styles from './Feedbacks.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignRight } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Feedback from './Feedback';
import React, { useEffect, useState } from "react";



const Feedbacks = ({category = "general", country = "br", limit = 10}) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    autoplaySpeed:3500,
    pauseOnHover:true,
  };
  
  const news = [
{img: '', title: "", description:''}

  ]
  

  return (
    <section id="noticias" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>
          <FontAwesomeIcon icon={faAlignRight} /> Notícias
        </h2>
        <h2 className={styles.subtitle}>O que está acontendo...</h2>
        <Slider {...settings} className="mb-5">
          {news.map((data,index) => (
            <div key={index}>
              <Feedback 
              img = {data.urlToImage}
              title = {data.title}
              description = {data.description}
            />
          </div>
          ))}
          
        </Slider>
      </div>
    </section>
  );
};

export default Feedbacks;
