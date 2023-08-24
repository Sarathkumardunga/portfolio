import React from 'react';
import "../styles/Projects.css";
import { ProjectList } from "../helpers/ProjectList";
import ProjectItem from '../components/ProjectItem';

const Projects = () => {
  return (
    <div className="projects">
      <h1>
        <span className="oneLetter">M</span>y Personal Projects
      </h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem
              key={idx}
              name={project.name}
              image={project.image}
              id={idx}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects