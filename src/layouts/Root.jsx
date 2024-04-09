import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = getTitleFromPathname(location.pathname);
  }, [location.pathname]);

  // Function to generate title
  const getTitleFromPathname = (pathname) => {
    if (pathname === "/") {
      return "NestQuest | Home";
    } else {
      return "NestQuest";
    }
  };

  return (
    <div className="bg-white font-primary">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
