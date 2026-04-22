import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  NAV_LINKS,
  OFFERINGS,
  SOLUTIONS,
  EXPLORE_ITEMS,
} from "../../data/navLinks";
import useScrollPosition from "../hooks/useScrollPosition";
// import Wattex from "../../assets/wattexlogo.png";

const Navbar = ({ forceSolid = false }) => {
  const isScrolled = useScrollPosition(20);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOfferingsOpen, setIsOfferingsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  const offeringsDropdownRef = useRef(null);
  const solutionsDropdownRef = useRef(null);
  const exploreDropdownRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        offeringsDropdownRef.current &&
        !offeringsDropdownRef.current.contains(event.target)
      ) {
        setIsOfferingsOpen(false);
      }
      if (
        solutionsDropdownRef.current &&
        !solutionsDropdownRef.current.contains(event.target)
      ) {
        setIsSolutionsOpen(false);
      }
      if (
        exploreDropdownRef.current &&
        !exploreDropdownRef.current.contains(event.target)
      ) {
        setIsExploreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsOfferingsOpen(false);
    setIsSolutionsOpen(false);
    setIsExploreOpen(false);
  }, [location.pathname]);

  const handleNavClick = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setIsOfferingsOpen(false);
    setIsSolutionsOpen(false);
    setIsExploreOpen(false);
    window.scrollTo(0, 0);
  };

  const solid = isScrolled || isMobileMenuOpen || forceSolid;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-white/95 backdrop-blur-xl shadow-xl py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto px-6 xl:px-12 flex justify-between items-center h-20">
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="relative group flex items-center gap-2"
        >
          <div
            style={{
              background: "linear-gradient(145deg, #e8405a, #c72d45)",
              borderRadius: "10px",
              width: "34px",
              height: "34px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                color: "white",
                fontWeight: 900,
                fontSize: "18px",
                fontFamily: "'Arial Black', sans-serif",
              }}
            >
              W
            </span>
          </div>
          <span
            style={{
              fontSize: "20px",
              fontWeight: 900,
              letterSpacing: "0.5px",
              lineHeight: 1,
              fontFamily: "'Arial Black', sans-serif",
            }}
          >
            <span style={{ color: solid ? "#1a1f3c" : "white" }}>WATTEX</span>
            <span style={{ color: "#e8405a" }}>ENERGY</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div
          className={`hidden lg:flex items-center gap-6 xl:gap-10 font-bold tracking-widest text-[10px] xl:text-xs uppercase ${
            solid ? "text-slate-600" : "text-white/90"
          }`}
        >
          {/* Solar Services Dropdown */}
          <div
            className="relative"
            ref={offeringsDropdownRef}
            onMouseEnter={() => {
              setIsOfferingsOpen(true);
              setIsSolutionsOpen(false);
              setIsExploreOpen(false);
            }}
            onMouseLeave={() => setIsOfferingsOpen(false)}
          >
            <button
              onClick={() => setIsOfferingsOpen(!isOfferingsOpen)}
              className={`flex items-center gap-2 hover:text-solar-primary transition-all duration-300 py-2 ${isOfferingsOpen ? "text-solar-primary" : ""}`}
            >
              Solar Services
              <i
                className={`fas fa-chevron-down text-[8px] transition-transform duration-300 ${isOfferingsOpen ? "rotate-180" : ""}`}
              ></i>
            </button>
            <div
              className={`absolute top-full left-0 w-64 pt-2 transition-all duration-300 transform origin-top-left ${
                isOfferingsOpen
                  ? "scale-100 opacity-100 visible"
                  : "scale-95 opacity-0 invisible"
              }`}
            >
              <div className="bg-white rounded-2xl shadow-4xl border border-slate-100 overflow-hidden p-4 grid gap-1">
                {OFFERINGS.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.path)}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-solar-primary/5 flex items-center justify-center text-solar-primary group-hover:bg-solar-primary group-hover:text-white transition-all">
                      <i className={`fas ${item.icon} text-xs`}></i>
                    </div>
                    <span className="block text-solar-deep text-[11px] font-black tracking-widest uppercase">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Solar Solutions Dropdown */}
          <div
            className="relative"
            ref={solutionsDropdownRef}
            onMouseEnter={() => {
              setIsSolutionsOpen(true);
              setIsOfferingsOpen(false);
              setIsExploreOpen(false);
            }}
            onMouseLeave={() => setIsSolutionsOpen(false)}
          >
            <button
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              className={`flex items-center gap-2 hover:text-solar-primary transition-all duration-300 py-2 ${isSolutionsOpen ? "text-solar-primary" : ""}`}
            >
              Solar Solutions
              <i
                className={`fas fa-chevron-down text-[8px] transition-transform duration-300 ${isSolutionsOpen ? "rotate-180" : ""}`}
              ></i>
            </button>
            <div
              className={`absolute top-full left-0 w-64 pt-2 transition-all duration-300 transform origin-top-left ${
                isSolutionsOpen
                  ? "scale-100 opacity-100 visible"
                  : "scale-95 opacity-0 invisible"
              }`}
            >
              <div className="bg-white rounded-2xl shadow-4xl border border-slate-100 overflow-hidden p-4 grid gap-1">
                {SOLUTIONS.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.path)}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-solar-primary/5 flex items-center justify-center text-solar-primary group-hover:bg-solar-primary group-hover:text-white transition-all">
                      <i className={`fas ${item.icon} text-xs`}></i>
                    </div>
                    <span className="block text-solar-deep text-[11px] font-black tracking-widest uppercase">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Static Nav Links */}
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-solar-primary transition-all duration-300 relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-solar-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Explore Dropdown */}
          <div
            className="relative"
            ref={exploreDropdownRef}
            onMouseEnter={() => {
              setIsExploreOpen(true);
              setIsOfferingsOpen(false);
              setIsSolutionsOpen(false);
            }}
            onMouseLeave={() => setIsExploreOpen(false)}
          >
            <button
              onClick={() => setIsExploreOpen(!isExploreOpen)}
              className={`flex items-center gap-2 hover:text-solar-primary transition-all duration-300 py-2 ${isExploreOpen ? "text-solar-primary" : ""}`}
            >
              Explore
              <i
                className={`fas fa-chevron-down text-[8px] transition-transform duration-300 ${isExploreOpen ? "rotate-180" : ""}`}
              ></i>
            </button>
            <div
              className={`absolute top-full right-0 w-64 pt-2 transition-all duration-300 transform origin-top-right ${
                isExploreOpen
                  ? "scale-100 opacity-100 visible"
                  : "scale-95 opacity-0 invisible"
              }`}
            >
              <div className="bg-white rounded-2xl shadow-4xl border border-slate-100 overflow-hidden p-4 grid gap-1">
                {EXPLORE_ITEMS.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.path)}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-solar-primary/5 flex items-center justify-center text-solar-primary group-hover:bg-solar-primary group-hover:text-white transition-all">
                      <i className={`fas ${item.icon} text-xs`}></i>
                    </div>
                    <span className="block text-solar-deep text-[11px] font-black tracking-widest uppercase">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
            solid ? "bg-solar-deep text-white" : "bg-white/10 text-white"
          }`}
          aria-label="Toggle Menu"
        >
          <i
            className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars-staggered"} text-xl`}
          ></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-2xl transition-all duration-500 origin-top ${
          isMobileMenuOpen
            ? "scale-y-100 opacity-100 visible"
            : "scale-y-0 opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col p-8 gap-6 bg-slate-50/50 max-h-[80vh] overflow-y-auto">
          {/* Mobile Solar Services */}
          <div className="space-y-4">
            <button
              onClick={() => setIsOfferingsOpen(!isOfferingsOpen)}
              className="w-full text-xl font-black text-solar-deep flex items-center justify-between"
            >
              Solar Services
              <i
                className={`fas fa-chevron-down text-sm transition-transform ${isOfferingsOpen ? "rotate-180" : ""}`}
              ></i>
            </button>
            <div
              className={`grid gap-4 pl-4 overflow-hidden transition-all duration-300 ${isOfferingsOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
            >
              {OFFERINGS.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className="text-lg font-bold text-slate-500 hover:text-solar-primary flex items-center gap-3 text-left w-full"
                >
                  <i className={`fas ${item.icon} text-xs`}></i>
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Solar Solutions */}
          <div className="space-y-4">
            <button
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              className="w-full text-xl font-black text-solar-deep flex items-center justify-between"
            >
              Solar Solutions
              <i
                className={`fas fa-chevron-down text-sm transition-transform ${isSolutionsOpen ? "rotate-180" : ""}`}
              ></i>
            </button>
            <div
              className={`grid gap-4 pl-4 overflow-hidden transition-all duration-300 ${isSolutionsOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
            >
              {SOLUTIONS.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className="text-lg font-bold text-slate-500 hover:text-solar-primary flex items-center gap-3 text-left w-full"
                >
                  <i className={`fas ${item.icon} text-xs`}></i>
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Static Links */}
          {NAV_LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.path)}
              className="text-xl font-black text-solar-deep hover:text-solar-primary transition-colors flex items-center justify-between group text-left w-full"
            >
              {link.name}
              <i className="fas fa-chevron-right text-sm opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0"></i>
            </button>
          ))}

          {/* Mobile Explore */}
          <div className="space-y-4">
            <button
              onClick={() => setIsExploreOpen(!isExploreOpen)}
              className="w-full text-xl font-black text-solar-deep flex items-center justify-between"
            >
              Explore
              <i
                className={`fas fa-chevron-down text-sm transition-transform ${isExploreOpen ? "rotate-180" : ""}`}
              ></i>
            </button>
            <div
              className={`grid gap-4 pl-4 overflow-hidden transition-all duration-300 ${isExploreOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
            >
              {EXPLORE_ITEMS.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className="text-lg font-bold text-slate-500 hover:text-solar-primary flex items-center gap-3 text-left w-full"
                >
                  <i className={`fas ${item.icon} text-xs`}></i>
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
