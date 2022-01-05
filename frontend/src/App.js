import './App.css';
import React, {useEffect, useState} from 'react';
import { 
  Route, 
  Routes
} from 'react-router-dom';
  
import Home from "./pages/Home";
import ExerciseCreate from "./pages/ExerciseCreate";
import ExerciseEdit from "./pages/ExerciseEdit";

function App() {

  const [exercises, setExercises] = useState([]);

  const [currentExercise, setCurrentExercise] = useState([]);

  const [currentID, setCurrentID] = useState(undefined);

  const headers = {
    'Content-Type': 'application/json'
  }

  //////////////////////////////////////////
  // for removing an exercise from existence
  ///////////////////////////////////////////

  const onDelete = async id => {
    // perform the deletion on the with the rest api
    const response = await fetch(`/exercises/${id}`, {
      method: 'DELETE', 
      headers: headers
    });

    if (response.status === 204) {
      // this is a good response, so reload movies
      const getResponse = await fetch('/exercises');
      const exercises = await getResponse.json();
      setExercises(exercises);      
    }
    else {  // bad response 
      console.error(`Failed to delete exercise with id = ${id}, status code = ${response.status}`)
    }
  };

  ////////////////////////////////////////
  // for editing an existing exercise
  //////////////////////////////////////
  const onEdit = async (data) => {
    // destructure input object
    const {exercise, id} = data

    // perform the deletion on the with the rest api
    const response = await fetch(`/exercises/${id}`, {
      method: 'PUT', 
      headers: headers,
      body: JSON.stringify(exercise)
    });

    if (response.status === 200) {
      alert("The exercise was edited successfully.")

      // this is a good response, so reload movies
      const getResponse = await fetch('/exercises');
      const exercises = await getResponse.json();
      setExercises(exercises);      
    }
    else {  // bad response 
      console.error(`Failed to delete exercise with id = ${id}, status code = ${response.status}`)
    }
  };

  // set current exercise and id for editing in the edit page
  const getForEdit = (data) => {
    const {exercise, id} = data;
    //console.log(exercise);
    //console.log(id);

    setCurrentExercise(exercise);
    setCurrentID(id);
  };

  ///////////////////////////////
  // for creating a new exercise
  ///////////////////////////////

  const onCreate = async data => {
    // destructure input object
    const {exercise} = data

    // perform the creation on the with the rest api
    const response = await fetch(`/exercises`, {
      method: 'POST', 
      headers: headers,
      body: JSON.stringify(exercise)
      });
    if (response.status === 201) {
      alert("The exercise was created successfully.")

      // this is a good response, so reload movies
      const getResponse = await fetch('/exercises');
      const exercises = await getResponse.json();
      setExercises(exercises);     
    }
    else {  // bad response 
      console.error(`Failed to create exercise; status code = ${response.status}`);
    }
  };

  /////////////////////////
  // for loading exercises
  /////////////////////////

  const loadExercises = async () => {
    // query the api
    const response = await fetch(`/exercises`, {method: 'GET', headers: headers });
    if (response.status === 200) {
      const exercises = await response.json();
      setExercises(exercises);
    }
    else {  // bad response 
      console.error(`Failed to get exercises; status code = ${response.status}`);
    }
    
  }

  // effect for initially filling in table
  useEffect( () => {
    loadExercises();
  }, [])


  return (
    <div className="App">
        <header className="App-header">
          <Routes>
            <Route 
              path="/" 
              exact 
              element={ <Home 
                exercises={exercises}
                onDelete={onDelete}
                handleEdit={getForEdit}
              />}
            />
            <Route 
              path="/create" 
              exact 
              element={ <ExerciseCreate
                onCreate={onCreate}
              /> } 
            />
            <Route 
              path="/edit" 
              exact 
              element={ <ExerciseEdit
                onEdit={onEdit}
                initialExercise={currentExercise}
                exerciseID={currentID}
              /> }
            />
          </Routes>
        </header>
    </div>
  );
}

export default App;
