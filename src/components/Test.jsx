import React, { useState } from "react";

const Test = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleMinus = () => {
    setCounter(counter - 1);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-5">Counter App</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
        className="border border-gray-300 rounded-md p-2 mb-4 w-64 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <div className="text-3xl font-semibold mb-4">
        {name
          ? `${name} clicked the button ${counter} times`
          : "Enter your name to start!"}
      </div>
      <div className="space-x-4">
        <button
          onClick={handleAdd}
          className="bg-red-500 hover:bg-red-600 transition duration-200 py-2 px-4 text-white rounded-md text-2xl shadow-lg"
        >
          +
        </button>
        <button
          onClick={handleMinus}
          className="bg-gray-500 hover:bg-gray-600 transition duration-200 py-2 px-4 text-white rounded-md text-2xl shadow-lg"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Test;
