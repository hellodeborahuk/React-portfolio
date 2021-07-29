import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Social() {
    return (
      <div className="flex justify-evenly mb-8">
        <a
          href="https://twitter.com/debbie_digital"
          target="_blank"
          rel="noopener noreferrer"
          className="text-6xl font-bold text-orange-400"
        >
          <FaTwitter
            className="transform
                transition
                duration-500
                hover:scale-110"
          />
          <p className="text-teal-600 text-lg hover-underline-animation">
            Twitter
          </p>
        </a>
        <a
          href="https://github.com/hellodeborahuk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-6xl font-bold text-orange-400"
        >
          <FaGithub
            className="transform
                transition
                duration-500
                hover:scale-110"
          />
          <p className="text-teal-600 text-lg hover-underline-animation">
            Github
          </p>
        </a>
        <a
          href="https://www.linkedin.com/in/debbiedann/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-6xl font-bold text-orange-400"
        >
          <FaLinkedinIn
            className="transform
                transition
                duration-500
                hover:scale-110"
          />
          <p className="text-teal-600 text-lg hover-underline-animation">
            LinkedIn
          </p>
        </a>
      </div>
    );
}

export default Social;