import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import { CgNametag } from "react-icons/cg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(true);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-blue-950 p-auto border-b-2 border-white-200">
            <div className="flex h-14 items-center justify-between gap-6 px-4 sm:px-6">
                <div>
                    <a href="/home" className="text-white font-mono text-2xl tracking-wider flex items-center">
                        <CgNametag /> WACKY
                    </a>
                </div>
                <div className="lg:hidden">
                    <button onClick={isOpen ? closeMenu : openMenu}>
                        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size='xl' style={{ color: "white" }} />
                    </button>
                </div>
                <div className={`lg:flex ${isOpen ? "block" : "hidden"} absolute lg:static bg-blue-950 w-full lg:w-auto top-16 right-0 lg:top-auto lg:right-auto`}>
                    <ul className="bg-blue-950 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 p-4 lg:p-0">
                        <li>
                            <a href="/#home" className="text-white relative hover:text-white-900 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="text-white relative hover:text-white-900 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all">About</a>
                        </li>
                        <li>
                            <a href="#contact" className="text-white relative hover:text-white-900 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all">Contact</a>
                        </li>
                        <li>
                            <a href="#projects" className="text-white relative hover:text-white-900 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all">Projects</a>
                        </li>
                        <a href='https://github.com/Wacky-sama' target="_blank">
                        <FontAwesomeIcon icon={faGithub} size='xl' style={{color: "white"}}/>
                        </a>
                    </ul>
                
                
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
