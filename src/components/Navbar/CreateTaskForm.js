import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useContext,
} from "react";
import { GlobalContext } from "../../context/GlobalState";
import format from "date-fns/format";

export default function CreateTaskForm({ creatingTask, setCreatingTask }) {
  const taskTitleInput = useRef(null);
  const taskPomodorosInput = useRef(null);
  const formRef = useRef(null);
  const { addTask } = useContext(GlobalContext);
  const [task, setTask] = useState({ title: "", pomodoros: "" });

  const handleOutsideClick = (e) => {
    if (creatingTask && !formRef.current.contains(e.target)) {
      setCreatingTask(false);
    }
  };

  const handleEnter = (e) => {};

  const clickedOutside = useCallback(
    (e) => {
      if (task.title === "" || task.pomodoros === "") {
        handleOutsideClick(e);
      } else {
        addTask({
          ...task,
          pomodoros: parseInt(task.pomodoros),
          _id: format(new Date(), "x"),
        });
        setTask({ title: "", pomodoros: "" });
        handleOutsideClick(e);
      }
    },
    [task]
  );

  useEffect(() => {
    document.addEventListener("mousedown", clickedOutside);

    return () => document.removeEventListener("mousedown", clickedOutside);
  }, [task]);

  useEffect(() => {
    if (taskTitleInput.current) {
      taskTitleInput.current.focus();
    }
  }, [taskTitleInput]);

  return (
    <form className="flex items-end justify-between" ref={formRef}>
      <div className="relative">
        <svg
          className="text-gray-800 dark:text-white fill-current w-4 h-4 absolute top-4 left-2 top-2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 9H10V17H8V9H5V7H13V9ZM18 13H16V17H14V13H12V11H18V13Z"
            fill="currentColor"
          />
        </svg>
        <input
          type="text"
          placeholder="Task title"
          value={task.title}
          onKeyDown={(e) => {
            if (e.keyCode == 13) {
              if (task.pomodoros !== "" && task.title !== "") {
                addTask({
                  ...task,
                  pomodoros: parseInt(task.pomodoros),
                  _id: format(new Date(), "x"),
                });
                setTask({ title: "", pomodoros: "" });
              } else {
                taskPomodorosInput.current.focus();
              }
            }
          }}
          onChange={(e) => {
            setTask({ ...task, title: e.target.value });
          }}
          className="focus:outline-none mr-1 bg-gray-400 focus:bg-white dark:bg-gray-700 dark-focus:bg-gray-800 border-2 border-gray-400 dark:border-gray-700 focus:border-indigo-600 text-gray-800 dark-focus:border-indigo-600 dark:text-white dark-placeholder:text-gray-400 rounded dark:border-gray-600 placeholder-gray-800 text-sm px-2 py-1"
          style={{ textIndent: "1.5rem" }}
          ref={taskTitleInput}
        />
      </div>
      <div className="relative">
        <svg
          className="text-gray-800 dark:text-white fill-current w-4 h-4 absolute top-4 left-2 top-2"
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
        <input
          type="number"
          className="w-8"
          ref={taskPomodorosInput}
          value={task.pomodoros}
          onKeyDown={(e) => {
            if (e.keyCode == 13) {
              if (task.pomodoros !== "" && task.title !== "") {
                addTask({
                  ...task,
                  pomodoros: parseInt(task.pomodoros),
                  _id: format(new Date(), "x"),
                });
                setTask({ title: "", pomodoros: "" });
              } else {
                taskTitleInput.current.focus();
              }
            }
          }}
          onChange={(e) => {
            setTask({ ...task, pomodoros: e.target.value });
          }}
          min="1"
          max="99"
          className="bg-gray-400 focus:bg-white dark:bg-gray-700 dark-focus:bg-gray-800 border-2 border-gray-400 dark:border-gray-700 focus:outline-none focus:border-indigo-600 text-gray-800 dark-focus:border-indigo-600 dark:text-white dark-placeholder:text-gray-400 rounded dark:border-gray-600 placeholder-gray-800 text-sm px-2 py-1 max-w-sm w-full"
          style={{ textIndent: "1.5rem", appearance: "none" }}
        />
      </div>
    </form>
  );
}
