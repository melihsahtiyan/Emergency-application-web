import React, { useState } from "react";
import ProjectForm from "./ProjectForm";

function ProjectList() {
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    if (!project.text || /^\s*$/.test(project.text)) {
      return;
    }

    const newProjects = [project, ...projects];

    setProjects(newProjects);
    console.log(...projects);
  };

  const updateProject = (projectId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setProjects((prev) =>
      prev.map((item) => (item.id === projectId ? newValue : item))
    );
  };

  const removeProject = (id) => {
    const removedArr = [...projects].filter((project) => project.id !== id);

    setProjects(removedArr);
  };

  const completeProject = (id) => {
    let updatedProjects = projects.map((project) => {
      if (project.id === id) {
        project.isComplete = !project.isComplete;
      }
      return project;
    });
    setProjects(updatedProjects);
  };

  return (
    <>
      <h1>Emergency </h1>
      <ProjectForm onSubmit={addProject} />
      {/* <Project
        projects={projects}
        completeProject={completeProject}
        removeProject={removeProject}
        updateProject={updateProject}
      /> */}
    </>
  );
}

export default ProjectList;
