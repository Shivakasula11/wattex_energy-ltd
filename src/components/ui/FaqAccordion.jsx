import React, { useState } from 'react';

const FaqAccordion = ({ faqs }) => {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => (
        <div key={idx} className="border border-slate-100 rounded-[2rem] overflow-hidden">
          <button
            onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-all"
          >
            <span className="font-bold text-solar-deep pr-4">{faq.q}</span>
            <i
              className={`fas fa-chevron-down text-[10px] transition-transform ${
                activeFaq === idx ? 'rotate-180' : ''
              }`}
            ></i>
          </button>
          <div
            className={`transition-all duration-500 ease-in-out ${
              activeFaq === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            } bg-slate-50/50`}
          >
            <p className="p-6 pt-0 text-slate-500 font-medium leading-relaxed">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
