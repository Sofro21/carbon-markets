import React from "react";

const NavbarCollapse = ({ children }) => {
  return (
    <div className="collapse navbar-collapse" id="navbarExample">
      {children}
    </div>
  );
};

export default NavbarCollapse;
