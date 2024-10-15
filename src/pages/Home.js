import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import HandshakeIcon from "@mui/icons-material/Handshake";
import mainPic from "../assets/mainpic.svg";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="top">
          <div className="about">
            <h2>
              Hi, My Name is <span className="oneLetter">S</span>arath
            </h2>
            <div className="prompt">
              <p>
                Aspiring developer, dedicated to crafting innovative solutions
                through coding.
              </p>
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
            {/*     Buttons   */}
            <div className="home-buttons">
              <a
                href="https://drive.google.com/file/d/1EELFax_Gxq6hv_V8jggqku4X33aUzJuf/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn" id="resume">
                  <SimCardDownloadIcon />
                  Resume
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/sarath-kumar-dunga-7083021a0"
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
            <span className="oneLetter">S</span>kills
          </h1>
          <ol className="list">
            <li className="item">
              <h2> Languages</h2>
              <span>
              C++, C, SQL, Java, React Js, HTML, CSS, JavaScript, Node.js, JavaFX, PROLOG, Python
              </span>
            </li>
            <li className="item">
              <h2>Tools and Technologies</h2>
              <span>Azure Cloud Computing, MySql, Git and Github, Postman, Astah, JIRA, JUnit, Taiga</span>
            </li>
            <li className="item">
              <h2>Relevant Coursework</h2>
              <span>Advance Data Structures and Algorithms, OOPs, Operating Systems, Foundations of Software
              Engineering, DBMS, Software Project, Process and Quality Management, Software Agility, Software Design</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Home;
