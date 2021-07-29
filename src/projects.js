import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

const project = [
  {
    name: "React Weather App",
    thumbnail: "./media/react-weather.png",
    copy: "A weather app built with ReactJS and API intergration for my SheCodes Workshop project.",
    link: "/WeatherApp",
    github: "https://github.com/hellodeborahuk/react-weather-app",
  },
  {
    name: "Ayurveda Dosha Quiz",
    thumbnail: "./media/dosha-quiz.png",
    copy: "I created a quiz from scratch to implement what I've learnt about React.",
    link: "/Dosha",
    github: "https://github.com/hellodeborahuk/dosha-quiz",
  },
  {
    name: "Tic Tac Toe Game",
    thumbnail: "./media/tictactoe.png",
    copy: "A simple tic tac toe game build using React.",
    link: "https://happy-bartik-7e504a.netlify.app/",
    github: "https://github.com/hellodeborahuk/tic-tac-toe",
  },
  {
    name: "Recipe Search",
    thumbnail: "./media/recipe-search.png",
    copy: "A recipe search website using React and API intergration.",
    link: "https://jolly-ride-611c10.netlify.app/",
    github: "https://github.com/hellodeborahuk/recipe-app",
  },
  {
    name: "Dictionary",
    thumbnail: "./media/dictionary.png",
    copy: "A dictionary built with React and API intergration for my SheCodes Workshop project.",
    link: "https://relaxed-stonebraker-528b23.netlify.app/",
    github: "https://github.com/hellodeborahuk/dictionary",
  },
  {
    name: "Breathing Animation",
    thumbnail: "./media/breathing-app.png",
    copy: "A simple breathing app using html and css animation.",
    link: "https://codepen.io/hellodeborahuk/full/xxRaRKO",
  },
];

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

      <div className="container mx-auto mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.map(function (project, index) {
              if (index < 6) {
                  return (
                    <div
                      className="
                bg-orange-50
                rounded-lg
                shadow-lg
                              "
                    >
                      <img
                        src={project.thumbnail}
                        alt={project.name}
                        className="rounded-t-lg"
                      />
                      <div className="p-6">
                        <h1 className="font-bold mb-2 text-xl text-teal-800">
                          {project.name}
                        </h1>
                        <p className="text-teal-700">
                          {project.copy}
                        </p>
                      </div>
                      <div className="flex mb-4 m-auto justify-evenly w-1/2">
                        <p className="text-3xl font-bold text-orange-400">
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <FaLink
                              className="transform
                transition
                duration-500
                hover:scale-110"
                            />
                          </a>
                        </p>
                        <p className="text-3xl font-bold text-orange-400">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <FaGithub
                              className="transform
                transition
                duration-500
                hover:scale-110"
                            />
                          </a>
                        </p>
                      </div>
                    </div>
                  );
              } else {
                  return null;
              }
          })}
        
      </div>
    </div>
  );
}

export default Projects;
