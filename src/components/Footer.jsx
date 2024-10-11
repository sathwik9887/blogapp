import React from "react";
import Logo from "../assets/logo.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const footer = [
    {
      id: 1,
      heading: "Category",
      items: ["Startups", "Security", "AI", "Tech", "Apps"],
    },
    {
      id: 2,
      heading: "Business",
      items: [
        "Entrepreneurship",
        "Marketing",
        "E-commerce",
        "Sales",
        "Investment",
      ],
    },
    {
      id: 3,
      heading: "News",
      items: [
        "Latest Updates",
        "Tech News",
        "Business Insights",
        "Market Trends",
        "Innovations",
      ],
    },
    {
      id: 4,
      heading: "Finance",
      items: [
        "Investing",
        "Budgeting",
        "Taxes",
        "Cryptocurrency",
        "Wealth Management",
      ],
    },
  ];

  return (
    <footer className="lg:px-40 md:px-40 px-5 bg-gray-300 min-h-48">
      <div className="flex flex-col lg:flex-row items-start w-full pt-10">
        <div className="grid lg:grid-cols-6 grid-cols-2 gap-4 mb-10 w-full">
          <img
            src={Logo}
            alt="Logo"
            width={150}
            className="pb-6 lg:col-span-1"
          />
          {footer.map((foot) => (
            <div className="space-y-4" key={foot.id}>
              <div className="font-semibold">{foot.heading}</div>
              <ul className="space-y-2">
                {foot.items.map((item, index) => (
                  <li className="list-none" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="space-y-4 mb-5 lg:ml-auto lg:w-1/3">
          <div className="font-semibold w-full">
            Subscribe to the Newsletter
          </div>
          <div className="flex items-center space-x-0">
            <input
              type="text"
              placeholder="Enter the Email Address"
              className="px-8 py-3 rounded-l-md border border-gray-400"
            />
            <button className="bg-orange-600 px-6 py-3 rounded-r-md text-base text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-black py-2" />

      <div className="flex justify-between items-center py-2">
        <p>The Blog App</p>
        <p>All rights reserved</p>
        <div className="space-x-4 flex items-center">
          <FaGithub />
          <FaLinkedin />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
