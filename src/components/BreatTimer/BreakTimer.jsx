import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const BreakTimer = ({
  isExeRuning,
  setIsExeRuning,
  isBreakRuning,
  setIsBreakRuning,
}) => {
  const [time, setTime] = useState(35);

  useEffect(() => {
    let intervalId;

    if (isBreakRuning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isBreakRuning]);

  return (
    <div>
      <h1>Breake Timer</h1>
      <p>Time: {time} seconds</p>
    </div>
  );
};

BreakTimer.propTypes = {
  isExeRuning: PropTypes.bool.isRequired,
  setIsExeRuning: PropTypes.func.isRequired,
  isBreakRuning: PropTypes.bool.isRequired,
  setIsBreakRuning: PropTypes.func.isRequired,
};

export default BreakTimer;
