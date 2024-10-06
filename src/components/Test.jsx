import React, { useEffect, useState } from "react";

const Test = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleMinus = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    document.title = `${name} has clicked ${counter} times`;

    return () => {
      console.log(`Cleanup for count: ${counter}`);
    };
  }, [counter, name]);

  return (
    <div>
      <div className="flex justify-center items-center">
        <p className="text-4xl">
          {name} has clicked {counter} times
        </p>
      </div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />

      <div className="flex justify-center items-center">
        <button onClick={handleAdd} className="text-4xl">
          +
        </button>
        <button onClick={handleMinus} className="text-4xl">
          -
        </button>
      </div>
    </div>
  );
};

export default Test;
