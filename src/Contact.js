import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
return (
  <div className="container mx-auto">
    <div className="container mx-auto mb-16 px-6 lg:px-0  lg:w-1/2">
      <h2 className="font-extrabold text-3xl lg:text-5xl mb-3 lg:mb-8 text-center text-teal-600">
        Contact me
      </h2>
      <p className="text-xl mb-6 text-teal-800">I’d love to hear from you. </p>
      <p className="text-xl mb-6 text-teal-800">
        If you have a project you would like to discuss, a general enquiry or
        would just like to have a chat please email me at d3bbie.dann@gmail.com.
      </p>
      <p className="text-xl mb-6 text-teal-800">Email: d3bbie.dann@gmail.com</p>

      <p className="text-xl mb-6 text-teal-800">
        You can also find me on Twitter for a chat or LinkedIn for something a bit
        more professional. Come say hello.
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

export default Contact;