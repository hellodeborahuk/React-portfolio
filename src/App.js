import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import WeatherApp from "./WeatherApp";
import Dosha from "./Dosha";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        {/* NAVIGATION */}
        <div className="bg-gradient-to-br from-teal-50 to-teal-100">
          <div className="text-gray-600">
            <div className="container mx-auto lg:flex lg:justify-between px-6 lg-px-0 py-6">
              {/* LEFT HEADER */}
              <div className="flex items-center space-x-4">
                <Link to="/" className="font-bold text-2xl text-teal-800">
                  Debbie Dann Digital
                </Link>
              </div>

              {/* MIDDLE HEADER */}
              <div className="flex items-center space-x-4">
                <Link
                  to="/"
                  className="inline-block hover:text-gray-900 hover-underline-animation"
                >
                  Home
                </Link>
                <Link
                  to="/projects"
                  className="inline-block p-3 hover:text-gray-900 hover-underline-animation"
                >
                  Projects
                </Link>
                <Link
                  to="/contact"
                  className="inline-block p-3 hover:text-gray-900 hover-underline-animation"
                >
                  Contact
                </Link>
              </div>

              {/* RIGHT HEADER */}
              <div className="hidden lg:flex items-center space-x-4">
                <a
                  href="https://twitter.com/debbie_digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-orange-400"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://github.com/hellodeborahuk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 hover:text-orange-400"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/debbiedann/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 hover:text-orange-400"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/weatherapp">
              <WeatherApp />
            </Route>
            <Route path="/dosha">
              <Dosha />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          {/* FOOTER */}

          <div className="py-6 bg-orange-50 text-orange-800">
            <div
              className="
            mt-4
            pt-4
            container
            mx-auto
            px-6
            lg:px-0
            flex
            justify-between
            border-t border-orange-200
          "
            >
              <div>Copyright &copy; 2021</div>
              <div className="space-y-2 mb-3">
                <Link to="/" className="block">
                  Home
                </Link>
                <Link to="/projects" className="block">
                  Projects
                </Link>
                <Link to="/contact" className="block">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
