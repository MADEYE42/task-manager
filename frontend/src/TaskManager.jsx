import React, { useState } from "react";
import { FaCheck, FaPencilAlt, FaTrash } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import { CreateTask } from "./api";
import { notify } from "./utils";

const TaskManager = () => {
  const [input, setinput] = useState("");
  const handleTasks = async()=>{
    const obj = {
        taskName:input,
        isDone:false
    }
    try {
        const{success,message}=  await CreateTask(obj);
        if(success){
          notify(message,'success')
        }
        else{
          notify(message,'error')
        }
        setinput('')
    } catch (error) {
        console.log(`Error : ${error}`)
        notify('Failed to create Task','error')
    }
  }

  return (
    <div className="flex flex-col items-center mt-5 w-full h-screen text-center">
      <h1 className="text-2xl font-bold mb-4">Task Manager App</h1>
      <div className="flex space-x-4 w-full max-w-md mb-4 p-2">
        <div className="grid grid-cols-2 gap-2 w-full max-w-md items-center ">
          <input
            value={input}
            onChange={(e) => setinput(e.target.value)}
            type="text"
            placeholder="Enter a new task"
            className="border border-gray-300 p-2 rounded w-full h-10"
          />
          <button className="ml-4 px-4 py-2 bg-blue-500 hover:bg-blue-800 hover:text-gray-400 text-gray-800 hover:shadow-md rounded duration-300 text-center"
          onClick={handleTasks}>
            Add Task
          </button>
        </div>
        <div className="flex items-center justify-between w-full ">
          <input
            type="text"
            placeholder="Search tasks"
            className="border border-gray-300 p-2 rounded w-2/3 h-10"
          />
          <button className="ml-4 px-4 py-2 bg-blue-500 hover:bg-blue-800 hover:text-gray-400 text-gray-800 hover:shadow-md rounded duration-300">
            Search Task
          </button>
        </div>
      </div>
      <div className="flex flex-col w-100 justify-center items-center">
        <div className="m-2 p-2 border bg-light w-[70%] rounded-3 flex items-center justify-center">
          <span className="text-decoration-line-through">First Todo task</span>
          <div>
            <button type="button" className="btn btn-success btn-md m-2 ">
              <FaCheck />
            </button>
            <button type="button" className="btn btn-warning btn-md m-2 ">
              <FaPencilAlt />
            </button>
            <button type="button" className="btn btn-danger btn-md m-2 ">
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default TaskManager;
