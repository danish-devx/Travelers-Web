import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import heroBg1 from '../assets/hero_bg_1.jpg';
import heroBg2 from '../assets/hero_bg_2.jpg';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slides = [
    {
      img: heroBg1,
      title: "Never Stop Exploring",
      desc: "Discover amazing destinations for your next adventure.",
      btnText: "Booking Now"
    },
    {
      img: heroBg2,
      title: "Love The Places",
      desc: "Experience best tours and memorable journeys.",
      btnText: "Booking Now"
    }
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} fade>
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx}>
        
          <div
            style={{
              minHeight: '85vh',
              height: '100vh',
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${slide.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

         
          <Carousel.Caption 
            className="d-flex flex-column justify-content-center align-items-center w-100 h-100 px-3"
            style={{
              top: '0',
              bottom: '0',
              left: '0',
              right: '0',
              transform: 'none'
            }}
          >
            <div style={{ maxWidth: '800px' }}>
           
              <h1 
                className="text-uppercase fw-bold text-white mb-3"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.8rem)',
                  letterSpacing: '2px',
                  lineHeight: '1.2'
                }}
              >
                {slide.title}
              </h1>

           
              <p className="fs-5 fs-md-4 text-white-50 mb-4 px-2">
                {slide.desc}
              </p>

          
              <Button 
                variant="danger" 
                className="py-3 px-4 px-md-5 rounded-0 fw-semibold text-uppercase"
                style={{ backgroundColor: '#eb3d4f', borderColor: '#eb3d4f' }}
              >
                {slide.btnText}
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;