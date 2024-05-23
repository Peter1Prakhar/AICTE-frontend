import React, { useState } from 'react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    { title: 'Personalized Document Templates', description: 'The portal dynamically generates personalized, prefilled document templates, minimizing user effort and reducing errors.' },
    { title: 'Handbook Assistant', description: 'Chatbot for dynamic and personalized user interaction.' },
    { title: 'Fee Structure Generation', description: 'Customized fee structure document generated based on user preferences.' },
  ];

  return (
    <div className="flex">
      <div className="w-1/2 h-12 p-8">
        <div className="flex flex-row gap-8 h-12px">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white p-8 rounded-md ${
                hoveredService === index ? 'shadow-lg' : 'shadow'
              } transition duration-300`}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <h2
                className={`text-xl font-bold text-center mb-4 transition duration-300 ${
                  hoveredService === index ? 'transform -translate-y-2' : ''
                }`}
                style={{ color: hoveredService === index ? '#0F6FFF' : '' }}
              >
                {service.title}
              </h2>
              <p 
                className={`text-gray-600 text-sm text-center flex items-center justify-center transform origin-bottom transition-all duration-300 ${
                  hoveredService === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ color: hoveredService === index ? '#0F6FFF' : '' }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/2 p-8">
        {/* Right side content */}
        {/* You can add additional content or components here */}
      </div>
    </div>
  );
};

export default Services;
