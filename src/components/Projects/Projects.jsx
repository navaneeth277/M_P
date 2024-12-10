import React from "react";
import "./Projects.css";
import Im from "../public/image.png"

const Projects = ({ isDarkMode }) => {
  const projects = [
    {
      title: "Expre - Exam Preparation Assistant",
      description: "A web app to assist with exam preparation through summarization, keyword extraction, and code writing.",
      image: Im,// Use public folder images directly
      github: "https://github.com/Navaneeth2707/expre",
      demo: "https://link_to_project_demo.com",
    },
    {
      title: "Chat Application",
      description: "A real-time chat application with active user lists and message timestamps.",
      image: Im,
      github: "https://github.com/example/chat-app",
      demo: "https://chat-app-demo.com",
    },
    {
      title: "Diabetes Prediction App",
      description: "A machine learning-based web app to predict diabetes based on user input.",
      image: Im,
      github: "https://github.com/Navaneeth2707/diabetes-prediction",
      demo: "https://link_to_project_demo.com",
    },
  ];

  return (
    <section id="projects" className={`projects ${isDarkMode ? "dark" : ""}`}>
      <h1>My Projects</h1>
      <p>Explore some of the innovative solutions I've built.</p>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${isDarkMode ? "dark" : ""}`}
          >
            <img src={project.image} alt={`${project.title} Screenshot`} />
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isDarkMode ? "dark" : ""}
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isDarkMode ? "dark" : ""}
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
