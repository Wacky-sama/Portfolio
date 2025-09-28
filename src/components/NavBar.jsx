import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed w-full bg-purple-950 border-b-2 border-white-200 z-50">
      <div className="flex h-14 items-center justify-between gap-6 px-4 sm:px-6">
        <div>
          <a
            href="#home"
            className="text-white font-mono text-2xl tracking-wider flex items-center"
          >
            WACKY
          </a>
        </div>
        <div className="lg:hidden">
          <button onClick={isOpen ? closeMenu : openMenu}>
            <FontAwesomeIcon
              icon={isOpen ? faXmark : faBars}
              size="xl"
              style={{ color: "white" }}
            />
          </button>
        </div>
        <div
          className={`lg:flex ${
            isOpen ? "block" : "hidden"
          } absolute lg:static bg-purple-950 w-full lg:w-auto top-16 right-0 lg:top-auto lg:right-auto`}
        >
          <ul className="bg-purple-950 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 p-4 lg:p-0">
            <li>
              <a
                href="#home"
                onClick={() => setActiveSection("home")}
                className={`relative hover:text-blue-400 duration-100 ${
                  activeSection === "home"
                    ? "text-blue-400 font-semibold"
                    : "text-white"
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setActiveSection("about")}
                className={`relative hover:text-blue-400 duration-100 ${
                  activeSection === "about"
                    ? "text-blue-400 font-semibold"
                    : "text-white"
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setActiveSection("contact")}
                className={`relative hover:text-blue-400 duration-100 ${
                  activeSection === "contact"
                    ? "text-blue-400 font-semibold"
                    : "text-white"
                }`}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setActiveSection("projects")}
                className={`relative hover:text-blue-400 duration-100 ${
                  activeSection === "projects"
                    ? "text-blue-400 font-semibold"
                    : "text-white"
                }`}
              >
                Projects
              </a>
            </li>
            <li>
              <a href="https://github.com/Wacky-sama" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="xl"
                  style={{ color: "white" }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/kenji.tabugadir.0124/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="xl"
                  style={{ color: "white" }}
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/wackyfu/" target="_blank">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="xl"
                  style={{ color: "white" }}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
