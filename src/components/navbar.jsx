import { useState } from 'react';
import { IoMdMenu, IoMdClose } from "react-icons/io";
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
    <nav className="bg-white-800 p-8 border-b-2 border-gray-200">
      <div className="container mx-auto flex justify-between items-center lg:flex-row p-8">
        <div>
            <a href="/home" className="text-black font-mono text-3x1 tracking-wider flex items-center"><CgNametag />WACKY</a>
        </div>
        <div className="lg:hidden">
            <button onClick={openMenu} className="text-gray-700">
                <IoMdMenu size={24}/>
            </button>
        </div>
         <div className={`lg:flex ${isOpen ? "block" : "hidden"} absolute lg:static bg-white w-full lg:w-auto top-16 left-0 lg:top-auto lg:left-auto`}>
            <div className="lg:hidden flex justify-between items-center p-4">
                <h2 className="text-lg font-bold"></h2>
                <button onClick={closeMenu} className="text-gray-700">
                    <IoMdClose size={24}/>
                </button>
            </div>
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 p-4 lg:p-0">
                <li>
                <a href="/home" className="text-gray-700 relative hover:text-gray-900 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all">Home</a>
                </li>
                <li>
                <a href="/about" className="text-gray-700 relative hover:text-gray-900 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all">About</a>
                </li>
                <li>
                <a href="/contact" className="text-gray-700 relative hover:text-gray-900 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all">Contact</a>
                </li>
                <li>
                <a href="/projects" className="text-gray-700 relative hover:text-gray-900 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all">Projects</a>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;