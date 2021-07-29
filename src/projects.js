import React from "react";
import ProjectList from "./ProjectList";


function Projects() {
  return (
    <div className="container mx-auto mb-16 px-6 lg:px-0 lg:w-9/12">
      <header className="text-center mb-16">
        <h2 className="font-extrabold text-3xl lg:text-5xl mt-8 mb-3 text-teal-600">
          Projects
        </h2>
        <p className="text-xl text-teal-800">
          Take a look at some of my projects
        </p>
      </header>

      <ProjectList maxItems="6" />
    </div>
  );
}

export default Projects;
