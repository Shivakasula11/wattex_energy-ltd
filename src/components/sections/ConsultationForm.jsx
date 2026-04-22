import React, { useState } from "react";

const billOptions = [
  "Less than ₹1500",
  "₹1500 - ₹2500",
  "₹2500 - ₹4000",
  "₹4000 - ₹8000",
  "More than ₹8000",
];

const ConsultationForm = () => {
  const [billRange, setBillRange] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="bg-solar-deep py-24 text-center">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl p-20 max-w-2xl mx-auto shadow-4xl animate-zoom-in">
            <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
              <i className="fas fa-check"></i>
            </div>
            <h2 className="text-4xl font-black text-solar-deep mb-4">
              Request Sent!
            </h2>
            <p className="text-slate-500 font-medium">
              Thank you for your interest. A Wattex expert will reach out to you
              shortly.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-8 bg-solar-deep text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-xs"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="consultation-form" className="bg-solar-deep py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          <div className="lg:w-1/2 space-y-10 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                Schedule a <br />
                <span className="text-solar-sky">FREE consultation</span> <br />
                with us today!
              </h2>
              <p className="text-white/60 text-xl lg:text-2xl font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Get genuine advice from our solar experts. No pressure, book
                only if you are satisfied!
              </p>
            </div>
          </div>

          <div className="lg:w-5/12 w-full">
            <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-4xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">
                      Full Name <span className="text-solar-primary">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-solar-sky outline-none transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">
                      WhatsApp number{" "}
                      <span className="text-solar-primary">*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-solar-sky outline-none transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-sm font-bold text-slate-700">
                      Monthly Electricity Bill{" "}
                      <span className="text-solar-primary">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {billOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setBillRange(opt)}
                          className={`px-4 py-2 rounded-lg text-xs font-bold border-2 transition-all ${
                            billRange === opt
                              ? "bg-solar-sky border-solar-sky text-white"
                              : "bg-white border-slate-200 text-slate-600 hover:border-solar-sky/30"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-bold text-slate-700">
                      Property Type{" "}
                      <span className="text-solar-primary">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["Individual House", "Apartment", "Villa"].map(
                        (type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setPropertyType(type)}
                            className={`px-4 py-2 rounded-lg text-xs font-bold border-2 transition-all ${
                              propertyType === type
                                ? "bg-solar-sky border-solar-sky text-white"
                                : "bg-white border-slate-200 text-slate-600 hover:border-solar-sky/30"
                            }`}
                          >
                            {type}
                          </button>
                        ),
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">
                        Pin code <span className="text-solar-primary">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        name="pinCode"
                        className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-solar-sky outline-none transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-solar-sky outline-none transition-all font-medium"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-solar-sky hover:bg-[#0284c7] text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-sky-200 transition-all hover:-translate-y-1"
                >
                  Yes! Reduce my electricity bill
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
