import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import coursel2 from "../../assets/coursel2.png";
import Home1 from "../../assets/Home1.jpg";
import Home2 from "../../assets/home2.jpg";
import Home3 from "../../assets/Home3.jpeg";

const slides = [
  {
    image: Home2,
    tag: "Residential Solar Solutions",
  },
  {
    image: coursel2,
    tag: "Commercial Solar Solutions",
  },
  {
    image: Home1,
    tag: "Housing Society Solar",
  },
  {
    image: Home3,
    tag: "Utility Scale Solar",
  },
];

const stats = [
  { value: "100+", label: "Homes Powered" },
  { value: "5 years", label: "Solar Care plan" },
  { value: "90%", label: "Bill Savings" },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById("consultation-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100svh] h-[100vh] flex items-center overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            className="w-full h-full object-cover object-[70%_center] sm:object-[60%_center] md:object-center scale-105"
            alt={slide.tag}
          />
        </div>
      ))}

      {/* Multi-layer overlay for professional depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/30 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/10 via-transparent to-transparent z-10"></div>

      {/* Main Content */}



      <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 relative z-20 h-full flex flex-col justify-center pb-24 xs:pb-32 sm:pb-0">
        <div className="max-w-2xl">
          {/* Animated Tag - Changes per slide */}
          <div className="flex items-center gap-2 xs:gap-3 mb-3 xs:mb-4 sm:mb-5 md:mb-6 relative h-4 xs:h-5">
            <div className="w-4 xs:w-6 sm:w-8 h-[2px] bg-solar-primary flex-shrink-0"></div>
            {slides.map((slide, index) => (
              <span
                key={index}
                className={`absolute left-6 xs:left-8 sm:left-11 text-solar-primary font-semibold uppercase tracking-[0.15em] xs:tracking-[0.2em] sm:tracking-[0.25em] text-[10px] xs:text-xs sm:text-[10px] md:text-[11px] transition-all duration-500 whitespace-nowrap ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-3"
                }`}
              >
                {slide.tag}
              </span>
            ))}
          </div>

          {/* Headline */}
          <h1 className="text-4xl xs:text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight mb-3 xs:mb-4 sm:mb-5 md:mb-6 break-words">
            Power your Home
            <br />
            with{" "}
            <span className="text-solar-primary bg-clip-text bg-gradient-to-r from-solar-sky to-cyan-300">
              Clean Energy
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/90 text-sm xs:text-base sm:text-sm md:text-base lg:text-lg max-w-md leading-relaxed mb-4 xs:mb-5 sm:mb-6 md:mb-8 font-medium">
            Save up to 90% on electricity bills. Expert installation across
            Telangana & AndhraPradesh with 25-year warranty.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row flex-wrap items-start gap-2 xs:gap-3 sm:gap-4 mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16">
            <button
              onClick={scrollToForm}
              className="group bg-solar-primary hover:bg-rose-600 text-white px-4 xs:px-5 sm:px-3.5 md:px-4 py-2.5 xs:py-3 sm:py-2.5 rounded-md sm:rounded-lg font-bold uppercase tracking-wider text-xs xs:text-sm sm:text-[10px] transition-all duration-300 shadow-lg shadow-solar-primary/25 hover:shadow-xl hover:shadow-solar-primary/30 hover:-translate-y-0.5 w-auto inline-flex items-center justify-center whitespace-nowrap"
            >
              Book Free Consultation
              <i className="fas fa-arrow-right ml-1.5 text-[10px] xs:text-xs transition-transform duration-300 group-hover:translate-x-1"></i>
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="group border border-white/20 text-white px-5 xs:px-6 sm:px-6 md:px-7 py-2.5 xs:py-3 sm:py-2.5 rounded-md sm:rounded-lg font-bold uppercase tracking-wider text-xs xs:text-sm sm:text-[10px] hover:border-white/40 hover:bg-white/5 transition-all duration-300 w-auto inline-flex items-center justify-center whitespace-nowrap"
            >
              Contact Us
              <i className="fas fa-phone ml-1.5 text-[10px] xs:text-xs opacity-50 group-hover:opacity-100 transition-opacity"></i>
            </button>
          </div>

          {/* Stats Row */}
          <div className="flex items-center gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-12 flex-wrap">
            {stats.map((stat, index) => (
              <React.Fragment key={index}>
                <div>
                  <p className="text-white text-xl xs:text-2xl sm:text-xl md:text-2xl lg:text-3xl font-black tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-solar-primary/80 text-[10px] xs:text-xs sm:text-[10px] font-bold uppercase tracking-[0.12em] xs:tracking-[0.15em] sm:tracking-[0.2em] mt-0.5 xs:mt-1 whitespace-nowrap">
                    {stat.label}
                  </p>
                </div>
                {index < stats.length - 1 && (
                  <div className="w-px h-6 xs:h-8 sm:h-10 bg-white/10"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-3 xs:bottom-4 sm:bottom-6 md:bottom-8 left-3 xs:left-4 sm:left-6 lg:left-12 z-20 flex gap-1.5 xs:gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all duration-500 rounded-full ${
              index === currentSlide
                ? "w-6 xs:w-8 sm:w-10 bg-solar-primary"
                : "w-3 xs:w-4 sm:w-5 bg-white/20 hover:bg-white/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;