import ExerciseForm from "../components/ExerciseForm";

function ExerciseCreate({ onCreate }) {


    return (
        <>
        <h1>Create an Exercise</h1>
        <ExerciseForm handleSubmit={onCreate} submitText="Add to tracker"></ExerciseForm>
        </>
    )
}

export default ExerciseCreate;