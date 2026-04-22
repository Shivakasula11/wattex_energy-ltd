import React, { useState } from 'react';
import Home1 from '../../assets/Home1.jpg';

const FAQ_TABS = [
  {
    id: 'general',
    label: 'General',
    faqs: [
      { q: 'What is Wattex Energy?', a: 'Wattex Energy is a leading solar energy company that designs, installs, and maintains high-efficiency rooftop solar systems for residential, commercial, and industrial customers. We handle everything from consultation to grid connection and long-term maintenance.' },
      { q: 'What is a solar rooftop system?', a: 'A solar rooftop system consists of photovoltaic (PV) panels installed on your roof that convert sunlight into electricity. This electricity can power your home, reduce your electricity bills, and even earn credits by exporting excess power back to the grid through net metering.' },
      { q: 'How does a solar rooftop system work?', a: 'Solar panels absorb sunlight and convert it into DC electricity. An inverter then converts this DC power into AC electricity that your home appliances use. Any excess energy is sent to the grid, and your electricity meter runs backwards — giving you credits on your bill.' },
      { q: 'How to apply for a solar rooftop subsidy?', a: 'Wattex handles the entire subsidy application process for you. We manage all paperwork, coordinate with your local DISCOM, and ensure you receive the maximum government subsidy available in your state — up to 40% on residential installations.' },
      { q: 'What is the price without subsidy?', a: 'The cost of a solar rooftop system depends on the system size, panel type, and installation complexity. A typical 3kW residential system ranges from ₹1.8-2.5 lakhs before subsidy. Contact us for a free, customized quote based on your roof and energy needs.' },
      { q: 'Is solar power safe?', a: 'Absolutely. Solar panels are extremely safe when installed by certified professionals. Our installations use high-quality components with multiple safety features including DC isolators, surge protectors, and proper earthing. All systems are tested and certified to international standards.' },
    ]
  },
  {
    id: 'maintenance',
    label: 'Solar Maintenance',
    faqs: [
      { q: 'How often do solar panels need cleaning?', a: 'We recommend cleaning your solar panels every 3-4 months. Dust, bird droppings, and debris can reduce efficiency by 15-25%. With our 5-year maintenance plan, we handle quarterly deep cleaning for you automatically.' },
      { q: 'What happens if a panel gets damaged?', a: 'Our panels come with a 25-year performance warranty. If a panel is damaged due to manufacturing defects, it will be replaced free of charge. For accidental damage, our team provides quick and affordable replacement services.' },
      { q: 'Do solar panels work during monsoon season?', a: 'Yes! Solar panels work on light, not heat. While generation may be lower on heavily overcast days, modern panels are highly efficient and still produce significant power during monsoon. Annual output accounts for seasonal variations.' },
      { q: 'What is included in the 5-year maintenance plan?', a: 'Our comprehensive plan includes quarterly deep cleaning, electrical health checks, inverter diagnostics, wiring inspections, performance monitoring, and priority support. We proactively identify and fix issues before they affect your power generation.' },
    ]
  },
  {
    id: 'economics',
    label: 'Solar Economics',
    faqs: [
      { q: 'How much can I save on electricity bills?', a: 'Most homeowners save 70-90% on their electricity bills after installing solar. With net metering, excess power is exported to the grid, earning you credits. Many of our customers report their monthly bills dropping to near zero.' },
      { q: 'What is the payback period for residential solar?', a: 'With current government subsidies and electricity rates, the typical payback period is 3-5 years for residential systems. After that, you enjoy free electricity for the remaining 20+ years of the system\'s lifespan.' },
      { q: 'Does solar increase my property value?', a: 'Yes! Studies show that homes with solar installations sell for 3-4% more than comparable homes without solar. Buyers increasingly value energy independence and lower utility costs, making solar a smart investment.' },
      { q: 'What financing options are available?', a: 'We offer flexible EMI plans with zero down payment options, making solar accessible to every homeowner. Our financing partners provide competitive interest rates, and the monthly EMI is typically less than your current electricity bill.' },
    ]
  }
];

export default function SolarFaqSection() {
  const [activeTab, setActiveTab] = useState('general');
  const [openIndex, setOpenIndex] = useState(null);

  const currentFaqs = FAQ_TABS.find(t => t.id === activeTab)?.faqs || [];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left - FAQ Content */}
          <div className="lg:col-span-7">
            {/* Header */}
            <div className="mb-12 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[3px] bg-solar-primary rounded-full"></div>
                <span className="text-solar-primary font-black uppercase tracking-[0.3em] text-[11px]">Got Questions?</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-solar-deep leading-[1.1] tracking-tight">
                Everything you<br />need to know about<br /><span className="text-solar-primary">solar</span>
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
                      ? 'bg-solar-primary text-white shadow-lg shadow-rose-200'
                      : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Accordion */}
            <div className="space-y-3">
              {currentFaqs.map((faq, idx) => (
                <div
                  key={`${activeTab}-${idx}`}
                  className={`rounded-2xl border transition-all duration-300 ${
                    openIndex === idx ? 'border-solar-primary/20 bg-rose-50/30 shadow-sm' : 'border-slate-100 bg-white hover:border-slate-200'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-[11px] font-black tracking-wider transition-colors ${
                        openIndex === idx ? 'text-solar-primary' : 'text-slate-300'
                      }`}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className={`font-bold text-[15px] transition-colors ${
                        openIndex === idx ? 'text-solar-deep' : 'text-slate-700'
                      }`}>
                        {faq.q}
                      </span>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      openIndex === idx ? 'bg-solar-primary text-white rotate-45' : 'bg-slate-100 text-slate-400'
                    }`}>
                      <i className="fas fa-plus text-xs"></i>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    openIndex === idx ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-5 md:px-6 pb-6 pl-14 md:pl-16">
                      <p className="text-slate-500 font-medium leading-relaxed text-sm">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Sidebar */}
          <div className="lg:col-span-5">
            <div className="space-y-6  mt-16">

              

              {/* Solar Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src={Home1}
                  className="w-full h-full object-cover"
                  alt="Solar panels on rooftop"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-solar-deep/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="inline-flex items-center gap-2 bg-solar-primary px-4 py-1.5 rounded-full mb-3">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    <span className="text-white font-black uppercase tracking-widest text-[9px]">Live Installation</span>
                  </div>
                  <h3 className="text-white text-2xl font-black leading-tight">
                    Professional setup in<br />as little as 1 day
                  </h3>
                </div>
              </div>

              {/* Quick Action Cards */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500 text-xl shrink-0 group-hover:scale-110 transition-transform">
                    <i className="fas fa-clipboard-check"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-solar-deep text-sm">Free Site Assessment</h4>
                    <p className="text-slate-400 text-xs font-medium">Our expert visits your home at no cost</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <div className="w-12 h-12 bg-solar-primary/10 rounded-xl flex items-center justify-center text-solar-primary text-xl shrink-0 group-hover:scale-110 transition-transform">
                    <i className="fas fa-phone-volume"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-solar-deep text-sm">Talk to a Solar Expert</h4>
                    <p className="text-slate-400 text-xs font-medium">Available Mon–Sat, 9am–7pm</p>
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