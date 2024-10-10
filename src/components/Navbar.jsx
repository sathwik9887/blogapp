import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
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

  const menus = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Services",
    },
    {
      id: 3,
      name: "About",
    },
    {
      id: 4,
      name: "Blog",
    },
    {
      id: 5,
      name: "Contact",
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
    <nav className="lg:px-40 md:px-40 px-5 bg-gray-300">
      <div className="flex justify-between items-center w-full overflow-hidden">
        <img src={Logo} alt="Logo" width={100} />
        <ul className="hidden lg:flex space-x-10">
          {menus.map((menu, id) => (
            <li
              className={`cursor-pointer text-base font-medium border-b-2 ${
                menu.name === "Home"
                  ? "border-orange-600"
                  : "border-transparent"
              } hover:border-orange-600 transition-colors`}
              key={id}
            >
              {menu.name}
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center gap-5 overflow-hidden">
          <ul className="flex space-x-3 text-black">
            {icons.map((icon, id) => (
              <li className="cursor-pointer text-lg font-normal" key={id}>
                {icon.icon}
              </li>
            ))}
          </ul>
          <button className="bg-orange-500 px-5 py-2 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded-md text-white text-base hover:bg-orange-600 transition-colors">
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
