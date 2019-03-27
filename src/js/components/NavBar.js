import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navBar.css';

export const NavBar = props => {
  return (
    <nav className="primary">
      <div className="nav">
        <Link to="/">
          <div className="flex align">
            <div className="logo" /> <div>Find Your Buddy</div>
          </div>
        </Link>
      </div>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/animal">Animal Page</Link>
        <Link to="/form">Form Page</Link>
      </div>
    </nav>
  );
};
