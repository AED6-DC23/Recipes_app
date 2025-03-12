import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">Recipe Book</Link>
        <ul className="navbar-nav">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/categories" className="nav-link">Категории</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 