import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SEOHead from "../components/seo/SEOHead";
import Projects from "../assets/projects.png";
import Balajiarc from "../assets/Balajiarc.png";
import Commercial2 from "../assets/commercial2.jpg";
import Greentech from "../assets/greentech.png";
import Ecoresorts from "../assets/Ecoresorts.png";
import Home2 from "../assets/home2.jpg";
import Autozone from "../assets/Autozone.png";
import AbhiTowers from "../assets/Abhitowers.png";
import KrishnanSLR from "../assets/krishnanSlr.png";

const CATEGORIES = [
  "All",
  "Residential",
  "Commercial",
  "Housing Society",
  "Off-Grid",
];

const PROJECTS = [
  {
    title: "Palm Heights Society",
    location: "Hyderabad, Telangana",
    category: "Housing Society",
    system: "85 kW",
    panels: 192,
    savings: "₹1.8L/mo",
    co2: "102 tons/yr",
    payback: "2.8 Years",
    img:  Balajiarc ,
    desc: "240-flat gated community with complete common area solar coverage — lifts, pumps, lighting, CCTV, and clubhouse amenities.",
    highlights: [
      "Zero common area electricity bill",
      "₹1,700/flat maintenance reduction",
      "Smart monitoring for RWA",
    ],
    featured: true,
  },
  {
    title: "Reddy Villa Residence",
    location: "Jubilee Hills, Hyderabad",
    category: "Residential",
    system: "10 kW",
    panels: 24,
    savings: "₹14,000/mo",
    co2: "12 tons/yr",
    payback: "3.2 Years",
    img: Commercial2,
    desc: "Premium villa installation with Tier-1 panels and hybrid-ready inverter. Full home coverage including 3 ACs and EV charger pre-wiring.",
    highlights: [
      "92% bill reduction",
      "Hybrid inverter for future battery",
      "App-based monitoring",
    ],
    featured: true,
  },
  {
    title: "GreenTech Office Park",
    location: "Bimavaram, Andhra Pradesh",
    category: "Commercial",
    system: "250 kW",
    panels: 560,
    savings: "₹6.5L/mo",
    co2: "300 tons/yr",
    payback: "3.5 Years",
    img: Greentech,
    desc: "Large-scale rooftop installation across 3 buildings in a commercial IT park. Net metering with TSSPDCL for maximum ROI.",
    highlights: [
      "65% electricity cost reduction",
      "IGBC Green Building credits",
      "Zero downtime installation",
    ],
    featured: true,
  },
  {
    title: "Mythri Eco Lodge",
    location: "Vishakhapatnam, Andhra Pradesh",
    category: "Off-Grid",
    system: "15 kW",
    panels: 36,
    savings: "₹45,000/mo",
    co2: "18 tons/yr",
    payback: "4 Years",
    img: Ecoresorts,
    desc: "Complete off-grid luxury resort installation with LiFePO4 battery bank — 48hr autonomy even in overcast winter conditions.",
    highlights: [
      "100% energy independent",
      "48hr battery autonomy",
      "Satellite remote monitoring",
    ],
    featured: false,
  },
  {
    title: "Lakshmi Apartments",
    location: "Gachibowli, Hyderabad",
    category: "Housing Society",
    system: "50 kW",
    panels: 112,
    savings: "₹95,000/mo",
    co2: "60 tons/yr",
    payback: "3 Years",
    img: Projects,
    desc: "120-flat mid-range society. Solar powers all common area loads — lifts, water pumps, corridor lights, parking CCTV, and garden lighting.",
    highlights: [
      "₹1,200/flat maintenance saved",
      "40% govt subsidy availed",
      "25-year panel warranty",
    ],
    featured: false,
  },
  {
    title: "Meghana's Home",
    location: "Vanasthalipuram, Hyderabad",
    category: "Residential",
    system: "5 kW",
    panels: 12,
    savings: "₹7,800/mo",
    co2: "6 tons/yr",
    payback: "2.8 Years",
    img: Home2,
    desc: "Standard 3BHK independent house installation. PM Surya Ghar subsidy of ₹78,000 availed. Net metering active from day one.",
    highlights: [
      "₹78K subsidy received",
      "88% bill reduction",
      "1-day installation",
    ],
    featured: false,
  },
  {
    title: "AutoZone Warehouse",
    location: "Shamshabad, Hyderabad",
    category: "Commercial",
    system: "500 kW",
    panels: 1120,
    savings: "₹12L/mo",
    co2: "600 tons/yr",
    payback: "3.8 Years",
    img: Autozone,
    desc: "Massive warehouse rooftop installation — one of the largest single-roof commercial projects in Telangana. Accelerated depreciation benefits claimed.",
    highlights: [
      "₹1.44 Cr annual savings",
      "Accelerated depreciation tax benefit",
      "15,000 sq ft roof utilized",
    ],
    featured: false,
  },
  {
    title: "Abhi Towers",
    location: "Nellore, Telangana",
    category: "Off-Grid",
    system: "8 kW × 12 sites",
    panels: 8,
    savings: "DG fuel eliminated",
    co2: "115 tons/yr",
    payback: "3.5 Years",
    img: AbhiTowers,
    desc: "12 remote telecom tower sites converted from diesel generator to solar + LiFePO4 battery. Satellite monitoring for all sites.",
    highlights: [
      "100% DG fuel replaced",
      "24/7 uptime maintained",
      "Remote satellite monitoring",
    ],
    featured: false,
  },
  {
    title: "Krishnan SLR Residence",
    location: "Bhimavaram, Andhra Pradesh",
    category: "Residential",
    system: "3 kW",
    panels: 7,
    savings: "₹4,200/mo",
    co2: "3.6 tons/yr",
    payback: "2.5 Years",
    img: KrishnanSLR,
    desc: "Budget-friendly apartment rooftop installation. Full PM Surya Ghar 40% subsidy availed — net cost under ₹1.1 Lakhs.",
    highlights: [
      "Net cost ₹1.1L after subsidy",
      "85% bill reduction",
      "Wi-Fi monitoring app",
    ],
    featured: false,
  },
];

function ProjectCard({ project, large }) {
  const navigate = useNavigate();

  return (
    <div
      className={`group relative ${large ? "md:col-span-2 md:row-span-2" : ""} rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${large ? "h-72 md:h-80" : "h-56"}`}
      >
        <img
          src={project.img}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          alt={project.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-solar-deep/70 via-transparent to-transparent"></div>

        {/* Category badge */}
        <div className="absolute top-5 left-5">
          <span
            className={`px-4 py-1.5 rounded-full font-black uppercase tracking-widest text-[8px] backdrop-blur-sm ${
              project.category === "Residential"
                ? "bg-solar-sky/90 text-white"
                : project.category === "Commercial"
                  ? "bg-amber-500/90 text-white"
                  : project.category === "Housing Society"
                    ? "bg-solar-primary/90 text-white"
                    : "bg-emerald-500/90 text-white"
            }`}
          >
            {project.category}
          </span>
        </div>

        {/* System size badge */}
        <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm text-solar-deep px-4 py-1.5 rounded-full">
          <span className="font-black text-sm">{project.system}</span>
        </div>

        {/* Bottom overlay info */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3
            className={`font-black text-white leading-tight ${large ? "text-3xl" : "text-xl"}`}
          >
            {project.title}
          </h3>
          <div className="flex items-center gap-2 mt-2 text-white/70">
            <i className="fas fa-location-dot text-xs"></i>
            <span className="font-medium text-sm">{project.location}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 space-y-5">
        <p className="text-slate-500 text-sm font-medium leading-relaxed">
          {project.desc}
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-lg font-black text-emerald-500">
              {project.savings}
            </div>
            <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">
              Savings
            </div>
          </div>
          <div className="text-center border-x border-slate-100">
            <div className="text-lg font-black text-solar-deep">
              {project.panels}
            </div>
            <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">
              Panels
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-black text-solar-sky">
              {project.payback}
            </div>
            <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">
              Payback
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-2 pt-4 border-t border-slate-100">
          {project.highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center shrink-0">
                <i className="fas fa-check text-emerald-500 text-[8px]"></i>
              </div>
              <span className="text-slate-600 text-sm font-medium">{h}</span>
            </div>
          ))}
        </div>

        {/* CO2 Badge */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
              <i className="fas fa-leaf text-emerald-500 text-xs"></i>
            </div>
            <span className="text-emerald-600 font-bold text-xs">
              {project.co2} CO₂ offset
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OurProjects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="animate-fade-in bg-white">
      <SEOHead
        title="Our Solar Projects — Hyderabad & Telangana Portfolio"
        description="See Wattex Energy's completed solar installations — residential rooftops, housing societies, commercial buildings & industrial projects across Hyderabad & Telangana."
        path="/projects"
        keywords="solar projects Hyderabad, Wattex Energy portfolio, solar installation examples, residential solar project, commercial solar project Telangana, housing society solar project"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Wattex Energy Solar Projects Portfolio",
          url: "https://wattexenergy.com/projects",
          description:
            "Completed solar installation projects by Wattex Energy across Hyderabad and Telangana.",
          provider: { "@type": "Organization", name: "Wattex Energy" },
        }}
      />
      {/* ── HERO ── */}
      <section className="relative h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={Balajiarc}
            className="w-full h-full object-cover"
            alt="Wattex Energy completed solar installation projects portfolio"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl space-y-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-solar-primary"></div>
              <span className="text-solar-primary font-black uppercase tracking-[0.4em] text-[10px]">
                Our Portfolio
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-[5rem] font-black font-heading leading-[0.9] tracking-tighter uppercase text-white">
              Projects That
              <br />
              <span className="text-solar-primary">Speak</span>.
            </h1>
            <p className="text-white/60 text-xl md:text-2xl max-w-2xl font-medium leading-relaxed">
              Real installations. Real savings. Real impact. Browse our
              portfolio of 500+ completed solar projects across India.
            </p>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-white/20"></i>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <span className="text-solar-primary font-black uppercase tracking-widest text-xs">
              Spotlight
            </span>
            <h2 className="text-5xl md:text-5xl font-black text-solar-deep tracking-tight">
              Featured Installations
            </h2>
            <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">
              Our most impactful projects showcasing the full range of Wattex
              capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PROJECTS.filter((p) => p.featured).map((project, i) => (
              <ProjectCard key={i} project={project} large={false} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL PORTFOLIO WITH FILTERS ── */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-4">
              <span className="text-solar-primary font-black uppercase tracking-widest text-xs">
                Complete Portfolio
              </span>
              <h2 className="text-5xl md:text-5xl font-black text-solar-deep tracking-tight">
                All Projects
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeFilter === cat
                      ? "bg-solar-primary text-white shadow-lg shadow-rose-200"
                      : "bg-white text-slate-500 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {cat}
                  {cat !== "All" && (
                    <span className="ml-2 text-xs opacity-60">
                      ({PROJECTS.filter((p) => p.category === cat).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <ProjectCard
                key={`${activeFilter}-${i}`}
                project={project}
                large={false}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <i className="fas fa-solar-panel text-slate-200 text-6xl mb-6"></i>
              <p className="text-slate-400 text-xl font-bold">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── PROCESS SECTION ── */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 space-y-4">
            <span className="text-solar-sky font-black uppercase tracking-widest text-xs">
              Our Approach
            </span>
            <h2 className="text-5xl md:text-5xl font-black text-solar-deep tracking-tight">
              How We Deliver Excellence
            </h2>
            <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">
              Every project follows our proven 5-step process for guaranteed
              results
            </p>
          </div>

          {/* Desktop Timeline — alternating left/right */}
          <div className="max-w-6xl mx-auto hidden lg:block">
            {[
              {
                num: "01",
                icon: "fa-phone",
                title: "Consult",
                desc: "Free call to understand your energy needs, roof setup, monthly consumption, and goals. We assess feasibility within 48 hours.",
                color: "bg-solar-sky",
                lightColor: "bg-sky-50",
                textColor: "text-solar-sky",
              },
              {
                num: "02",
                icon: "fa-compass-drafting",
                title: "Design",
                desc: "Custom system blueprint based on on-site assessment — panel layout, inverter sizing, wiring plan, and expected generation.",
                color: "bg-solar-primary",
                lightColor: "bg-rose-50",
                textColor: "text-solar-primary",
              },
              {
                num: "03",
                icon: "fa-file-signature",
                title: "Approve",
                desc: "Transparent pricing with detailed cost breakdown, subsidy calculation, ROI projection, and financing options. No hidden charges.",
                color: "bg-amber-500",
                lightColor: "bg-amber-50",
                textColor: "text-amber-500",
              },
              {
                num: "04",
                icon: "fa-screwdriver-wrench",
                title: "Install",
                desc: "Professional installation by certified engineers. Clean wiring, proper earthing, weatherproof mounting — completed in 1-3 days.",
                color: "bg-emerald-500",
                lightColor: "bg-emerald-50",
                textColor: "text-emerald-500",
              },
              {
                num: "05",
                icon: "fa-chart-line",
                title: "Monitor",
                desc: "Go live with real-time app monitoring, net metering activation, and ongoing maintenance support. We stay with you for 25 years.",
                color: "bg-violet-500",
                lightColor: "bg-violet-50",
                textColor: "text-violet-500",
              },
            ].map((step, i) => (
              <div
                key={i}
                className={`group relative flex items-stretch ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Content Side */}
                <div className="w-1/2 flex items-center">
                  <div
                    className={`${i % 2 === 0 ? "pr-16 text-right ml-auto" : "pl-16 text-left mr-auto"} max-w-md py-10`}
                  >
                    <div
                      className={`inline-flex items-center gap-2 ${step.lightColor} px-4 py-1.5 rounded-full mb-4`}
                    >
                      <span
                        className={`${step.textColor} font-black text-xs tracking-widest`}
                      >
                        STEP {step.num}
                      </span>
                    </div>
                    <h3 className="text-3xl font-black text-solar-deep mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Center Timeline */}
                <div
                  className="relative flex flex-col items-center z-10"
                  style={{ width: "80px" }}
                >
                  {i > 0 && <div className="w-[3px] flex-1 bg-slate-100"></div>}
                  {i === 0 && <div className="flex-1"></div>}
                  <div
                    className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center text-white text-xl shadow-xl group-hover:scale-110 transition-transform duration-500 relative`}
                  >
                    <i className={`fas ${step.icon}`}></i>
                    <div
                      className={`absolute inset-0 rounded-2xl ${step.color} opacity-0 group-hover:opacity-20 scale-100 group-hover:scale-150 transition-all duration-700`}
                    ></div>
                  </div>
                  {i < 4 && <div className="w-[3px] flex-1 bg-slate-100"></div>}
                  {i === 4 && <div className="flex-1"></div>}
                </div>

                {/* Empty Side */}
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>

          {/* Mobile Timeline — stacked */}
          <div className="max-w-lg mx-auto lg:hidden">
            {[
              {
                num: "01",
                icon: "fa-phone",
                title: "Consult",
                desc: "Free call to understand your energy needs, roof setup, and goals. Feasibility within 48 hours.",
                color: "bg-solar-sky",
                textColor: "text-solar-sky",
              },
              {
                num: "02",
                icon: "fa-compass-drafting",
                title: "Design",
                desc: "Custom system blueprint — panel layout, inverter sizing, and expected output.",
                color: "bg-solar-primary",
                textColor: "text-solar-primary",
              },
              {
                num: "03",
                icon: "fa-file-signature",
                title: "Approve",
                desc: "Transparent pricing, subsidy calculation, and financing options. No hidden charges.",
                color: "bg-amber-500",
                textColor: "text-amber-500",
              },
              {
                num: "04",
                icon: "fa-screwdriver-wrench",
                title: "Install",
                desc: "Professional installation by certified engineers. Completed in 1-3 days.",
                color: "bg-emerald-500",
                textColor: "text-emerald-500",
              },
              {
                num: "05",
                icon: "fa-chart-line",
                title: "Monitor",
                desc: "Go live with real-time monitoring and 25-year ongoing support.",
                color: "bg-violet-500",
                textColor: "text-violet-500",
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-5 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center text-white text-lg shadow-lg shrink-0`}
                  >
                    <i className={`fas ${step.icon}`}></i>
                  </div>
                  {i < 4 && (
                    <div className="w-[2px] flex-1 bg-slate-100 mt-2"></div>
                  )}
                </div>
                <div className="pb-8">
                  <div
                    className={`${step.textColor} font-black text-[10px] tracking-widest mb-1`}
                  >
                    STEP {step.num}
                  </div>
                  <h3 className="text-xl font-black text-solar-deep mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-32 bg-solar-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/30 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-solar-deep/30 blur-[150px] rounded-full"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center space-y-10">
          <div className="space-y-6">
            <span className="text-white/60 font-black uppercase tracking-[0.4em] text-[10px]">
              Your Project is Next
            </span>
            <h2 className="text-5xl md:text-5xl font-black text-white tracking-tighter leading-none">
              Let's Build Your
              <br />
              Solar Success Story
            </h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto font-medium">
              Free consultation. Custom design. Government subsidy handled. Join
              500+ happy clients.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => {
                navigate("/contact");
                window.scrollTo(0, 0);
              }}
              className="bg-white hover:bg-slate-50 text-solar-primary px-14 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs transition-all shadow-2xl hover:-translate-y-1"
            >
              <i className="fas fa-bolt mr-3"></i>Start My Project
            </button>
            <button
              onClick={() => {
                navigate("/calculator");
                window.scrollTo(0, 0);
              }}
              className="bg-white/15 hover:bg-white/25 text-white px-14 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs transition-all border border-white/30 hover:-translate-y-1 backdrop-blur-sm"
            >
              <i className="fas fa-calculator mr-3"></i>Calculate Savings
            </button>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL STRIP ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-solar-primary font-black uppercase tracking-widest text-xs">
              Client Voices
            </span>
            <h2 className="text-4xl font-black text-solar-deep tracking-tight">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Rajesh Mehta",
                role: "10kW Villa Owner",
                city: "Hyderabad",
                quote:
                  "From consultation to commissioning, the team was incredibly professional. 92% bill reduction — exactly as promised.",
                rating: 5,
              },
              {
                name: "Sundar Iyer",
                role: "RWA President, Palm Heights",
                city: "Hyderabad",
                quote:
                  "Maintenance reduced by ₹1,800/flat. Residents are absolutely thrilled with the switch to solar!",
                rating: 5,
              },
              {
                name: "Anitha Rao",
                role: "CFO, GreenTech Park",
                city: "Hyderabad",
                quote:
                  "The 250kW installation was completed without a single day of office disruption. Outstanding project management.",
                rating: 5,
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl relative group hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute top-8 right-8 text-slate-100 group-hover:text-solar-primary/10 transition-colors">
                  <i className="fas fa-quote-right text-4xl"></i>
                </div>
                <div className="flex gap-1 text-solar-primary mb-6">
                  {[...Array(t.rating)].map((_, j) => (
                    <i key={j} className="fas fa-star text-xs"></i>
                  ))}
                </div>
                <p className="text-slate-600 font-medium italic leading-relaxed mb-8 relative z-10">
                  "{t.quote}"
                </p>
                <div>
                  <h4 className="font-black text-solar-deep">{t.name}</h4>
                  <p className="text-solar-primary font-bold uppercase tracking-widest text-[9px]">
                    {t.role}
                  </p>
                  <p className="text-slate-400 text-xs font-medium mt-1">
                    <i className="fas fa-location-dot mr-1"></i>
                    {t.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
