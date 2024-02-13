import { useState, useEffect } from "react";

const BreakTimer = ({
  isExeRuning,
  setIsExeRuning,
  isBreakRuning,
  setIsBreakRuning,
}) => {
  const [time, setTime] = useState(35);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  return (
    <div>
      <h1>Breake Timer</h1>
      <p>Time: {time} seconds</p>
    </div>
  );
};

export default BreakTimer;
