import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatBot from '../ui/ChatBot';
import BackToTop from '../ui/BackToTop';

const SOLID_NAV_PATHS = ['/blogs', '/calculator', '/consultation' ];

const Layout = () => {
  const location = useLocation();
  const forceSolid =
    SOLID_NAV_PATHS.includes(location.pathname) ||
    location.pathname.startsWith('/blog/');

  return (
    <div className="min-h-screen font-sans bg-white text-slate-900 overflow-x-hidden">
      <Navbar forceSolid={forceSolid} />
      <Outlet />
      <Footer />
      <ChatBot />
      <BackToTop />
    </div>
  );
};

export default Layout;