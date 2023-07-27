import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";
import Dropdown from "./Dropdown";




export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () =>{
    if (window.innerWidth < 960){
        setDropdown(false);
    }else{
        setDropdown(true)
    }
  };

  const onMouseLeave = () =>{
    if (window.innerWidth < 960){
        setDropdown(false);
    }else{
        setDropdown(false)
    }
  };


  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src='./images/imototo3.png' className="logo" alt="LOGO IMAGE" height= '200px' width='250px'></img>
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
          {/* /* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>


          <li className="nav-item">
            <Link to="/"  className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
            </li>


          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}>
            Contact us
            </Link>
            </li>

            <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
              Services <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className="nav-item">
            <Link
              to="/subscribe"
              className="nav-links-mobile"
              onClick={closeMobileMenu}>
                Subscribe
            </Link>
            </li>


        </ul>

        <Button />

      </nav>
    </>
  );
}
