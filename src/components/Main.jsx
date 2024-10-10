import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Main = () => {
  const [activeMenus, setActiveMenus] = useState(1);
  const menus = [
    { id: 1, name: "All" },
    { id: 2, name: "Startups" },
    { id: 3, name: "Security" },
    { id: 4, name: "AI" },
    { id: 5, name: "Apps" },
    { id: 6, name: "Tech" },
  ];

  return (
    <section className="lg:px-40 md:px-20 px-5 bg-white min-h-screen">
      <div className="flex justify-center items-center pt-5 mb-4">
        <ul className="flex lg:space-x-20 space-x-3">
          {menus.map((menu) => (
            <li
              key={menu.id}
              className={`text-base font-lora cursor-pointer ${
                activeMenus === menu.id ? "text-orange-600" : "text-gray-700"
              }`}
              onClick={() => setActiveMenus(menu.id)}
            >
              {menu.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="border-b-2 mb-8"></div>

      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div className="flex flex-col items-center  w-full">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
            {[...Array(8)].map((_, idx) => (
              <div key={idx} className="border p-5 shadow-lg cursor-pointer">
                <img
                  src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt={`Blog${idx + 1}`}
                  className="w-full h-40 object-cover mb-2"
                />
                <div className="text-sm w-full mb-2">
                  Notes from Data modeling with Amazon DynamoDB – Part 2 with
                  Alex DeBrie
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <FaUser className="text-base" />
                  <p className="text-base">Sathwik Nayak</p>
                </div>
                <p className="text-sm text-gray-500">Published</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:w-4/12 w-full lg:pl-10 mt-8 lg:mt-0">
          <h1 className="text-xl font-bold mb-4">Latest News</h1>
          <p className="text-sm text-gray-600 mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta amet
            accusantium sequi inventore vitae dolorem consectetur libero.
            Aspernatur amet quia a doloribus natus beatae, consequuntur error,
            illum aliquam distinctio iste?
          </p>
          <div className="flex  items-center space-x-2 mb-4">
            <p>Read More</p>
            <FaArrowRightLong className="mr-2 text-black" />
          </div>
          <div className="border-b-2 mb-8"></div>
          <h1 className="text-xl font-bold mb-4">Latest News</h1>
          <p className="text-sm text-gray-600 mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta amet
            accusantium sequi inventore vitae dolorem consectetur libero.
            Aspernatur amet quia a doloribus natus beatae, consequuntur error,
            illum aliquam distinctio iste?
          </p>
          <div className="flex  items-center space-x-2 mb-4">
            <p>Read More</p>
            <FaArrowRightLong className="mr-2 text-black" />
          </div>
          <div className="border-b-2 mb-8"></div>
        </div>
      </div>
    </section>
  );
};

export default Main;
