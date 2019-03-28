<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/logo.css";
import "../../styles/navBar.css";
import logo from "../../image/fyblogo.png";
=======
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/logo.css';
import '../../styles/navBar.css';
// import '../../image/fyblogo.psng';
>>>>>>> 2ae2556c96574181056bab9c177cc1732d057324

export const NavBar = props => {
  return (
    <nav className="primary">
      <div className="nav">
        <Link to="/">
          <div className="flex align">
            <div className="logoDiv">
              <img src={logo} alt="" />
            </div>
          </div>
        </Link>
      </div>
      <div className="nav2">
        <Link to="/">Home</Link>
        <Link to="/cats">Cats Page</Link>
        <Link to="/dogs">Dogs Page</Link>
        <Link to="/form">Form Page</Link>
      </div>
    </nav>
  );
};
