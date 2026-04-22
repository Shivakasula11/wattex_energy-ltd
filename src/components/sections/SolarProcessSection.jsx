import React from 'react';

const steps = [
  { icon: 'fa-user-tie', title: 'Free in-home consultation', description: 'A Wattex consultant will survey your home and answer all your questions.' },
  { icon: 'fa-file-lines', title: 'Personalised solar proposal', description: 'A custom proposal based on your specific rooftop area and energy needs.' },
  { icon: 'fa-shield-halved', title: 'Paperwork and subsidy assistance', description: 'End-to-end management of all government paperwork and approvals.' },
  { icon: 'fa-truck-fast', title: 'Professional & safe installation', description: 'Timely, clean, and professional installation by certified engineers.' },
  { icon: 'fa-tower-broadcast', title: 'Connection to the grid', description: 'Coordination with local utilities for grid connection and net metering.' },
  { icon: 'fa-bolt', title: 'Power on your new system', description: 'Switch on to enjoy reduced electricity bills immediately!' },
];

const SolarProcessSection = () => (
  <section
    id="process"
    className="py-10 sm:py-16 md:py-24 lg:py-28 xl:py-32 bg-solar-deep text-white scroll-mt-20 overflow-hidden"
  >
    <div className="container mx-auto px-3 sm:px-5 md:px-6 text-center">
      <h2 className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-black mb-10 sm:mb-14 md:mb-20 lg:mb-24 tracking-tight leading-tight px-2">
        The solar switch made simple
      </h2>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-solar-sky/30 -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-8 sm:space-y-12 md:space-y-24 lg:space-y-28 xl:space-y-32">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-center gap-3 sm:gap-5 md:gap-0 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Mobile-only icon */}
                <div className="md:hidden w-9 h-9 sm:w-12 sm:h-12 bg-white/10 rounded-lg sm:rounded-xl flex items-center justify-center text-solar-sky text-sm sm:text-lg shrink-0">
                  <i className={`fas ${step.icon}`}></i>
                </div>

                {/* Text */}
                <div className="w-full md:w-[42%] text-center md:text-left px-1 sm:px-2 md:px-0">
                  <div
                    className={`space-y-1.5 sm:space-y-3 md:space-y-4 ${
                      isEven ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-black leading-snug break-words">
                      {step.title}
                    </h3>
                    <p className="text-[11px] sm:text-sm md:text-[15px] lg:text-base text-white/60 font-medium leading-relaxed max-w-lg mx-auto md:mx-0">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Desktop timeline dot + icon — icon side alternates with text side */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:block">
                  <div className="w-3 h-3 lg:w-4 lg:h-4 bg-solar-sky rounded-full border-4 border-solar-deep shadow-[0_0_15px_rgba(14,165,233,0.5)]"></div>
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 ${
                      isEven
                        ? '-left-14 lg:-left-16 xl:-left-20'
                        : '-right-14 lg:-right-16 xl:-right-20'
                    } w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-white/10 rounded-xl lg:rounded-2xl flex items-center justify-center text-solar-sky text-lg lg:text-xl xl:text-2xl`}
                  >
                    <i className={`fas ${step.icon}`}></i>
                  </div>
                </div>

                <div className="w-full md:w-[42%] hidden md:block"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default SolarProcessSection;