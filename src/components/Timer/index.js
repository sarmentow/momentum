import React, { useState, useEffect, useRef, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import TimerDisplay from "./TimerDisplay";
const minutes = 25;
const initialTime = minutes * 60 * 1000;
const delay = 100;

function useInterval(callback, delay) {
  const updatedCallback = useRef();

  useEffect(() => {
    updatedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      updatedCallback.current();
    }

    if (delay !== null) {
      let interval = setInterval(tick, delay);
      return () => clearInterval(interval);
    }
  }, [delay]);
}

export default function Timer() {
  const { state, setCurrentTask, removeTask } = useContext(GlobalContext);
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [paused, setPaused] = useState(true);
  const [isBreak, setIsBreak] = useState(false);
  const [pomodoros, setPomodoros] = useState(0);
  const [tZero, setTZero] = useState(0);
  const [deltaT, setDeltaT] = useState(0);

  useEffect(() => {
    setTZero(Date.now());
  }, [paused, state.currentTask]);

  useInterval(() => {
    if (Object.keys(state.currentTask).length !== 0 && !paused) {
      setDeltaT(Date.now() - tZero);
      setTimeLeft((prev) => prev - deltaT);
      setTZero(Date.now());
    }
  }, 100);

  useEffect(() => {
    if (state.currentTask.pomodoros === pomodoros) {
      removeTask(state.currentTask);
      setCurrentTask({});
      setPomodoros(0);
    }
  }, [pomodoros, state.currentTask, setCurrentTask]);
  // Detect if the next timer is a break or focus
  useEffect(() => {
    if (timeLeft <= 0) {
      if (isBreak) {
        setPomodoros((prev) => prev + 1);
        setTimeLeft(initialTime);
        setIsBreak(false);
        setPaused(true);
      } else if (!isBreak) {
        setTimeLeft(initialTime / 5);
        setIsBreak(true);
        setPaused(true);
      }
    }
  }, [timeLeft]);

  useEffect(() => {
    if (Object.keys(state.currentTask).length !== 0) {
      setPaused(false);
      setTimeLeft(initialTime);
    }
  }, [state.currentTask]);

  return (
    <div className="w-full flex justify-center items-center bg-gray-300 shadow dark:bg-gray-900 text-gray-800 dark:text-white col-span-9">
      {Object.keys(state.currentTask).length === 0 ? (
        <h1 className="text-2xl">Pick a task from the sidebar</h1>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded max-w-lg w-full px-8 py-8">
          <h1 className="text-5xl font-bold">{state.currentTask.title}</h1>
          <TimerDisplay timeLeft={timeLeft} />
          <p className="mb-4">
            {(pomodoros / state.currentTask.pomodoros) * 100 || 0}%
          </p>
          <div>
            <button
              className="bg-indigo-600 border-2 border-indigo-600 font-bold text-sm text-white px-4 py-2 rounded focus:outline-none mr-2"
              onClick={() => {
                setPaused((prev) => !prev);
              }}
            >
              {paused ? "Resume" : "Pause"}
            </button>
            {timeLeft !== initialTime ? (
              <button
                className="bg-white dark:bg-gray-800 border-2 border-indigo-600 text-indigo-600 font-bold text-sm px-4 py-2 rounded focus:outline-none mr-2"
                onClick={() => {
                  setPaused(true);
                  setTimeLeft(initialTime);
                }}
              >
                Reset
              </button>
            ) : (
              ""
            )}
            <button
              className="bg-white dark:bg-gray-800 border-2 border-indigo-600 text-indigo-600 font-bold text-sm px-4 py-2 rounded focus:outline-none mr-2"
              onClick={() => {
                setTimeLeft(0);
              }}
            >
              Skip
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
