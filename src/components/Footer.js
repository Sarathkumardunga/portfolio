import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.google.com/">
          <InstagramIcon />
        </a>
        <a href="https://www.google.com/">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/Sarathkumardunga">
          <GitHubIcon />
        </a>
        <a href="https://www.google.com/">
          <EmailIcon />
        </a>
      </div>
      <p>&copy; portfolio-sarath-kumar-dunga.netlify.com</p>
    </div>
  );
}

export default Footer