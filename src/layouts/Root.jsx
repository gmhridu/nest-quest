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
    }
    else if (pathname === "/about") {
      return "NestQuest | About";
    }  
    else if (pathname === "/services") {
      return "NestQuest | Services";
    } 
    else if (pathname === "/testimonials") {
      return "NestQuest | Testimonials";
    } 
    else if (pathname === "/contact") {
      return "NestQuest | Contact";
    } 
    else if (pathname === "/login") {
      return "NestQuest | Login";
    } 
    else if (pathname === "/register") {
      return "NestQuest | Register";
    } 
    else if (pathname === "/profile") {
      return "NestQuest | Profile";
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
