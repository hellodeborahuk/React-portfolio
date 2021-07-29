import React from "react";
import ProjectList from "./ProjectList";


function Projects() {
  return (
    <div className="container mx-auto mb-16 px-6 lg:px-0 lg:w-9/12">
      <header className="text-center my-3 lg:my-8">
        <h2 className="font-serif font-extrabold text-3xl lg:text-5xl mb-3  text-teal-600">
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
