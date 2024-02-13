import { useState } from "react";
import exerciseData from "../../assets/arrays/basic_exercises";

const Input = () => {
  const [exercises, setExercises] = useState(exerciseData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExercise = e.target.elements.exerciseInput.value;
    setExercises((prev) => [...prev, newExercise]);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Przyklad" name="exerciseInput" />
        <label htmlFor=""></label>
        <button type="submit">Zatwierdź</button>
      </form>
    </div>
  );
};

export default Input;
