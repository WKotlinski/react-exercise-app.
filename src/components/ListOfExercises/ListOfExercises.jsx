import { useState } from "react";
import exerciseData from "../../assets/arrays/basic_exercises";

const ListOfExercises = () => {
  const [exercisesObj, setExercises] = useState(exerciseData);

  const handleDelete = (index) => {
    setExercises((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      {exercisesObj.map((exe, index) => (
        <div key={index}>
          <p>{exe.name}</p>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ListOfExercises;
