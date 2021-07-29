import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Dosha() {
  return (
    <div className="container mx-auto">
      <div className="bg-orange-50 p-6">
        <h2 className="font-extrabold text-3xl lg:text-5xl mb-3 text-teal-600">
          Ayurveda Dosha Quiz
        </h2>
        <p className="text-xl mb-6 text-teal-800">
          A quiz to tell you your Dosha, created with React.
        </p>
      </div>
      <div className="lg:flex p-6 space-x-8">
        <div>
          <div className="mb-6">
            <h3 className="font-bold text-xl lg:text-2xl mb-3 text-teal-600">
              Technologies
            </h3>
            <ul className="text-lg mb-6 text-teal-800">
              <li>React</li>
              <li>CSS3</li>
              <li>HTML5</li>
              <li>Figma</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl lg:text-2xl mb-3 text-teal-600">
              Links
            </h3>
            <div className="flex justify-evenly">
              <p className="text-3xl font-bold text-orange-400">
                <a
                  href="https://cranky-curran-3d406a.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink
                    className="transform
                transition
                duration-500
                hover:scale-110"
                  />
                </a>
              </p>
              <p className="text-3xl font-bold text-orange-400">
                <a
                  href="https://github.com/hellodeborahuk/dosha-quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
        </div>
        <article className="space-y-4">
          <p className="text-teal-800">
            I wanted to build a project on my own. First up I created a design
            for the dosha quiz in Figma and found a colour scheme I liked the
            look of. I wanted a quiz where when you select an option and it
            would remember what you've counted and let you know at the end how
            many of each button you'd selected. From the initial design, I
            decided to use a next question button rather than a back button. I
            personally don't feel like you need to go backwards on such a quiz.
          </p>
          <img
            src="./media/dosha-quiz-figma.png"
            alt="dosha quiz design in figma"
            className="m-auto"
          />
          <h3 className="font-bold text-xl lg:text-2xl mb-3 text-teal-600">
            Stumbling blocks
          </h3>
          <p className="text-teal-800">
            To get the initial design and questions up was relatively
            straightforward. Where I got stuck was with trying to count how many
            of each button had been clicked (a, b or c). Whichever had the most
            clicks was the answer. I reached out to the community for some
            guidance and was given some direction which helped me figure out how
            to do this. I filtered the results array and used the length of the
            filtered array to count the a, b and c's. To work out which was
            clicked the most I used if statements.
          </p>

          <img
            src="./media/dosha-quiz-code"
            alt="dosha quiz counting code"
            className="m-auto"
          />

          <h3 className="font-bold text-xl lg:text-2xl mb-3 text-teal-600">
            Future improvements
          </h3>
          <p className="text-teal-800">
            I want to create a pie chart with results in to show what percentage
            of each dosha someone is.
          </p>
          <p className=" text-teal-800">
            Add the ability to go back and change your answer.
          </p>
          <p className=" text-teal-800">
            A reset button on the results page to try the quiz again.
          </p>
          <img
            src="./media/dosha-quiz.png"
            alt="dosha quiz"
            className="m-auto"
          />
          <p className=" text-teal-800">
            View the{" "}
            <a
              href="https://cranky-curran-3d406a.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Dosha Quiz
            </a>{" "}
            or visit the{" "}
            <a
              href="https://github.com/hellodeborahuk/dosha-quiz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Github repository
            </a>{" "}
            for this project.
          </p>
          <div className="py-6 text-center">
            <Link
              to="/Projects"
              className="
              px-12
              py-3
              rounded
              shadow-lg
              hover:shadow-2xl
              bg-gradient-to-br
              from-orange-300
              to-orange-400
              hover:from-orange-400 hover:to-orange-300
              text-teal-800
              font-bold
              text-2lg
              tracking-wide
              transition
              duration-500
            "
            >
              View more projects
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Dosha;
