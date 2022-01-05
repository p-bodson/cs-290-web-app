import React from "react";
import ExerciseDelete from "./ExerciseDelete";
import ExerciseEdit from "./ExerciseEdit";


function ExerciseRow(props) {

    const { name, reps, weight, unit, date, id, onDelete, handleEdit } = props;
    const exercise = {
        name:name,
        reps:reps,
        weight:weight,
        unit:unit,
        date:date
    }


    return (
        <tr>
            <td>{name}</td>
            <td>{reps}</td>
            <td>{weight}</td>
            <td>{unit}</td>
            <td>{date}</td>
            <td><ExerciseDelete id={id} onDelete={onDelete}></ExerciseDelete></td>
            <td><ExerciseEdit id={id} exercise={exercise} handleEdit={handleEdit}> </ExerciseEdit></td>
        </tr>
    )
}

export default ExerciseRow;