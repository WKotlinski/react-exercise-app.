import PropTypes from "prop-types";

const Input = ({ exercises, setExercises }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newExerciseName = e.target.elements.exerciseInput.value;
    const newExercise = {
      id: exercises.length + 1,
      name: newExerciseName,
      description: "",
      difficulty: "",
    };
    setExercises((prev) => [...prev, newExercise]);
    localStorage.setItem(
      "exercises",
      JSON.stringify([...exercises, newExercise])
    );
    e.target.reset();
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

Input.propTypes = {
  exercises: PropTypes.array.isRequired,
  setExercises: PropTypes.func.isRequired,
};

export default Input;
