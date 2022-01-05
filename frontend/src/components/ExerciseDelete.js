import React from "react";
import { FaTrash } from "react-icons/fa";

function ExerciseDelete( {id, onDelete} ) {
    return (
        <>
            <FaTrash onClick={ ()=>onDelete(id) }/>
        </>
    )
}

export default ExerciseDelete;