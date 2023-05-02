import { React, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [navLinks, setNavLinks] = useState([
    { path: "/portfolio", label: "Portfolio", className: "" },
    { path: "/about", label: "About", className: "" },
    { path: "/contact", label: "Contact", className: "" },
  ]);
  const location = useLocation();
  useEffect(() => {
    // Update the navLinks array based on the current URL path
    const newNavLinks = navLinks.map((link) => {
      if (link.path === location.pathname) {
        return { ...link, className: "noActive" };
      } else {
        return { ...link, className: "" };
      }
    });
    setNavLinks(newNavLinks);
  }, [location]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col s9">
            <h3 id="nav-banner">
              <Link to="/" className="black-text">
                Daniel Jauregui
              </Link>
            </h3>
          </div>
        </div>
        <nav className="z-depth-0 #ffffff white">
          <div className="#ffffff white">
            <ul id="nav-mobile" className="left z-depth-0">
              {navLinks.map((link) => (
                <li key={link.path} className={link.className}>
                  <Link to={link.path} className="black-text bold z-depth-0">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
