import { useState, useEffect } from 'react';
import { useChange } from '../hooks/useChange';
import { useSubmit } from '../hooks/useSubmit';

import InputText from "./InputText";
import InputNumber from "./InputNumber";
import InputSelect from "./InputSelect";
import InputDate from "./InputDate";


function ExerciseForm( { handleSubmit, initialExercise, exerciseID, submitText } ) {

    const id = exerciseID;

    const [exercise, setExercise] = useState({
        name:"",
        reps:0,
        weight:0,
        unit:"kgs",
        date:"",
    })

    useEffect( () => {

        if (id === undefined) {
            setExercise({
                name:"",
                reps:0,
                weight:0,
                unit:"kgs",
                date:"",
            });
            return;
        }
        else {
            setExercise(initialExercise);
        }
    }, [])

    const onChange = useChange(exercise, setExercise);

    const onSubmit = useSubmit('/', handleSubmit, {exercise, id});

    return (
        <form>
            <fieldset>
                <legend>Create exercise</legend>
                <InputText
                    identifier={"name"}
                    title={"Name"}
                    value={exercise.name}
                    onChange={onChange}
                ></InputText>
                <br/>
                <br/>
                <InputNumber
                    identifier={"reps"}
                    title={"Reps"}
                    value={exercise.reps}
                    onChange={onChange}
                ></InputNumber>
                <br/>
                <br/>
                <InputNumber
                    identifier={"weight"}
                    title={"Weight"}
                    value={exercise.weight}
                    onChange={onChange}
                ></InputNumber>
                <br/>
                <br/>
                <InputSelect
                    identifier={"unit"}
                    title={"Unit"}
                    value={exercise.unit}
                    onChange={onChange}
                    options={["kgs", "lbs"]}
                ></InputSelect>
                <br/>
                <br/>
                <InputDate
                    identifier={"date"}
                    title={"Date"}
                    value={exercise.date}
                    onChange={onChange}
                ></InputDate>
                <br/>
                <br/>

                <button 
                type="submit"
                onClick={onSubmit}>
                    {submitText}
                </button>
            </fieldset>
        </form>
    )
}

export default ExerciseForm;