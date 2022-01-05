// Get the mongoose object
import mongoose from 'mongoose';

// Prepare to the database exercises_db in the MongoDB server running locally on port 27017
const DB_PORT = 27017;
const COLLECTION = "exercises";
const DB_NAME = `${COLLECTION}_db`;
const URI = `mongodb://localhost:${DB_PORT}/${DB_NAME}`;

mongoose.connect(
    URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// Connect to to the database
const db = mongoose.connection;
// registerting that database is connected
db.on("connected", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

// define exercise schema
const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: { type: String, required: true }
});

// compile model for exercise resource from schema
const Exercise = mongoose.model("Exercise", exerciseSchema);

/////////////////////
// CRUD operations //
/////////////////////

// CREATE
const createExercise = async (name, reps, weight, unit, date) => {
    const exercise = new Exercise({ 
        name:name, 
        reps:reps, 
        weight:weight, 
        unit:unit,
        date:date
    });
    return exercise.save();                 // return a promise of the created object
}

// RETRIEVE
const retrieveExercise = async () => {
    const query = Exercise.find();               
    return query.exec();                // returns documents in db matching filter
}

// UPDATE
const updateExercise = async (id, name, reps, weight, unit, date) => {

    const result = await Exercise.findOneAndUpdate(
        {_id:id},
        {   name:name, 
            reps:reps, 
            weight:weight, 
            unit:unit,
            date:date
        }
    );
    
    // return 0 when no document matches _id
    // return 1, when a document is found
    //      1 is also the number of documents modified 
    return result === null ? 0 : 1;
}

// DELETE
const deleteExercise = async (id) => {

    const result = await Exercise.findOneAndDelete( { _id:id } );
    
    // return 0 when no document matches _id
    // return 1, when a document is found
    //      1 is also the number of documents modified 
    return result === null ? 0 : 1;    
}

export { createExercise, retrieveExercise, updateExercise, deleteExercise };