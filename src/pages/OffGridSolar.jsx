import React from "react";

import SEOHead from "../components/seo/SEOHead";
import OffGridFaqSection from "../components/sections/OffGridFaqSection";
import commercial2 from "../assets/commercial2.jpg";
import remote from "../assets/remote.png";
import telecom from "../assets/telecom.png";
import Resorts from "../assets/Resorts.png";
import agriculture from "../assets/agriculture.png";
import remoteinfra from "../assets/remoteinfra.png";
import EcoResorts from "../assets/EcoResorts.png";
import Battery from "../assets/Battery-tech.png";
import housingfaq from "../assets/housingfaq.png";
const OffGridSolar = () => {

  

  return (
    <div className="bg-white text-[#0F172A]">
      <SEOHead
        title="Off-Grid Solar System — 100% Energy Independence"
        description="Complete energy independence with battery-backed off-grid solar. Ideal for farmhouses, remote locations & unreliable grid areas. Off-grid solar installation by Wattex Hyderabad."
        path="/off-grid"
        keywords="off-grid solar Hyderabad, solar battery system India, energy independence, off grid solar price, solar for farmhouse, remote solar power, battery backup solar system"
        image={commercial2}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Off-Grid Solar System Installation",
            provider: {
              "@type": "Organization",
              name: "Wattex Energy",
              url: "https://wattexenergy.com",
            },
            description:
              "Complete off-grid solar solutions with battery storage for 100% energy independence in remote and unreliable grid areas.",
            areaServed: { "@type": "State", name: "Telangana" },
            serviceType: "Off-Grid Solar Installation",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How many batteries do I need for off-grid solar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A typical home using 8-10 units/day needs a 5kWh battery bank for 8-hour backup, or 10kWh for 16+ hours. Wattex engineers calculate exact requirements during free site assessment.",
                },
              },
              {
                "@type": "Question",
                name: "Can I run air conditioning on off-grid solar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! With a 3-5kW system and adequate LFP battery bank, you can comfortably run 1-2 ACs. Energy-efficient inverter ACs are recommended for optimal performance.",
                },
              },
              {
                "@type": "Question",
                name: "How is off-grid different from on-grid solar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Off-grid operates independently with batteries — zero grid dependency. On-grid connects to utility grid with no batteries, using net metering. Off-grid costs more but provides 24/7 power anywhere.",
                },
              },
              {
                "@type": "Question",
                name: "What happens on cloudy or rainy days with off-grid?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Modern panels produce 25-40% output on overcast days. Battery bank stores excess from sunny days as buffer. Enterprise systems can integrate diesel generator as automatic backup.",
                },
              },
            ],
          },
        ]}
      />

      {/* 1. HERO — DARK */}
      <section className="relative h-[100vh] flex items-center overflow-hidden bg-[#0F172A] text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?auto=format&fit=crop&q=80&w=1920"
            className="w-full h-full object-cover"
            alt="Off-grid solar system with battery storage for energy independence"
          />
        </div>
        {/* <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent"></div> */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl space-y-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-[#E11D48]"></div>
              <span className="text-[#E11D48] font-black uppercase tracking-[0.4em] text-[10px]">
                Autonomous Energy Systems
              </span>
            </div>
            <h1 className="text-2xl md:text-[6rem] font-black font-heading leading-[0.85] tracking-tighter uppercase">
              Pure <br />
              <span className="text-[#E11D48]">Autonomy</span>.
            </h1>
            <p className="text-white/50 text-xl md:text-2xl max-w-2xl font-light leading-tight">
              Engineered for the most demanding remote environments. Complete
              energy independence without compromise.
            </p>
            <div className="flex flex-wrap gap-8 pt-8">
              {[
                { val: "100%", label: "Grid Independent" },
                { val: "24/7", label: "Power Availability" },
                { val: "LiFePO4", label: "Storage Tech" },
              ].map((stat, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div className="w-px h-16 bg-white/10"></div>}
                  <div className="space-y-2">
                    <div className="text-4xl font-black text-white">
                      {stat.val}
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/30">
                      {stat.label}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-white/20"></i>
        </div>
      </section>

      {/* 2. SYSTEM ARCHITECTURE — WHITE */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24">
            <div className="space-y-16">
              <div className="space-y-6">
                <h2 className="text-4xl font-black tracking-tight uppercase text-[#0F172A]">
                  System Architecture
                </h2>
                <p className="text-[#0F172A]/50 text-lg leading-relaxed max-w-xl">
                  Our off-grid solutions are built on a modular, redundant
                  architecture that ensures power delivery even in the event of
                  component failure.
                </p>
              </div>
              <div className="grid gap-12">
                {[
                  {
                    title: "Smart Inverter/Charger",
                    desc: "Industrial-grade pure sine wave inverters with integrated MPPT charge controllers for maximum efficiency.",
                    icon: "fa-microchip",
                  },
                  {
                    title: "High-Density Storage",
                    desc: "Scalable Lithium Iron Phosphate (LFP) battery banks with 10,000+ cycle life and advanced BMS.",
                    icon: "fa-battery-full",
                  },
                  {
                    title: "Remote Telemetry",
                    desc: "Satellite-linked monitoring systems providing real-time performance data and predictive maintenance alerts.",
                    icon: "fa-satellite-dish",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-16 h-16 bg-[#0F172A]/5 border border-[#0F172A]/10 rounded-2xl flex items-center justify-center text-[#E11D48] text-2xl shrink-0 group-hover:bg-[#E11D48] group-hover:text-white transition-all duration-500">
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold uppercase tracking-tight text-[#0F172A]">
                        {item.title}
                      </h4>
                      <p className="text-[#0F172A]/50 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-[#0F172A] rounded-[4rem] p-12 flex flex-col justify-between overflow-hidden group text-white">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#E11D48]/10 blur-[100px] rounded-full group-hover:bg-[#E11D48]/20 transition-all duration-1000"></div>
                <div className="relative z-10 space-y-8">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="text-[10px] font-black uppercase tracking-widest text-white/30">
                        System Status
                      </div>
                      <div className="text-2xl font-black text-emerald-500 flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        OPTIMAL
                      </div>
                    </div>
                    <i className="fas fa-bolt text-[#E11D48] text-3xl"></i>
                  </div>
                  <div className="space-y-6">
                    {[
                      { label: "Battery Charge", value: "94%", width: "94%" },
                      { label: "Solar Yield", value: "8.4 kW", width: "75%" },
                      { label: "Current Load", value: "2.1 kW", width: "25%" },
                    ].map((bar, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/30">
                          <span>{bar.label}</span>
                          <span>{bar.value}</span>
                        </div>
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#E11D48] rounded-full"
                            style={{ width: bar.width }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative z-10 pt-12">
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-4">
                    Performance History
                  </div>
                  <div className="flex items-end gap-1 h-24">
                    {[
                      40, 60, 45, 80, 95, 70, 50, 65, 85, 100, 90, 75, 60, 80,
                      95,
                    ].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-[#E11D48]/20 rounded-t-sm hover:bg-[#E11D48] transition-all cursor-pointer"
                        style={{ height: `${h}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO NEEDS OFF-GRID — LIGHT GRAY */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <span className="text-[#E11D48] font-black uppercase tracking-widest text-xs">
              Is Off-Grid Right For You?
            </span>
            <h2 className="text-5xl md:text-4xl font-black tracking-tight text-[#0F172A]">
              Who Needs Off-Grid Solar
            </h2>
            <p className="text-[#0F172A]/50 text-xl max-w-2xl mx-auto font-medium">
              If any of these describe your situation, off-grid is the way to go
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-8xl mx-auto">
            {[
              {
                icon: "fa-mountain-sun",
                title: "Remote Homes",
                desc: "Farmhouses, hill stations, islands, and rural areas with no grid access or unreliable power supply.",
                img: remote,
                accent: "bg-[#E11D48]",
                iconBg: "bg-[#E11D48]/10",
                iconColor: "text-[#E11D48]",
              },
              {
                icon: "fa-tower-cell",
                title: "Telecom Towers",
                desc: "Cell towers, relay stations, and communication infrastructure in remote locations across rural India.",
                img: telecom,
                accent: "bg-amber-500",
                iconBg: "bg-amber-500/10",
                iconColor: "text-amber-500",
              },
              {
                icon: "fa-campground",
                title: "Eco Resorts",
                desc: "Luxury stays in forests, mountains, and beaches — 5-star comfort without any environmental impact.",
                img: Resorts,
                accent: "bg-emerald-500",
                iconBg: "bg-emerald-500/10",
                iconColor: "text-emerald-500",
              },
              {
                icon: "fa-tractor",
                title: "Agriculture",
                desc: "Solar pumps, drip irrigation, cold storage for perishables, and dairy processing units in villages.",
                img: agriculture,
                accent: "bg-sky-500",
                iconBg: "bg-sky-500/10",
                iconColor: "text-sky-500",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl border border-[#0F172A]/5 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative flex flex-col"
              >
                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${item.accent} z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    loading="lazy"
                    src={item.img}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                  <div
                    className={`absolute top-4 left-4 w-11 h-11 ${item.iconBg} backdrop-blur-sm rounded-xl flex items-center justify-center ${item.iconColor} text-lg border border-white/30 shadow-sm`}
                  >
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-3 flex flex-col flex-1 gap-3">
                  <h3 className="text-lg font-black text-[#0F172A] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#0F172A]/50 text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-auto pt-4 border-t border-[#0F172A]/5">
                    <span
                      className={`text-xs font-bold ${item.iconColor} uppercase tracking-widest group-hover:tracking-[0.2em] transition-all duration-300`}
                    >
                      Off-Grid Use Case{" "}
                      <i className="fas fa-arrow-right ml-1 text-[10px]"></i>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OFF-GRID vs ON-GRID — WHITE */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <span className="text-[#E11D48] font-black uppercase tracking-widest text-xs">
              Understand The Difference
            </span>
            <h2 className="text-5xl md:text-4xl font-black tracking-tight text-[#0F172A]">
              Off-Grid vs On-Grid
            </h2>
            <p className="text-[#0F172A]/50 text-xl max-w-2xl mx-auto font-medium">
              Not sure which is right? Here's a clear comparison
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-0 rounded-[2.5rem] overflow-hidden border border-[#0F172A]/10 shadow-xl">
              <div className="bg-gray-50 p-6 text-center border-b border-[#0F172A]/10">
                <span className="text-[#0F172A]/40 font-black uppercase tracking-widest text-[10px]">
                  Feature
                </span>
              </div>
              <div className="bg-[#E11D48]/5 p-6 text-center border-b border-[#0F172A]/10">
                <div className="flex items-center justify-center gap-2">
                  <i className="fas fa-battery-full text-[#E11D48]"></i>
                  <span className="text-[#E11D48] font-black uppercase tracking-widest text-[10px]">
                    Off-Grid
                  </span>
                </div>
              </div>
              <div className="bg-sky-50 p-6 text-center border-b border-[#0F172A]/10">
                <div className="flex items-center justify-center gap-2">
                  <i className="fas fa-bolt text-sky-500"></i>
                  <span className="text-sky-600 font-black uppercase tracking-widest text-[10px]">
                    On-Grid
                  </span>
                </div>
              </div>
              {[
                ["Grid Connection", "Not needed", "Required"],
                ["Battery Storage", "Required (LiFePO4)", "Not needed"],
                ["Power at Night", "From batteries", "From grid"],
                ["During Power Cuts", "Unaffected ✅", "System shuts down"],
                ["Net Metering", "Not applicable", "Yes — sell excess ✅"],
                ["Upfront Cost", "Higher (batteries)", "Lower ✅"],
                ["Best For", "Remote, no-grid areas", "Urban, reliable grid"],
                [
                  "Maintenance",
                  "Battery + panel checks",
                  "Panel cleaning only ✅",
                ],
              ].map((row, i) => (
                <React.Fragment key={i}>
                  <div
                    className={`p-5 border-b border-[#0F172A]/5 ${i % 2 === 0 ? "bg-gray-50/50" : "bg-white"}`}
                  >
                    <span className="text-[#0F172A]/60 font-bold text-sm">
                      {row[0]}
                    </span>
                  </div>
                  <div
                    className={`p-5 border-b border-[#0F172A]/5 text-center ${i % 2 === 0 ? "bg-[#E11D48]/[0.02]" : "bg-white"}`}
                  >
                    <span className="text-[#0F172A] font-bold text-sm">
                      {row[1]}
                    </span>
                  </div>
                  <div
                    className={`p-5 border-b border-[#0F172A]/5 text-center ${i % 2 === 0 ? "bg-sky-50/50" : "bg-white"}`}
                  >
                    <span className="text-[#0F172A] font-bold text-sm">
                      {row[2]}
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. OFF-GRID PACKAGES — LIGHT GRAY */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <span className="text-[#E11D48] font-black uppercase tracking-widest text-xs">
              Choose Your System
            </span>
            <h2 className="text-5xl md:text-4xl font-black tracking-tight text-[#0F172A]">
              Off-Grid Packages
            </h2>
            <p className="text-[#0F172A]/50 text-xl max-w-2xl mx-auto font-medium">
              From basic home backup to industrial-grade autonomy
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 mx-auto items-stretch">
            {[
              {
                name: "Essential",
                range: "1–3 kW",
                price: "₹2.5–5 Lakhs",
                popular: false,
                icon: "fa-house",
                features: [
                  "Lights, fans, TV, fridge",
                  "4-8 hrs battery backup",
                  "Lead-acid / tubular batteries",
                  "Basic monitoring panel",
                ],
                best: "Small farmhouses, weekend homes",
              },
              {
                name: "Pro",
                range: "3–5 kW",
                price: "₹5–10 Lakhs",
                popular: true,
                icon: "fa-house-signal",
                features: [
                  "Full home including 1-2 ACs",
                  "8-12 hrs LiFePO4 backup",
                  "Lithium batteries (10,000 cycles)",
                  "Smart app + remote diagnostics",
                  "Auto-load management",
                ],
                best: "Full-time off-grid homes, resorts",
              },
              {
                name: "Enterprise",
                range: "5–50 kW+",
                price: "Custom Quote",
                popular: false,
                icon: "fa-industry",
                features: [
                  "Industrial / telecom grade",
                  "24hr LFP + DG hybrid option",
                  "Redundant architecture",
                  "Satellite telemetry monitoring",
                  "On-site maintenance contract",
                ],
                best: "Telecom, agriculture, large facilities",
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-[2.5rem] overflow-hidden relative transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.popular
                    ? "bg-[#0F172A] text-white lg:scale-105 shadow-2xl shadow-[#E11D48]/10 border border-[#E11D48]/20"
                    : "bg-white text-[#0F172A] border border-[#0F172A]/10 shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-6 bg-[#E11D48] text-white px-4 py-1 rounded-b-lg font-black uppercase tracking-widest text-[8px] z-10">
                    Most Popular
                  </div>
                )}
                <div className="p-10 space-y-8">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl ${
                        plan.popular
                          ? "bg-[#E11D48] text-white"
                          : "bg-[#E11D48]/10 text-[#E11D48]"
                      }`}
                    >
                      <i className={`fas ${plan.icon}`}></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black">{plan.name}</h3>
                      <p
                        className={`font-medium text-sm ${plan.popular ? "text-white/40" : "text-[#0F172A]/40"}`}
                      >
                        {plan.range}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {plan.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                            plan.popular ? "bg-[#E11D48]/20" : "bg-[#E11D48]/10"
                          }`}
                        >
                          <i className="fas fa-check text-[8px] text-[#E11D48]"></i>
                        </div>
                        <span
                          className={`text-sm font-medium ${plan.popular ? "text-white/60" : "text-[#0F172A]/60"}`}
                        >
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div
                    className={`pt-4 border-t ${plan.popular ? "border-white/10" : "border-[#0F172A]/10"}`}
                  >
                    <div
                      className={`text-[10px] font-black uppercase tracking-widest mb-2 ${plan.popular ? "text-white/20" : "text-[#0F172A]/30"}`}
                    >
                      Best For
                    </div>
                    <p
                      className={`text-sm font-medium ${plan.popular ? "text-white/50" : "text-[#0F172A]/50"}`}
                    >
                      {plan.best}
                    </p>
                  </div>
                  <div className="text-center pt-2">
                    <div
                      className={`text-3xl font-black mb-4 ${plan.popular ? "text-[#E11D48]" : "text-[#0F172A]"}`}
                    >
                      {plan.price}
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. USE CASES — DARK */}
      <section className="py-32 bg-[#0F172A] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 space-y-6">
            <span className="text-[#E11D48] font-black uppercase tracking-widest text-xs">
              Where Failure Isn't an Option
            </span>
            <h2 className="text-5xl md:text-5xl font-black uppercase tracking-tighter">
              Mission Critical
            </h2>
            <p className="text-white/40 text-xl max-w-2xl mx-auto">
              Where grid failure is not an option, Wattex Off-Grid systems
              deliver absolute reliability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Remote Infrastructure",
                desc: "Powering telecommunication towers, weather stations, and research outposts in extreme climates.",
                img: remoteinfra,
              },
              {
                title: "Agricultural Autonomy",
                desc: "Automated irrigation, livestock monitoring, and processing facilities far from utility lines.",
                img: agriculture,
              },
              {
                title: "Luxury Eco-Resorts",
                desc: "Providing 5-star energy comfort in pristine, untouched natural locations without environmental impact.",
                img: EcoResorts,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-white/10 hover:border-[#E11D48]/20 transition-all duration-500"
              >
                <img
                  loading="lazy"
                  src={item.img}
                  className="absolute inset-0 w-full h-full object-cover  group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 space-y-4">
                  <h3 className="text-3xl font-black uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/60 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BATTERY TECHNOLOGY — WHITE */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-[#E11D48] font-black uppercase tracking-widest text-xs">
                  The Heart of Off-Grid
                </span>
                <h2 className="text-5xl md:text-4xl font-black tracking-tight text-[#0F172A]">
                  Battery Technology
                  <br />
                  <span className="text-[#E11D48]">That Lasts</span>
                </h2>
                <p className="text-[#0F172A]/50 text-xl leading-relaxed font-medium">
                  Our LiFePO4 batteries offer 3x the lifespan of lead-acid with
                  zero maintenance and 95% round-trip efficiency.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    value: "10,000+",
                    label: "Cycle Life",
                    icon: "fa-rotate",
                    color: "text-[#E11D48]",
                  },
                  {
                    value: "15 Yrs",
                    label: "Warranty",
                    icon: "fa-shield-halved",
                    color: "text-emerald-500",
                  },
                  {
                    value: "95%",
                    label: "Round-trip Efficiency",
                    icon: "fa-bolt",
                    color: "text-amber-500",
                  },
                  {
                    value: "Zero",
                    label: "Maintenance",
                    icon: "fa-wrench",
                    color: "text-sky-500",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 border border-[#0F172A]/5 rounded-[2rem] p-8 text-center group hover:border-[#E11D48]/20 hover:shadow-lg transition-all duration-500"
                  >
                    <i
                      className={`fas ${stat.icon} ${stat.color} text-2xl mb-4 group-hover:scale-110 transition-transform inline-block`}
                    ></i>
                    <div className="text-3xl font-black text-[#0F172A] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[#0F172A]/40 font-bold text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 border border-[#0F172A]/5 rounded-2xl p-6">
                <div className="text-[10px] font-black uppercase tracking-widest text-[#0F172A]/30 mb-4">
                  LiFePO4 vs Lead-Acid
                </div>
                <div className="space-y-3">
                  {[
                    {
                      label: "Lifespan",
                      lfp: "10-15 years",
                      lead: "3-5 years",
                    },
                    { label: "Weight", lfp: "60% lighter", lead: "Heavy" },
                    {
                      label: "Maintenance",
                      lfp: "None",
                      lead: "Water top-ups",
                    },
                    {
                      label: "Temp Range",
                      lfp: "-20°C to 60°C",
                      lead: "10°C to 45°C",
                    },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-3 gap-4 py-2 border-b border-[#0F172A]/5 last:border-0"
                    >
                      <span className="text-[#0F172A]/40 text-xs font-bold">
                        {row.label}
                      </span>
                      <span className="text-emerald-600 text-xs font-bold text-center">
                        {row.lfp}
                      </span>
                      <span className="text-[#0F172A]/30 text-xs font-medium text-center">
                        {row.lead}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[4rem] overflow-hidden shadow-2xl aspect-[4/5] relative">
                <img
                  src={housingfaq}
                  className="w-full h-full object-cover"
                  alt="Lithium battery storage system for off-grid solar power"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-[#0F172A]/20"></div>
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 px-4 py-1.5 rounded-full mb-4">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span className="text-emerald-400 font-black uppercase tracking-widest text-[9px]">
                      LiFePO4 Technology
                    </span>
                  </div>
                  <h3 className="text-white text-3xl font-black leading-tight">
                    10,000+ cycles
                    <br />
                    <span className="text-white/50">15-year warranty</span>
                  </h3>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#E11D48] text-white px-6 py-4 rounded-2xl shadow-2xl shadow-[#E11D48]/30">
                <div className="text-2xl font-black">3x</div>
                <div className="text-[8px] font-black uppercase tracking-widest opacity-80">
                  Longer Life
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PARALLAX TRUST STATS — DARK */}
      <section
        className="relative h-auto min-h-[60vh] md:min-h-[70vh] bg-center bg-cover overflow-hidden"
        style={{
           backgroundImage: `url(${Battery})`,
        }}
      >
        <div className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-[2px]"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6 py-24 text-white">
          <div className="max-w-4xl space-y-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
              Powering India's Most
              <br />
              <span className="text-[#E11D48]">Remote Locations</span>
            </h2>
            <div className="w-24 h-1 bg-[#E11D48] mx-auto"></div>
            <p className="text-white/60 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
              From Himalayan outposts to desert telecom sites — reliable power
              where the grid can't reach.
            </p>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 pt-4 sm:pt-8">
              {[
                { val: "200+", label: "Off-Grid Sites" },
                { val: "24/7", label: "Uptime Guarantee" },
                { val: "15 Yr", label: "Battery Warranty" },
              ].map((stat, i) => (
                <React.Fragment key={i}>
                  {i > 0 && (
                    <div className="w-px h-16 bg-white/15 hidden md:block"></div>
                  )}
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-black text-white">
                      {stat.val}
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mt-2">
                      {stat.label}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. OFF-GRID FAQ */}
      <OffGridFaqSection />
    </div>
  );
};

export default OffGridSolar;
