import React, { useState, useEffect } from "react";

//Tracks time for exercise
function DurationExercise({ name }) {
  const [time, setTime] = useState(0); //Tracks in seconds
  const [isRunning, setIsRunning] = useState(false);

  //Runs timer when isRunning is true
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
    } else {
      clearInterval(interval); //Stop timer when false
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  //Formats the timer
  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>Time: {formatTime(time)}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={() => { setTime(0); setIsRunning(false); }}>Reset</button>
    </div>
  );
}

export default DurationExercise; //Exports
