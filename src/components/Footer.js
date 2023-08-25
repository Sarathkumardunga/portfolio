import React, { useRef } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import emailjs from "@emailjs/browser";
import "../styles/Footer.css";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3pg5845",
        "template_bh7pulg",
        form.current,
        "bzDNdPv59FhPbXgck"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="footer" id="contact">
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
      <div className="mail">
        <form
          ref={form}
          className="email-container"
          onSubmit={sendEmail}
        >
          <input type="email" name="user_email" placeholder="Connect with me" />
          <button className="btn btn-email">Email me</button>
        </form>
      </div>
      <p>&copy; portfolio-sarath-kumar-dunga.netlify.com</p>
    </div>
  );
};

export default Footer;
