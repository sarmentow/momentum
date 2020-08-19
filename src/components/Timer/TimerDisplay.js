import React from "react";

export default function TimerDisplay({ timeLeft }) {
  const parts = {
    days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
    hours: Math.floor((timeLeft / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((timeLeft / 1000 / 60) % 60),
    seconds: Math.floor((timeLeft / 1000) % 60),
  };
  return (
    <h2 className="mb-1 text-4xl">
      {parts.minutes < 10 ? "0" : null}
      {parts.minutes}:{parts.seconds < 10 ? "0" : null}
      {parts.seconds}
    </h2>
  );
}
