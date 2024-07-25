import React from "react";

const TaskManager = () => {
  return (
    <div className="flex flex-col items-center mt-5 w-full h-screen text-center">
      <h1 className="text-2xl font-bold mb-4">Task Manager App</h1>
      <div className="flex space-x-4 w-full max-w-md mb-4">
        <div className="flex items-center justify-between w-full max-w-md">
          <input
            type="text"
            placeholder="Enter a new task"
            className="border border-gray-300 p-2 rounded w-2/3"
          />
          <button className="ml-4 px-4 py-2 bg-blue-500 hover:bg-blue-800 hover:text-gray-400 text-gray-800 hover:shadow-md rounded duration-300">
            Add Task
          </button>
        </div>
        <div className="flex items-center justify-between w-full max-w-md">
          <input
            type="text"
            placeholder="Search tasks"
            className="border border-gray-300 p-2 rounded w-2/3"
          />
          <button className="ml-4 px-4 py-2 bg-blue-500 hover:bg-blue-800 hover:text-gray-400 text-gray-800 hover:shadow-md rounded duration-300">
            Search Task
          </button>
        </div>
      </div>
      <div className="flex flex-col w-100">
        <div className="m-2 p-2 border bg-light w-70% rounded-3 flex justify-between items-center">
            <span>First Todo task</span>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
