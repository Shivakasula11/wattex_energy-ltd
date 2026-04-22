import React, { useState } from 'react';
import commercial4 from '../../assets/commercial4.jpg';
const FAQ_TABS = [
  {
    id: 'general',
    label: 'General',
    faqs: [
      { q: 'What system size does my business need?', a: 'System size depends on your monthly electricity consumption, available roof area, and energy goals. A typical commercial setup ranges from 50kW to 500kW. Our engineers conduct a free site survey to recommend the optimal size that maximizes savings and ROI for your specific facility.' },
      { q: 'How does commercial net metering work?', a: 'With net metering, excess solar energy your system generates is exported to the grid. Your electricity meter runs backwards, giving you credits that offset your electricity bill. At the end of the billing cycle, you only pay for the net energy consumed — often reducing bills by 60-90%.' },
      { q: 'What are the tax benefits for businesses?', a: 'Commercial solar installations qualify for 40% accelerated depreciation in the first year under the Income Tax Act. Additionally, businesses can claim GST input credit on the solar system purchase. Combined, these benefits can reduce the effective cost of your solar system by up to 50%.' },
      { q: 'Can solar power my entire factory?', a: 'Yes, depending on your roof area and energy consumption. Many factories achieve 70-100% energy independence with rooftop solar. For facilities requiring more power than the rooftop can generate, we design hybrid systems combining rooftop panels with ground-mounted arrays or carport structures.' },
      { q: 'What happens on cloudy days or at night?', a: 'On-grid commercial systems draw power from the utility grid when solar generation is low. Your operations are never interrupted. With a hybrid system including battery storage, you can maintain power even during grid outages, ensuring 24/7 reliability for critical operations.' },
    ]
  },
  {
    id: 'financial',
    label: 'Financial',
    faqs: [
      { q: 'What is the typical ROI for commercial solar?', a: 'Commercial solar systems typically achieve 33-48% annual returns with a payback period of 2-3 years. After payback, you enjoy essentially free electricity for the remaining 20+ years of the system lifespan, generating cumulative savings of ₹2-5 Crore for a typical 100kW system.' },
      { q: 'Are financing options available for businesses?', a: 'Yes, we offer multiple financing models including outright purchase, EMI plans, OPEX/PPA models (zero upfront cost), and lease arrangements. Our financial advisors help you choose the model that best fits your cash flow and tax planning requirements.' },
      { q: 'How much maintenance cost should we budget?', a: 'Annual maintenance costs are typically 1-2% of the system cost. Our 1 -year AMC (Annual Maintenance Contract) covers quarterly cleaning, inverter health checks, wiring inspections, and performance monitoring — ensuring your system operates at peak efficiency throughout.' },
      { q: 'Does commercial solar qualify for government subsidies?', a: 'Commercial and industrial installations do not receive direct capital subsidies like residential systems. However, they benefit significantly from accelerated depreciation (40% in Year 1), GST input credits, and reduced electricity tariffs — often providing greater financial advantage than direct subsidies.' },
    ]
  },
  {
    id: 'technical',
    label: 'Technical',
    faqs: [
      { q: 'How long does a commercial installation take?', a: 'A standard commercial rooftop installation (50-200kW) takes 3-5 weeks from approval to commissioning. Larger projects (500kW+) may take 5-10 weeks. This includes structural analysis, engineering design, procurement, installation, testing, and grid connection coordination.' },
      { q: 'Will solar panels damage my roof?', a: 'No. We use non-penetrative mounting systems and chemical anchoring technology that secures panels without drilling into your roof. Our installations come with a ₹1 Lakh guarantee against water leakage. All structures are engineered to withstand wind speeds up to 170 kmph.' },
      { q: 'What warranty coverage do commercial systems get?', a: '30-years performance warranty on solar panels (guaranteed 80%+ output at Year 25), 10-year warranty on inverters, 5-year warranty on mounting structures, and 1-year comprehensive AMC. We also provide real-time remote monitoring for immediate issue detection.' },
      { q: 'Can we expand the system later?', a: 'Absolutely. All our commercial systems are designed with scalability in mind. Inverters and electrical infrastructure are sized to accommodate future expansion, allowing you to add more panels as your energy needs grow without replacing existing equipment.' },
    ]
  }
];

export default function CommercialFaqSection() {
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
              <h2 className="text-4xl md:text-5xl font-black text-solar-deep leading-[1.1] tracking-tight">
                Commercial Solar<br /><span className="text-solar-primary">FAQ</span>
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
            <div className="space-y-6 mt-16">

              {/* CTA Text */}
              <div className="text-center lg:text-right mb-2">
                <p className="text-slate-400 font-medium text-sm">Need a custom quote for your business?</p>
                <p className="text-slate-400 font-medium text-sm">Our commercial team is ready to help.</p>
              </div>

              {/* Commercial Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src= {commercial4}
                  className="w-full h-full object-cover"
                  alt="Commercial solar installation"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-solar-deep/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="inline-flex items-center gap-2 bg-solar-primary px-4 py-1.5 rounded-full mb-3">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    <span className="text-white font-black uppercase tracking-widest text-[9px]">Commercial Grade</span>
                  </div>
                  <h3 className="text-white text-2xl font-black leading-tight">
                    50kW to 50MW<br />systems delivered
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
                    <h4 className="font-bold text-solar-deep text-sm">Free Site Survey</h4>
                    <p className="text-slate-400 text-xs font-medium">Technical audit at no cost</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <div className="w-12 h-12 bg-solar-primary/10 rounded-xl flex items-center justify-center text-solar-primary text-xl shrink-0 group-hover:scale-110 transition-transform">
                    <i className="fas fa-phone-volume"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-solar-deep text-sm">Talk to Commercial Sales</h4>
                    <p className="text-slate-400 text-xs font-medium">Dedicated B2B team, Mon–Sat 9am–7pm</p>
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