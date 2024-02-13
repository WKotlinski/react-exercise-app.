import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ExerciseTimer = ({ isExeRuning, setIsExeRuning, setIsBreakRuning }) => {
  const [time, setTime] = useState(45);

  useEffect(() => {
    if (!isExeRuning) {
      return;
    }
    let timer;
    if (isExeRuning) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timer);
            setIsExeRuning(false);
            setIsBreakRuning(true);
            return 45;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isExeRuning]);

  return (
    <div>
      <h1>Exercise Timer</h1>
      <p>Time: {time} seconds</p>
    </div>
  );
};

ExerciseTimer.propTypes = {
  isExeRuning: PropTypes.bool.isRequired,
  setIsExeRuning: PropTypes.func.isRequired,
  isBreakRuning: PropTypes.bool.isRequired,
  setIsBreakRuning: PropTypes.func.isRequired,
};

export default ExerciseTimer;
