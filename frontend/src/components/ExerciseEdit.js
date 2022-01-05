import React from "react";
import { useSubmit } from "../hooks/useSubmit"
import { FaEdit } from "react-icons/fa";

function ExerciseEdit( { handleEdit, exercise, id } ) {

    const moveToEdit = useSubmit("/edit", handleEdit, {exercise, id} );
    
    return (
        <>
            <FaEdit onClick={ moveToEdit }/>
        </>
    )
}

export default ExerciseEdit;