import React, { useState } from 'react';
import offgridfaq from "../../assets/Offgridfaq.png";

const FAQ_TABS = [
  {
    id: 'general',
    label: 'General',
    faqs: [
      { q: 'What happens during a power cut with on-grid solar?', a: 'Standard on-grid systems shut down during power cuts for safety — this is called anti-islanding protection, required by law to protect linemen working on the grid. However, you can add a hybrid inverter with a small battery bank (2-5 kWh) to keep essential loads running during outages. We offer this as an optional upgrade.' },
      { q: 'How does net metering billing work?', a: 'Your electricity meter runs both ways. When your solar produces more than you use (typically daytime), excess flows to the grid and your meter runs backwards. At night, you draw from the grid. Your monthly bill is based on the net difference — most customers see 70-90% reduction. Credits roll over monthly for up to a year.' },
      { q: 'Can I add batteries to on-grid solar later?', a: 'Yes! We recommend starting with a hybrid inverter from day one — it costs only ₹5-8K more than a standard grid-tie inverter but supports battery addition anytime. You can add a 2-5 kWh lithium battery later for ₹60-80K to get backup during power cuts without replacing any existing equipment.' },
      { q: 'Is my roof suitable for solar panels?', a: 'Most roofs work well for solar. We need a shadow-free area facing south, east, or west. A 1kW system needs about 60-70 sq ft of roof space. RCC flat roofs are ideal, but we also install on metal sheet roofs and tile roofs with specialized mounting. Our free site survey assesses your specific roof within 48 hours.' },
      { q: 'How long does installation take?', a: 'A typical residential on-grid installation (3-10 kW) takes just 1-2 days once materials arrive. The complete process from agreement to power-on takes 2-4 weeks, including DISCOM application, meter change to bi-directional, and final commissioning. We handle all paperwork and coordination.' },
    ]
  },
  {
    id: 'financial',
    label: 'Financial',
    faqs: [
      { q: 'What is the total cost vs savings for on-grid solar?', a: 'A 5kW system costs ₹3.5-4.5 Lakhs before subsidy. After PM Surya Ghar subsidy (up to ₹78,000 for 3kW + 20% for additional capacity), your net cost is ₹1.8-2.5 Lakhs. Monthly savings of ₹8,000-12,000 mean full payback in 2-3 years. Over 25 years, total savings exceed ₹25 Lakhs — a 7-10x return.' },
      { q: 'How does the PM Surya Ghar subsidy process work?', a: 'We handle everything: (1) Register on the national portal, (2) Submit your application with documents, (3) Get feasibility approval from DISCOM, (4) Install the system, (5) DISCOM inspects and installs net meter, (6) Subsidy is credited directly to your bank account within 30 days of commissioning. Zero running around for you.' },
      { q: 'Are EMI or loan options available?', a: 'Yes — we partner with leading banks and NBFCs for solar loans at 7-9% interest. Typical EMI for a 5kW system is ₹3,500-4,500/month for 5 years. Since your monthly savings are ₹8,000-12,000, you save money even while paying EMI. Zero down-payment options available for salaried professionals.' },
      { q: 'What is the payback period for on-grid solar?', a: 'With current electricity tariffs (₹6-10/unit) and government subsidies, payback is typically 2.5-4 years. After payback, you enjoy free electricity for the remaining 21-22 years of the system life. Payback gets even faster as electricity prices increase annually by 5-8%.' },
      { q: 'How do rising electricity tariffs affect my savings?', a: 'Rising tariffs actually increase your savings every year. If your electricity rate goes up by ₹1/unit, your annual savings increase by ₹5,000-8,000 (for a 5kW system). Over 25 years, cumulative savings can exceed ₹35-40 Lakhs when accounting for typical 5-7% annual tariff increases.' },
    ]
  },
  {
    id: 'technical',
    label: 'Technical',
    faqs: [
      { q: 'What size on-grid system do I need for my home?', a: 'Match your system to your monthly electricity bill: ₹2,000-4,000/month → 3kW system. ₹4,000-8,000/month → 5kW system. ₹8,000-15,000/month → 8-10kW system. We analyze your last 6 months of electricity bills during the free consultation to recommend the optimal size that maximizes your ROI.' },
      { q: 'Which inverter brands do you use?', a: 'We use Tier-1 certified inverters from Growatt, Goodwe, Solis, and Fronius. All come with 5-10 year manufacturer warranty, IP65 weather protection, and built-in Wi-Fi for real-time monitoring. For hybrid setups, we recommend Growatt SPH series or Goodwe ET series which support battery addition.' },
      { q: 'What warranty do solar panels carry?', a: 'Our panels come with 12-year product warranty (covering manufacturing defects) and 25-year performance warranty (guaranteeing minimum 80% output at year 25). We use Tier-1 panels from manufacturers like Jinko, Longi, Canadian Solar, and Adani — all with bankable warranties backed by global insurance.' },
      { q: 'What maintenance does on-grid solar need?', a: 'Minimal: Panel cleaning every 2-3 months (water spray is sufficient, no chemicals needed), and an annual health check by our team. No battery maintenance, no water topping, no acid handling. Our monitoring app alerts you to any performance drops automatically. Optional AMC available at ₹2,000-3,000/year.' },
      { q: 'Can I monitor my system from my phone?', a: 'Yes — every system includes a free monitoring app (Solarman, ShinePhone, or SolisCloud depending on inverter). Track real-time generation, daily/monthly/yearly production, consumption patterns, export to grid, CO₂ offset, and financial savings. Get instant alerts for any system issues. Access from anywhere, anytime.' },
    ]
  }
];

export default function OnGridFaqSection() {
  const [activeTab, setActiveTab] = useState('general');
  const [openIndex, setOpenIndex] = useState(null);

  const currentFaqs = FAQ_TABS.find(t => t.id === activeTab)?.faqs || [];

  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left - FAQ Content */}
          <div className="lg:col-span-7">
            <div className="mb-12 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[3px] bg-solar-sky rounded-full"></div>
                <span className="text-solar-sky font-black uppercase tracking-[0.3em] text-[11px]">Got Questions?</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-solar-deep leading-[1.1] tracking-tight">
                On-Grid Solar<br /><span className="text-solar-sky">FAQ</span>
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
                      ? 'bg-solar-sky text-white shadow-lg shadow-sky-200'
                      : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
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
                    openIndex === idx ? 'border-solar-sky/20 bg-sky-50/40 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-[11px] font-black tracking-wider transition-colors ${
                        openIndex === idx ? 'text-solar-sky' : 'text-slate-300'
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
                      openIndex === idx ? 'bg-solar-sky text-white rotate-45' : 'bg-slate-100 text-slate-400'
                    }`}>
                      <i className="fas fa-plus text-xs"></i>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    openIndex === idx ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
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
            <div className="space-y-6 lg:mt-16 lg:sticky lg:top-32">

              <div className="text-center lg:text-right mb-2">
                <p className="text-slate-400 font-medium text-sm">Need personalized advice?</p>
                <p className="text-slate-400 font-medium text-sm">Talk to our solar experts.</p>
              </div>

              {/* Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src={offgridfaq}
                  className="w-full h-full object-cover"
                  alt="Rooftop solar installation"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-solar-deep/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="inline-flex items-center gap-2 bg-solar-sky px-4 py-1.5 rounded-full mb-3">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    <span className="text-white font-black uppercase tracking-widest text-[9px]">On-Grid Install</span>
                  </div>
                  <h3 className="text-white text-2xl font-black leading-tight">
                    5kW rooftop system<br />  Save's Upto :- ₹4500 monthly bill
                  </h3>
                </div>
              </div>

              {/* Quick Action Cards */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-solar-sky text-xl shrink-0 group-hover:scale-110 transition-transform">
                    <i className="fas fa-calculator"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-solar-deep text-sm">Use Savings Calculator</h4>
                    <p className="text-slate-400 text-xs font-medium">See your exact ROI in 30 seconds</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500 text-xl shrink-0 group-hover:scale-110 transition-transform">
                    <i className="fas fa-phone-volume"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-solar-deep text-sm">Talk to Solar Expert</h4>
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