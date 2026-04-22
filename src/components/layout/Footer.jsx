import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-solar-deep py-24 border-t border-white/5 text-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-4 gap-16">
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-4">
          

<div
  style={{
    background: "linear-gradient(135deg, #e8405a, #c72d45)",
    borderRadius: "14px",
    width: "44px",
    height: "44px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: "0 4px 16px rgba(232, 64, 90, 0.35)",
  }}
>
  <span
    style={{
      color: "white",
      fontWeight: 900,
      fontSize: "22px",
      fontFamily: "'Montserrat', 'Arial Black', sans-serif",
    }}
  >
    W
  </span>
</div>
<span
  style={{
    fontFamily: "'Montserrat', 'Arial Black', sans-serif",
    fontSize: "26px",
    fontWeight: 900,
    letterSpacing: "0.5px",
    lineHeight: 1,
  }}
>
  <span style={{ color: "#ffffff" }}>WATTEX</span>
  <span style={{ color: "#e8405a" }}>ENERGY</span>
</span>
          </Link>
          <p className="text-white/40 text-lg leading-relaxed max-w-sm mt-3">
            Engineering a carbon-neutral world through industrial-grade solar
            infrastructure.
          </p>
          <div className="flex gap-6 pt-4">
            <a
              href="https://www.instagram.com/wattexenergy?igsh=MTZwZm9mbnBoemFvNg=="
              className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:bg-solar-primary hover:text-white transition-all"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:bg-solar-primary hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://x.com/wattexenergy"
              className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:bg-solar-primary hover:text-white transition-all"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">
            Solutions
          </h4>
          <ul className="space-y-4 text-white/40 font-bold text-sm">
            <li>
              <Link
                to="/commercial"
                className="hover:text-white transition-colors"
              >
                Commercial Solar
              </Link>
            </li>
            <li>
              <Link
                to="/residential"
                className="hover:text-white transition-colors"
              >
                Residential Rooftop
              </Link>
            </li>
            <li>
              <Link
                to="/utility-scale"
                className="hover:text-white transition-colors"
              >
                Utility Scale Plants
              </Link>
            </li>


            <li>
              <Link
                to="/housing"
                className="hover:text-white transition-colors"
              >
                Housing Society
              </Link>
            </li>


            <li>
              <Link
                to="/off-grid"
                className="hover:text-white transition-colors"
              >
                Off-grid Solutions
              </Link>
            </li>

            <li>
              <Link
                to="/on-grid"
                className="hover:text-white transition-colors"
              >
                On-grid Solutions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">
            Contact
          </h4>
          <p className="text-white/40 font-bold text-sm leading-relaxed">
            Survey No:64, Building Number 9,
            <br />
            13th Floor, We Work,
            <br />
            K Raheja Mindspace, Madhapur,
            <br />
            Hyderabad, Telangana 500081
          </p>
          <p className="text-white/40 font-bold text-sm mt-4">
            9133066113
            <br />
            info@wattexenergy.in
          </p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/5 mt-16">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Wattex Energy. All rights reserved.
          </p>
          <p className="text-white/30 text-sm">
            A Division of Zettabyte IT Solutions Private Limited
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
