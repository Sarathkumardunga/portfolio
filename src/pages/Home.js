import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css"

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>
          Hi, My Name is <span id="oneLetter">S</span>arath
        </h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
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
