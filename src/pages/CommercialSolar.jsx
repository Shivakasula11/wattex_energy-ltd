import React from "react";
import { useNavigate } from "react-router-dom";
import SEOHead from "../components/seo/SEOHead";
import CommercialFaqSection from "../components/sections/CommercialFaqSection";
import commercial from "../assets/commercial1.jpg";
import Commercial2 from "../assets/commercial2.jpg";
import commercial3 from "../assets/commercial3.jpg";
import home2 from "../assets/home2.jpg";
import review1 from "../assets/review1.png";
import review2 from "../assets/review2.png";
import review3 from "../assets/review3.png";

const CommercialSolar = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in bg-white">
      <SEOHead
        title="Commercial & Industrial Solar — Cut 80% Energy Costs"
        description="Industrial-grade solar for factories, offices & warehouses in Hyderabad. Cut electricity costs by 80%. Accelerated depreciation benefits. Free site survey by Wattex."
        path="/commercial"
        keywords="commercial solar Hyderabad, industrial solar panels, business solar installation, solar for factory, office solar system, commercial rooftop solar Telangana"
        image="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1200"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Commercial & Industrial Solar Installation",
            provider: {
              "@type": "Organization",
              name: "Wattex Energy",
              url: "https://wattexenergy.com",
            },
            description:
              "Industrial-grade solar infrastructure for businesses, factories, and commercial buildings with up to 80% energy cost reduction.",
            areaServed: { "@type": "State", name: "Telangana" },
            serviceType: "Commercial Solar Installation",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What system size does my business need?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A typical commercial setup ranges from 50kW to 500kW depending on consumption, roof area, and energy goals. Wattex conducts a free site survey to recommend optimal size.",
                },
              },
              {
                "@type": "Question",
                name: "What are the tax benefits for businesses going solar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Commercial solar qualifies for 40% accelerated depreciation in Year 1 plus GST input credit. Combined, these can reduce effective system cost by up to 50%.",
                },
              },
              {
                "@type": "Question",
                name: "What is the typical ROI for commercial solar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Commercial solar achieves 33-48% annual returns with 2-3 year payback. A typical 100kW system generates cumulative savings of ₹2-5 Crore over its 25-year lifespan.",
                },
              },
              {
                "@type": "Question",
                name: "Are financing options available for businesses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes — outright purchase, EMI plans, OPEX/PPA models (zero upfront cost), and lease arrangements available. Our advisors help choose the best fit for your cash flow.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a commercial installation take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A 50-200kW installation takes 3-5 weeks from approval to commissioning. Larger 500kW+ projects may take 5-10 weeks including structural analysis and grid coordination.",
                },
              },
            ],
          },
        ]}
      />
      {/* Hero */}
      <section className="relative h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            loading="lazy"
            src={commercial}
            className="w-full h-full object-cover"
            alt="Commercial solar panel installation on factory rooftop in Hyderabad"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-solar-deep via-solar-deep/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 ">
          <div className="max-w-4xl space-y-4 sm:space-y-8">
            <h1 className="text-5xl sm:text-5xl md:text-7xl font-black text-white font-heading leading-tight tracking-tighter uppercase">
              Future-Proof Your
              <br />
              <span className="block mt-2 sm:mt-4 text-solar-primary">
                Enterprise Energy
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl font-medium leading-relaxed mt-2 sm:mt-4">
              Industrial-grade solar infrastructure engineered for
              high-performance yields and radical cost reduction.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-32 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="space-y-8 sm:space-y-12">
              <div className="space-y-4">
                <span className="text-solar-primary font-black uppercase tracking-widest text-xs">
                  Strategic Advantages
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-solar-deep tracking-tight">
                  The Business Case for Solar
                </h2>
                <p className="text-slate-500 text-base sm:text-xl leading-relaxed font-medium">
                  For commercial entities, solar is not just an environmental
                  choice—it's a high-yield financial investment with predictable
                  returns.
                </p>
              </div>
              <div className="grid gap-6 sm:gap-8">
                {[
                  {
                    title: "Accelerated Depreciation",
                    desc: "Benefit from massive tax savings in the first year of installation through commercial depreciation laws.",
                    icon: "fa-chart-line",
                  },
                  {
                    title: "Operational Cost Reduction",
                    desc: "Hedge against rising electricity tariffs with a fixed energy cost for the next 25 years.",
                    icon: "fa-coins",
                  },
                  {
                    title: "ESG & Corporate Identity",
                    desc: "Meet global sustainability standards and enhance your brand value with visible green energy.",
                    icon: "fa-leaf",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 sm:gap-6 group">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white shadow-xl rounded-2xl flex items-center justify-center text-solar-primary shrink-0 transition-transform group-hover:scale-110">
                      <i className={`fas ${item.icon} text-lg sm:text-xl`}></i>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg sm:text-xl font-bold text-solar-deep">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 font-medium leading-relaxed text-sm sm:text-base">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="rounded-[3rem] sm:rounded-[4rem] overflow-hidden shadow-4xl aspect-[4/5]">
                <img
                  loading="lazy"
                  src={Commercial2}
                  className="w-full h-full object-cover"
                  alt="Industrial-grade solar panels on warehouse roof by Wattex Energy"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[3rem] shadow-3xl max-w-xs space-y-4 hidden md:block">
                <div className="text-4xl font-black text-solar-primary">
                  40%
                </div>
                <p className="text-slate-600 font-bold uppercase tracking-widest text-[10px]">
                  Average First Year Tax Savings through depreciation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 sm:py-24 bg-solar-deep text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-solar-primary font-black uppercase tracking-[0.3em] text-[10px]">
              Proven Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 tracking-tight">
              Numbers That Define Trust
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {[
              {
                value: "50+",
                label: "Commercial Clients",
                icon: "fa-building",
              },
              {
                value: "₹3Cr+",
                label: "Energy Savings Delivered",
                icon: "fa-indian-rupee-sign",
              },
              {
                value: "1.5MW",
                label: "Installed Capacity",
                icon: "fa-solar-panel",
              },
              { value: "99.8%", label: "System Uptime", icon: "fa-signal" },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-2xl flex items-center justify-center text-solar-primary text-xl sm:text-2xl mx-auto mb-4 sm:mb-6 group-hover:bg-solar-primary group-hover:text-white transition-all duration-500">
                  <i className={`fas ${stat.icon}`}></i>
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
                  {stat.value}
                </div>
                <div className="text-white/40 font-bold uppercase tracking-widest text-[10px] mt-2 sm:mt-3">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 sm:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20 space-y-4">
            <span className="text-solar-primary font-black uppercase tracking-widest text-xs">
              Sector Expertise
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-5xl font-black text-solar-deep tracking-tight">
              Industries We Power
            </h2>
            <p className="text-slate-500 text-base sm:text-xl font-medium max-w-2xl mx-auto">
              Tailored solar solutions engineered for the unique energy demands
              of every industry.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: "fa-industry",
                name: "Manufacturing",
                desc: "Heavy-duty systems for factories & assembly lines",
                color: "bg-indigo-50 text-indigo-500",
              },
              {
                icon: "fa-hospital",
                name: "Healthcare",
                desc: "Uninterrupted power for hospitals & clinics",
                color: "bg-rose-50 text-rose-500",
              },
              {
                icon: "fa-hotel",
                name: "Hospitality",
                desc: "Resort & hotel energy independence",
                color: "bg-amber-50 text-amber-500",
              },
              {
                icon: "fa-store",
                name: "Retail & Malls",
                desc: "Large rooftop commercial installations",
                color: "bg-sky-50 text-sky-500",
              },
              {
                icon: "fa-building-columns",
                name: "Real Estate",
                desc: "Builder group tie-ups & township solar",
                color: "bg-emerald-50 text-emerald-500",
              },
              {
                icon: "fa-wheat-awn",
                name: "Agri-Business",
                desc: "Cold storage, processing & farm solar",
                color: "bg-lime-50 text-lime-500",
              },
              {
                icon: "fa-warehouse",
                name: "Warehousing",
                desc: "Logistics hub & distribution centres",
                color: "bg-purple-50 text-purple-500",
              },
              {
                icon: "fa-graduation-cap",
                name: "Education",
                desc: "Campus-wide solar grids for institutions",
                color: "bg-blue-50 text-blue-500",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-4 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center"
              >
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 ${item.color} rounded-2xl flex items-center justify-center text-xl sm:text-2xl mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}
                >
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3 className="text-sm sm:text-lg font-black text-solar-deep mb-1 sm:mb-2">
                  {item.name}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed hidden sm:block">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <section
        className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] bg-center bg-cover overflow-hidden"
        style={{ backgroundImage: `url(${commercial3})` }}
      >
        <div className="absolute inset-0 bg-solar-deep/70 backdrop-blur-[2px]"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4 sm:px-6">
          <div className="max-w-4xl space-y-4 sm:space-y-6 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              Powering India's <br />
              <span className="text-solar-primary">Industrial Revolution</span>
            </h2>
            <div className="w-24 h-1 bg-solar-primary mx-auto"></div>
            <p className="text-white/80 text-base sm:text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
              From 50kW rooftops to 50MW ground-mount plants — we engineer solar
              at every scale.
            </p>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 pt-4 sm:pt-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-4xl font-black text-white">
                  5+
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mt-2">
                  States Covered
                </div>
              </div>
              <div className="w-px h-16 bg-white/20 hidden md:block"></div>
              <div className="text-center">
                <div className="text-2xl sm:text-4xl md:text-4xl font-black text-white">
                  50kW–50MW
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mt-2">
                  System Range
                </div>
              </div>
              <div className="w-px h-16 bg-white/20 hidden md:block"></div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-4xl font-black text-white">
                  1-3 Weeks
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mt-2">
                  Avg. Installation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-32 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-24 space-y-4">
            <span className="text-solar-primary font-black uppercase tracking-widest text-xs">
              Seamless Process
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-5xl font-black text-solar-deep tracking-tight">
              From Inquiry to Energy in 4 Steps
            </h2>
            <p className="text-slate-500 text-base sm:text-xl font-medium max-w-2xl mx-auto">
              Our streamlined process makes the transition to solar effortless
              for your business.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute top-16 left-[10%] right-[10%] h-[2px] bg-slate-200 hidden lg:block"></div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
              {[
                {
                  num: "01",
                  icon: "fa-clipboard-check",
                  title: "Site Survey",
                  desc: "Free technical audit of your facility by our certified engineers to assess roof area, load capacity, and solar potential.",
                  color: "border-solar-primary",
                },
                {
                  num: "02",
                  icon: "fa-drafting-compass",
                  title: "Custom Design",
                  desc: "A tailored solar system blueprint engineered specifically for your energy profile, roof layout, and business goals.",
                  color: "border-solar-sky",
                },
                {
                  num: "03",
                  icon: "fa-helmet-safety",
                  title: "Installation",
                  desc: "Professional deployment by our expert crew in 4-8 weeks with minimal disruption to your daily operations.",
                  color: "border-amber-400",
                },
                {
                  num: "04",
                  icon: "fa-plug-circle-check",
                  title: "Grid Connect",
                  desc: "Complete net metering setup, DISCOM coordination, and system commissioning. You start saving from day one.",
                  color: "border-emerald-400",
                },
              ].map((step, i) => (
                <div key={i} className="relative text-center group">
                  <div
                    className={`w-20 h-20 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-8 rounded-full bg-white border-4 ${step.color} shadow-xl flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <i
                      className={`fas ${step.icon} text-2xl sm:text-4xl text-solar-deep group-hover:text-solar-primary transition-colors`}
                    ></i>
                  </div>
                  <div className="text-solar-primary font-black text-xs sm:text-sm tracking-widest mb-2 sm:mb-3">
                    {step.num}
                  </div>
                  <h3 className="text-base sm:text-xl font-black text-solar-deep mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed hidden sm:block">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Snapshot */}
      <section className="py-16 sm:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="space-y-8 sm:space-y-12">
              <div className="space-y-4">
                <span className="text-solar-primary font-black uppercase tracking-widest text-xs">
                  Financial Impact
                </span>
                <h2 className="text-3xl sm:text-5xl md:text-5xl font-black text-solar-deep tracking-tight">
                  ROI That Speaks <br />
                  for Itself
                </h2>
                <p className="text-slate-500 text-base sm:text-xl leading-relaxed font-medium">
                  See how a typical 100kW commercial installation pays for
                  itself and generates substantial returns over its 25-year
                  lifespan.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    label: "Payback Period",
                    value: "2.5 Years",
                    icon: "fa-clock-rotate-left",
                    accent: true,
                  },
                  {
                    label: "Annual Savings",
                    value: "₹15 Lakhs",
                    icon: "fa-piggy-bank",
                    accent: true,
                  },
                  {
                    label: "25-Year Returns",
                    value: "₹4.5 Crores",
                    icon: "fa-chart-line",
                    accent: false,
                  },
                  {
                    label: "Carbon Offset",
                    value: "125 Tons/yr",
                    icon: "fa-leaf",
                    accent: false,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border ${item.accent ? "bg-rose-50/50 border-rose-100" : "bg-slate-50 border-slate-100"} group hover:shadow-xl transition-all duration-500`}
                  >
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-base sm:text-lg mb-3 sm:mb-4 ${item.accent ? "bg-solar-primary/10 text-solar-primary" : "bg-slate-100 text-slate-400"}`}
                    >
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <div
                      className={`text-xl sm:text-3xl font-black tracking-tight mb-1 ${item.accent ? "text-solar-primary" : "text-solar-deep"}`}
                    >
                      {item.value}
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ROI Dashboard */}
            <style>{`
              @keyframes ringDraw { from { stroke-dashoffset: 690; } to { stroke-dashoffset: 0; } }
              @keyframes ringDrawSmall { from { stroke-dashoffset: 553; } to { stroke-dashoffset: 0; } }
              @keyframes floatUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
              @keyframes floatBadge { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
              @keyframes scaleIn { from { opacity: 0; transform: scale(0.7); } to { opacity: 1; transform: scale(1); } }
              @keyframes glowPulse { 0%,100% { opacity: 0.1; } 50% { opacity: 0.25; } }
              .ring-anim { animation: ringDraw 2s ease-out both; }
              .ring-anim-small { animation: ringDrawSmall 2s ease-out 0.4s both; }
              .float-up-1 { animation: floatUp 0.6s ease-out 0.8s both; }
              .float-up-2 { animation: floatUp 0.6s ease-out 1s both; }
              .float-up-3 { animation: floatUp 0.6s ease-out 1.2s both; }
              .float-badge { animation: floatBadge 4s ease-in-out infinite; }
              .float-badge-2 { animation: floatBadge 4s ease-in-out 1s infinite; }
              .float-badge-3 { animation: floatBadge 4s ease-in-out 2s infinite; }
              .scale-in-badge { animation: scaleIn 0.5s ease-out 1.4s both; }
              .center-anim { animation: floatUp 0.8s ease-out 0.6s both; }
              .glow-pulse { animation: glowPulse 3s ease-in-out infinite; }
            `}</style>
            <div className="relative mt-6 lg:mt-0">
              <div className="bg-solar-deep rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-8 lg:p-12 shadow-2xl overflow-hidden relative">
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-solar-primary/10 blur-[80px] rounded-full glow-pulse"></div>
                <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-sky-500/8 blur-[60px] rounded-full"></div>

                <div className="flex items-center justify-between mb-6 sm:mb-10 relative z-10">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">
                      Financial Performance
                    </div>
                    <div className="text-white font-extrabold text-base sm:text-xl">
                      100kW Commercial System
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2 sm:px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-bold text-emerald-400 hidden sm:inline">
                      Live Tracking
                    </span>
                  </div>
                </div>

                {/* Ring chart — badges laid out in a row on mobile, absolute on desktop */}
                <div className="flex flex-col items-center gap-4 sm:gap-0">
                  <div className="relative flex items-center justify-center">
                    <svg
                      viewBox="0 0 260 260"
                      className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] transform -rotate-90"
                    >
                      <circle
                        cx="130"
                        cy="130"
                        r="110"
                        fill="none"
                        stroke="rgba(255,255,255,0.04)"
                        strokeWidth="16"
                      />
                      <circle
                        cx="130"
                        cy="130"
                        r="110"
                        fill="none"
                        stroke="url(#savingsGrad)"
                        strokeWidth="16"
                        strokeLinecap="round"
                        className="ring-anim"
                        strokeDasharray={
                          String(2 * Math.PI * 110 * 0.86) +
                          " " +
                          String(2 * Math.PI * 110 * 0.14)
                        }
                      />
                      <circle
                        cx="130"
                        cy="130"
                        r="88"
                        fill="none"
                        stroke="rgba(255,255,255,0.03)"
                        strokeWidth="10"
                      />
                      <circle
                        cx="130"
                        cy="130"
                        r="88"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="10"
                        strokeLinecap="round"
                        className="ring-anim-small"
                        strokeDasharray={
                          String(2 * Math.PI * 88 * 0.14) +
                          " " +
                          String(2 * Math.PI * 88 * 0.86)
                        }
                      />
                      <defs>
                        <linearGradient
                          id="savingsGrad"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#f43f5e" />
                          <stop offset="50%" stopColor="#fb7185" />
                          <stop offset="100%" stopColor="#f43f5e" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center center-anim">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">
                        Total Returns
                      </div>
                      <div className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-none mb-1">
                        &#8377;4.5
                        <span className="text-lg sm:text-2xl text-white/60 ml-1">
                          Cr
                        </span>
                      </div>
                      <div className="text-[10px] font-bold text-solar-primary">
                        Over 30 Years
                      </div>
                    </div>
                  </div>

                  {/* Badges — row on mobile, hidden on sm+ (shown as absolute below) */}
                  <div className="flex gap-3 justify-center sm:hidden w-full">
                    <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-center flex-1">
                      <div className="text-base font-black text-white leading-none">
                        &#8377;15L
                      </div>
                      <div className="text-[8px] font-bold text-white/30 uppercase tracking-wider mt-1">
                        Per Year
                      </div>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl px-4 py-3 text-center flex-1">
                      <div className="text-base font-black text-emerald-400 leading-none">
                        2.5Yrs
                      </div>
                      <div className="text-[8px] font-bold text-emerald-400/50 uppercase tracking-wider mt-1">
                        Payback
                      </div>
                    </div>
                    <div className="bg-sky-500/10 border border-sky-500/20 rounded-2xl px-4 py-3 text-center flex-1">
                      <div className="text-base font-black text-sky-400 leading-none">
                        125T
                      </div>
                      <div className="text-[8px] font-bold text-sky-400/50 uppercase tracking-wider mt-1">
                        CO2/Year
                      </div>
                    </div>
                  </div>
                </div>

                {/* Absolute badges — visible only on sm+ */}
                <div className="hidden sm:block">
                  <div className="absolute top-[30%] right-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-3 text-center float-up-1 float-badge">
                    <div className="text-lg font-black text-white leading-none">
                      &#8377;15L
                    </div>
                    <div className="text-[8px] font-bold text-white/30 uppercase tracking-wider mt-1">
                      Per Year
                    </div>
                  </div>
                  <div className="absolute top-[55%] left-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl px-4 py-3 text-center float-up-2 float-badge-2">
                    <div className="text-lg font-black text-emerald-400 leading-none">
                      2 Yrs
                    </div>
                    <div className="text-[8px] font-bold text-emerald-400/50 uppercase tracking-wider mt-1">
                      Payback
                    </div>
                  </div>
                  <div className="absolute top-[55%] right-4 bg-sky-500/10 border border-sky-500/20 rounded-2xl px-4 py-3 text-center float-up-3 float-badge-3">
                    <div className="text-lg font-black text-sky-400 leading-none">
                      125T
                    </div>
                    <div className="text-[8px] font-bold text-sky-400/50 uppercase tracking-wider mt-1">
                      CO2/Year
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5 relative z-10">
                  <div className="text-[9px] font-bold uppercase tracking-widest text-white/20 mb-4">
                    Savings Milestones
                  </div>

                  <div className="grid grid-cols-3 gap-1 sm:flex sm:gap-3 sm:overflow-x-auto pb-1">
                    {[
                      { yr: "Y1", amt: "₹15L", done: true },
                      { yr: "Y5", amt: "₹75L", done: true },
                      { yr: "Y10", amt: "₹1.5Cr", done: true },
                      { yr: "Y15", amt: "₹2.25Cr", done: false },
                      { yr: "Y25", amt: "₹3.75Cr", done: false },
                      { yr: "Y30", amt: "₹4.5Cr", done: false },
                    ].map((m, i) => (
                      <div
                        key={i}
                        className={`rounded-xl p-2 sm:p-3 ... text-center border min-w-[52px] ${m.done ? "bg-solar-primary/5 border-solar-primary/15" : "bg-white/[0.02] border-white/5"}`}
                      >
                        <div
                          className={`text-xs sm:text-sm font-black ${m.done ? "text-solar-primary" : "text-white/40"}`}
                        >
                          {m.amt}
                        </div>
                        <div
                          className={`text-[8px] font-bold uppercase tracking-wider mt-0.5 ${m.done ? "text-solar-primary/50" : "text-white/20"}`}
                        >
                          {m.yr}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-solar-primary shrink-0"></div>
                    <span className="text-[10px] font-bold text-white/30">
                      Cumulative Savings
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 shrink-0"></div>
                    <span className="text-[10px] font-bold text-white/30">
                      Payback Period
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-solar-primary p-7 rounded-[2rem] shadow-2xl shadow-rose-500/30 hidden lg:block scale-in-badge">
                <div className="text-xl font-black text-white mb-1">
                  UPTO-20x
                </div>
                <p className="text-white/70 font-bold uppercase tracking-widest text-[8px]">
                  Return on
                  <br />
                  Investment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-24 space-y-4">
            <span className="text-solar-primary font-black uppercase tracking-widest text-xs">
              Our Projects
            </span>
            <h2 className="text-2xl sm:text-5xl font-black text-solar-deep tracking-tight">
              Commercial Landmarks
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                img: Commercial2,
                title: "Tech Park Solar Carport",
                loc: "Rangareddy, India",
                size: "2.5 MW",
              },
              {
                img: home2,
                title: "Textile Factory Rooftop",
                loc: "Hindupuram, India",
                size: "1.2 MW",
              },
              {
                img: commercial3,
                title: "Cold Storage Hybrid System",
                loc: "Bimavaram, India",
                size: "800 kW",
              },
            ].map((proj, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="rounded-[2rem] sm:rounded-[3rem] overflow-hidden aspect-[4/3] mb-4 sm:mb-8 shadow-2xl relative">
                  <img
                    loading="lazy"
                    src={proj.img}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={proj.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-solar-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 sm:p-10">
                    <div className="text-white space-y-1">
                      <p className="font-black uppercase tracking-widest text-[10px] text-solar-sky">
                        {proj.size}
                      </p>
                      <p className="font-bold text-base sm:text-lg">
                        {proj.loc}
                      </p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-solar-deep group-hover:text-solar-primary transition-colors">
                  {proj.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 sm:py-32 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20 space-y-4">
            <span className="text-solar-primary font-black uppercase tracking-widest text-xs">
              Trusted by Industry Leaders
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-solar-deep tracking-tight">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Rajesh Krishnamurthy",
                role: "COO, TechPark Solutions",
                quote:
                  "ROI exceeded our projections by 15%. The Wattex team delivered a world-class 2.5MW installation that transformed our energy costs completely.",
                image: review1,
                rating: 5,
              },
              {
                name: "Sunita Menon",
                role: "Director, GreenTextiles Ltd",
                quote:
                  "Energy costs dropped 70% in year one. Their engineering precision and project management is unmatched in the industry.",
                image: review2,
                rating: 5,
              },
              {
                name: "Amit Patel",
                role: "CFO, ColdChain Corporation",
                quote:
                  "Best infrastructure investment we have made in a decade. The hybrid system handles our 24/7 cold storage needs flawlessly.",
                image: review3,
                rating: 5,
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white p-6 sm:p-10 lg:p-12 rounded-[2rem] sm:rounded-[3rem] border border-slate-100 shadow-xl group hover:shadow-2xl transition-all duration-500 relative"
              >
                <div className="absolute top-6 right-8 text-slate-100 group-hover:text-solar-primary/10 transition-colors">
                  <i className="fas fa-quote-right text-4xl sm:text-5xl"></i>
                </div>
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <img
                    loading="lazy"
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-cover border-2 border-white shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-black text-solar-deep text-sm sm:text-base">
                      {t.name}
                    </h4>
                    <p className="text-solar-primary font-bold uppercase tracking-widest text-[9px]">
                      {t.role}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 text-solar-primary mb-4 sm:mb-6">
                  {[...Array(t.rating)].map((_, j) => (
                    <i key={j} className="fas fa-star text-xs"></i>
                  ))}
                </div>
                <p className="text-slate-600 text-base font-medium italic leading-relaxed relative z-10">
                  "{t.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-solar-deep">
        <div className="container mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Ready to Transition Your <br />{" "}
            <span className="text-solar-sky">Corporate Infrastructure?</span>
          </h2>
          <p className="text-white/60 text-base sm:text-xl max-w-2xl mx-auto font-medium">
            Schedule a technical feasibility study for your commercial property
            today.
          </p>
        </div>
      </section>

      {/* Commercial FAQ */}
      <CommercialFaqSection />
    </div>
  );
};

export default CommercialSolar;
