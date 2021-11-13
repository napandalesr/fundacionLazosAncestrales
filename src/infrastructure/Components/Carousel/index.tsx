import React from "react";
import {Carousel} from 'antd';

import main1 from "../../images/main1.jpg";
import main2 from "../../images/main2.jpg";
import main3 from "../../images/main3.jpg";
import main4 from "../../images/main4.jpg";

import "./style.scss";

const CarouselMain:React.FC = () => {
  return <Carousel autoplay className="carouselMain">
    <div className="carousel-item">
      <img className="imgCarousel" src={main1}/>
    </div>
    <div  className="carousel-item">
      <img className="imgCarousel" src={main2}/>
    </div>
    <div  className="carousel-item">
    <img className="imgCarousel" src={main3}/>
    </div>
    <div  className="carousel-item">
      <img className="imgCarousel" src={main4}/>
    </div>
  </Carousel>;
};

export default CarouselMain;