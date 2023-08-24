import React from 'react';
import "../styles/Projects.css";
import { ProjectList } from "../helpers/ProjectList";
import ProjectItem from '../components/ProjectItem';

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {
          ProjectList.map((project, id) => {
            return <ProjectItem name={ project.name } image={ project.image } />;
          })
        }
      </div>
    </div>
  );
}

export default Projects