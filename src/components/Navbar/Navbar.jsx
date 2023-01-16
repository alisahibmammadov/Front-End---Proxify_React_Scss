import React, { useEffect, useState } from "react";
import "../Navbar/Navbar.scss";
// import WebSite_Logo from '../../images/website-logo.png'
import { Link } from "react-router-dom";

function Navbar() {
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <div className="nav fixed-top">
      <div className="navbar container">
        <div className="navbar-logo">
          <img
            src="https://public-assets.toggl.com/b/assets/@toggl/hire/images/61b31827d33479857511f98d_proxify_logo-removebg-preview.6cfa7bcf.png"
            alt="Website-logo"
            className="logo"
          />
        </div>
        <div className="navbar-links">
          <Link style={{ textDecoration: "none" }}>
            <p>How we hire</p>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <p>Company</p>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <p>Member stories</p>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <p>Open roles</p>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <p className="join-link">Join us</p>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <p className="login-link">Log in</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
