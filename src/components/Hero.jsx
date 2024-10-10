import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="lg:px-40 md:px-40 px-5 bg-gray-300 min-h-96 ">
      <div className="flex flex-col justify-center items-center pt-20">
        <h1 className="lg:text-6xl text-center font-bold text-2xl mb-5">
          Welcome to My Blog
        </h1>
        <p className="lg:w-10/12 text-center w-full text-lg mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quo est
          velit perferendis autem nostrum et, voluptatum voluptatibus ratione
          accusantium neque maiores libero fugiat sed, ullam minus minima?
          Tempora, omnis.
        </p>
        <div className="flex items-center gap-2 bg-orange-500 px-3 py-2 rounded-md cursor-pointer hover:transition-transform hover:bg-orange-700 lg:mb-0 mb-10">
          <p className="text-lg text-white">Learn More</p>
          <FaArrowRightLong className="mr-2 text-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
