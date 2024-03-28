import React from "react";
import "./FloatingNavbar.css"; // CSS file for styling

const FloatingNavbar = ({ children }) => {
  return <div className="floating-navbar">{children}</div>;
};

export default FloatingNavbar;
