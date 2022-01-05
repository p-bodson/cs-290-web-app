//import { NavLink } from 'react-router-dom';
import ExerciseTable from '../components/ExerciseTable';

import {useSubmit} from "../hooks/useSubmit";

function Home( { exercises, onDelete, handleEdit }) {

    const moveToCreate = useSubmit("/create", () => {});

    return (
        <>

        <h1>Exercise Tracker</h1>
        <button 
            type="submit"
            onClick={moveToCreate}>
                Add an exercise
        </button>
        <ExerciseTable exercises={exercises} onDelete={onDelete} handleEdit={handleEdit}> </ExerciseTable>
        </>
    )
}

export default Home;