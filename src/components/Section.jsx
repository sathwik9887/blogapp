import React, { useState } from "react";

import { MdDelete } from "react-icons/md";

const Section = () => {
  const [tasks, setTasks] = useState("");
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  return (
    <section className="px-10 flex flex-col items-center mt-28">
      <h1 className="text-3xl font-semibold mb-6">My Tasks</h1>

      <div className="lg:inline-block flex-col items-center space-x-4">
        <input
          type="text"
          placeholder="Enter the Task"
          className="border p-2 rounded w-64 mb-4"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
          onClick={handleAdd}
        >
          Add Task
        </button>
      </div>

      <ul className="flex flex-col mt-10 space-y-4 items-center w-96 px-16 lg:px-0">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <li
              key={index}
              className="bg-slate-300 border w-full px-6 py-3 flex justify-between items-center rounded-md text-xl font-semibold"
            >
              {task}
              <MdDelete
                className="text-red-500 cursor-pointer"
                onClick={() => deleteTask(index)}
              />
            </li>
          ))
        ) : (
          <p className="bg-slate-300 border w-full px-6 py-3 flex justify-between items-center rounded-md text-xl font-semibold">
            No Tasks Found
          </p>
        )}
      </ul>
    </section>
  );
};

export default Section;
