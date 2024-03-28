import React from "react";
import NavbarBrand from "./NavbarBrand.js";
import NavbarToggle from "./NavbarToggle.js";
import NavbarCollapse from "./NavbarCollapse.js";
import SearchForm from "./SearchForm.js";
import SignUpButton from "./SignUpButton.js";
import NavMenu from "./NavMenu.js";

const DarkNavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavbarToggle />
          <NavbarBrand />
          <NavbarCollapse>
            <NavMenu />
            <div className="d-flex align-items-center flex-column flex-lg-row">
              <SearchForm />
              <SignUpButton />
            </div>
          </NavbarCollapse>
        </div>
      </nav>
    </div>
  );
};

export default DarkNavbar;
