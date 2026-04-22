import React from "react";
import { motion } from "framer-motion";
import SEOHead from '../components/seo/SEOHead';
import HeroCarousel from "../components/ui/HeroCarousel";
import WhyChooseUsSection from "../components/sections/WhyChooseUsSection";
import ParallaxSection from "../components/ui/ParallaxSection";
import SolarFaqSection from "../components/sections/SolarFaqSection";
import ConsultationForm from '../components/sections/ConsultationForm';
import SolarProcessSection from '../components/sections/SolarProcessSection';
import Home2 from '../assets/home2.jpg';
const ResidentialSolar = () => (
  <div className="animate-fade-in bg-white">
    <SEOHead
      title="Residential Solar Panels Hyderabad — Save 90% on Bills"
      description="Install rooftop solar for your home in Hyderabad. ₹0 electricity bills, PM Surya Ghar subsidy eligible, 25-year warranty. Free site assessment by Wattex Energy."
      path="/residential"
      keywords="residential solar Hyderabad, home solar panels, rooftop solar installation, PM Surya Ghar subsidy, solar for home India, best solar panels for home Hyderabad"
      image="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=1200"
      schema={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Residential Solar Panel Installation in Hyderabad',
          provider: { '@type': 'Organization', name: 'Wattex Energy', url: 'https://wattexenergy.com' },
          description: 'Complete rooftop solar installation for homes — design, installation, net metering setup, and PM Surya Ghar subsidy assistance in Hyderabad & Telangana.',
          areaServed: { '@type': 'City', name: 'Hyderabad' },
          serviceType: 'Residential Solar Installation',
          offers: { '@type': 'Offer', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'What is Wattex Energy?', acceptedAnswer: { '@type': 'Answer', text: 'Wattex Energy is a leading solar energy company that designs, installs, and maintains high-efficiency rooftop solar systems for residential, commercial, and industrial customers.' } },
            { '@type': 'Question', name: 'What is a solar rooftop system?', acceptedAnswer: { '@type': 'Answer', text: 'A solar rooftop system consists of photovoltaic (PV) panels installed on your roof that convert sunlight into electricity, powering your home and earning credits via net metering.' } },
            { '@type': 'Question', name: 'How to apply for a solar rooftop subsidy?', acceptedAnswer: { '@type': 'Answer', text: 'Wattex handles the entire subsidy application process — paperwork, DISCOM coordination, and ensuring you receive up to 40% government subsidy on residential installations.' } },
            { '@type': 'Question', name: 'What is the price without subsidy?', acceptedAnswer: { '@type': 'Answer', text: 'A typical 3kW residential system ranges from ₹1.8-2.5 lakhs before subsidy. Contact Wattex for a free, customized quote based on your roof and energy needs.' } },
            { '@type': 'Question', name: 'Do solar panels work during monsoon season?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! Solar panels work on light, not heat. Modern panels produce significant power even during monsoon. Annual output accounts for seasonal variations.' } },
          ],
        },
      ]}
    />
    <HeroCarousel />

    {/* Benefits */}
    <section className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-[4rem] overflow-hidden shadow-4xl aspect-square">
              <img
                src="https://images.unsplash.com/photo-1698755394930-9bb2042c6f8c?q=80&w=1448&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover"
                alt="Homeowner with rooftop solar panels installed by Wattex Energy"
              />
            </div>
            <div className="absolute -top-10 -right-10 bg-white p-10 rounded-[3rem] shadow-3xl max-w-xs space-y-4 hidden md:block border border-slate-100">
              <div className="text-4xl font-black text-solar-sky">₹0</div>
              <p className="text-slate-600 font-bold uppercase tracking-widest text-[10px]">
                Monthly Electricity Bill Potential
              </p>
            </div>
          </div>
          <div className="space-y-12 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="text-solar-primary font-black uppercase tracking-widest text-xs">
                Why Switch?
              </span>
              <h2 className="text-5xl font-black text-solar-deep tracking-tight">
                Clean Energy, Pure Savings
              </h2>
              <p className="text-slate-500 text-xl leading-relaxed font-medium">
                Our residential systems are engineered for maximum efficiency,
                ensuring your home runs on clean energy even during peak hours.
              </p>
            </div>
            <div className="grid gap-10">
              {[
                {
                  title: "Subsidies & Rebates",
                  desc: "Unlock government incentives up to 40% on residential rooftop installations.",
                  icon: "fa-hand-holding-dollar",
                },
                {
                  title: "Smart Energy Monitoring",
                  desc: "Track your generation and consumption in real-time through our mobile app.",
                  icon: "fa-mobile-screen",
                },
                {
                  title: "Increase Property Value",
                  desc: "Solar-equipped homes are valued higher and sell faster in the modern real estate market.",
                  icon: "fa-arrow-trend-up",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-14 h-14 bg-solar-sky/10 rounded-2xl flex items-center justify-center text-solar-sky shrink-0">
                    <i className={`fas ${item.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-solar-deep mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <ConsultationForm />

    {/* Why Choose Wattex */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-4xl font-black text-center text-solar-deep mb-20 tracking-tight">
          Why choose Wattex for your solar installation
        </h2>
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16 max-w-6xl mx-auto">
          {[
            {
              icon: "fa-calculator",
              iconBg: "bg-sky-50",
              iconColor: "text-sky-500",
              badgeIcon: "fa-indian-rupee-sign",
              badgeBg: "bg-emerald-400",
              title: "Easy Financing Plans",
              description:
                "Switching to solar made easy & affordable with our EMI plans",
            },
            {
              icon: "fa-wind",
              iconBg: "bg-sky-50",
              iconColor: "text-sky-500",
              title: "Cyclone-Proof, Safe Rooftop Solar",
              description:
                "Safe installations that can handle scary storms and winds up to 170 kmph speeds",
            },
            {
              icon: "fa-droplet-slash",
              iconBg: "bg-sky-50",
              iconColor: "text-sky-500",
              badgeIcon: "fa-circle-check",
              badgeBg: "bg-sky-400",
              title: "₹1 Lakh Guarantee Against Water Leakage",
              description:
                'Systems secured to your roof with "chemical anchoring" to prevent water leakage on your roof',
            },
            {
              icon: "fa-gear",
              iconBg: "bg-sky-50",
              iconColor: "text-sky-500",
              title: "5-Year Professional Maintenance Included",
              description:
                "Quarterly deep cleaning, health checks & repairs included",
            },
          ].map((f, idx) => (
            <div key={idx} className="flex items-start gap-6 group">
              <div className="relative shrink-0">
                <div
                  className={`w-16 h-16 ${f.iconBg} rounded-2xl flex items-center justify-center ${f.iconColor} text-3xl transition-transform group-hover:scale-110`}
                >
                  <i className={`fas ${f.icon}`}></i>
                </div>
                {f.badgeIcon && (
                  <div
                    className={`absolute -bottom-1 -right-1 w-6 h-6 ${f.badgeBg} rounded-full flex items-center justify-center text-white text-[10px] shadow-md`}
                  >
                    <i className={`fas ${f.badgeIcon}`}></i>
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900">{f.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
        <button
  onClick={() => {
    const el = document.getElementById("consultation-form");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }}
  className="bg-solar-primary hover:bg-rose-600 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all shadow-lg shadow-rose-200"
>
  Know More
</button>
        </div>
      </div>
    </section>

    {/* Parallax Section */}
    <section
      className="relative h-[60vh] md:h-[70vh] bg-fixed bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: `url(${Home2})`,
      }}
    >
      <div className="absolute inset-0 bg-solar-deep/60 backdrop-blur-[2px]"></div>
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl space-y-6 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
            Powering Homes <br />
            <span className="text-solar-primary">Across India</span>
          </h2>
          <div className="w-24 h-1 bg-solar-primary mx-auto"></div>
          <p className="text-white/80 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
            Join thousands of homeowners who have already made the switch to
            clean, affordable solar energy with Wattex.
          </p>
          <div className="flex flex-wrap justify-center gap-12 pt-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white">
                100+
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mt-2">
                Happy Homes
              </div>
            </div>
            <div className="w-px h-16 bg-white/20 hidden md:block"></div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white">
                1.5MW+
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mt-2">
                Installed Capacity
              </div>
            </div>
            <div className="w-px h-16 bg-white/20 hidden md:block"></div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white">
                25 Yrs
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mt-2">
                Panel Warranty
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

   

    
    
    
    <SolarProcessSection />

    {/* FAQ Section */}
    <SolarFaqSection />
  </div>
);

export default ResidentialSolar;