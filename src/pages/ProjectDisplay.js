import React, { useState } from 'react'
import { useParams } from "react-router-dom"
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from "@mui/icons-material/GitHub";
import StreamIcon from "@mui/icons-material/Stream";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "../styles/ProjectDisplay.css"

const ProjectDisplay = () => {
  const [isOpened, setIsOpened] = useState(false);
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <div id="name">
        <h1>{project.name}</h1>
      </div>
      <div id="skill">
        <p>
          <b>Skills: </b> {project.skills}
        </p>

        <div className="project-buttons" id="source-code">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn">
              <GitHubIcon />
              Source code
            </button>
          </a>
          <a
            href={project.deploy}
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn" id="live-demo">
              <StreamIcon />
              Try Live
            </button>
          </a>
        </div>
      </div>
      <div id="im">
        <img src={project.image} alt="Project" />
      </div>
    </div>
  );
}

export default ProjectDisplay