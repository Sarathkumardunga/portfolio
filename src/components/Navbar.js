import React from 'react'
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="toggleButton">
        <button></button>
      </div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/education">Education</Link>
      </div>
    </div>
  );
}

export default Navbar