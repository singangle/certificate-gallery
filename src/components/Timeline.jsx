import React from 'react';
import CertificateCard from './CertificateCard';

const Timeline = ({ certificates }) => {
  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-12">
      {/* Central Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-matcha-200 transform md:-translate-x-1/2"></div>

      <div className="flex flex-col gap-12">
        {certificates.map((cert, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={cert.id} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-matcha-500 rounded-full border-4 border-white shadow-sm transform -translate-x-1/2 z-10"></div>
              
              {/* Content Side (Right for odd, Left for even on desktop) */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0">
                <div className={`w-full ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                   <CertificateCard certificate={cert} align={isEven ? 'left' : 'right'} />
                </div>
              </div>
              
              {/* Empty Side (Space filler) */}
              <div className="hidden md:block w-1/2"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
