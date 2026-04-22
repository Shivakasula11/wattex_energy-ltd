import React, { useState, useMemo } from 'react';
import SEOHead from '../components/seo/SEOHead';
import COMMON_APPLIANCES from '../data/appliances';
import { CALCULATOR_FAQS } from '../data/faqs';
import { calculateSolarRequirements } from '../utils/calculator';

export default function SolarCalculator() {
  const seoSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Wattex Solar Calculator',
      url: 'https://wattexenergy.com/calculator',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
      description: 'Free solar calculator — estimate panel count, battery size, system cost and savings based on your appliances and usage.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
      provider: { '@type': 'Organization', name: 'Wattex Energy' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: CALCULATOR_FAQS.map(faq => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ];
  const [activeTab, setActiveTab] = useState('calculator');
  const [results, setResults] = useState(null);
  const [applianceStates, setApplianceStates] = useState(
    Object.fromEntries(COMMON_APPLIANCES.map(a => [a.id, { wattage: a.defaultWattage, quantity: 0, backupHours: 0 }]))
  );
  const [customAppliances, setCustomAppliances] = useState([]);
  const [newCustomName, setNewCustomName] = useState('');
  const [newCustomWattage, setNewCustomWattage] = useState(50);
  const [backupHours, setBackupHours] = useState(4);
  const [showCustomDialog, setShowCustomDialog] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [customQuantities, setCustomQuantities] = useState({});

  const updateAppliance = (id, updates) => {
    setApplianceStates(prev => ({ ...prev, [id]: { ...prev[id], ...updates } }));
  };

  const addCustomAppliance = () => {
    if (newCustomName.trim()) {
      const name = newCustomName.trim();
      setCustomAppliances(prev => [...prev, { name, wattage: newCustomWattage }]);
      setCustomQuantities(prev => ({ ...prev, [customAppliances.length]: 0 }));
      setSuccessMessage(`${name} has been added to your list.`);
      setTimeout(() => setSuccessMessage(''), 3000);
      setNewCustomName('');
      setNewCustomWattage(50);
      setShowCustomDialog(false);
    }
  };

  const totalWatts = useMemo(() => {
    
    let total = 0;
    Object.values(applianceStates).forEach(state => { total += state.wattage * state.quantity; });
    customAppliances.forEach(a => total += a.wattage);
    return total;
  }, [applianceStates, customAppliances]);

 const calculate = () => {
  const res = calculateSolarRequirements(applianceStates, customAppliances, backupHours, COMMON_APPLIANCES);
  setResults(res);
};

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      <SEOHead
        title="Free Solar Calculator — Estimate Panels, Cost & Savings"
        description="Calculate your solar system size, battery needs, installation cost and monthly savings. Free solar calculator tool by Wattex Energy Hyderabad."
        path="/calculator"
        keywords="solar calculator India, solar panel calculator, solar system size calculator, solar cost estimator, how many solar panels do I need, solar savings calculator"
        schema={seoSchema}
      />
      {/* Sub-Header */}
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-2 mb-10">
            
          </div>
          <div className="flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-slate-400">
            <button onClick={() => setActiveTab('calculator')} className={`hover:text-solar-primary transition-colors ${activeTab === 'calculator' ? 'text-solar-primary' : ''}`}>Calculator</button>
            <button onClick={() => setActiveTab('recommendations')} className={`hover:text-solar-primary transition-colors ${activeTab === 'recommendations' ? 'text-solar-primary' : ''}`}>Recommendations</button>
            <button onClick={() => setActiveTab('about')} className={`hover:text-solar-primary transition-colors ${activeTab === 'about' ? 'text-solar-primary' : ''}`}>About</button>
          </div>
          <button onClick={() => { setActiveTab('calculator'); window.scrollTo({ top: 400, behavior: 'smooth' }); }} className="bg-solar-primary text-white px-6 py-2.5 rounded-lg font-black uppercase tracking-widest text-[10px] shadow-lg shadow-rose-200 flex items-center gap-2">
            <i className="fas fa-bolt"></i> Get Started
          </button>
        </div>
     

      <div className="container mx-auto px-6 max-w-5xl">
        {activeTab === 'calculator' && (
          <>
            {/* Title */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 bg-rose-50 text-solar-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-rose-100">
                <i className="fas fa-calculator"></i> Solar Calculator
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-solar-deep tracking-tight">Calculate Your Solar Needs</h1>
              <p className="text-slate-500 font-medium max-w-2xl mx-auto text-sm leading-relaxed">
                Select your appliances, specify their quantities, power ratings, and backup hours (for high/super high load), and we'll calculate the ideal solar setup for your requirements.
              </p>
            </div>

            {/* Common Appliances */}
            <div className="bg-white rounded-[2rem] shadow-xl p-8 lg:p-10 border border-slate-100 mb-10">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 bg-amber-50 text-amber-500 rounded-lg flex items-center justify-center"><i className="fas fa-lightbulb text-sm"></i></div>
                <h2 className="text-xl font-black text-solar-deep">Common Appliances</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {COMMON_APPLIANCES.map((app) => (
                  <div key={app.id} className="p-6 rounded-2xl border border-slate-100 bg-white hover:border-solar-primary/20 transition-all group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-colors ${app.colorClass}`}>
                        <i className={`fas ${app.icon}`}></i>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-solar-deep text-sm">{app.name}</h3>
                          {app.isHighLoad && <span className="bg-rose-50 text-rose-500 text-[7px] font-black uppercase px-2 py-0.5 rounded-full border border-rose-100">High Load</span>}
                          {app.isSuperHighLoad && <span className="bg-rose-50 text-rose-500 text-[7px] font-black uppercase px-2 py-0.5 rounded-full border border-rose-100">Super High Load</span>}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="space-y-1.5">
                        <label className="text-[9px] font-black uppercase tracking-widest text-slate-400">Wattage</label>
                        <input type="number" value={applianceStates[app.id].wattage} onChange={(e) => updateAppliance(app.id, { wattage: parseInt(e.target.value) || 0 })} className="w-full bg-slate-50 border border-slate-100 p-2.5 rounded-lg font-bold text-solar-deep text-sm focus:bg-white focus:border-solar-primary/30 outline-none transition-all" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[9px] font-black uppercase tracking-widest text-slate-400">Quantity</label>
                        <div className="flex items-center bg-slate-50 border border-slate-100 rounded-lg overflow-hidden">
                          <button onClick={() => updateAppliance(app.id, { quantity: Math.max(0, applianceStates[app.id].quantity - 1) })} className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 text-slate-400 transition-colors text-xs">-</button>
                          <input type="number" value={applianceStates[app.id].quantity} onChange={(e) => updateAppliance(app.id, { quantity: parseInt(e.target.value) || 0 })} className="w-full bg-transparent text-center font-bold text-solar-deep text-xs outline-none" />
                          <button onClick={() => updateAppliance(app.id, { quantity: applianceStates[app.id].quantity + 1 })} className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 text-slate-400 transition-colors text-xs">+</button>
                        </div>
                      </div>
                    </div>
                    {(app.isHighLoad || app.isSuperHighLoad || app.id === 'inverter-ac') && (
                      <div className="space-y-1.5 mb-4">
                        <label className="text-[9px] font-black uppercase tracking-widest text-slate-400">Backup Hours</label>
                        <input type="number" value={applianceStates[app.id].backupHours} onChange={(e) => updateAppliance(app.id, { backupHours: parseInt(e.target.value) || 0 })} className="w-full bg-slate-50 border border-slate-100 p-2.5 rounded-lg font-bold text-solar-deep text-sm focus:bg-white focus:border-solar-primary/30 outline-none transition-all" />
                      </div>
                    )}
                    <div className="text-right">
                      <span className="text-[9px] font-bold text-slate-400">Total: </span>
                      <span className="text-xs font-black text-solar-deep">{applianceStates[app.id].wattage * applianceStates[app.id].quantity} watts</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Appliances */}
            <div className="bg-white rounded-[2rem] shadow-xl p-8 lg:p-10 border border-slate-100 mb-10">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 bg-indigo-50 text-indigo-500 rounded-lg flex items-center justify-center"><i className="fas fa-plus text-sm"></i></div>
                <h2 className="text-xl font-black text-solar-deep">Custom Appliances</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-400">Appliance Name</label>
                  <input type="text" placeholder="e.g., Laptop, Microwave" value={newCustomName} onChange={(e) => setNewCustomName(e.target.value)} className="w-full bg-slate-50 border border-slate-100 p-3 rounded-lg font-bold text-solar-deep text-sm focus:bg-white focus:border-solar-primary/30 outline-none transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-400">Wattage</label>
                  <input type="number" value={newCustomWattage} onChange={(e) => setNewCustomWattage(parseInt(e.target.value) || 0)} className="w-full bg-slate-50 border border-slate-100 p-3 rounded-lg font-bold text-solar-deep text-sm focus:bg-white focus:border-solar-primary/30 outline-none transition-all" />
                </div>
              </div>
              <button onClick={() => setShowCustomDialog(true)} className="border-2 border-slate-100 text-solar-deep px-6 py-2.5 rounded-lg font-black uppercase tracking-widest text-[9px] hover:bg-slate-50 transition-all">+ Add Custom Appliance</button>

              {/* Dialog */}
              {showCustomDialog && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
                  <div className="bg-white rounded-2xl p-8 shadow-2xl w-full max-w-md space-y-6">
                    <h3 className="text-lg font-black text-solar-deep">Add Custom Appliance</h3>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase tracking-widest text-slate-400">Appliance Name</label>
                      <input type="text" placeholder="e.g., Laptop, Microwave" value={newCustomName} onChange={(e) => setNewCustomName(e.target.value)} className="w-full bg-slate-50 border border-slate-100 p-3 rounded-lg font-bold text-solar-deep text-sm outline-none" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase tracking-widest text-slate-400">Wattage</label>
                      <input type="number" value={newCustomWattage} onChange={(e) => setNewCustomWattage(parseInt(e.target.value) || 0)} className="w-full bg-slate-50 border border-slate-100 p-3 rounded-lg font-bold text-solar-deep text-sm outline-none" />
                    </div>
                    <div className="flex gap-4 justify-end">
                      <button onClick={() => setShowCustomDialog(false)} className="px-6 py-2.5 rounded-lg border-2 border-slate-100 font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all">Cancel</button>
                      <button onClick={addCustomAppliance} className="px-6 py-2.5 rounded-lg bg-solar-primary text-white font-black text-[10px] uppercase tracking-widest hover:bg-rose-600 transition-all">OK</button>
                    </div>
                  </div>
                </div>
              )}

              {/* Success Message */}
              {successMessage && (
                <div className="mt-4 text-green-600 font-bold text-sm flex items-center gap-2">
                  <i className="fas fa-check-circle"></i> {successMessage}
                </div>
              )}

             {customAppliances.length > 0 && (
  <div className="mt-6 space-y-4">
    {customAppliances.map((ca, i) => (
      <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        {/* Header: Icon + Name + Delete */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
              <i className="fas fa-plug text-indigo-400"></i>
            </div>
            <span className="font-black text-solar-deep text-base">{ca.name}</span>
          </div>
          <button
            onClick={() => {
              setCustomAppliances(prev => prev.filter((_, idx) => idx !== i));
              setCustomQuantities(prev => {
                const updated = { ...prev };
                delete updated[i];
                return updated;
              });
            }}
           className="w-8 h-8 flex items-center justify-center text-rose-500 hover:text-rose-700 transition-colors"
          >
            <i className="fas fa-trash text-sm"></i>
          </button>
        </div>

        {/* Wattage + Quantity */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="space-y-1.5">
            <label className="text-[9px] font-black uppercase tracking-widest text-slate-400">Wattage</label>
            <input
              type="number"
              value={ca.wattage}
              onChange={(e) => setCustomAppliances(prev => prev.map((item, idx) => idx === i ? { ...item, wattage: parseInt(e.target.value) || 0 } : item))}
              className="w-full bg-slate-50 border border-slate-100 p-2.5 rounded-lg font-bold text-solar-deep text-sm focus:bg-white focus:border-solar-primary/30 outline-none transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[9px] font-black uppercase tracking-widest text-slate-400">Quantity</label>
            <div className="flex items-center bg-slate-50 border border-slate-100 rounded-lg overflow-hidden">
              <button
                onClick={() => setCustomQuantities(prev => ({ ...prev, [i]: Math.max(0, (prev[i] || 0) - 1) }))}
                className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 text-slate-400 transition-colors text-xs"
              >-</button>
              <span className="w-full text-center font-bold text-solar-deep text-xs">{customQuantities[i] || 0}</span>
              <button
                onClick={() => setCustomQuantities(prev => ({ ...prev, [i]: (prev[i] || 0) + 1 }))}
                className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 text-slate-400 transition-colors text-xs"
              >+</button>
            </div>
          </div>
        </div>

        {/* Total */}
        <div className="text-right">
          <span className="text-[9px] font-bold text-slate-400">Total: </span>
          <span className="text-xs font-black text-solar-deep">{ca.wattage * (customQuantities[i] || 0)} watts</span>
        </div>
      </div>
    ))}
  </div>
)}
            </div>

            {/* Backup Hours */}
            <div className="bg-white rounded-[2rem] shadow-xl p-8 lg:p-10 border border-slate-100 mb-10">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 bg-purple-50 text-purple-500 rounded-lg flex items-center justify-center"><i className="fas fa-clock text-sm"></i></div>
                <h2 className="text-xl font-black text-solar-deep">Backup Hours</h2>
              </div>
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-600">Hours of Backup for Normal Appliances</label>
                  <span className="text-solar-primary font-black text-lg">{backupHours} hours</span>
                </div>
                <div className="relative h-2 bg-slate-100 rounded-full">
                  <input type="range" min="1" max="24" value={backupHours} onChange={(e) => setBackupHours(parseInt(e.target.value))} className="absolute inset-0 w-full h-full appearance-none bg-transparent cursor-pointer accent-solar-primary" />
                  <div className="h-full bg-solar-primary rounded-full pointer-events-none" style={{ width: `${((backupHours - 1) / 23) * 100}%` }}></div>
                </div>
                <div className="flex justify-between text-[8px] font-black text-slate-400 uppercase tracking-widest">
                  <span>1 hour</span><span>4 hours</span><span>24 hours</span>
                </div>
              </div>
            </div>

        {/* Calculate Button */}
<div className="mb-10">
  <button onClick={calculate}
 className="w-full bg-solar-primary hover:bg-rose-600 text-white py-4 rounded-lg font-black uppercase tracking-widest text-xs shadow-xl shadow-rose-200 transition-all flex items-center justify-center gap-3">
    <i className="fas fa-bolt"></i> Calculate Requirements
  </button>
</div>

{/* Results Summary - inline on same page */}
{results && (
  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm mb-24">
    <div className="p-8 border-b border-slate-100">
      <h2 className="text-lg font-black text-solar-deep">Results Summary</h2>
    </div>
    <div className="divide-y divide-slate-100">
      <div className="p-6">
        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Total Wattage</div>
        <div className="text-2xl font-black text-solar-deep">{results.totalWatts} W</div>
      </div>
      <div className="p-6">
        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Required Inverter Capacity</div>
        <div className="text-2xl font-black text-solar-deep">{results.inverterVA} VA</div>
      </div>
      <div className="p-6">
        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Battery Storage Needed</div>
        <div className="text-2xl font-black text-solar-primary">{(results.totalEnergyWh / 1000).toFixed(1)} kWh</div>
      </div>
      <div className="p-6 space-y-4">
        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Recommended Battery Configurations</div>
        {[
          { sys: '12V System:', total: 'Total: 200Ah @ 12V', config: '1x 12V 200Ah', provides: 'Provides: 2.4 kWh' },
          { sys: '24V System:', total: 'Total: 200Ah @ 24V', config: '2x 12V 200Ah', provides: 'Provides: 4.8 kWh' },
          { sys: '48V System:', total: 'Total: 200Ah @ 48V', config: '4x 12V 200Ah', provides: 'Provides: 9.6 kWh' }
        ].map((b, i) => (
          <div key={i} className="flex items-center justify-between py-2">
            <div>
              <div className="text-sm font-black text-solar-deep">{b.sys}</div>
              <div className="text-[10px] font-bold text-slate-400">{b.total}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-black text-solar-deep">{b.config}</div>
              <div className="text-[10px] font-bold text-slate-400">{b.provides}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)}
            {/* FAQ */}
            <div className="max-w-4xl mx-auto space-y-10">
              <h3 className="text-xl font-black text-solar-deep text-center uppercase tracking-widest">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {CALCULATOR_FAQS.map((faq, i) => (
                  <div key={i} className="bg-white p-8 rounded-[1.5rem] shadow-lg border border-slate-100">
                    <h4 className="text-base font-black text-solar-deep mb-3">{faq.q}</h4>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'recommendations' && (
          <div className="animate-fade-in">
            {!results ? (
              <div className="text-center py-20">
                <h2 className="text-3xl font-black text-solar-deep mb-4">Personalized Recommendations</h2>
                <p className="text-slate-500">Please complete the calculator to see your energy setup recommendations.</p>
              </div>
            ) : (
              <div className="space-y-8">
                <button onClick={calculate} className="w-full bg-solar-primary hover:bg-rose-600 text-white py-4 rounded-lg font-black uppercase tracking-widest text-xs shadow-xl shadow-rose-200 transition-all flex items-center justify-center gap-3 mb-8">
                  <i className="fas fa-bolt"></i> Calculate Requirements
                </button>
                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-slate-100">
                  <h2 className="text-2xl font-black text-solar-deep mb-10">Results Summary</h2>
                  <div className="space-y-6">
                    <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Total Wattage</div>
                      <div className="text-3xl font-black text-solar-deep">{results.totalWatts} W</div>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Required Inverter Capacity</div>
                      <div className="text-3xl font-black text-solar-deep">{results.inverterVA} VA</div>
                    </div>
                    <div className="bg-rose-50 p-8 rounded-xl border border-rose-100">
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-solar-primary mb-2">Battery Storage Needed</div>
                      <div className="text-3xl font-black text-solar-primary">{(results.totalEnergyWh / 1000).toFixed(1)} kWh</div>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 space-y-8">
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Recommended Battery Configurations</div>
                      <div className="space-y-8">
                        {[
                          { sys: '12V', total: '200Ah @ 12V', config: '1x 12V 200Ah', provides: '2.4 kWh' },
                          { sys: '24V', total: '200Ah @ 24V', config: '2x 12V 200Ah', provides: '4.8 kWh' },
                          { sys: '48V', total: '200Ah @ 48V', config: '4x 12V 200Ah', provides: '9.6 kWh' }
                        ].map((b, i) => (
                          <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                              <div className="text-sm font-black text-solar-deep">{b.sys} System:</div>
                              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total: {b.total}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-black text-solar-deep">{b.config}</div>
                              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Provides: {b.provides}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-12 text-center">
                  <button onClick={() => setActiveTab('calculator')} className="text-solar-primary font-black uppercase tracking-widest text-[10px] hover:underline flex items-center justify-center gap-2 mx-auto">
                    <i className="fas fa-redo"></i> Recalculate Requirements
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'about' && (
          <div className="animate-fade-in space-y-20">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-500 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border border-amber-100">
                <i className="fas fa-sun"></i> About The Calculator
              </div>
              <h2 className="text-4xl font-black text-solar-deep tracking-tight">How It Works</h2>
              <p className="text-slate-500 font-medium max-w-2xl mx-auto text-sm">
                Our solar calculator helps you determine the right solar power setup for your needs by analyzing your appliance usage and power requirements.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: 'fa-table-list', title: 'Select Appliances', desc: 'Choose from our list of common household appliances or add your own custom devices with specific wattage ratings.', color: 'rose' },
                { icon: 'fa-lightbulb', title: 'Specify Details', desc: 'Enter the quantities and exact wattage of your appliances to get the most accurate calculations for your specific needs.', color: 'amber' },
                { icon: 'fa-bolt', title: 'Calculate Requirements', desc: 'Our algorithm calculates your power requirements, including inverter capacity and battery needs based on your backup hour preferences.', color: 'rose' },
                { icon: 'fa-sun', title: 'Get Recommendations', desc: 'Receive personalized product recommendations from our extensive range of solar inverters and battery configurations.', color: 'amber' }
              ].map((step, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100 space-y-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${step.color === 'rose' ? 'bg-rose-50 text-solar-primary' : 'bg-amber-50 text-amber-500'}`}>
                    <i className={`fas ${step.icon}`}></i>
                  </div>
                  <h3 className="text-lg font-black text-solar-deep">{step.title}</h3>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100">
              <h3 className="text-2xl font-black text-solar-deep mb-6">Our Methodology</h3>
              <div className="space-y-6 text-slate-500 font-medium leading-relaxed">
                <p>The Wattex Solar Calculator uses industry-standard power factor calculations (0.8 PF) to convert your wattage requirements into Volt-Amperes (VA). This ensures that your inverter is sized correctly to handle the reactive power needs of your appliances.</p>
                <p>For battery calculations, we factor in the daily energy consumption (Watt-hours) and your desired backup duration. We recommend a depth of discharge (DoD) safety margin to prolong battery life, typically suggesting tubular batteries for their superior deep-cycle performance.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}