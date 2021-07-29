import React from "react";

import { Link } from "react-router-dom";
import ProjectList from "./ProjectList";
import Social from "./Social";

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
          mb-4
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
              font-bold
              text-left text-teal-600
            font-serif
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
            <Link to="/Contact"
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
              text-lg
              tracking-wide
              transition
              duration-500
            "
            >
              Get in touch
            </Link>
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
            <h2 className="font-serif font-extrabold text-3xl lg:text-5xl mb-3 text-teal-600">
              Portfolio
            </h2>
            <p className="text-xl mb-8 text-teal-800">
              Take a look at some of my projects
            </p>
          </div>

          <ProjectList maxItems="3" />

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
              text-lg
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
            <h2 className="font-serif font-extrabold text-3xl lg:text-5xl mb-6 text-teal-600">
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
          <h2 className="font-serif font-extrabold text-3xl lg:text-5xl mb-4 text-teal-600">
            Connect with me
          </h2>
          <p className="text-xl mb-6 text-teal-800">
            You can find me on Twitter for a chat or LinkedIn for something a
            bit more professional. Come say hello.
          </p>
          <Social />
        </div>
      </div>
    );
}

    export default home;