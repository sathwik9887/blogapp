import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
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

  return (
    <footer className="py-5 px-4 bg-black w-full shadow-lg lg:px-40 md:px-20 sm:px-20">
      <div className="flex justify-between items-center">
        <span className="lg:w-full h-auto px-5 lg:text-2xl text-xl font-semibold text-gray-300 uppercase">
          Movie Media{" "}
          <span className="text-sm text-gray-300 lowercase">
            - @sathwiknayak
          </span>
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
    </footer>
  );
};

export default Footer;
