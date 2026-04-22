import React from 'react';
import Battery from '../../assets/Battery-tech.png';
import Commercial from '../../assets/commercial3.jpg';
import  Environment from '../../assets/Environment.png';
import Home3 from '../../assets/Home3.jpeg';
const SolarImpactSection = () => (
  <section className="py-32 bg-white overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-solar-primary font-black uppercase tracking-widest text-xs">Environmental Impact</span>
            <h2 className="text-4xl font-black text-solar-deep tracking-tight">The Power of the Sun</h2>
            <p className="text-slate-500 text-xl leading-relaxed font-medium">
              Every hour, enough sunlight strikes the Earth to provide the entire world's energy needs for a full year. Solar energy is the most abundant, renewable, and clean energy source available to us.
            </p>
          </div>

          <div className="grid gap-8">
            {[
              { title: 'Zero Emissions', desc: 'Solar panels produce no greenhouse gases or air pollutants during operation, helping to mitigate climate change.', icon: 'fa-cloud-sun' },
              { title: 'Water Conservation', desc: 'Unlike traditional power plants, solar PV systems require virtually no water for electricity generation.', icon: 'fa-droplet-slash' },
              { title: 'Energy Security', desc: 'Solar reduces dependence on imported fuels and centralized power grids, providing local energy independence.', icon: 'fa-shield-virus' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="w-14 h-14 bg-slate-50 shadow-sm rounded-2xl flex items-center justify-center text-solar-primary shrink-0 transition-transform group-hover:scale-110">
                  <i className={`fas ${item.icon} text-xl`}></i>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-solar-deep">{item.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img src={Home3} className="rounded-3xl shadow-2xl w-full aspect-[3/4] object-cover" alt="Solar Panel Close" />
              <img src={Environment} className="rounded-3xl shadow-2xl w-full aspect-square object-cover" alt="Solar Field" />
            </div>
            <div className="space-y-4">
              <img src={Commercial} className="rounded-3xl shadow-2xl w-full aspect-square object-cover" alt="Clean Energy" />
              <img src={Battery} className="rounded-3xl shadow-2xl w-full aspect-[3/4] object-cover" alt="Commercial Solar" />
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 bg-solar-deep p-10 rounded-[3rem] shadow-3xl max-w-xs space-y-4 hidden md:block">
            <div className="text-4xl font-black text-solar-primary">100%</div>
            <p className="text-white/60 font-bold uppercase tracking-widest text-[10px]">Renewable Energy Potential for your facility</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SolarImpactSection;
