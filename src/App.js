import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import Projects from "./projects";

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
                <a href="/" className="font-bold text-2xl text-teal-800">
                  Debbie Dann Digital
                </a>
              </div>

              {/* MIDDLE HEADER */}
              <div className="flex items-center space-x-4">
                <Link to="/home" className="inline-block hover:text-gray-900">
                  Home
                </Link>
                <Link
                  to="/projects"
                  className="inline-block p-3 hover:text-gray-900"
                >
                  Projects
                </Link>
                <Link to="/" className="inline-block p-3 hover:text-gray-900">
                  Contact
                </Link>
              </div>

              {/* RIGHT HEADER */}
              <div className="hidden lg:flex items-center space-x-4">
                <a href="/" className=" hover:text-gray-900">
                  <FaTwitter />
                </a>
                <a href="/" className="p-3 hover:text-gray-900">
                  <FaGithub />
                </a>
                <a href="/" className="p-3 hover:text-gray-900">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/projects">
              <Projects />
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
                <a href="/" className="block">
                  Home
                </a>
                <a href="/" className="block">
                  Projects
                </a>
                <a href="/" className="block">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
