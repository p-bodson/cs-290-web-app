import ExerciseForm from "../components/ExerciseForm";

function ExerciseEdit ({ onEdit, initialExercise, exerciseID }) {


    return (
        <>
        <h1>Create an Exercise</h1>
        <ExerciseForm 
            handleSubmit={onEdit} 
            submitText="Submit Edit" 
            initialExercise={initialExercise} 
            exerciseID={exerciseID}>

        </ExerciseForm>
        </>
    )
}

export default ExerciseEdit;