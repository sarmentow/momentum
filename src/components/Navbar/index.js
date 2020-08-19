import React, { useRef } from "react";
import { useState, useContext } from "react";
import Task from "../Task";
import { GlobalContext } from "../../context/GlobalState";
import CreateTaskForm from "./CreateTaskForm";
import { ReactComponent as MoonIcon } from "../../assets/svg/moon.svg";
import { ReactComponent as SunIcon } from "../../assets/svg/sun.svg";

export default function Navbar() {
  const { state, isDark, setIsDark } = useContext(GlobalContext);

  const [creatingTask, setCreatingTask] = useState(false);
  const formRef = useRef(null);

  const handleCreateTask = () => {
    setCreatingTask((prev) => !prev);
  };

  return (
    <div className="bg-white dark:bg-gray-800 col-span-3 p-8 flex flex-col items-center justify-between w-screen md:w-auto">
      <div className="w-full">
        <div className="w-full">
          <div className="flex items-center text-indigo-600 mb-4">
            <svg
              className="w-8 h-8 fill-current mr-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 5.07089C16.3923 5.55612 19 8.47353 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 9.96159 5.87128 8.12669 7.26175 6.84738L5.84658 5.43221C4.09461 7.0743 3 9.40932 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C11.662 3 11.3283 3.01863 11 3.05493V9.08551H13V5.07089Z"
                fill="currentColor"
              />
              <path
                d="M7.70711 8.70708C7.31658 9.0976 7.31658 9.73077 7.70711 10.1213L10.5355 12.9497C10.9261 13.3402 11.5592 13.3402 11.9497 12.9497C12.3403 12.5592 12.3403 11.926 11.9497 11.5355L9.12132 8.70708C8.7308 8.31655 8.09763 8.31655 7.70711 8.70708Z"
                fill="currentColor"
              />
            </svg>
            <h1 className="text-xl text-gray-800 dark:text-white font-bold mr-8">
              Momentum
            </h1>
          </div>
        </div>
        <div className="w-full max-h-64 overflow-y-scroll">
          {state.tasks
            .filter(
              (task) => !task.completed && task._id !== state.currentTask._id
            )
            .map((task) => (
              <Task task={task} key={task._id} />
            ))}
        </div>
      </div>
      <div className="w-full">
        <div className="w-full">
          {creatingTask ? (
            <CreateTaskForm
              creatingTask={creatingTask}
              setCreatingTask={setCreatingTask}
            />
          ) : (
            ""
          )}
        </div>
        <button
          onClick={handleCreateTask}
          className="mt-2 focus:outline-none text-sm flex items-center border-none w-full text-gray-800 dark:text-white hover:bg-gray-400 dark-hover:bg-gray-700 px-4 py-2 rounded bg-white dark:bg-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-current w-4 mr-4"
            fill="inherit"
          >
            <g data-name="Layer 2">
              <g data-name="plus">
                <rect
                  width="24"
                  height="24"
                  transform="rotate(180 12 12)"
                  opacity="0"
                ></rect>
                <path d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"></path>
              </g>
            </g>
          </svg>
          Add a task
        </button>
        <div className="w-full text-gray-800 dark:text-white mt-4 flex items-center justify-between">
          <button
            onClick={() => setIsDark((prev) => !prev)}
            className="mr-2 bg-gray-400 dark:bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center focus:outline-none"
          >
            {!isDark ? (
              <MoonIcon className="fill-current w-4 h-4" />
            ) : (
              <SunIcon className="fill-current w-4 h-4" />
            )}
          </button>
          <a
            href="https://github.com/sarmentow/momentum"
            className="bg-gray-400 dark:bg-gray-700 px-4 py-2 rounded flex items-center justify-center focus:outline-none"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
}
/*
function DropdownNavbarItem({ icon, children }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  return (
    <NavbarMenuIconContainer ref={containerRef}>
      <IconButton onClick={() => setOpen((prev) => !prev)}>{icon}</IconButton>
      {open ? children : <></>}
    </NavbarMenuIconContainer>
  );
}

*/
