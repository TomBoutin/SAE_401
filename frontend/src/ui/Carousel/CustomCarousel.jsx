import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card_Vertical from "../components/Card_Vertical.jsx";
import Card_Horizontal from "../components/Card_Horizontal.jsx";
import Button from '../components/Button.jsx';
import { Arrow } from '../Icons/index.jsx';
import { Link } from 'react-router-dom';
import { getCookie } from '../../lib/utils.js';


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1700 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1700, min: 1160 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1160, min: 807 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 807, min: 0 },
    items: 1
  }
};

function CustomCarousel({ data, cardType }) {

  return (
    <Carousel
      customRightArrow={
        <Button className="absolute top-1/2 right-10" intent={`primary`} size="small">
          <Arrow color="text-white" className="h-8 w-8" />
        </Button>
      }
      customLeftArrow={
        
        <Button className="absolute top-1/2 left-10" intent={`primary`} size="small">
          <Arrow color="text-white" className="transform rotate-180 h-8 w-8" />
        </Button>
      }
      slidesToSlide={1}
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      keyBoardControl={true}
      customTransition="all .5s"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-5-px"
    >
      {data.map((movieItem, index) => {
        if (cardType === 'vertical') {
          return (
            <Link to={getCookie('user') ? `/details/${movieItem.id}` : '/login'} key={index}>
              <Card_Vertical {...movieItem} className="mx-auto" />
            </Link>
          )
        } else if (cardType === 'horizontal') {
          return (
            <Link to={getCookie('user') ? `/details/${movieItem.id}` : '/login'} key={index}>
              <Card_Horizontal {...movieItem} className="mx-auto" />
            </Link>
          )
        } else {
          return null; // Ou afficher un message d'erreur approprié
        }
      })}
    </Carousel>
  );
}

export default CustomCarousel;