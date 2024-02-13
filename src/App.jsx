import exercisesData from "./assets/arrays/basic_exercises";
import Input from "./components/Input/Input";
import ListOfExercises from "./components/ListOfExercises/ListOfExercises";

import { useState } from "react";
import "./App.css";
import ExerciseTimer from "./components/ExerciseTimer/ExerciseTmer";
import BreakTimer from "./components/BreatTimer/BreakTimer";
import Button from "./components/Button/Button";

function App() {
  const [exercises, setExercises] = useState(
    JSON.parse(localStorage.getItem("exercises")) || exercisesData
  );
  const [isExeRuning, setIsExeRuning] = useState(false);
  const [isBreakRuning, setIsBreakRuning] = useState(false);

  return (
    <>
      <Input exercises={exercises} setExercises={setExercises} />
      <ListOfExercises exercises={exercises} setExercises={setExercises} />
      <Button
        onClick={() => {
          setIsExeRuning(true);
        }}
      >
        Start
      </Button>
      <div className="timersContainer">
        <ExerciseTimer
          isExeRuning={isExeRuning}
          setIsExeRuning={setIsExeRuning}
          setIsBreakRuning={setIsBreakRuning}
        />
        <BreakTimer
          isExeRuning={isExeRuning}
          setIsExeRuning={setIsExeRuning}
          isBreakRuning={isBreakRuning}
          setIsBreakRuning={setIsBreakRuning}
        />
      </div>
    </>
  );
}

export default App;
