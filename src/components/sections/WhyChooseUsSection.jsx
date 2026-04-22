import React from 'react';

const features = [
  { icon: 'fa-calculator', title: 'Easy Financing Plans', description: 'Switching to solar made easy & affordable with our EMI plans' },
  { icon: 'fa-wind', title: 'Cyclone-Proof, Safe Rooftop Solar', description: 'Safe installations that can handle winds up to 170 kmph speeds' },
  { icon: 'fa-droplet-slash', title: '₹1 Lakh Guarantee Against Water Leakage', description: 'Systems secured with "chemical anchoring" to prevent leakage' },
  { icon: 'fa-broom', title: '5-Year Professional Maintenance Included', description: 'Quarterly deep cleaning, health checks & repairs included' },
];

const WhyChooseUsSection = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl md:text-4xl font-black text-center text-solar-deep mb-20 tracking-tight">
        Why choose Wattex for your solar installation
      </h2>
      <div className="grid md:grid-cols-2 gap-x-20 gap-y-16 max-w-6xl mx-auto">
        {features.map((f, idx) => (
          <div key={idx} className="flex items-start gap-6">
            <div className="w-16 h-16 shrink-0 flex items-center justify-center text-solar-sky text-4xl">
              <i className={`fas ${f.icon}`}></i>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">{f.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{f.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
