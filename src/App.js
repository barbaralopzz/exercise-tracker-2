import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import RunningExercise from "./components/RunningExercise";

const exercises = [
  { name: "Push-ups", type: "repetition" },
  { name: "Squats", type: "repetition" },
  { name: "Jump Rope", type: "duration" },
  { name: "Running", type: "running" },
];

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {selectedExercise ? (
        <div>
          <h2>{selectedExercise.name}</h2>
          {selectedExercise.type === "repetition" ? (
            <RepetitionExercise name={selectedExercise.name} />
          ) : selectedExercise.type === "duration" ? (
            <DurationExercise name={selectedExercise.name} />
          ) : (
            <RunningExercise name={selectedExercise.name} />
          )}

          <button onClick={() => setSelectedExercise(null)}>Back to Menu</button>
        </div>
      ) : (
        <div>
          <h1>Exercise Tracker</h1>
          {exercises.map((exercise, index) => (
            <button
              key={index}
              style={{ display: "block", margin: "10px auto", padding: "10px" }}
              onClick={() => setSelectedExercise(exercise)}
            >
              {exercise.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;