import React from "react";
import { MdOutlineStar } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const Section = ({ movies = [] }) => {
  return (
    <div className="bg-slate-400 min-h-screen lg:pt-20 md:pt-20 pt-20 pb-40">
      <div className="flex flex-col items-center lg:px-44 md:px-20 sm:px-11 px-6">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5 lg:pt-28 pt-28 md:pt-28">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.id} className="bg-white p-4 rounded-lg shadow-lg">
                <img
                  src={movie.img}
                  alt={movie.title}
                  className="pb-5 lg:w-96 lg:h-auto w-full h-80"
                />
                <h1 className="text-xl mb-2">{movie.title}</h1>
                <div className="flex justify-between items-center">
                  <p className="text-base text-gray-500 mb-2">
                    Genre: {movie.genre}
                  </p>
                  <div className="flex items-center gap-1 px-2 py-1 border bg-green-600 w-16 rounded-md text-white mb-4">
                    <MdOutlineStar className="text-yellow-400" />
                    <p className="text-sm">{movie.review}</p>
                  </div>
                </div>
                <p className="text-black font-semibold  mb-2">
                  Category: {movie.sort}
                </p>
                <p className="text-base text-gray-500 mb-2">{movie.desc}</p>
              </div>
            ))
          ) : (
            <p className="text-2xl ">No movies found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section;
