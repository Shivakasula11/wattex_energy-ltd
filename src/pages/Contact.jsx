import React, { useState } from 'react';
import { DEPARTMENTS } from '../data/navLinks';
import { CONTACT_FAQS } from '../data/faqs';
import SEOHead from '../components/seo/SEOHead';
import FaqAccordion from '../components/ui/FaqAccordion';
import Contactus from '../assets/contactus.jpeg';


const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    phone: '',
    sector: 'Commercial Rooftop',
    brief: '',
    tfs: false
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="animate-fade-in bg-white min-h-screen">
      <SEOHead
        title="Contact Us — Free Solar Consultation"
        description="Get a free solar consultation from Wattex Energy Hyderabad. Email: sales@wattex.in . Residential, commercial & society solar queries welcome."
        path="/contact"
        keywords="contact Wattex Energy, solar consultation Hyderabad, free solar assessment, solar quote Hyderabad, Wattex Energy contact, solar company near me"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Wattex Energy',
          url: 'https://sales@wattex.in/contact',
          mainEntity: {
            '@type': 'Organization',
            name: 'Wattex Energy',
            email: 'sales@wattex.in',
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer Service',
              email: 'sales@wattex.in',
              areaServed: 'IN',
              availableLanguage: ['English', 'Hindi', 'Telugu'],
            },
          },
        }}
      />
      {/* Hero */}
      <section className="relative h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img loading="lazy" src={Contactus} className="w-full h-full object-cover" alt="Wattex Energy office — solar consultation and customer support" />
        
          {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-solar-deep/50 to-white"></div> */}
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-8 animate-slide-up">
            

<h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-heading leading-[1] tracking-tighter uppercase"> Engineering <br /><span className="text-solar-primary">Connections</span>.
            </h1>
            <p className="text-white/60 text-xl md:text-2xl max-w-2xl font-medium leading-relaxed">
              Transitioning to renewable energy requires precision. Our technical advisors are ready to architect your sustainable infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 lg:py-40 -mt-20 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Sidebar */}
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-6">
                <h2 className="text-5xl font-black text-solar-deep tracking-tight">Project Intake</h2>
                <p className="text-slate-500 text-xl font-medium leading-relaxed">
                  Start your journey toward zero-carbon operations. Choose a specialized department to expedite your inquiry.
                </p>
              </div>

              {/* Department Grid */}
              <div className="grid gap-4">
                {DEPARTMENTS.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-4xl transition-all duration-500 group">
                    <div className="flex items-center gap-6">
                      <div className={`w-12 h-12 flex items-center justify-center ${item.colorClass} text-xl bg-white rounded-xl shadow-sm`}>
                        <i className={`fas ${item.icon}`}></i>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">{item.dept}</h4>
                        <p className="text-solar-deep font-bold text-lg">{item.email}</p>
                      </div>
                    </div>
                    <i className="fas fa-arrow-right text-slate-200 group-hover:text-solar-primary transition-all"></i>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <div className="space-y-6 pt-10">
                <h3 className="text-2xl font-black text-solar-deep px-4">Common Briefings</h3>
                <FaqAccordion faqs={CONTACT_FAQS} />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="sticky top-32">
                <div className="bg-white rounded-[3rem] shadow-[0_20px_80px_-20px_rgba(0,0,0,0.15)] border border-slate-100/50 relative overflow-hidden">
                  {/* Decorative Background Elements */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-solar-sky/5 to-solar-primary/5 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-solar-primary/5 to-transparent rounded-full -ml-30 -mb-30 blur-2xl"></div>

                  {!submitted ? (
                    <div className="relative z-10 p-12 lg:p-16">
                      {/* Form Header */}
                      <div className="mb-12 pb-8 border-b border-slate-100">
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex-1">
                            <div className="inline-flex items-center gap-2 bg-solar-primary/10 text-solar-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                              <i className="fas fa-bolt text-xs"></i>
                              Priority Processing Available
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-black text-solar-deep mb-3 tracking-tight">Project Initiation Form</h3>
                            <p className="text-slate-500 text-base leading-relaxed">Complete the form below to begin your renewable energy transformation. Our technical team will review your submission within 24 hours.</p>
                          </div>
                        </div>
                        
                        {/* Response Time Indicator */}
                        <div className="flex items-center gap-3 bg-emerald-50/50 border border-emerald-100 rounded-2xl p-4">
                          <div className="flex items-center justify-center w-10 h-10 bg-emerald-500 rounded-xl">
                            <i className="fas fa-clock text-white text-sm"></i>
                          </div>
                          <div>
                            <p className="text-emerald-900 font-bold text-sm">Estimated Response Time</p>
                            <p className="text-emerald-600 text-xs font-semibold">Within 24 Hours • Business Days</p>
                          </div>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Personal Information Section */}
                        <div className="space-y-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-solar-deep rounded-lg flex items-center justify-center text-white text-sm font-bold">1</div>
                            <h4 className="text-sm font-black uppercase tracking-wider text-solar-deep">Contact Information</h4>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Full Name */}
                            <div className="space-y-2.5">
                              <label htmlFor="clientName" className="block text-xs font-bold uppercase tracking-wider text-slate-600 ml-1">
                                Full Name <span className="text-red-500">*</span>
                              </label>
                              <div className="relative group">
                                <div className={`absolute inset-0 bg-gradient-to-r from-solar-sky to-solar-primary rounded-2xl opacity-0 group-focus-within:opacity-100 blur transition-opacity duration-300`}></div>
                                <input
                                  id="clientName"
                                  required
                                  type="text"
                                  name="clientName"
                                  value={formData.clientName}
                                  onChange={handleChange}
                                  onFocus={() => setFocusedField('clientName')}
                                  onBlur={() => setFocusedField(null)}
                                  placeholder="John Anderson"
                                  className="relative w-full bg-slate-50/80 border-2 border-slate-200 px-5 py-4 rounded-2xl focus:bg-white focus:border-solar-sky outline-none transition-all duration-300 font-semibold text-solar-deep placeholder:text-slate-300 placeholder:font-normal"
                                />
                                <i className={`fas fa-user absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 transition-colors ${focusedField === 'clientName' ? 'text-solar-sky' : ''}`}></i>
                              </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-2.5">
                              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-600 ml-1">
                                Business Email <span className="text-red-500">*</span>
                              </label>
                              <div className="relative group">
                                <div className={`absolute inset-0 bg-gradient-to-r from-solar-sky to-solar-primary rounded-2xl opacity-0 group-focus-within:opacity-100 blur transition-opacity duration-300`}></div>
                                <input
                                  id="email"
                                  required
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  onFocus={() => setFocusedField('email')}
                                  onBlur={() => setFocusedField(null)}
                                  placeholder="john.anderson@company.com"
                                  className="relative w-full bg-slate-50/80 border-2 border-slate-200 px-5 py-4 rounded-2xl focus:bg-white focus:border-solar-sky outline-none transition-all duration-300 font-semibold text-solar-deep placeholder:text-slate-300 placeholder:font-normal"
                                />
                                <i className={`fas fa-envelope absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 transition-colors ${focusedField === 'email' ? 'text-solar-sky' : ''}`}></i>
                              </div>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Phone */}
                            <div className="space-y-2.5">
                              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-600 ml-1">
                                Phone Number <span className="text-red-500">*</span>
                              </label>
                              <div className="relative group">
                                <div className={`absolute inset-0 bg-gradient-to-r from-solar-sky to-solar-primary rounded-2xl opacity-0 group-focus-within:opacity-100 blur transition-opacity duration-300`}></div>
                                <input
                                  id="phone"
                                  required
                                  type="tel"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                  onFocus={() => setFocusedField('phone')}
                                  onBlur={() => setFocusedField(null)}
                                  placeholder="+91 98765 43210"
                                  className="relative w-full bg-slate-50/80 border-2 border-slate-200 px-5 py-4 rounded-2xl focus:bg-white focus:border-solar-sky outline-none transition-all duration-300 font-semibold text-solar-deep placeholder:text-slate-300 placeholder:font-normal"
                                />
                                <i className={`fas fa-phone absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 transition-colors ${focusedField === 'phone' ? 'text-solar-sky' : ''}`}></i>
                              </div>
                            </div>

                            {/* Sector */}
                            <div className="space-y-2.5">
                              <label htmlFor="sector" className="block text-xs font-bold uppercase tracking-wider text-slate-600 ml-1">
                                Project Category <span className="text-red-500">*</span>
                              </label>
                              <div className="relative group">
                                <div className={`absolute inset-0 bg-gradient-to-r from-solar-sky to-solar-primary rounded-2xl opacity-0 group-focus-within:opacity-100 blur transition-opacity duration-300`}></div>
                                <select
                                  id="sector"
                                  name="sector"
                                  value={formData.sector}
                                  onChange={handleChange}
                                  onFocus={() => setFocusedField('sector')}
                                  onBlur={() => setFocusedField(null)}
                                  className="relative w-full bg-slate-50/80 border-2 border-slate-200 px-5 py-4 rounded-2xl focus:bg-white focus:border-solar-sky outline-none transition-all duration-300 font-semibold text-solar-deep appearance-none cursor-pointer"
                                >
                                  <option value="Commercial Rooftop">Commercial Rooftop</option>
                                  <option value="Industrial Microgrid">Industrial Microgrid</option>
                                  <option value="Utility Scale Solar Farm">Utility Scale Solar Farm</option>
                                  <option value="EV Fleet Infrastructure">EV Fleet Infrastructure</option>
                                  <option value="Residential Solar">Residential Solar</option>
                                  <option value="Society/Community Solar">Society/Community Solar</option>
                                  <option value="On-Grid Solar System">On-Grid Solar System (Grid-Tied)</option>
                                  <option value="Off-Grid Solar System">Off-Grid Solar System (Standalone)</option>
                                </select>
                                <i className={`fas fa-chevron-down absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 text-sm transition-colors pointer-events-none ${focusedField === 'sector' ? 'text-solar-sky' : ''}`}></i>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Project Details Section */}
                        <div className="space-y-6 pt-4">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-solar-deep rounded-lg flex items-center justify-center text-white text-sm font-bold">2</div>
                            <h4 className="text-sm font-black uppercase tracking-wider text-solar-deep">Project Details</h4>
                          </div>

                          {/* Technical Brief */}
                          <div className="space-y-2.5">
                            <label htmlFor="brief" className="block text-xs font-bold uppercase tracking-wider text-slate-600 ml-1">
                              Project Description <span className="text-red-500">*</span>
                            </label>
                            <div className="relative group">
                              <div className={`absolute inset-0 bg-gradient-to-r from-solar-sky to-solar-primary rounded-2xl opacity-0 group-focus-within:opacity-100 blur transition-opacity duration-300`}></div>
                              <textarea
                                id="brief"
                                required
                                name="brief"
                                rows={5}
                                value={formData.brief}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('brief')}
                                onBlur={() => setFocusedField(null)}
                                placeholder="Please describe your renewable energy requirements, site specifications, expected capacity, timeline, and any specific technical constraints..."
                                className="relative w-full bg-slate-50/80 border-2 border-slate-200 px-5 py-4 rounded-2xl focus:bg-white focus:border-solar-sky outline-none transition-all duration-300 font-medium text-solar-deep placeholder:text-slate-300 placeholder:font-normal resize-none leading-relaxed"
                              ></textarea>
                              <div className="absolute bottom-4 right-4 text-xs text-slate-400 font-semibold">
                                {formData.brief.length} / 1000
                              </div>
                            </div>
                            <p className="text-xs text-slate-400 ml-1 flex items-center gap-2">
                              <i className="fas fa-circle-info"></i>
                              Include site location, available roof/land area, current energy consumption, and project goals
                            </p>
                          </div>
                        </div>

                        {/* Priority Services */}
                        <div className="space-y-4 pt-4">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-solar-deep rounded-lg flex items-center justify-center text-white text-sm font-bold">3</div>
                            <h4 className="text-sm font-black uppercase tracking-wider text-solar-deep">Additional Services</h4>
                          </div>

                          {/* TFS Checkbox */}
                          <label htmlFor="tfs" className="flex items-start gap-4 p-5 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-100 cursor-pointer hover:border-amber-200 transition-all group">
                            <input
                              id="tfs"
                              type="checkbox"
                              name="tfs"
                              checked={formData.tfs}
                              onChange={handleChange}
                              className="w-5 h-5 rounded-lg border-2 border-amber-300 text-solar-primary focus:ring-2 focus:ring-solar-primary focus:ring-offset-2 cursor-pointer mt-0.5"
                            />
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-bold text-amber-900">Request Priority Technical Feasibility Study (TFS)</span>
                                <span className="bg-amber-500 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-full">Recommended</span>
                              </div>
                              <p className="text-xs text-amber-700 leading-relaxed">
                                Get a comprehensive analysis including site assessment, energy modeling, ROI projections, and regulatory compliance review within 48 hours.
                              </p>
                            </div>
                          </label>
                        </div>

                        {/* Privacy Notice */}
                        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                          <div className="flex gap-3">
                            <i className="fas fa-shield-halved text-slate-400 text-lg mt-0.5"></i>
                            <div>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                <span className="font-bold text-slate-700">Your privacy is protected.</span> All information submitted through this form is encrypted and handled in accordance with our data protection policies. We will never share your details with third parties.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                          <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 px-8 rounded-2xl font-bold text-sm shadow-[0_10px_40px_-10px_rgba(37,99,235,0.4)] hover:shadow-[0_20px_60px_-10px_rgba(37,99,235,0.5)] transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            <span className="relative flex items-center gap-3">
                              <i className="fas fa-paper-plane group-hover:rotate-12 transition-transform"></i>
                              SUBMIT PROJECT BRIEF
                              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                            </span>
                          </button>
                          <p className="text-center text-xs text-slate-400 mt-4">
                            By submitting, you agree to our Terms of Service and Privacy Policy
                          </p>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <div className="text-center py-20 px-12 space-y-10 animate-zoom-in">
                      {/* Success Icon */}
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-emerald-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                        <div className="relative w-32 h-32 bg-gradient-to-br from-emerald-400 to-emerald-600 text-white rounded-full flex items-center justify-center text-5xl mx-auto shadow-2xl border-8 border-emerald-50">
                          <i className="fas fa-check"></i>
                        </div>
                      </div>

                      {/* Success Message */}
                      <div className="space-y-4">
                        <h3 className="text-4xl font-black text-solar-deep tracking-tight">Submission Successful!</h3>
                        <p className="text-slate-500 font-medium text-lg max-w-md mx-auto leading-relaxed">
                          Your project brief has been received and assigned to our <span className="text-solar-primary font-bold">Technical Architecture Team</span>.
                        </p>
                      </div>

                      {/* Next Steps */}
                      <div className="bg-slate-50 rounded-2xl p-8 max-w-md mx-auto">
                        <h4 className="font-bold text-solar-deep mb-4 flex items-center justify-center gap-2">
                          <i className="fas fa-list-check text-solar-primary"></i>
                          What Happens Next?
                        </h4>
                        <div className="space-y-3 text-left">
                          <div className="flex gap-3">
                            <div className="w-6 h-6 bg-solar-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <i className="fas fa-check text-solar-primary text-xs"></i>
                            </div>
                            <p className="text-sm text-slate-600">Review by technical team within 24 hours</p>
                          </div>
                          <div className="flex gap-3">
                            <div className="w-6 h-6 bg-solar-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <i className="fas fa-check text-solar-primary text-xs"></i>
                            </div>
                            <p className="text-sm text-slate-600">Personalized consultation scheduling</p>
                          </div>
                          <div className="flex gap-3">
                            <div className="w-6 h-6 bg-solar-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <i className="fas fa-check text-solar-primary text-xs"></i>
                            </div>
                            <p className="text-sm text-slate-600">Preliminary feasibility assessment</p>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <button
                          onClick={() => setSubmitted(false)}
                          className="bg-slate-100 hover:bg-solar-deep text-slate-600 hover:text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all shadow-lg hover:shadow-xl"
                        >
                          <i className="fas fa-plus mr-2"></i>
                          Submit Another Inquiry
                        </button>
                        <a
                          href="mailto:wattexenergy@gmail.com"
                          className="bg-gradient-to-r from-solar-deep to-solar-primary text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all shadow-lg hover:shadow-xl"
                        >
                          <i className="fas fa-envelope mr-2"></i>
                          Email Us Directly
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-4">
                <span className="text-solar-primary font-black uppercase tracking-widest text-xs">Global Presence</span>
                <h2 className="text-5xl font-black text-solar-deep tracking-tight">Visit Our Headquarters</h2>
              </div>
              <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="w-12 h-12 bg-solar-primary rounded-2xl flex items-center justify-center text-white text-xl">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div>
                  <p className="text-solar-deep font-black"> Mindspace, Madhapur</p>
                  <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Hyderabad, Telangana 500081</p>
                </div>
              </div>
            </div>
            <div className="rounded-[4rem] overflow-hidden shadow-4xl border-8 border-white relative h-[500px] group">
              <iframe
  title="Wattex HQ Location"
  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3806.4158375578245!2d78.37462507516616!3d17.43979998345628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI2JzIzLjMiTiA3OMKwMjInMzcuOSJF!5e0!3m2!1sen!2sin!4v1776797199295!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="grayscale group-hover:grayscale-0 transition-all duration-1000"
></iframe>
              <div className="absolute inset-0 pointer-events-none border-[20px] border-white/10 rounded-[3.5rem]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-24 border-t border-slate-50 bg-slate-50/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12 lg:gap-24 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {['ISO 9001 Certified', 'LEED Platinum Partner', 'TÜV Rheinland Approved', 'Engineering Council Member'].map((badge, i) => (
              <div key={i} className="flex items-center gap-3 font-black text-solar-deep uppercase tracking-tighter text-xl">
                <i className="fas fa-award text-solar-primary"></i>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;