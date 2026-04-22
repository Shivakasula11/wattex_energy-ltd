import React from 'react';
import { useNavigate } from 'react-router-dom';
import SERVICES from '../../data/services';

const ServicesGrid = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-32 bg-slate-50 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-solar-primary font-black uppercase tracking-widest text-[10px] mb-4 block">World Class Solutions</span>
          <h2 className="text-5xl md:text-5xl font-black text-slate-900 font-heading tracking-tight uppercase">Engineering Excellence</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((s) => (
            <div key={s.id} className="bg-white p-10 rounded-[3rem] shadow-3xl border border-slate-100 group hover:-translate-y-4 transition-all duration-500 flex flex-col">
              <div className="w-16 h-16 bg-solar-primary/5 rounded-[1.2rem] flex items-center justify-center mb-8 text-solar-primary text-2xl group-hover:bg-solar-primary group-hover:text-white transition-all">
                <i className={`fas ${s.icon}`}></i>
              </div>
              <h3 className="text-2xl font-black mb-4 leading-tight">{s.title}</h3>
              <p className="text-slate-500 mb-8 leading-relaxed font-medium text-sm flex-grow">{s.description}</p>
              <button
                onClick={() => { navigate(s.link); window.scrollTo(0, 0); }}
                className="w-full py-4 border-2 border-slate-50 rounded-xl font-black uppercase tracking-widest text-[10px] hover:border-solar-primary transition-all"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
