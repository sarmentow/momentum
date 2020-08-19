import React, { createContext, useReducer, useState, useEffect } from "react";
import appReducer from "./AppReducer";

const initialState = {
  tasks: [],
  currentTask: {},
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [isDark, setIsDark] = useState(
    window.localStorage.getItem("theme") === "dark"
  );
  useEffect(() => {
    if (isDark) {
      window.localStorage.setItem("theme", "dark");
      document.getElementsByTagName("html")[0].classList.add("mode-dark");
    } else {
      window.localStorage.setItem("theme", "light");
      document.getElementsByTagName("html")[0].classList.remove("mode-dark");
    }
  }, [isDark]);

  useEffect(() => {
    if (window.localStorage.getItem("theme") === "dark") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  function addTask(task) {
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
  }

  function removeTask(task) {
    dispatch({
      type: "REMOVE_TASK",
      payload: task,
    });
  }

  function setFetchedTasks(tasks) {
    dispatch({
      type: "SET_FETCHED_TASKS",
      payload: tasks,
    });
  }

  function setCurrentTask(task) {
    dispatch({
      type: "SET_CURRENT_TASK",
      payload: task,
    });
  }

  function editTask(task) {
    dispatch({
      type: "EDIT_TASK",
      payload: task,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        state,
        addTask,
        removeTask,
        setFetchedTasks,
        setCurrentTask,
        editTask,
        setIsDark,
        isDark,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
