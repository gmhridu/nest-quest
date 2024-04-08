import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

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
    <div>
      <Outlet />
    </div>
  );
};

export default Root;
