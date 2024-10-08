import React from "react";

const SubNav = ({
  searchQuery,

  onSearchChange,

  onGenreChange,

  onSortChange,
}) => {
  const handleSearchInput = (e) => {
    onSearchChange(e.target.value);
  };

  const handleGenreSelection = (e) => {
    onGenreChange(e.target.value);
  };

  const handleSortSelection = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div className="relative lg:px-44 md:px-20 sm:px-14 lg:w-10/12 w-full border">
      <div className="flex items-center">
        <div className="absolute flex items-center space-x-3 lg:top-24 top-24 bg-white p-4 lg:w-full w-auto rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full lg:w-100 p-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            value={searchQuery}
            onChange={handleSearchInput}
          />
          <div className="flex justify-evenly space-x-3 w-full">
            <div className="flex items-center">
              <label className="mr-2">Genre:</label>
              <select
                className="border rounded-md p-1"
                onChange={handleGenreSelection}
              >
                <option value="">All Genres</option>
                <option value="action">Action</option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="animation">Animation</option>
                <option value="drama">Drama</option>
                <option value="biography">Biography</option>
                <option value="drama">Drama</option>
                <option value="crime">Crime</option>
                <option value="thriller">Thriller</option>
                <option value="sci-fi">Sci-Fi</option>
                <option value="adventure">Adventure</option>
              </select>
            </div>
            <div className="flex items-center">
              <label className="mr-2">Sort:</label>
              <select
                className="border rounded-md p-1"
                onChange={handleSortSelection}
              >
                <option value="">All Categories</option>
                <option value="Latest">Latest</option>
                <option value="Most Popular">Most Popular</option>
                <option value="Top Rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
