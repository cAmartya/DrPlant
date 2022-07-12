import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from "react-router-dom"

export default function NavBar(props) {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link ${useLocation().pathname === "/potato"?"active" : ""}`} aria-current="page" to="/potato">POTATO</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${useLocation().pathname === "/tomato"?"active" : ""}`} aria-current="page" to="/tomato">TOMATO</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${useLocation().pathname === "/pepper"?"active" : ""}`} aria-current="page" to="/pepper">PEPPER BELL</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${useLocation().pathname === "/about"?"active" : ""}`} to="/about">{props.about}</Link>
          </li>        
          <li className="nav-item">
            <Link className={`nav-link ${useLocation().pathname === "/contacts"?"active" : ""}`} to="/contacts">{props.contact}</Link>
          </li>        
        </ul>
        
      </div>
    </div>
  </nav>
  )
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string,
    contact: PropTypes.string
  };

NavBar.defaultProps = {
    title: "iForGot",
    about: "About Us",
    contact: "Contact Us"
  };