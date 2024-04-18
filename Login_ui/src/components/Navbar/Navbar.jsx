import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <ul className='photo'><li>TrackEase</li></ul>
      <ul>

        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;