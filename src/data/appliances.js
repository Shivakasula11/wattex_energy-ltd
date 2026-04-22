const APPLIANCES = [
  { id: 'fan', name: 'Fan', icon: 'fa-fan', defaultWattage: 75, category: 'common', colorClass: 'bg-indigo-50 text-indigo-500' },
  { id: 'light', name: 'Light Bulb', icon: 'fa-lightbulb', defaultWattage: 15, category: 'common', colorClass: 'bg-amber-50 text-amber-500' },
  { id: 'fridge', name: 'Refrigerator', icon: 'fa-refrigerator', defaultWattage: 150, category: 'common', colorClass: 'bg-sky-50 text-sky-500' },
  { id: 'tv', name: 'TV', icon: 'fa-tv', defaultWattage: 100, category: 'common', colorClass: 'bg-slate-50 text-slate-500' },
  { id: 'cctv', name: 'Surveillance System(CCTV)', icon: 'fa-camera', defaultWattage: 250, category: 'common', colorClass: 'bg-indigo-50 text-indigo-500' },
  { id: 'music', name: 'Music System', icon: 'fa-music', defaultWattage: 120, category: 'common', colorClass: 'bg-purple-50 text-purple-500' },
  { id: 'ac', name: 'AC', icon: 'fa-snowflake', defaultWattage: 1500, isHighLoad: true, category: 'high-load', colorClass: 'bg-sky-50 text-sky-500' },
  { id: 'pump', name: 'Water Pump', icon: 'fa-droplet', defaultWattage: 750, isSuperHighLoad: true, category: 'high-load', colorClass: 'bg-blue-50 text-blue-500' },
  { id: 'inverter-ac', name: 'Inverter AC', icon: 'fa-snowflake', defaultWattage: 1500, category: 'high-load', colorClass: 'bg-slate-50 text-slate-500' },
];

export default APPLIANCES;
