import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

export default function Task({ task }) {
  const { setCurrentTask, removeTask } = useContext(GlobalContext);

  return (
    <div className="w-full flex  justify-between items-center dark-hover:bg-gray-700 hover:bg-gray-200 px-4 py-1 rounded mb-4 text-xs">
      <div
        className="w-full text-gray-800 dark:text-white mb-1 cursor-pointer flex items-center justify-between mr-2"
        onClick={() => {
          if (!task.completed) {
            setCurrentTask(task);
          }
        }}
      >
        <h1 className="text-sm">{task.title}</h1>
        <div className="flex items-center justify-between">
          <span className="mr-1">{task.pomodoros}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4 fill-current"
            fill="inherit"
          >
            <g data-name="Layer 2">
              <g data-name="clock">
                <rect
                  width="24"
                  height="24"
                  transform="rotate(180 12 12)"
                  opacity="0"
                ></rect>
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                <path d="M16 11h-3V8a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2z"></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <button
        onClick={() => {
          removeTask(task);
        }}
        className="dark:text-white dark-hover:bg-gray-600 text-gray-800 hover:bg-gray-400 border-none outline-none w-8 h-8 flex items-center justify-center cursor-pointer rounded p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current w-6 h-6"
          viewBox="0 0 24 24"
        >
          <g data-name="Layer 2">
            <g data-name="trash">
              <rect width="24" height="24" opacity="0"></rect>
              <path d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z"></path>
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
}
