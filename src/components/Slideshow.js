import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  // Next/previous controls
  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex > slides.length) {
        newIndex = 1;
      } else if (newIndex < 1) {
        newIndex = slides.length;
      }
      return newIndex;
    });
  };

  // Thumbnail image controls
  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const slides = [
    "img1.png",
    "img4.png",
    "hehe.jpg",
    // Add more images as needed
  ];

  return (
   
    <div className="slideshow-container w-full h-[72vh] overflow-hidden relative">
      {slides.map((img, index) => (
        <div
          key={index}
          className={`mySlides fade ${slideIndex === index + 1 ? 'block' : 'hidden'}`}
        >
          <img
            src={process.env.PUBLIC_URL + '/' + img} // Use PUBLIC_URL to correctly reference the public folder
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* The dots/circles */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${slideIndex === index + 1 ? 'active' : ''}`}
            onClick={() => currentSlide(index + 1)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
