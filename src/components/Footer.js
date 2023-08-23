import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div>
      <div>
        <a href="">
          <InstagramIcon />
        </a>
        <a href="">
          <LinkedInIcon />
        </a>
        <a href="">
          <GitHubIcon />
        </a>
        <a href="">
          <EmailIcon />
        </a>
      </div>
      <p>&copy; portfolio-sarath-kumar-dunga.netlify.com</p>
    </div>
  );
}

export default Footer