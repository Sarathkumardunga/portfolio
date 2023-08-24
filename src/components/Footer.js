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
        <a
          href="https://www.instagram.com/i_am_sarath_09/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/sarath-kumar-dunga-7083021a0"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>

        <a
          href="mailto:sarathkumardunga09@gmail.com?"
          target="_blank"
          rel="noreferrer"
        >
          <EmailIcon />
        </a>

        <a
          href="https://github.com/Sarathkumardunga"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
      </div>
      <p>&copy; portfolio-sarath-kumar-dunga.netlify.com</p>
    </div>
  );
}

export default Footer