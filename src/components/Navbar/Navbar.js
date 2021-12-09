import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <section className="menu menu1 cid-sg6Xmo71ac" id="menu1-1">
      <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
        <div className="container">
          <div className="navbar-brand">
            <span className="navbar-caption-wrap">
              <a
                className="navbar-caption text-white display-7"
                href="/"
              >
                ResearchM4
              </a>
            </span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav nav-dropdown nav-right"
              data-app-modern-menu="true"
            >
              <NavItem name="Work"></NavItem>
              <NavItem name="Services"></NavItem>
              <NavItem name="About"></NavItem>
              <NavItem name="Contacts"></NavItem>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
