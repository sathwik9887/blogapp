import React, { useState, useEffect } from "react";
import { LuMenu, LuX } from "react-icons/lu";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

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
      <span className="lg:w-full  h-auto px-5 lg:text-2xl text-xl font-semibold text-gray-300 uppercase">
        Movie Media
      </span>
    </nav>
  );
};

export default Navbar;
