import React from "react";

function Projects() {
    return (
      <div className="container mx-auto mb-16 px-6 lg:px-0">
        <div className="text-center">
          <h2 className="font-extrabold text-3xl lg:text-5xl mb-3 text-teal-600">
            Portfolio
          </h2>
          <p className="text-xl mb-6 text-teal-800">
            Take a look at some of my projects
          </p>
        </div>
        <div className="container mx-auto mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/">
            <div
              className="
                bg-orange-50
                rounded-lg
                shadow-lg
                transform
                transition
                duration-500
                hover:scale-105
              "
            >
              <img
                src="./media/react-weather.png"
                alt="react weather"
                className="rounded-t-lg"
              />
              <div className="p-6">
                <h1 className="font-bold mb-2 text-xl text-teal-900">
                  React Weather App
                </h1>
                <p className="text-teal-800">
                  A weather app built with ReactJS and API intergration for my
                  SheCodes Workshop project.
                </p>
              </div>
            </div>
          </a>
          <a href="/">
            <div
              className="
                bg-orange-50
                rounded-lg
                shadow-lg
                transform
                transition
                duration-500
                hover:scale-105
              "
            >
              <img
                src="media/dosha-quiz.png"
                alt="dosha quiz"
                className="rounded-t-lg"
              />
              <div className="p-6">
                <h1 className="font-bold mb-2 text-xl text-teal-900">
                  Ayurveda Dosha Quiz
                </h1>
                <p className="text-teal-800">
                  I created a quiz from scratch to implement what I've learnt
                  about React.
                </p>
              </div>
            </div>
          </a>
          <a href="https://happy-bartik-7e504a.netlify.app/">
            <div
              className="
                bg-orange-50
                rounded-lg
                shadow-lg
                transform
                transition
                duration-500
                hover:scale-105
              "
            >
              <img
                src="media/tictactoe.png"
                alt="tic tac toe"
                className="rounded-t-lg"
              />
              <div className="p-6">
                <h1 className="font-bold mb-2 text-xl text-teal-900">
                  Tic tac toe game
                </h1>
                <p className="text-teal-800">
                  A simple tic tac toe game build using React.
                </p>
              </div>
            </div>
          </a>
          <a href="https://jolly-ride-611c10.netlify.app/" target="_blank" rel="noopener noreferrer">
            <div
              className="
                bg-orange-50
                rounded-lg
                shadow-lg
                transform
                transition
                duration-500
                hover:scale-105
              "
            >
              <img
                src="media/recipe-search.png"
                alt="recipe search"
                className="rounded-t-lg"
              />
              <div className="p-6">
                <h1 className="font-bold mb-2 text-xl text-teal-900">
                  Recipe search
                </h1>
                <p className="text-teal-800">
                  A recipe search website using React and API intergration.
                </p>
              </div>
            </div>
          </a>
          <a href="https://relaxed-stonebraker-528b23.netlify.app/">
            <div
              className="
                bg-orange-50
                rounded-lg
                shadow-lg
                transform
                transition
                duration-500
                hover:scale-105
              "
            >
              <img
                src="media/dictionary.png"
                alt="dictionary"
                className="rounded-t-lg"
              />
              <div className="p-6">
                <h1 className="font-bold mb-2 text-xl text-teal-900">
                  Dictionary
                </h1>
                <p className="text-teal-800">
                  A dictionary built with React and API intergration for my
                  SheCodes Workshop project.
                </p>
              </div>
            </div>
          </a>
          <a href="https://codepen.io/hellodeborahuk/full/xxRaRKO">
            <div
              className="
                bg-orange-50
                rounded-lg
                shadow-lg
                transform
                transition
                duration-500
                hover:scale-105
              "
            >
              <img
                src="media/breathing-app.png"
                alt="breathing app"
                className="rounded-t-lg"
              />
              <div className="p-6">
                <h1 className="font-bold mb-2 text-xl text-teal-900">
                  Breathing animation
                </h1>
                <p className="text-teal-800">
                  A simple breathing app using html and css animation.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
}

export default Projects;