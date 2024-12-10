import React, { useState } from "react";
import { ProjectModal } from "./ProjectModal.jsx";
import { Container } from "./project.js";
import githubIcon from "../../files/github.svg";
import externalLink from "../../files/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import projects from "./projects.json";
import styled from "styled-components";

const LoadMoreButton = styled.button`
  padding: 1rem 3rem;
  background-color: #23ce6b;
  color: white;
  font-weight: 600;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #1b9e51;
    transform: translateY(-3px);
  }

  &:focus {
    outline: none;
  }
`;

export function Project() {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedProject, setSelectedProject] = useState(null);

  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  const openModal = (project) => {
    setSelectedProject(project);
  };

  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ScrollAnimation key={index} animateIn="flipInX">
            <div className="project">
              <header>
                <svg
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23ce6b"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  onClick={() => openModal(project)}
                  style={{ cursor: "pointer" }}
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="GitHub Repository" />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Live Site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      {visibleProjects < projects.length && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <LoadMoreButton onClick={showMoreProjects}>Load More</LoadMoreButton>
        </div>
      )}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </Container>
  );
}
