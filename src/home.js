import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function home() {
    return (
      <div>
        {/* HERO */}
        <div
          className="
          container
          mx-auto
          flex
          px-6
          lg:px-0
          py-6
          mb-16
          text-center
          items-center
          justify-around
        "
        >
          <div className="p-6">
            <h1
              className="
              mb-8
              text-4xl
              lg:text-7xl
              font-extrabold
              text-left text-teal-600
            "
            >
              I am a
              <span
                className="
                text-transparent
                bg-clip-text bg-gradient-to-r
                from-orange-400
                to-orange-300
              "
              >
                {" "}
                frontend
              </span>
              <br />
              developer<span className="text-orange-400">.</span>
            </h1>
            <p className="mb-8 text-lg lg:text-xl text-teal-800">
              Hello, I'm Debbie. I design and code beautifully simple things.
            </p>
            <a
              href="/"
              className="
            
              py-3
              px-12
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
              Get in touch
            </a>
          </div>
          <div className="p-6 hidden lg:inline-block">
            <img
              src="/media/debbie.jpg"
              alt="debbie"
              className="rounded-full h-80 w-80 shadow-2xl border-4 border-orange-400"
            />
          </div>
        </div>
        ;{/* PROJECTS */}
        <div className="container mx-auto mb-16 px-6 lg:px-0 lg:w-9/12">
          <div className="text-center">
            <h2 className="font-extrabold text-3xl lg:text-5xl mb-3 text-teal-600">
              Portfolio
            </h2>
            <p className="text-xl mb-6 text-teal-800">
              Take a look at some of my projects
            </p>
          </div>
          <div className="container mx-auto mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/WeatherApp">
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
            </Link>
            <Link to="/Dosha">
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
            </Link>
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
          </div>
          <div className="flex justify-center">
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
        </div>
        ;{/* ABOUT ME */}
        <div
          className="container mx-auto px-6 py-6
          mb-16
          lg:px-0
          text-center
          lg:grid
          grid-cols-2
          justify-evenly"
        >
          <div className="p-6 bg-teal-600">
            <img src="./media/proud-coder.svg" alt="proud coder" />
          </div>
          <div className="p-6 lg:px-16 bg-orange-50 lg:flex flex-col justify-center">
            <h2 className="font-extrabold text-3xl lg:text-5xl mb-6 text-teal-600">
              Who am I?
            </h2>
            <p className="text-xl mb-6 text-teal-800 text-left">
              I am a self-taught frontend developer. I'm also a yoga teacher and
              bake pretty tasty cakes (or at least that’s what people tell me).
              My background is in digital marketing and social media. I love
              creating beautiful websites with HTML, CSS, Javascript and React.
            </p>
          </div>
        </div>
        ;{/* CONNECT WITH ME */}
        <div className="container mx-auto mb-16 px-6 lg:px-0 text-center lg:w-1/2">
          <h2 className="font-extrabold text-3xl lg:text-5xl mb-3 text-teal-600">
            Connect with me
          </h2>
          <p className="text-xl mb-6 text-teal-800">
            You can find me on Twitter for a chat or LinkedIn for something a
            bit more professional. Come say hello.
          </p>
          <div className="flex justify-evenly mb-8">
            <a href="/" className="text-6xl font-bold text-orange-400">
              <FaTwitter
                className="transform
                transition
                duration-500
                hover:scale-110"
              />
              <p className="pt-3 text-teal-600 text-lg">Twitter</p>
            </a>
            <a href="/" className="text-6xl font-bold text-orange-400">
              <FaGithub
                className="transform
                transition
                duration-500
                hover:scale-110"
              />
              <p className="pt-3 text-teal-600 text-lg">Github</p>
            </a>
            <a href="/" className="text-6xl font-bold text-orange-400">
              <FaLinkedinIn
                className="transform
                transition
                duration-500
                hover:scale-110"
              />
              <p className="pt-3 text-teal-600 text-lg">LinkedIn</p>
            </a>
          </div>
        </div>
      </div>
    );
}

    export default home;