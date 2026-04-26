import React from "react";
import { useNavigate } from "react-router-dom";
import SEOHead from "../components/seo/SEOHead";
import OnGridFaqSection from "../components/sections/OnGridFaqSection";
import Ongrid from "../assets/ongrid1.jpg";
import commercial4 from "../assets/commercial4.jpg";
import ongrid2 from "../assets/ongrid2.png";
import home2 from "../assets/home2.jpg";
import Ongrid1 from "../assets/ongrid1.jpg"
const OnGridSolar = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in ">
      <SEOHead
        title="On-Grid Solar System — Net Metering & Maximum Savings"
        description="India's most popular solar solution. Generate clean energy, sell excess to the grid via net metering. 3-4 year ROI. On-grid solar installation in Hyderabad by Wattex."
        path="/on-grid"
        keywords="on-grid solar Hyderabad, grid-tied solar system, net metering Telangana, solar net metering India, on grid solar panels price, grid connected solar system"
        image={Ongrid}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "On-Grid Solar System Installation",
            provider: {
              "@type": "Organization",
              name: "Wattex Energy",
              url: "https://wattexenergy.com",
            },
            description:
              "Grid-tied solar systems with net metering. Generate solar energy, use what you need, sell excess back to the grid for maximum savings.",
            areaServed: { "@type": "State", name: "Telangana" },
            serviceType: "On-Grid Solar Installation",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What happens during a power cut with on-grid solar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Standard on-grid systems shut down during power cuts for safety (anti-islanding protection). You can add a hybrid inverter with battery bank to keep essential loads running during outages.",
                },
              },
              {
                "@type": "Question",
                name: "How does net metering billing work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Your meter runs both ways. Excess solar goes to the grid (meter runs backwards). At night you draw from grid. Bill is based on net difference — most see 70-90% reduction.",
                },
              },
              {
                "@type": "Question",
                name: "How long does on-grid solar installation take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A typical 3-10 kW installation takes 1-2 days. Complete process from agreement to power-on takes 2-4 weeks including DISCOM application and meter change.",
                },
              },
              {
                "@type": "Question",
                name: "What is the total cost vs savings for on-grid solar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A 5kW system costs ₹3.5-4.5L before subsidy, ₹1.8-2.5L after PM Surya Ghar subsidy. Monthly savings of ₹8,000-12,000 mean payback in 2-3 years. 25-year savings exceed ₹25 Lakhs.",
                },
              },
              {
                "@type": "Question",
                name: "What is the payback period for on-grid solar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "With current electricity tariffs and subsidies, payback is typically 2.5-4 years. After that, you enjoy free electricity for the remaining 21-22 years of system life.",
                },
              },
            ],
          },
        ]}
      />

      {/* ── 1. HERO ── */}
      <section className="relative min-h-[100svh] flex items-start pt-48 xs:pt-52 sm:items-center sm:pt-0 overflow-hidden md:h-[100vh]">
        <div className="absolute inset-0 z-0">
          <img
            loading="lazy"
            src={Ongrid1}
            className="w-full h-full object-cover object-[60%_center] sm:object-center"
            alt="On-grid solar panel system with net metering in Hyderabad"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-solar-deep via-solar-deep/80 sm:via-solar-deep/70 to-solar-deep/50 sm:to-transparent"></div>
        </div>
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl space-y-4 xs:space-y-5 sm:space-y-7 md:space-y-8 lg:space-y-10">
            <div className="flex items-center gap-2 xs:gap-3 sm:gap-4">
              <div className="w-6 xs:w-8 sm:w-10 md:w-12 h-px bg-[#1198DC] flex-shrink-0"></div>
              <span className="text-[#1198DC] font-black uppercase tracking-[0.2em] xs:tracking-[0.3em] sm:tracking-[0.4em] text-xs xs:text-sm sm:text-[10px] whitespace-nowrap">
                Grid-Tied Solar
              </span>
            </div>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-black font-heading leading-[0.9] sm:leading-[0.85] tracking-tighter uppercase text-white break-words">
              Maximum <br />
              <span className="text-[#1198DC]">Savings</span>
            </h1>
            <p className="text-white/80 text-base xs:text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-2xl font-medium leading-relaxed">
              {" "}
              India's most popular solar solution. Generate clean energy, use
              what you need, sell the rest to the grid.
            </p>
            <div className="flex flex-wrap gap-3 xs:gap-4 sm:gap-6 md:gap-8 pt-2 xs:pt-3 sm:pt-4 md:pt-6">
              {[
                { val: "90%", label: "Bill Reduction" },
                { val: "3-4 Yrs", label: "Payback Period" },
                { val: "25 Yrs", label: "System Life" },
              ].map((stat, i) => (
                <React.Fragment key={i}>
                  {i > 0 && (
                    <div className="w-px h-8 xs:h-10 sm:h-12 md:h-16 bg-white/10"></div>
                  )}
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <div className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-black text-white">
                      {stat.val}
                    </div>
                    <div className="text-[10px] xs:text-xs sm:text-[10px] font-black uppercase tracking-widest text-white/70">
                      {stat.label}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 xs:gap-3 sm:gap-4 pt-2 xs:pt-3 sm:pt-4">
              <button
                onClick={() => {
                  navigate("/consultation");
                  window.scrollTo(0, 0);
                }}
                className="bg-[#1198DC] hover:bg-[#0e85c4] text-white px-4 xs:px-5 sm:px-7 md:px-10 py-2.5 xs:py-3 sm:py-3.5 md:py-4 rounded-xl sm:rounded-2xl font-black uppercase tracking-[0.15em] xs:tracking-[0.2em] text-[9px] xs:text-[10px] sm:text-xs transition-all shadow-xl shadow-[#1198DC]/20 hover:-translate-y-1 whitespace-nowrap inline-flex items-center"
              >
                <i className="fas fa-bolt mr-1.5 xs:mr-2 sm:mr-3"></i>Get Free
                Quote
              </button>
              <button
                onClick={() => {
                  navigate("/calculator");
                  window.scrollTo(0, 0);
                }}
                className="bg-white/10 hover:bg-white/20 text-white px-4 xs:px-5 sm:px-7 md:px-10 py-2.5 xs:py-3 sm:py-3.5 md:py-4 rounded-xl sm:rounded-2xl font-black uppercase tracking-[0.15em] xs:tracking-[0.2em] text-[9px] xs:text-[10px] sm:text-xs transition-all border border-white/20 hover:-translate-y-1 backdrop-blur-sm whitespace-nowrap inline-flex items-center"
              >
                <i className="fas fa-calculator mr-1.5 xs:mr-2 sm:mr-3"></i>
                Calculate Savings
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-white/20 text-xs sm:text-sm"></i>
        </div>
      </section>

      {/* ── 2. HOW ON-GRID WORKS ── */}
      <section className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 xs:mb-12 sm:mb-16 md:mb-20 lg:mb-24 space-y-2 xs:space-y-3 sm:space-y-4">
            <span className="text-[#1198DC] font-black uppercase tracking-widest text-[9px] xs:text-[10px] sm:text-xs">
              Simple & Effective
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black text-solar-deep tracking-tight px-2">
              How On-Grid Solar Works
            </h2>
            <p className="text-slate-500 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-2xl mx-auto px-2">
              No batteries, no complexity — just clean energy that saves you
              money every single day
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Enhanced Professional Connecting Line */}
            <div className="absolute top-20 left-[12%] right-[12%] hidden lg:block">
              {/* Background glow layer */}
              <div className="absolute inset-0 h-[4px] bg-gradient-to-r from-[#1198DC]/0 via-[#1198DC]/20 to-[#1198DC]/0 blur-sm"></div>
              
              {/* Main gradient line */}
              <div className="absolute inset-0 h-[3px] bg-gradient-to-r from-[#1198DC]/20 via-[#1198DC] to-[#1198DC]/20 rounded-full"></div>
              
              {/* Animated flowing dots */}
              <div className="absolute top-1/2 left-0 w-2 h-2 bg-[#1198DC] rounded-full -translate-y-1/2 shadow-lg shadow-[#1198DC]/50 animate-pulse"></div>
              <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-[#1198DC] rounded-full -translate-y-1/2 shadow-lg shadow-[#1198DC]/50 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute top-1/2 left-2/3 w-2 h-2 bg-[#1198DC] rounded-full -translate-y-1/2 shadow-lg shadow-[#1198DC]/50 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              <div className="absolute top-1/2 right-0 w-2 h-2 bg-[#1198DC] rounded-full -translate-y-1/2 shadow-lg shadow-[#1198DC]/50 animate-pulse" style={{ animationDelay: '0.9s' }}></div>
              
              {/* Arrow indicators showing flow direction */}
              <div className="absolute top-1/2 left-[25%] -translate-y-1/2 text-[#1198DC]/40 text-xs">
                <i className="fas fa-chevron-right animate-pulse"></i>
              </div>
              <div className="absolute top-1/2 left-[50%] -translate-y-1/2 text-[#1198DC]/40 text-xs" style={{ animationDelay: '0.3s' }}>
                <i className="fas fa-chevron-right animate-pulse"></i>
              </div>
              <div className="absolute top-1/2 left-[75%] -translate-y-1/2 text-[#1198DC]/40 text-xs" style={{ animationDelay: '0.6s' }}>
                <i className="fas fa-chevron-right animate-pulse"></i>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8 sm:gap-10">
              {[
                {
                  num: "01",
                  icon: "fa-sun",
                  title: "Generate",
                  desc: "Solar panels on your roof convert sunlight into DC electricity throughout the day.",
                  color: "border-amber-400 bg-amber-50",
                  iconColor: "text-amber-500",
                },
                {
                  num: "02",
                  icon: "fa-rotate",
                  title: "Convert",
                  desc: "Grid-tie inverter converts DC power to AC electricity — same as your wall outlets.",
                  color: "border-[#1198DC] bg-[#1198DC]/5",
                  iconColor: "text-[#1198DC]",
                },
                {
                  num: "03",
                  icon: "fa-house-chimney",
                  title: "Use First",
                  desc: "Your home uses solar power first. Appliances run on free solar energy during the day.",
                  color: "border-emerald-400 bg-emerald-50",
                  iconColor: "text-emerald-500",
                },
                {
                  num: "04",
                  icon: "fa-arrow-right-arrow-left",
                  title: "Export Excess",
                  desc: "Extra power flows to the grid. Your meter runs backwards — earn credits on your bill.",
                  color: "border-violet-400 bg-violet-50",
                  iconColor: "text-violet-500",
                },
              ].map((step, i) => (
                <div key={i} className="relative text-center group">
                  <div
                    className={`w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 mx-auto mb-4 xs:mb-5 sm:mb-6 md:mb-7 rounded-full ${step.color} border-4 shadow-xl flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <i
                      className={`fas ${step.icon} text-2xl xs:text-3xl sm:text-3xl md:text-4xl ${step.iconColor} group-hover:scale-110 transition-transform`}
                    ></i>
                  </div>
                  <div className="text-[#1198DC] font-black text-xs xs:text-sm tracking-widest mb-2 xs:mb-3">
                    {step.num}
                  </div>
                  <h3 className="text-base xs:text-lg sm:text-xl font-black text-solar-deep mb-2 xs:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-xs xs:text-sm font-medium leading-relaxed px-2 xs:px-0">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Simple visual summary */}
          <div className="max-w-3xl mx-auto mt-10 xs:mt-12 sm:mt-16 md:mt-20 bg-[#1198DC]/5 border border-[#1198DC]/10 rounded-2xl xs:rounded-3xl sm:rounded-[2rem] md:rounded-[2.5rem] p-4 xs:p-6 sm:p-8 md:p-10">
            <div className="flex flex-wrap items-center justify-center gap-2 xs:gap-3 sm:gap-4 text-center">
              <div className="flex items-center gap-2 xs:gap-3">
                <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 bg-amber-100 rounded-lg xs:rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-sun text-amber-500 text-xs xs:text-sm"></i>
                </div>
                <span className="font-bold text-solar-deep text-xs xs:text-sm sm:text-base">
                  Solar Panels
                </span>
              </div>
              <i className="fas fa-arrow-right text-[#1198DC] text-xs xs:text-sm"></i>
              <div className="flex items-center gap-2 xs:gap-3">
                <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 bg-[#1198DC]/10 rounded-lg xs:rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-rotate text-[#1198DC] text-xs xs:text-sm"></i>
                </div>
                <span className="font-bold text-solar-deep text-xs xs:text-sm sm:text-base">
                  Inverter
                </span>
              </div>
              <i className="fas fa-arrow-right text-[#1198DC] text-xs xs:text-sm"></i>
              <div className="flex items-center gap-2 xs:gap-3">
                <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 bg-emerald-100 rounded-lg xs:rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-house text-emerald-500 text-xs xs:text-sm"></i>
                </div>
                <span className="font-bold text-solar-deep text-xs xs:text-sm sm:text-base">
                  Your Home
                </span>
              </div>
              <i className="fas fa-arrows-left-right text-[#1198DC] text-xs xs:text-sm"></i>
              <div className="flex items-center gap-2 xs:gap-3">
                <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 bg-violet-100 rounded-lg xs:rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-gauge-high text-violet-500 text-xs xs:text-sm"></i>
                </div>
                <span className="font-bold text-solar-deep text-xs xs:text-sm sm:text-base">
                  Net Meter
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. KEY BENEFITS ── */}
      <section className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-white">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xs:gap-12 sm:gap-16 md:gap-20 items-center max-w-6xl mx-auto">
            <div className="space-y-6 xs:space-y-8 sm:space-y-10 md:space-y-12">
              <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                <span className="text-[#1198DC] font-black uppercase tracking-widest text-[9px] xs:text-[10px] sm:text-xs">
                  Why On-Grid?
                </span>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-solar-deep tracking-tight">
                  The Smart Urban Choice
                </h2>
                <p className="text-slate-500 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-medium">
                  On-grid solar is India's most popular residential solar
                  solution — and for good reason. Maximum savings with minimum
                  hassle.
                </p>
              </div>
              <div className="grid gap-4 xs:gap-5 sm:gap-6 md:gap-8">
                {[
                  {
                    title: "Net Metering Revenue",
                    desc: "Sell excess power to the grid. Your meter literally runs backwards, earning you credits that offset your nighttime usage.",
                    icon: "fa-indian-rupee-sign",
                    color: "text-emerald-500 bg-emerald-50",
                  },
                  {
                    title: "Lowest Maintenance",
                    desc: "No batteries means no battery replacement costs, no acid handling, no water topping. Just clean panels and free power.",
                    icon: "fa-wrench",
                    color: "text-[#1198DC] bg-[#1198DC]/10",
                  },
                  {
                    title: "Fastest ROI",
                    desc: "3-4 year payback period — the fastest return of any solar configuration. Then enjoy 21+ years of virtually free electricity.",
                    icon: "fa-chart-line",
                    color: "text-amber-500 bg-amber-50",
                  },
                  {
                    title: "Smart App Monitoring",
                    desc: "Track real-time generation, savings, and grid export from your phone. Get instant alerts if anything needs attention.",
                    icon: "fa-mobile-screen-button",
                    color: "text-violet-500 bg-violet-50",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-3 xs:gap-4 sm:gap-5 md:gap-6 group"
                  >
                    <div
                      className={`w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 ${item.color} shadow-lg rounded-xl xs:rounded-2xl flex items-center justify-center text-base xs:text-lg sm:text-xl shrink-0 group-hover:scale-110 transition-transform duration-500`}
                    >
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <div>
                      <h4 className="text-base xs:text-lg sm:text-xl font-bold text-solar-deep">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-xs xs:text-sm sm:text-base font-medium leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mt-6 xs:mt-8 sm:mt-10 lg:mt-0 px-4 xs:px-6 sm:px-8 lg:px-0">
              <div className="rounded-2xl xs:rounded-3xl sm:rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  loading="lazy"
                  src={commercial4}
                  className="w-full h-full object-cover"
                  alt="Residential rooftop solar installation with grid connection"
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -bottom-3 xs:-bottom-4 sm:-bottom-5 md:-bottom-6 -left-2 xs:-left-3 sm:-left-4 md:-left-6 bg-[#1198DC] text-white px-4 xs:px-5 sm:px-6 md:px-8 py-3 xs:py-4 sm:py-5 rounded-2xl sm:rounded-3xl shadow-2xl shadow-[#1198DC]/30">
                <div className="text-xl xs:text-2xl sm:text-3xl font-black">
                  ₹0
                </div>
                <div className="text-[7px] xs:text-[8px] sm:text-[9px] font-black uppercase tracking-widest opacity-80">
                  Battery Cost
                </div>
              </div>
              <div className="absolute -top-3 xs:-top-4 sm:-top-5 md:-top-6 -right-2 xs:-right-3 sm:-right-4 md:-right-6 bg-white text-solar-deep px-4 xs:px-5 sm:px-6 md:px-8 py-3 xs:py-4 sm:py-5 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100">
                <div className="text-xl xs:text-2xl sm:text-3xl font-black text-emerald-500">
                  7x
                </div>
                <div className="text-[7px] xs:text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-slate-400">
                  ROI Return
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. NET METERING EXPLAINED ── */}
      <section className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-[#0F172A] text-white overflow-hidden">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 xs:mb-12 sm:mb-16 md:mb-20 space-y-2 xs:space-y-3 sm:space-y-4">
            <span className="text-white/60 font-black uppercase tracking-[0.2em] xs:tracking-[0.25em] sm:tracking-[0.3em] text-[9px] xs:text-[10px]">
              Your Meter Runs Backwards
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl font-black tracking-tight px-2">
              How Net Metering Saves You Money
            </h2>
            <p className="text-white/60 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-2xl mx-auto px-2">
              Understand how on-grid solar eliminates up to 90% of your
              electricity bill
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "fa-sun",
                period: "Daytime",
                time: "6 AM — 6 PM",
                desc: "Solar panels power your home. Any excess electricity flows to the grid automatically. Your bi-directional meter records the export — running backwards.",
                highlight: "Meter runs backwards",
                color: "from-[#1198DC]/20 to-[#1198DC]/5",
                iconBg: "bg-[#1198DC]/25 text-[#1198DC]",
              },
              {
                icon: "fa-moon",
                period: "Nighttime",
                time: "6 PM — 6 AM",
                desc: "When the sun is down, your home draws power from the grid as usual. But the credits you earned during the day offset this nighttime consumption.",
                highlight: "Credits offset usage",
                color: "from-[#1198DC]/10 to-[#1198DC]/5",
                iconBg: "bg-[#1198DC]/15 text-[#1198DC]",
              },
              {
                icon: "fa-receipt",
                period: "Monthly Bill",
                time: "End of Month",
                desc: "Your bill = Grid import minus Solar export. Most homeowners see 70-90% bill reduction. Unused credits roll over to the next month for up to a year.",
                highlight: "80-90% savings",
                color: "from-emerald-500/20 to-emerald-500/5",
                iconBg: "bg-emerald-400/20 text-emerald-300",
              },
            ].map((panel, i) => (
              <div
                key={i}
                className={`bg-gradient-to-b ${panel.color} backdrop-blur-sm border border-white/10 rounded-2xl xs:rounded-3xl sm:rounded-[2rem] md:rounded-[2.5rem] p-5 xs:p-6 sm:p-8 md:p-10 text-center group hover:border-white/20 transition-all duration-500 hover:-translate-y-2`}
              >
                <div
                  className={`w-14 h-14 xs:w-16 xs:h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 ${panel.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center text-xl xs:text-2xl sm:text-3xl mx-auto mb-4 xs:mb-5 sm:mb-6 group-hover:scale-110 transition-transform`}
                >
                  <i className={`fas ${panel.icon}`}></i>
                </div>
                <div className="text-[8px] xs:text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-white/40 mb-1 xs:mb-2">
                  {panel.time}
                </div>
                <h3 className="text-lg xs:text-xl sm:text-2xl font-black mb-1 xs:mb-2">
                  {panel.period}
                </h3>
                <p className="text-white/50 text-xs xs:text-sm font-medium mb-4 xs:mb-5 sm:mb-6 leading-relaxed">
                  {panel.desc}
                </p>
                <div className="inline-flex items-center gap-1.5 xs:gap-2 bg-white/10 px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 rounded-full">
                  <i className="fas fa-check text-emerald-400 text-[10px] xs:text-xs"></i>
                  <span className="text-white font-bold text-[10px] xs:text-xs">
                    {panel.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Net metering equation */}
          <div className="max-w-3xl mx-auto mt-8 xs:mt-10 sm:mt-12 md:mt-16 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-center gap-3 xs:gap-4 md:gap-6 text-center">
              <div>
                <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-black">
                  800
                </div>
                <div className="text-[7px] xs:text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-white/40">
                  Units Imported
                </div>
              </div>
              <div className="text-xl xs:text-2xl sm:text-3xl font-black text-white/30">
                −
              </div>
              <div>
                <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-black text-[#1198DC]">
                  650
                </div>
                <div className="text-[7px] xs:text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-white/40">
                  Units Exported
                </div>
              </div>
              <div className="text-xl xs:text-2xl sm:text-3xl font-black text-white/30">
                =
              </div>
              <div>
                <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-black text-emerald-300">
                  150
                </div>
                <div className="text-[7px] xs:text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-white/40">
                  Units Billed
                </div>
              </div>
              <div className="w-px h-10 xs:h-12 bg-white/15 hidden md:block"></div>
              <div>
                <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-black text-emerald-300">
                  81%
                </div>
                <div className="text-[7px] xs:text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-white/40">
                  Bill Reduction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SAVINGS CALCULATOR PREVIEW ── */}
      <section className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-white">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xs:gap-12 sm:gap-16 md:gap-20 items-center max-w-6xl mx-auto">
            <div className="space-y-6 xs:space-y-7 sm:space-y-8 md:space-y-10">
              <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                <span className="text-[#1198DC] font-black uppercase tracking-widest text-[9px] xs:text-[10px] sm:text-xs">
                  Why Choose On-Grid
                </span>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-solar-deep tracking-tight">
                  The Smarter Way to Go Solar
                  <br />
                </h2>
                <p className="text-slate-500 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-medium">
                  On-grid systems offer the best financial returns with no
                  battery costs, seamless grid backup, and government incentives
                  working in your favor.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:gap-5 md:gap-6">
                {[
                  {
                    label: "Current Monthly Bill",
                    value: "₹8,500",
                    icon: "fa-file-invoice",
                    color: "bg-red-50 text-red-500 border-red-100",
                  },
                  {
                    label: "New Monthly Bill",
                    value: "₹850",
                    icon: "fa-file-invoice-dollar",
                    color: "bg-emerald-50 text-emerald-500 border-emerald-100",
                  },
                  {
                    label: "Monthly Savings",
                    value: "₹7,650",
                    icon: "fa-piggy-bank",
                    color: "bg-[#1198DC]/5 text-[#1198DC] border-[#1198DC]/10",
                  },
                  {
                    label: "Annual Savings",
                    value: "₹91,800",
                    icon: "fa-sack-dollar",
                    color: "bg-amber-50 text-amber-500 border-amber-100",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`${item.color} border rounded-xl xs:rounded-2xl sm:rounded-[1.5rem] md:rounded-[2rem] p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 text-center group hover:shadow-xl transition-all duration-500`}
                  >
                    <i
                      className={`fas ${item.icon} text-lg xs:text-xl sm:text-2xl mb-1.5 xs:mb-2 sm:mb-3 group-hover:scale-110 transition-transform inline-block`}
                    ></i>
                    <div className="text-base xs:text-lg sm:text-2xl md:text-3xl font-black text-solar-deep mb-0.5 xs:mb-1 break-words">
                      {item.value}
                    </div>
                    <div className="text-slate-500 font-bold text-[10px] xs:text-xs">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  navigate("/calculator");
                  window.scrollTo(0, 0);
                }}
                className="bg-[#1198DC] hover:bg-[#0e85c4] text-white px-5 xs:px-6 sm:px-8 md:px-10 py-2.5 xs:py-3 sm:py-3.5 md:py-4 rounded-xl sm:rounded-2xl font-black uppercase tracking-wider sm:tracking-widest text-[9px] xs:text-[10px] sm:text-xs transition-all shadow-lg shadow-[#1198DC]/20 hover:-translate-y-1 inline-flex items-center whitespace-nowrap"
              >
                <i className="fas fa-calculator mr-2 xs:mr-2.5 sm:mr-3"></i>Use
                Full Calculator
              </button>
            </div>

            <div className="relative rounded-2xl xs:rounded-3xl sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
              {/* Background Image */}
              <img
                src={ongrid2}
                className="w-full h-full object-cover"
                alt="On-grid solar rooftop installation"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2a3d] via-[#0a2a3d]/40 to-transparent" />

              {/* Top-left badge */}
              <div className="absolute top-3 xs:top-4 sm:top-5 md:top-6 left-3 xs:left-4 sm:left-5 md:left-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl xs:rounded-2xl px-2.5 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3">
                <div className="text-[7px] xs:text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-white/50 mb-0.5">
                  System Status
                </div>
                <div className="flex items-center gap-1.5 xs:gap-2">
                  <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-emerald-400 font-black text-[10px] xs:text-xs sm:text-sm">
                    Live & Generating
                  </span>
                </div>
              </div>

              {/* Top-right badge */}
              <div className="absolute top-3 xs:top-4 sm:top-5 md:top-6 right-3 xs:right-4 sm:right-5 md:right-6 bg-[#1198DC] rounded-xl xs:rounded-2xl px-2.5 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-center shadow-xl shadow-[#1198DC]/30">
                <div className="text-white font-black text-base xs:text-lg sm:text-xl">
                  7x
                </div>
                <div className="text-[7px] xs:text-[8px] font-black uppercase tracking-widest text-white/70">
                  ROI
                </div>
              </div>

              {/* Bottom text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 xs:p-5 sm:p-6 md:p-8 space-y-3 xs:space-y-4">
                <div className="space-y-0.5 xs:space-y-1">
                  <div className="text-[7px] xs:text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-white/40">
                    25-Year Projection
                  </div>
                  <h3 className="text-white text-xl xs:text-2xl sm:text-3xl font-black leading-tight tracking-tight">
                    ₹22.9 Lakhs <br />
                    <span className="text-[#1198DC]">Total Savings</span>
                  </h3>
                </div>

                {/* Mini stat row */}
                <div className="flex gap-3 xs:gap-4 sm:gap-5 md:gap-6 pt-2 border-t border-white/10 flex-wrap">
                  {[
                    { val: "90%", label: "Bill Reduction" },
                    { val: "3–4 Yrs", label: "Payback" },
                    { val: "₹0", label: "Battery Cost" },
                  ].map((s, i) => (
                    <div key={i}>
                      <div className="text-white font-black text-sm xs:text-base sm:text-lg">
                        {s.val}
                      </div>
                      <div className="text-[7px] xs:text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-white/30">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. ON-GRID PACKAGES ── */}
      <section className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-slate-50">
        <div
          className="mx-auto px-3 xs:px-4 sm:px-6 lg:px-8"
          style={{ maxWidth: "1400px" }}
        >
          <div className="text-center mb-10 xs:mb-12 sm:mb-16 md:mb-20 space-y-2 xs:space-y-3 sm:space-y-4">
            <span className="text-[#1198DC] font-black uppercase tracking-widest text-[9px] xs:text-[10px] sm:text-xs">
              Off-Grid Solar Systems
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-solar-deep tracking-tight px-2">
              Power Anywhere, No Grid Needed
            </h2>
            <p className="text-slate-500 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-2xl mx-auto px-2">
              Complete self-sufficient solar systems with battery storage —
              designed for homes and properties with no grid access or frequent
              power cuts.{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xs:gap-8 sm:gap-10 md:gap-12 mx-auto items-stretch">
            {[
              {
                name: "3 kW",
                sub: "Small Home / 2BHK",
                price: "₹1.2–1.5 Lakhs*",
                popular: false,
                color: "bg-[#1198DC]",
                borderColor: "border-slate-200",
                bill: "₹2,000–3,000/mo",
                saves: "₹3,000/mo",
                subsidy: "40% Subsidy",
                features: [
                  "6-8 panels on roof",
                  "Powers lights, fans, TV, fridge",
                  "Wi-Fi monitoring included",
                  "Basic net metering setup",
                ],
                best: "Small apartments, 2BHK homes",
              },
              {
                name: "5 kW",
                sub: "Medium Home / 3BHK",
                price: "₹2.1–2.4 Lakhs*",
                popular: true,
                color: "bg-[#1198DC]",
                borderColor: "border-[#1198DC]",
                bill: "₹5,000–6,000/mo",
                saves: "₹4,500/mo",
                subsidy: "40% + 20%",
                features: [
                  "10-14 panels on roof",
                  "Powers entire home + 1-2 ACs",
                  "Smart app monitoring",
                  "Premium Tier-1 panels",
                  "Priority installation",
                ],
                best: "3BHK homes, independent houses,Villas,large farmhouses.",
              },
              {
                name: "10 kW",
                sub: "Large Home / Villa",
                price: "₹4.2–5 Lakhs*",
                popular: false,
                color: "bg-solar-deep",
                borderColor: "border-slate-200",
                bill: "₹12,000–15,000/mo",
                saves: "₹12,000/mo",
                subsidy: "40% + 20%",
                features: [
                  "20-28 panels on roof",
                  "Full villa + multiple ACs",
                  "Premium monitoring dashboard",
                  "Hybrid-ready inverter",
                  "EV charger compatible",
                ],
                best: "Villas, bungalows, large homes",
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl xs:rounded-3xl sm:rounded-[2rem] md:rounded-[2.5rem] border-2 ${plan.borderColor} overflow-hidden relative bg-white ${plan.popular ? "lg:scale-105 shadow-2xl shadow-[#1198DC]/20" : "shadow-xl"} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-4 xs:right-5 sm:right-6 bg-solar-yellow text-solar-deep px-3 xs:px-4 py-0.5 xs:py-1 rounded-b-lg font-black uppercase tracking-widest text-[7px] xs:text-[8px] z-10">
                    Most Popular
                  </div>
                )}
                <div
                  className={`${plan.color} text-white p-4 xs:p-5 sm:p-6 md:p-8`}
                >
                  <h3 className="text-xl xs:text-2xl sm:text-3xl font-black">
                    {plan.name}
                  </h3>
                  <p className="text-white/70 font-medium text-xs xs:text-sm sm:text-base mt-0.5 xs:mt-1">
                    {plan.sub}
                  </p>
                </div>
                <div className="p-4 xs:p-5 sm:p-6 md:p-8 space-y-4 xs:space-y-5 sm:space-y-6">
                  <div className="space-y-3 xs:space-y-4">
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-slate-400 font-medium text-xs xs:text-sm">
                        Current Bill
                      </span>
                      <span className="font-black text-solar-deep text-xs xs:text-sm sm:text-base text-right">
                        {plan.bill}
                      </span>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-slate-400 font-medium text-xs xs:text-sm">
                        Monthly Savings
                      </span>
                      <span className="font-black text-emerald-500 text-sm xs:text-base sm:text-lg text-right">
                        {plan.saves}
                      </span>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-slate-400 font-medium text-xs xs:text-sm">
                        Subsidy
                      </span>
                      <span className="font-black text-[#1198DC] text-xs xs:text-sm sm:text-base text-right">
                        {plan.subsidy}
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-slate-100 pt-4 xs:pt-5 sm:pt-6 space-y-2 xs:space-y-3">
                    {plan.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2 xs:gap-3">
                        <div className="w-4 h-4 xs:w-5 xs:h-5 bg-emerald-50 rounded-full flex items-center justify-center shrink-0">
                          <i className="fas fa-check text-emerald-500 text-[7px] xs:text-[8px]"></i>
                        </div>
                        <span className="text-slate-500 text-xs xs:text-sm font-medium">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <div className="text-[9px] xs:text-[10px] font-black uppercase tracking-widest text-slate-300 mb-1 xs:mb-2">
                      Best For
                    </div>
                    <p className="text-slate-500 text-xs xs:text-sm font-medium">
                      {plan.best}
                    </p>
                  </div>
                  <div className="text-center pt-2">
                    <div
                      className={`text-xl xs:text-2xl sm:text-3xl font-black mb-3 xs:mb-4 ${plan.popular ? "text-[#1198DC]" : "text-solar-deep"}`}
                    >
                      {plan.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-[10px] xs:text-xs sm:text-sm mt-6 xs:mt-8 font-medium px-4">
            *Prices after applicable PM Surya Ghar government subsidy. Actual
            costs depend on site conditions and panel selection.
          </p>
        </div>
      </section>

      {/* ── 7. PARALLAX — INDIA STATS ── */}
      <section
        className="relative min-h-[400px] xs:min-h-[450px] sm:min-h-[500px] h-[60vh] md:h-[70vh] bg-fixed bg-center bg-cover overflow-hidden"
        style={{
          backgroundImage: `url(${home2})`,
        }}
      >
        <div className="absolute inset-0 bg-solar-deep/70 backdrop-blur-[2px]"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-3 xs:px-4 sm:px-6 py-12 xs:py-16 sm:py-20">
          <div className="max-w-4xl space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
              India's #1 Choice:
              <br />
              <span className="text-[#1198DC]">On-Grid Solar</span>
            </h2>
            <div className="w-16 xs:w-20 sm:w-24 h-1 bg-[#1198DC] mx-auto"></div>
            <p className="text-white/60 text-xs xs:text-sm sm:text-base md:text-lg lg:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
              The most cost-effective way to go solar — proven by millions of
              Indian homeowners.
            </p>
            <div className="flex flex-wrap justify-center gap-6 xs:gap-8 sm:gap-10 md:gap-12 pt-4 xs:pt-6 sm:pt-8">
              {[
                { val: "80%", label: "of All Solar Installs" },
                { val: "1Cr+", label: "Homes Powered" },
                { val: "₹0", label: "Battery Cost" },
              ].map((stat, i) => (
                <React.Fragment key={i}>
                  {i > 0 && (
                    <div className="w-px h-10 xs:h-12 sm:h-16 bg-white/15 hidden md:block"></div>
                  )}
                  <div className="text-center">
                    <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-white">
                      {stat.val}
                    </div>
                    <div className="text-[8px] xs:text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-white/40 mt-1 xs:mt-2">
                      {stat.label}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. GOVERNMENT SUBSIDY + PM SURYA GHAR ── */}
      <section className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-white">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xs:gap-12 sm:gap-16 md:gap-20 items-center max-w-6xl mx-auto">
            <div className="space-y-6 xs:space-y-7 sm:space-y-8 md:space-y-10">
              <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                <span className="text-emerald-600 font-black uppercase tracking-widest text-[9px] xs:text-[10px] sm:text-xs">
                  Government Benefits
                </span>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-solar-deep tracking-tight">
                  On-Grid Solar
                  <br />
                  <span className="text-emerald-600">Subsidies</span>
                </h2>
                <p className="text-slate-500 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-medium">
                  The Indian government heavily subsidizes on-grid rooftop solar
                  under PM Surya Ghar Muft Bijli Yojana. We handle 100% of the
                  paperwork.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:gap-5 md:gap-6">
                {[
                  {
                    label: "Subsidy up to 3 kW",
                    value: "40%",
                    desc: "₹78,000 maximum",
                    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
                  },
                  {
                    label: "Subsidy 3–10 kW",
                    value: "20%",
                    desc: "Additional capacity",
                    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
                  },
                  {
                    label: "Max for 3 kW",
                    value: "₹78,000",
                    desc: "Direct to bank account",
                    color: "bg-[#1198DC]/5 text-[#1198DC] border-[#1198DC]/10",
                  },
                  {
                    label: "Paperwork",
                    value: "100% by Us",
                    desc: "Zero hassle for you",
                    color: "bg-amber-50 text-amber-600 border-amber-100",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`${item.color} border rounded-xl xs:rounded-2xl sm:rounded-[1.5rem] md:rounded-[2rem] p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 text-center group hover:shadow-xl transition-all duration-500`}
                  >
                    <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-black mb-0.5 xs:mb-1 break-words">
                      {item.value}
                    </div>
                    <div className="text-solar-deep font-bold text-[10px] xs:text-xs sm:text-sm">
                      {item.label}
                    </div>
                    <div className="text-slate-400 text-[9px] xs:text-[10px] sm:text-xs font-medium mt-1 xs:mt-2">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Subsidy process */}
              <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 space-y-3 xs:space-y-4">
                <div className="text-[9px] xs:text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Subsidy Process — We Handle Everything
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 xs:gap-3">
                  {[
                    "Register Online",
                    "DISCOM Approval",
                    "Install System",
                    "Get Subsidy ₹",
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-1.5 xs:gap-2">
                      <div className="w-5 h-5 xs:w-6 xs:h-6 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-emerald-600 font-black text-[9px] xs:text-[10px]">
                          {i + 1}
                        </span>
                      </div>
                      <span className="text-slate-600 text-[10px] xs:text-xs font-bold">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* PM Surya Ghar Card */}
            <div className="relative mt-6 xs:mt-8 sm:mt-10 lg:mt-0">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl xs:rounded-3xl sm:rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[4rem] p-6 xs:p-8 sm:p-10 md:p-12 lg:p-16 border border-emerald-200 text-center space-y-4 xs:space-y-5 sm:space-y-6">
                <div className="w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-xl xs:rounded-2xl sm:rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center text-emerald-600 text-3xl xs:text-4xl sm:text-5xl mx-auto shadow-xl">
                  <i className="fas fa-sun"></i>
                </div>
                <div>
                  <h3 className="text-xl xs:text-2xl sm:text-3xl font-black text-emerald-700">
                    PM Surya Ghar
                  </h3>
                  <p className="text-emerald-600/60 font-bold text-sm xs:text-base sm:text-lg mt-0.5 xs:mt-1">
                    Muft Bijli Yojana
                  </p>
                </div>
                <p className="text-emerald-700/60 font-medium text-xs xs:text-sm sm:text-base max-w-xs mx-auto">
                  Your home is eligible for up to 40% government subsidy on
                  rooftop solar. Apply through us — we handle everything.
                </p>
                <div className="space-y-2 xs:space-y-3">
                  <p className="text-emerald-600/40 text-[10px] xs:text-xs font-medium">
                    Free consultation • No obligation • 48hr response
                  </p>
                </div>
              </div>
              <div className="absolute -top-3 xs:-top-4 -right-2 xs:-right-3 sm:-right-4 bg-emerald-500 text-white px-3 xs:px-4 sm:px-5 py-2 xs:py-2.5 sm:py-3 rounded-xl xs:rounded-2xl shadow-xl shadow-emerald-500/30">
                <div className="text-base xs:text-lg sm:text-xl font-black">
                  Save
                </div>
                <div className="text-[7px] xs:text-[8px] font-black uppercase tracking-widest opacity-80">
                  Up to ₹78K
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. CTA ── */}
      <section className="relative py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-[#0a2a3d] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-48 xs:w-64 sm:w-80 md:w-96 h-48 xs:h-64 sm:h-80 md:h-96 bg-white/30 blur-[100px] sm:blur-[150px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-48 xs:w-64 sm:w-80 md:w-96 h-48 xs:h-64 sm:h-80 md:h-96 bg-solar-deep/30 blur-[100px] sm:blur-[150px] rounded-full"></div>
        </div>
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 xs:space-y-8 sm:space-y-10">
          <div className="space-y-3 xs:space-y-4 sm:space-y-6">
            <span className="text-white/60 font-black uppercase tracking-[0.25em] xs:tracking-[0.3em] sm:tracking-[0.4em] text-[9px] xs:text-[10px]">
              Start Today
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter leading-none">
              Start Saving with
              <br />
              On-Grid Solar
            </h2>
            <p className="text-white/70 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto font-medium">
              Free consultation. Government subsidy handled. Real savings from
              day one.
            </p>
          </div>
        </div>
      </section>

      {/* ── 9. ON-GRID FAQ ── */}
      <OnGridFaqSection />
    </div>
  );
};

export default OnGridSolar;