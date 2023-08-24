import React from 'react'
import { useParams } from "react-router-dom"
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css"

const ProjectDisplay = () => {
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
        <GitHubIcon />
      </div>
      <div id="im">
        <img src={project.image} alt="Project" />
      </div>
    </div>
  );
}

export default ProjectDisplay