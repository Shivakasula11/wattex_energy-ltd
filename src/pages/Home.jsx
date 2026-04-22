import React from 'react';
import SEOHead from '../components/seo/SEOHead';
import SolarImpactSection from '../components/sections/SolarImpactSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import ParallaxSection from '../components/ui/ParallaxSection';
import SolarProcessSection from '../components/sections/SolarProcessSection';
import ServicesGrid from '../components/sections/ServicesGrid';
import Home2 from '../assets/home2.jpg';
import abhitowers from '../assets/kamakshi.png';
const Home = () => {
  return (
    <>
      <SEOHead
        title="Solar Installation Company in Hyderabad"
        description="Wattex Energy — Hyderabad's #1 solar company. Save up to 90% on electricity with residential, commercial & housing society solar. PM Surya Ghar eligible. Free consultation."
        path="/"
        keywords="solar energy Hyderabad, solar panels Telangana, solar installation India, Wattex Energy, rooftop solar, net metering, PM Surya Ghar, best solar company Hyderabad"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Wattex Energy',
            url: 'https://wattexenergy.com',
            logo: 'https://wattexenergy.com/wattexlogo.png',
            description: 'Leading solar energy solutions provider in Hyderabad offering residential, commercial, and industrial solar installations.',
            email: 'wattexenergy@gmail.com',
            areaServed: [
              { '@type': 'City', name: 'Hyderabad' },
              { '@type': 'State', name: 'Telangana' },
            ],
            sameAs: ['https://www.instagram.com/wattexenergy'],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Solar Energy Solutions',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Solar Installation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Solar Installation' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Housing Society Solar' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'On-Grid Solar Systems' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Off-Grid Solar Systems' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Utility Scale Solar Plants' } },
              ],
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Wattex Energy',
            url: 'https://wattexenergy.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://wattexenergy.com/blogs?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          },
        ]}
      />
      {/* Hero */}
      <section id="home" className="relative min-h-[100svh] h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img loading="lazy" src={Home2} className="w-full h-full object-cover" alt="Solar panels installation on rooftop in Hyderabad by Wattex Energy" />
          <div className="absolute inset-0 bg-gradient-to-r from-solar-deep via-solar-deep/80 to-transparent sm:to-transparent"></div>
          {/* Extra overlay for tiny screens to ensure text readability */}
          <div className="absolute inset-0 bg-solar-deep/40 sm:bg-transparent"></div>
        </div>
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-4 xs:space-y-5 sm:space-y-7 md:space-y-8 lg:space-y-10 animate-slide-left">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white font-heading leading-[1.1] tracking-tighter break-words">
              Energy for a<br />
              <span className="text-solar-primary uppercase">Sustainable Future</span> .
            </h1>
            <p className="text-white/70 text-[11px] xs:text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-2xl font-medium leading-relaxed">
              Industrial-grade renewable energy solutions engineered for zero-carbon impact and maximum economic yield.
            </p>
          </div>
        </div>
      </section>

      <SolarImpactSection />
      
      <WhyChooseUsSection />

      <ParallaxSection
        image={abhitowers}
        title="Urban Integration"
        subtitle="Seamlessly blending high-efficiency solar technology into modern architecture and city infrastructure."
      />


   {/* Before vs After Solar Comparison */}
      <section className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-slate-50">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16 space-y-2 xs:space-y-3 sm:space-y-4">
            <span className="text-solar-primary font-black uppercase tracking-widest text-[9px] xs:text-[10px] sm:text-xs">Why Solar?</span>
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-solar-deep tracking-tight">The Smart Switch</h2>
            <p className="text-slate-500 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-2xl mx-auto px-2">
              See exactly what changes when you make the switch to Wattex solar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 max-w-4xl mx-auto">

            {/* Without Solar */}
            <div className="rounded-2xl xs:rounded-3xl sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-slate-200 bg-white">
              <div className="bg-slate-100 px-3 xs:px-4 sm:px-6 md:px-8 py-3 xs:py-4 sm:py-5 border-b border-slate-200">
                <span className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-widest text-slate-500">Without solar</span>
              </div>
              <div className="px-3 xs:px-4 sm:px-6 md:px-8 py-3 xs:py-4 sm:py-5 md:py-6 flex flex-col gap-2 xs:gap-3 sm:gap-4">
                {[
                  { label: 'Monthly bill',    value: '₹8,000',         neutral: false },
                  { label: 'Annual spend',    value: '₹96,000',        neutral: false },
                  { label: '25-yr cost',      value: '₹24 Lakhs+',     neutral: false },
                  { label: 'CO₂ footprint',   value: 'High',           neutral: false },
                  { label: 'Price stability', value: 'None',           neutral: false },
                  { label: 'Property value',  value: 'No impact',      neutral: true  },
                ].map((row, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center gap-2 py-2 xs:py-2.5 sm:py-3">
                      <span className="text-slate-500 font-medium text-[10px] xs:text-xs sm:text-sm">{row.label}</span>
                      <span className={`font-bold text-[10px] xs:text-xs sm:text-sm text-right ${row.neutral ? 'text-slate-400' : 'text-red-600'}`}>
                        {row.value}
                      </span>
                    </div>
                    {i < 5 && <div className="h-px bg-slate-100" />}
                  </div>
                ))}
              </div>
            </div>

            {/* With Solar */}
            <div className="rounded-2xl xs:rounded-3xl sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border-2 border-emerald-500 bg-white shadow-xl shadow-emerald-100">
              <div className="bg-emerald-50 px-3 xs:px-4 sm:px-6 md:px-8 py-3 xs:py-4 sm:py-5 border-b border-emerald-100 flex flex-col xs:flex-row justify-between items-start xs:items-center gap-2 xs:gap-3">
                <span className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-widest text-emerald-800">With Wattex solar</span>
                <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-black uppercase tracking-widest bg-emerald-500 text-white px-2 xs:px-2.5 sm:px-3 py-0.5 xs:py-1 rounded-full whitespace-nowrap">
                  Recommended
                </span>
              </div>
              <div className="px-3 xs:px-4 sm:px-6 md:px-8 py-3 xs:py-4 sm:py-5 md:py-6 flex flex-col gap-2 xs:gap-3 sm:gap-4">
                {[
                  { label: 'Monthly bill',    value: '₹800'             },
                  { label: 'Annual spend',    value: '₹9,600'           },
                  { label: '25-yr cost',      value: '₹2.4 Lakhs only'  },
                  { label: 'CO₂ footprint',   value: 'Zero'             },
                  { label: 'Price stability', value: '25 years fixed'   },
                  { label: 'Property value',  value: '+10–15%'          },
                ].map((row, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center gap-2 py-2 xs:py-2.5 sm:py-3">
                      <span className="text-slate-500 font-medium text-[10px] xs:text-xs sm:text-sm">{row.label}</span>
                      <span className="font-bold text-[10px] xs:text-xs sm:text-sm text-emerald-600 text-right">{row.value}</span>
                    </div>
                    {i < 5 && <div className="h-px bg-slate-100" />}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      <ServicesGrid />
    </>
  );
};

export default Home;