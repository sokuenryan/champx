import React, { useState } from 'react';
import "../style/home-styles/carousel.css";
import {FaGreaterThan, FaLessThan } from 'react-icons/fa';


export const CarouselItem = ({ children, width }) => {
  return (
    <div className='carousel-item' style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    const totalSlides = React.Children.count(children);
    if (newIndex < 0) {
      newIndex = totalSlides - 1;
    } else if (newIndex >= totalSlides) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className='carousel'>
      <div
        className='inner'
        style={{ transform: `translateX(-${activeIndex * 100}%)`}}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </div>

      <div className='indicators'>
        <button
          onClick={() => {
            updateIndex(activeIndex -1);
          }}
          
        >
          <FaLessThan />
        </button>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1 );
          }}
          >
          <FaGreaterThan />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
