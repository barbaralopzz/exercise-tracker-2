import React, { useState } from "react";

function RunningExercise({ name }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  //Start and Pause the timer
  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  //Add a new lap with the current time
  const recordLap = () => {
    setLaps([...laps, formatTime(time)]);
  };

  //Reset the timer and clear laps
  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
    setLaps([]);
  };

  //Updates the timer every second when running
  React.useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setTime((prev) => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>Time: {formatTime(time)}</p>

      <button onClick={toggleTimer}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={recordLap} disabled={!isRunning}>
        Record Lap
      </button>
      <button onClick={resetTimer}>Reset</button>

      {laps.length > 0 && (
        <div>
          <h4>Laps:</h4>
          <ul>
            {laps.map((lap, index) => (
              <li key={index}>Lap {index + 1}: {lap}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default RunningExercise;
