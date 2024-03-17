import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  //open nav
  const toogleNav = () => {
    setNavActive(!navActive);
  };
  //close nav
  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        {/* <img src="./img/devaLogo.PNG" alt="logo" /> */}
        Deva Viswa G 👨🏽‍💻
      </div>
      <a className={`nav__hamburger ${navActive ? "active" : ""}`}
      onClick={toogleNav}>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to="mySkills"
              className="navbar--content"
            >
              My Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to="testimonial"
              className="navbar--content"
            >
              Experience & Education
            </Link>
          </li>
        </ul>
      </div>
      <Link
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary"
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
