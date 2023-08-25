import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import profilePic from "../assets/profilepic.jpg";

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          {expandNavbar ? <HighlightOffIcon /> : <ReorderIcon />}
        </button>
      </div>

      <div className="nav-content">
        <div
          id="profilepic"
          style={{
            display: expandNavbar || location.pathname !== "/" ? "none" : "flex",
          }}
        >
          <img src={profilePic} alt="Admin Pic" />
        </div>
        <div className="links">
          <Link
            to="/"
            className={location.pathname === "/" ? "pageActive" : ""}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={location.pathname === "/projects" ? "pageActive" : ""}
          >
            Projects
          </Link>
          <Link
            to="/education"
            className={location.pathname === "/education" ? "pageActive" : ""}
          >
            Education
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar