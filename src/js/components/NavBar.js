<<<<<<< HEAD
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/logo.css";
import "../../styles/navBar.css";
import logo from "../../images/fyb.png";
=======
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/logo.css';
import '../../styles/navBar.css';
import logo from '../../images/fyb.png';
>>>>>>> 6dc18467624ea9d996d9c85d4193285caf5e9a85

export const NavBar = props => {
  return (
    <nav className="primary">
      <div className="nav">
        <Link to="/">
          <div className="flex align">
            <div className="logoDiv">
              <img className="fyblogo" src={logo} alt="" />
            </div>
          </div>
        </Link>
      </div>
      <div className="nav2">
        <NavLink activeClassName="active" to="/home">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/cats">
          Cats Page
        </NavLink>
        <NavLink activeClassName="active" to="/dogs">
          Dogs Page
        </NavLink>
        <NavLink activeClassName="active" to="/form">
          Form Page
        </NavLink>
      </div>
    </nav>
  );
};

//    <img src={logo} alt="" />
