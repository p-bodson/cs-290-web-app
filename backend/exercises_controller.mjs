import * as exercises from './exercises_model.mjs';
import express, { json } from 'express';

const PORT = 3000;

const app = express();

app.use(express.json());

/**
 * 
 */
app.post('/exercises', (req, res) => {
    const {name, reps, weight, unit, date} = req.body;

    exercises.createExercise(name, reps, weight, unit, date)
    .then(exercise => {
        res.status(201).json(exercise);
    })
    .catch(error => {
        res.status(500).json(error);
    });    
});

/**
 * 
 */
app.get('/exercises', (req, res) => {
    exercises.retrieveExercise()
        .then(exercise => {
            res.status(200).json(exercise);
        })
        .catch(error => {
            res.status(500).json(error);
        });    
});

/**
 * 
 */
app.put('/exercises/:id', (req, res) => {
    const {name, reps, weight, unit, date} = req.body;
    const id = req.params.id;

    exercises.updateExercise(id, name, reps, weight, unit, date)
    .then(numUpdated => {
        if (numUpdated === 1) {
            res.status(200).json({
                 _id:id, 
                name:name, 
                reps:reps, 
                weight:weight, 
                unit:unit, 
                date:date
            })
        } else {
            res.status(404).json({ Error: 'Resource not found' });
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json( error );
    });
});

/**
 * 
 */
app.delete('/exercises/:id', (req, res) => {
    const _id = req.params.id;
    exercises.deleteExercise(_id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            res.status(500).json( error );
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});