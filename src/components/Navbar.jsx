import React, { useState, useEffect } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const icons = [
    {
      id: 1,
      name: "Github",
      icon: <FaGithub />,
      link: "https://github.com/sathwik9887/",
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/sathwik-nayak/",
    },
    {
      id: 3,
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/sathwik.nayak_/",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-5 px-4 bg-black shadow-lg lg:px-40 md:px-20 sm:px-20">
      <div className="flex justify-between items-center  w-full overflow-hidden">
        <span className="lg:w-full  h-auto px-5 lg:text-2xl text-xl font-semibold text-gray-300 uppercase">
          ToDo-List
        </span>
        <div className="flex justify-center items-center space-x-4">
          {icons.map((icon) => (
            <a
              href={icon.link}
              key={icon.id}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl cursor-pointer"
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
