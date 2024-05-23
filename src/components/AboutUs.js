import React, { useEffect, useRef, useState } from 'react';
import './AboutUs.css'; // Import your CSS file
import Services from './Services';

const AboutUs = () => {
  const words = ['Us', 'AICTE', 'Approvals'];
  const wordIndex = useRef(0);
  const h1Ref = useRef(null);
   const [hoveredService, setHoveredService] = useState(null);

  const services = [
    { title: 'Personalized Document Templates', description: 'The portal dynamically generates personalized, prefilled document templates, minimizing user effort and reducing errors. ' },
    { title: 'Handbook Assistant', description: 'Chatbot for dynamic and personalized user interaction. ' },
    { title: 'Fee Structure Generation', description: 'Customized fee structure document generated based on user preferences.' },
  ];

  useEffect(() => {
    const typeWriter = async (text, fnCallback) => {
      const h1 = h1Ref.current;
      if (h1) {
        for (let i = 0; i <= text.length; i++) {
          setTimeout(() => {
            h1.innerHTML =
              text.substring(0, i) + '<span class="cursor" aria-hidden="true"></span>';
            if (i === text.length && typeof fnCallback === 'function') {
              setTimeout(fnCallback, 700);
            }
          }, i * 100);
        }
      }
    };

    const startTextAnimation = async (i) => {
      if (i >= words.length) {
        // Reset to the beginning after reaching the end
        i = 0;
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }

      if (i < words.length) {
        await typeWriter(`${words[i]}`, async () => {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          startTextAnimation(i + 1);
        });
      }
    };

    startTextAnimation(0);
  }, []);

  return (
    <div>
    <div className="container mx-auto my-8 px-4 lg:px-8 py-8" style={{ backgroundColor: '#f1efed' }}>
    <div className="typewriter-container flex">
      {/* Combined div for "About" text and typewriter effect */}
      <div className="p-8 text-8xl">
        <h1 style={{ color: '#0F6FFF', fontWeight: 'bold' }}>About</h1>
        <div className="typewriter text-8xl">
          <h1 ref={h1Ref} className="typewriter-text" style={{ color: '#0F6FFF',  }}></h1>
        </div>
      </div>

      {/* Right side container with text */}
      <div className="right-container text-2xl absolute top-21 right-8 w-1/2 text-right">
        <Services/>
      </div>
    </div>
  </div>
  </div>
  );
};

export default AboutUs;
