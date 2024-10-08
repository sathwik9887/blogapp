import React, { useState } from "react";
import { MdOutlineStar } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const Section = ({ movies = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const minrecords = 3;

  const totalPages = Math.ceil(movies.length / minrecords);

  const indexLastPage = currentPage * minrecords;
  const indexFirstPage = indexLastPage - minrecords;

  const currentMovies = movies.slice(indexFirstPage, indexLastPage);

  const handlePageChange = (pagenumber) => {
    setCurrentPage(pagenumber);
  };

  return (
    <div className="bg-slate-400 min-h-screen lg:pt-20 md:pt-20 pt-10 pb-20">
      <div className="flex flex-col items-center lg:px-44 md:px-20 sm:px-11 px-6">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5 lg:pt-28 pt-28 md:pt-28">
          {currentMovies.length > 0 ? (
            currentMovies.map((movie) => (
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
            <p className="text-2xl">No movies found</p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center mt-8 space-y-3 lg:space-y-0">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 mx-1 bg-gray-300 rounded hover:bg-gray-400 ${
              currentPage === 1 && "cursor-not-allowed"
            }`}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 mx-1 rounded text-sm sm:text-base ${
                  currentPage === page
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              >
                {page}
              </button>
            )
          )}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 mx-1 bg-gray-300 rounded hover:bg-gray-400 ${
              currentPage === totalPages && "cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;
