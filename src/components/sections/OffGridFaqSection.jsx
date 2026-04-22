import React, { useState } from 'react';
import solarinterior from "../../assets/solarinterior.png";

const FAQ_TABS = [
  {
    id: 'general',
    label: 'General',
    faqs: [
      { q: 'How many batteries do I need for my off-grid system?', a: 'Battery sizing depends on your daily energy consumption and desired backup hours. A typical home using 8-10 units/day needs a 5kWh battery bank for 8-hour backup, or 10kWh for 16+ hours. Our engineers calculate the exact requirement during the free site assessment based on your appliance list and usage pattern.' },
      { q: 'Can I run air conditioning on off-grid solar?', a: 'Yes! Our Pro and Enterprise packages support AC loads. A 1.5-ton inverter AC draws about 1.2kW. With a 3-5kW system and adequate LFP battery bank, you can comfortably run 1-2 ACs. We recommend energy-efficient inverter ACs for optimal performance and longer backup hours.' },
      { q: 'What happens on cloudy or rainy days?', a: 'Modern solar panels generate power from light, not direct sunlight — they produce 25-40% output even on overcast days. Your battery bank stores excess energy from sunny days as a buffer. For extended monsoon periods, our Pro and Enterprise systems can integrate a DG set as automatic backup.' },
      { q: 'Can I add a diesel generator as backup?', a: 'Absolutely. Our hybrid inverters support seamless DG integration. When battery levels drop below a set threshold, the generator auto-starts, charges the batteries, and shuts off when solar takes over. This is standard in our Enterprise package and optional in the Pro tier.' },
      { q: 'How is off-grid different from on-grid solar?', a: 'Off-grid operates independently with batteries — you generate, store, and use your own power with zero grid dependency. On-grid connects to the utility grid with no batteries, using net metering to offset bills. Off-grid costs more upfront (due to batteries) but provides 24/7 power anywhere, even without grid access.' },
    ]
  },
  {
    id: 'battery',
    label: 'Battery & Storage',
    faqs: [
      { q: 'What is the difference between LFP and lead-acid batteries?', a: 'Lithium Iron Phosphate (LFP) batteries last 10,000+ cycles vs 1,500 for lead-acid, weigh 60% less, charge 3x faster, require zero maintenance, and operate safely across wider temperatures. While LFP costs 2-3x more upfront, the 15-year lifespan vs 3-4 years for lead-acid makes them far cheaper over time.' },
      { q: 'How long do off-grid batteries last?', a: 'Our LiFePO4 batteries carry a 15-year warranty and are rated for 10,000+ charge cycles. At one cycle per day, that translates to 27+ years of theoretical life. In practice, expect 15-20 years of reliable service with gradual capacity reduction to about 80% by year 15.' },
      { q: 'What does the BMS (Battery Management System) do?', a: 'The BMS is the brain of your battery bank. It monitors individual cell voltage, temperature, and current in real-time. It prevents overcharging, deep discharge, short circuits, and thermal runaway. Our BMS also communicates with the inverter for optimal charging profiles and sends alerts to the monitoring app.' },
      { q: 'Can I expand my battery bank later?', a: 'Yes, our modular architecture supports expansion. You can add battery modules to increase storage capacity without replacing existing units. We recommend expanding within the first 2 years so that new and existing batteries age similarly. Our inverters support up to 4x the initial battery capacity.' },
    ]
  },
  {
    id: 'technical',
    label: 'Technical',
    faqs: [
      { q: 'How do I size an off-grid system for my location?', a: 'System sizing considers: daily energy consumption (kWh), peak power demand (kW), solar irradiance at your location, desired autonomy days (backup without sun), and future expansion plans. Our free site assessment uses satellite data and on-ground measurements to design the optimal system.' },
      { q: 'What type of inverter is used in off-grid systems?', a: 'We use industrial-grade hybrid inverters with built-in MPPT charge controllers. These are pure sine wave inverters that safely power sensitive electronics. They support multiple input sources — solar, battery, and optional DG — with automatic seamless switching in under 10ms.' },
      { q: 'What maintenance does an off-grid system need?', a: 'Panel cleaning every 2-3 months (more in dusty areas), annual electrical health check, and inverter firmware updates. LFP batteries need zero maintenance — no water topping, no acid checks. Our 5-year AMC includes all of this plus remote monitoring, predictive diagnostics, and emergency support.' },
      { q: 'Can off-grid solar work in extreme temperatures?', a: 'Our LFP batteries operate between -20°C to 60°C, and panels are rated for -40°C to 85°C. For extremely hot locations, we install battery banks in ventilated enclosures with temperature regulation. For cold regions, built-in self-heating mechanisms activate below 0°C to ensure reliable charging.' },
    ]
  }
];

export default function OffGridFaqSection() {
  const [activeTab, setActiveTab] = useState('general');
  const [openIndex, setOpenIndex] = useState(null);

  const currentFaqs = FAQ_TABS.find(t => t.id === activeTab)?.faqs || [];

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — FAQ */}
          <div className="lg:col-span-7">
            <div className="mb-10">
              <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-[1.1] tracking-tight">
                Off-Grid Solar<br /><span className="text-[#E11D48]">FAQ</span>
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mb-10">
              {FAQ_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setOpenIndex(null); }}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-[#E11D48] text-white shadow-lg shadow-[#E11D48]/20'
                      : 'bg-white text-[#0F172A]/50 hover:text-[#0F172A]/70 border border-[#0F172A]/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* FAQ Items — bottom border style */}
            <div>
              {currentFaqs.map((faq, idx) => (
                <div key={`${activeTab}-${idx}`} className="border-b border-[#0F172A]/10">
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between py-6 px-2 text-left gap-4"
                  >
                    <div className="flex items-center gap-5">
                      <span className={`text-sm font-black tracking-wider ${openIndex === idx ? 'text-[#E11D48]' : 'text-[#0F172A]/20'}`}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className={`font-bold text-base ${openIndex === idx ? 'text-[#0F172A]' : 'text-[#0F172A]/70'}`}>
                        {faq.q}
                      </span>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      openIndex === idx ? 'bg-[#E11D48] text-white rotate-45' : 'bg-[#0F172A]/5 text-[#0F172A]/30'
                    }`}>
                      <i className="fas fa-plus text-xs"></i>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-400 ${openIndex === idx ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-2 pb-6 pl-12">
                      <p className="text-[#0F172A]/50 font-medium leading-relaxed text-sm">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image + CTAs */}
          <div className="lg:col-span-5">
            <div className="space-y-5 lg:mt-8">
              <div className="text-right mb-2">
                <p className="text-[#0F172A]/30 font-medium text-sm">Can't find your answer? Talk</p>
                <p className="text-[#0F172A]/30 font-medium text-sm">to our off-grid specialists.</p>
              </div>

              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                <img src={solarinterior} className="w-full h-full object-cover" alt="Off-grid solar cabin" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="inline-flex items-center gap-2 bg-[#E11D48] px-4 py-1.5 rounded-full mb-3">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    <span className="text-white font-black uppercase tracking-widest text-[9px]">Live Off-Grid</span>
                  </div>
                  <h3 className="text-white text-2xl font-black leading-tight">100% solar powered<br />remote farmhouse</h3>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-[#0F172A]/10 hover:border-[#E11D48]/20 hover:shadow-md transition-all duration-300 cursor-pointer group">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 text-xl shrink-0 group-hover:scale-110 transition-transform">
                    <i className="fas fa-map-location-dot"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A] text-sm">Free Site Feasibility</h4>
                    <p className="text-[#0F172A]/40 text-xs font-medium">For your remote location</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-[#0F172A]/10 hover:border-[#E11D48]/20 hover:shadow-md transition-all duration-300 cursor-pointer group">
                  <div className="w-12 h-12 bg-[#E11D48]/10 rounded-xl flex items-center justify-center text-[#E11D48] text-xl shrink-0 group-hover:scale-110 transition-transform">
                    <i className="fas fa-phone-volume"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A] text-sm">Talk to Off-Grid Expert</h4>
                    <p className="text-[#0F172A]/40 text-xs font-medium">Available Mon-Sat, 9am-7pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}