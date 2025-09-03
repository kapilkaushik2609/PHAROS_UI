// Layout.jsx (Wrapper for Navbar, Header, and Content)
import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#00406B] to-[#001A2C]">
      {/* Navbar (fixed top) */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
        <Header />
      </div>

      {/* Tenant Dashboard Content */}
      <div className="pt-[140px] px-6">
        {/* Adjust padding based on Navbar + Header height */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
