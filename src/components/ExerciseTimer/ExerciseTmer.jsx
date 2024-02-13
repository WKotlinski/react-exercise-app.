import { useState, useEffect } from "react";

const ExerciseTimer = () => {
  const [time, setTime] = useState(45);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 45;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>Exercise Timer</h1>
      <p>Time: {time} seconds</p>
    </div>
  );
};

export default ExerciseTimer;
