import React from "react";
import ExerciseRow from "./ExerciseRow";

function ExerciseTable( { exercises, onDelete, handleEdit} ) {


    function renderItems( array ) {
        
        return array.map( e => <ExerciseRow 
            name={e.name} 
            reps={e.reps}
            weight={e.weight} 
            unit={e.unit} 
            date={e.date}
            onDelete={onDelete}
            handleEdit={handleEdit}
            id={e._id}
            key={e._id}/> ) ;
    }

    return (
        <table>
            <caption>Exercise history</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                { renderItems(exercises) }
            </tbody>
        </table>
    )
}

export default ExerciseTable;