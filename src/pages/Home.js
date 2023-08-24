import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import HandshakeIcon from "@mui/icons-material/Handshake";
import mainPic from "../assets/mainpic.svg";
import "../styles/Home.css"

const Home = () => {
  return (
    <div className="home">
      <div className="top">
        <div className="about">
          <h2>
            Hi, My Name is <span id="oneLetter">S</span>arath
          </h2>
          <div className="prompt">
            <p>
              Aspiring developer, dedicated to crafting innovative solutions
              through coding.
            </p>
            <LinkedInIcon />
            <EmailIcon />
            <GitHubIcon />
          </div>
          {/*     Buttons   */}
          <div className="home-buttons">
            <a
              href="https://drive.google.com/file/d/1BOD0ljImvewrOYUHGygh6PCWmAC3cRAy/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn" id="resume">
                <SimCardDownloadIcon />
                Resume
              </button>
            </a>
            <a
              href="https://debugg-dot.github.io/Shadow_fiitness/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn" id="connect">
                <HandshakeIcon />
                Connect
              </button>
            </a>
          </div>
        </div>

        <div className="mainpic">
          <img src={mainPic} alt="Center stage" />
        </div>
      </div>

      <div className="skills">
        <h1>
          <span id="oneLetter">S</span>kills
        </h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, Javascript, BootStrap, MaterialUI,
              Chakra-UI
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MySQL, MongoDB(intermediate)</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>C++, C, JavaScript, TypeScript(intermediate)</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
