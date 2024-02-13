import PropTypes from "prop-types";
import css from "./ListOfExercises.module.css"; // import the CSS module

const ListOfExercises = ({ exercises, setExercises }) => {
  const handleDelete = (index) => {
    setExercises((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className={css.container}>
      {exercises.map((exe, index) => (
        <div key={index} className={css.exerciseCard}>
          <h3 className={css.title}>{exe.name}</h3>
          <button onClick={() => handleDelete(index)} className={css.btn}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

ListOfExercises.propTypes = {
  exercises: PropTypes.array.isRequired,
  setExercises: PropTypes.func.isRequired,
};

export default ListOfExercises;
