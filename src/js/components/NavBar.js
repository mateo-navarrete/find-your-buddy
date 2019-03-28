<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/logo.css";
import "../../styles/navBar.css";
import logo from "../../images/fyb.png";
=======
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/logo.css';
import '../../styles/navBar.css';
// import logo from '../../image/fyblogo.png';
>>>>>>> 993c531581b30e43feded56ee171e8c128fd748f

export const NavBar = props => {
  return (
    <nav className="primary">
      <div className="nav">
<<<<<<< HEAD
        <Link to="/">
          <div className="flex align">
            <div className="logoDiv">
              <img className="fyblogo" src={logo} alt="" />
            </div>
          </div>
        </Link>
=======
        <NavLink to="/">
            <div className="logoDiv" ></div>
        </NavLink>
>>>>>>> 993c531581b30e43feded56ee171e8c128fd748f
      </div>
      <div className="nav2">
        <NavLink activeClassName="active" to="/home">Home</NavLink>
        <NavLink activeClassName="active" to="/cats">Cats Page</NavLink>
        <NavLink activeClassName="active" to="/dogs">Dogs Page</NavLink>
        <NavLink activeClassName="active" to="/form">Form Page</NavLink>
      </div>
    </nav>
  );
};

//    <img src={logo} alt="" />
