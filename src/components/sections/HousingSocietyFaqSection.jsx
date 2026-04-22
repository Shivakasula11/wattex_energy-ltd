import React, { useState } from 'react';
import housingfaq from '../../assets/housingfaq.png';
const FAQ_TABS = [
  {
    id: 'general',
    label: 'General',
    faqs: [
      { q: 'Do we need 100% resident agreement?', a: 'No. As per most state cooperative housing laws, a simple majority (51%) or a two-thirds majority in the RWA general body meeting is sufficient to pass a resolution for solar installation on common areas. We help you draft the resolution and supporting documents.' },
      { q: 'Who owns the solar system — society or vendor?', a: 'The housing society owns the system entirely. Wattex installs, commissions, and hands over ownership to the RWA. You get full rights to the generated electricity and all government subsidies. We provide a 5-year maintenance agreement separately.' },
      { q: 'What if we have limited rooftop space?', a: 'Our engineers optimize every square foot. We use high-efficiency panels, solar carports over parking areas, and vertical mounting solutions. Even with water tanks, antennas, and other rooftop structures, we typically find 60-80% of usable roof area.' },
      { q: 'How is savings distributed among flats?', a: 'Solar power generated is used for common area consumption first (lifts, pumps, lights, CCTV). The savings reflect directly in reduced monthly maintenance charges for every flat equally, as common area bills are shared costs.' },
      { q: 'What happens during heavy monsoon?', a: 'Modern solar panels work on light, not direct sunlight. While generation dips on very overcast days, annual output accounts for monsoon. Our systems are also cyclone-proof rated up to 170 kmph wind speeds and fully waterproofed.' },
    ]
  },
  {
    id: 'financial',
    label: 'Financial',
    faqs: [
      { q: 'What is the total cost for a 100-flat society?', a: 'A typical 100-flat society with 50kW common area load requires a system costing ₹20-28 Lakhs before subsidy. After government subsidy (up to 40%), the net cost drops to ₹12-18 Lakhs, which is recovered in 2.5-3.5 years through electricity savings.' },
      { q: 'Can the society pay in installments?', a: 'Yes! We offer flexible EMI options for societies. The monthly EMI is typically less than the monthly savings from solar, making it a net-positive investment from month one. Zero down-payment options are also available.' },
      { q: 'How much will each flat save monthly?', a: 'For a 100-flat society, maintenance reduction is typically ₹1,200-2,000 per flat per month. For a 200-flat society, it is ₹800-1,500 per flat. The exact amount depends on common area load and current electricity tariff.' },
      { q: 'Is there a government subsidy for housing societies?', a: 'Yes. Under PM Surya Ghar Muft Bijli Yojana, residential installations get up to 40% subsidy for systems up to 3kW and 20% for 3-10kW. Housing societies can avail this for common area systems. We handle all paperwork and DISCOM coordination.' },
    ]
  },
  {
    id: 'technical',
    label: 'Technical',
    faqs: [
      { q: 'What system size does our society need?', a: 'System size depends on your common area electricity consumption. A typical 100-flat society uses 30-60kW for lifts, pumps, lights, and CCTV. Our free site audit measures your exact load and recommends the optimal system size.' },
      { q: 'Will it power individual flats too?', a: 'The standard society installation powers common areas. However, we also offer individual flat solutions where each flat owner can install their own panels. We can design a combined system that serves both common areas and individual units.' },
      { q: 'What maintenance is required?', a: 'Quarterly panel cleaning and annual electrical health checks. Our 5-year maintenance package includes everything — deep cleaning, inverter diagnostics, wiring inspection, and performance monitoring. Panels have a 25-year warranty.' },
      { q: 'How long does installation take?', a: 'For a typical 50kW society system, installation takes 2-4 weeks. We work floor-by-floor to minimize disruption. Net metering approval and DISCOM connection adds another 2-4 weeks, during which the system can still operate in self-consumption mode.' },
    ]
  }
];

export default function HousingSocietyFaqSection() {
  const [activeTab, setActiveTab] = useState('general');
  const [openIndex, setOpenIndex] = useState(null);

  const currentFaqs = FAQ_TABS.find(t => t.id === activeTab)?.faqs || [];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left - FAQ Content */}
          <div className="lg:col-span-7">
            <div className="mb-12 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[3px] bg-solar-primary rounded-full"></div>
                <span className="text-solar-primary font-black uppercase tracking-[0.3em] text-[11px]">Got Questions?</span>
              </div>
              <h2 className="text-4xl md:text-4xl font-black text-solar-deep leading-[1.1] tracking-tight">
                Society Solar<br /><span className="text-solar-primary">FAQ</span>
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
                      : 'bg-white text-slate-500 hover:bg-slate-100'
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
                    openIndex === idx ? 'border-solar-primary/20 bg-rose-50/30 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'
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

              <div className="text-center lg:text-right mb-2">
                <p className="text-slate-400 font-medium text-sm">Can't find your answer? Talk</p>
                <p className="text-slate-400 font-medium text-sm">to our society solar experts.</p>
              </div>

              {/* Solar Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src={housingfaq}
                  className="w-full h-full object-cover"
                  alt="Society solar installation"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-solar-deep/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="inline-flex items-center gap-2 bg-solar-primary px-4 py-1.5 rounded-full mb-3">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    <span className="text-white font-black uppercase tracking-widest text-[9px]">Society Project</span>
                  </div>
                  <h3 className="text-white text-2xl font-black leading-tight">
                    240-flat society<br />₹0 common area bill
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
                    <h4 className="font-bold text-solar-deep text-sm">Free Society Audit</h4>
                    <p className="text-slate-400 text-xs font-medium">Book for your RWA committee</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <div className="w-12 h-12 bg-solar-primary/10 rounded-xl flex items-center justify-center text-solar-primary text-xl shrink-0 group-hover:scale-110 transition-transform">
                    <i className="fas fa-phone-volume"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-solar-deep text-sm">Talk to RWA Expert</h4>
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