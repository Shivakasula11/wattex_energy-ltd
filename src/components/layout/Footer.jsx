import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";

const Footer = () => {
  const theme = useTheme();

  // Breakpoints
  const isSmartwatch = useMediaQuery("(max-width:240px)");
  const isMobileS = useMediaQuery("(min-width:241px) and (max-width:380px)");
  const isMobileM = useMediaQuery("(min-width:381px) and (max-width:480px)");
  const isMobileL = useMediaQuery("(min-width:481px) and (max-width:600px)");
  const isTabletPortrait = useMediaQuery("(min-width:601px) and (max-width:768px)");
  const isTabletLandscape = useMediaQuery("(min-width:769px) and (max-width:1024px)");
  const isSmallLaptop = useMediaQuery("(min-width:1025px) and (max-width:1280px)");
  const isDesktop = useMediaQuery("(min-width:1281px)");

  // Derived helpers
  const isMobileAny = isSmartwatch || isMobileS || isMobileM;
  const isPhablet = isMobileL;
  const isTabletAny = isTabletPortrait || isTabletLandscape;

  // Responsive values — MEDIUM height
  const footerPadding = isSmartwatch
    ? "18px 8px"
    : isMobileS
    ? "24px 12px"
    : isMobileM
    ? "28px 16px"
    : isPhablet
    ? "32px 20px"
    : isTabletPortrait
    ? "38px 24px"
    : isTabletLandscape
    ? "44px 32px"
    : isSmallLaptop
    ? "56px 40px"
    : "72px 48px";

  const gridLayout = isSmartwatch || isMobileS || isMobileM
    ? "1fr"
    : isPhablet
    ? "1fr"
    : isTabletPortrait
    ? "1fr 1fr"
    : isTabletLandscape
    ? "1fr 1fr"
    : isSmallLaptop
    ? "2fr 1fr 1fr"
    : "2fr 1fr 1fr";

  const gridGap = isSmartwatch
    ? "16px"
    : isMobileAny
    ? "22px"
    : isPhablet
    ? "26px"
    : isTabletAny
    ? "30px"
    : "48px";

  const brandFontSize = isSmartwatch
    ? "14px"
    : isMobileS
    ? "18px"
    : isMobileM
    ? "20px"
    : isPhablet
    ? "22px"
    : "26px";

  const logoSize = isSmartwatch
    ? "28px"
    : isMobileS
    ? "34px"
    : isMobileM
    ? "38px"
    : isPhablet
    ? "40px"
    : "44px";

  const logoRadius = isSmartwatch ? "8px" : isMobileS ? "10px" : "14px";

  const logoLetterSize = isSmartwatch
    ? "14px"
    : isMobileS
    ? "17px"
    : isMobileM
    ? "19px"
    : "22px";

  const descFontSize = isSmartwatch
    ? "11px"
    : isMobileS
    ? "12px"
    : isMobileM
    ? "13px"
    : isPhablet
    ? "14px"
    : isTabletPortrait
    ? "15px"
    : "18px";

  const headingFontSize = isSmartwatch
    ? "9px"
    : isMobileS
    ? "10px"
    : "12px";

  const linkFontSize = isSmartwatch
    ? "11px"
    : isMobileS
    ? "12px"
    : isMobileM
    ? "13px"
    : isPhablet
    ? "13px"
    : "14px";

  const socialSize = isSmartwatch
    ? "28px"
    : isMobileS
    ? "32px"
    : isMobileM
    ? "36px"
    : "40px";

  const socialGap = isSmartwatch
    ? "8px"
    : isMobileS
    ? "10px"
    : isMobileM
    ? "14px"
    : "24px";

  const socialRadius = isSmartwatch ? "6px" : "8px";

  const copyrightDirection = isMobileAny || isPhablet ? "column" : "row";

  const copyrightFontSize = isSmartwatch
    ? "9px"
    : isMobileS
    ? "10px"
    : isMobileM
    ? "11px"
    : isPhablet
    ? "12px"
    : "14px";

  const contactFontSize = isSmartwatch
    ? "11px"
    : isMobileS
    ? "12px"
    : isMobileM
    ? "13px"
    : isPhablet
    ? "13px"
    : "14px";

  const linkSpacing = isSmartwatch ? "6px" : isMobileAny ? "8px" : "14px";

  const sectionHeadingMb = isSmartwatch
    ? "10px"
    : isMobileAny
    ? "14px"
    : isPhablet
    ? "16px"
    : "24px";

  const brandColSpan =
    isSmartwatch || isMobileAny || isPhablet || isTabletPortrait || isTabletLandscape
      ? "auto"
      : "span 1";

  return (
    <Box
      component="footer"
      className="bg-solar-deep border-t border-white/5 text-white"
      sx={{
        padding: footerPadding,
        width: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* Main Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: gridLayout,
          gap: gridGap,
          maxWidth: isDesktop ? "1440px" : "100%",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Brand Column */}
        <Box
          sx={{
            gridColumn:
              isSmallLaptop || isDesktop ? "span 1" : brandColSpan,
          }}
        >
          <Link
            to="/"
            className="flex items-center"
            style={{
              gap: isSmartwatch ? "6px" : isMobileS ? "8px" : "16px",
              textDecoration: "none",
              flexWrap: "nowrap",
            }}
          >
            <div
              style={{
                background: "linear-gradient(135deg, #e8405a, #c72d45)",
                borderRadius: logoRadius,
                width: logoSize,
                height: logoSize,
                minWidth: logoSize,
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
                  fontSize: logoLetterSize,
                  fontFamily: "'Montserrat', 'Arial Black', sans-serif",
                }}
              >
                W
              </span>
            </div>
            <span
              style={{
                fontFamily: "'Montserrat', 'Arial Black', sans-serif",
                fontSize: brandFontSize,
                fontWeight: 900,
                letterSpacing: isSmartwatch ? "0px" : "0.5px",
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ color: "#ffffff" }}>WATTEX</span>
              <span style={{ color: "#e8405a" }}>ENERGY</span>
            </span>
          </Link>

          <Box
            component="p"
            className="text-white/40"
            sx={{
              fontSize: descFontSize,
              lineHeight: 1.7,
              maxWidth: isSmartwatch ? "100%" : isMobileAny ? "260px" : "380px",
              marginTop: isSmartwatch ? "8px" : "10px",
            }}
          >
            Engineering a carbon-neutral world through industrial-grade solar
            infrastructure.
          </Box>

          {/* Social Icons */}
          <Box
            sx={{
              display: "flex",
              gap: socialGap,
              paddingTop: isSmartwatch ? "10px" : "14px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://www.instagram.com/wattexenergy?igsh=MTZwZm9mbnBoemFvNg=="
              className="flex items-center justify-center text-white/40 hover:bg-solar-primary hover:text-white transition-all"
              aria-label="Instagram"
              style={{
                width: socialSize,
                height: socialSize,
                borderRadius: socialRadius,
                background: "rgba(255,255,255,0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: socialSize,
              }}
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="flex items-center justify-center text-white/40 hover:bg-solar-primary hover:text-white transition-all"
              aria-label="LinkedIn"
              style={{
                width: socialSize,
                height: socialSize,
                borderRadius: socialRadius,
                background: "rgba(255,255,255,0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: socialSize,
              }}
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://x.com/wattexenergy"
              className="flex items-center justify-center text-white/40 hover:bg-solar-primary hover:text-white transition-all"
              aria-label="Twitter"
              style={{
                width: socialSize,
                height: socialSize,
                borderRadius: socialRadius,
                background: "rgba(255,255,255,0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: socialSize,
              }}
            >
              <i className="fab fa-twitter"></i>
            </a>
          </Box>
        </Box>

        {/* Solutions Column */}
        <div>
          <Box
            component="h4"
            className="text-white font-black uppercase tracking-widest"
            sx={{
              fontSize: headingFontSize,
              marginBottom: sectionHeadingMb,
            }}
          >
            Solutions
          </Box>
          <Box
            component="ul"
            className="text-white/40 font-bold"
            sx={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: linkSpacing,
              fontSize: linkFontSize,
            }}
          >
            <li>
              <Link
                to="/commercial"
                className="hover:text-white transition-colors"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Commercial Solar
              </Link>
            </li>
            <li>
              <Link
                to="/residential"
                className="hover:text-white transition-colors"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Residential Rooftop
              </Link>
            </li>
            <li>
              <Link
                to="/utility-scale"
                className="hover:text-white transition-colors"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Utility Scale Plants
              </Link>
            </li>
            <li>
              <Link
                to="/housing"
                className="hover:text-white transition-colors"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Housing Society
              </Link>
            </li>
            <li>
              <Link
                to="/off-grid"
                className="hover:text-white transition-colors"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Off-grid Solutions
              </Link>
            </li>
            <li>
              <Link
                to="/on-grid"
                className="hover:text-white transition-colors"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                On-grid Solutions
              </Link>
            </li>
          </Box>
        </div>

       {/* Contact Column */}
<div>
  <Box
    component="h4"
    className="text-white font-black uppercase tracking-widest"
    sx={{
      fontSize: headingFontSize,
      marginBottom: sectionHeadingMb,
    }}
  >
    Contact
  </Box>
  <Box
    component="p"
    className="text-white/40 font-bold"
    sx={{
      fontSize: contactFontSize,
      lineHeight: 1.8,
      wordBreak: "break-word",
    }}
  >
    Survey No:64, Building Number 9,
    <br />
    13th Floor, We Work,
    <br />
    K Raheja Mindspace, Madhapur,
    <br />
    Hyderabad, Telangana 500081
  </Box>
  <Box
    component="div"
    className="text-white/40 font-bold"
    sx={{
      fontSize: contactFontSize,
      marginTop: isSmartwatch ? "10px" : "14px",
      wordBreak: "break-word",
    }}
  >
    <Box
      component="p"
      sx={{
        margin: 0,
        marginBottom: isSmartwatch ? "6px" : "8px",
        display: "flex",
        alignItems: "center",
        gap: isSmartwatch ? "6px" : "10px",
      }}
    >
      <i className="fas fa-phone" style={{ fontSize: contactFontSize ,}}></i>
  
      9133066113
    </Box>
    <Box
      component="p"
      sx={{
        margin: 0,
        display: "flex",
        alignItems: "center",
        gap: isSmartwatch ? "6px" : "10px",
        
      }}
    >
      <i className="fas fa-envelope" style={{ fontSize: contactFontSize, }}></i>
      info@wattex.in
    </Box>
  </Box>
</div>
      </Box>

      {/* Copyright Bar */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          marginTop: isSmartwatch ? "16px" : isMobileAny ? "22px" : isPhablet ? "28px" : "48px",
        }}
      >
        <Box
          sx={{
            maxWidth: isDesktop ? "1440px" : "100%",
            margin: "0 auto",
            padding: isSmartwatch
              ? "10px 0"
              : isMobileAny
              ? "14px 0"
              : "20px 0",
            display: "flex",
            flexDirection: copyrightDirection,
            alignItems: "center",
            justifyContent: "space-between",
            gap: isSmartwatch ? "6px" : isMobileAny ? "8px" : "16px",
            textAlign: isMobileAny || isPhablet ? "center" : "left",
          }}
        >
          <Box
            component="p"
            className="text-white/30"
            sx={{ fontSize: copyrightFontSize, margin: 0 }}
          >
            © {new Date().getFullYear()} Wattex Energy. All rights reserved.
          </Box>
          <Box
            component="p"
            className="text-white/30"
            sx={{ fontSize: copyrightFontSize, margin: 0 }}
          >
            A Division of Zettabyte IT Solutions Private Limited
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;