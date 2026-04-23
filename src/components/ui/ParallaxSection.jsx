import React from 'react';

const ParallaxSection = ({ image, title, subtitle }) => (
  <section
    className="relative h-[50vh] md:h-[70vh] flex items-center justify-center bg-fixed bg-center bg-cover overflow-hidden"
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="absolute inset-0 bg-solar-deep/60 backdrop-blur-[2px]"></div>
    <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in">
      <h2 className="text-4xl md:text-7xl font-white text-white mb-6 uppercase tracking-tighter leading-none">
        {title}
      </h2>
      <div className="w-24 h-1 bg-solar-primary mx-auto mb-8"></div>
      <p className="text-white/90 text-lg md:text-2xl font-medium leading-relaxed">{subtitle}</p>
    </div>
  </section>
);

export default ParallaxSection;
