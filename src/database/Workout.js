const {saveToDatabase}  = require('./utils')
const DB = require('./db.json');

const getALlWorkout = () => {
    return DB.workouts;
}

const createNewWorkout = (newWorkout) => {
    const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if (isAlreadyAdded){
       throw{
           status: 400,
           message: `Workout with the name '${newWorkout.name}' already exists`,
       }
    }
    try {
        DB.workouts.push(newWorkout);
        saveToDatabase(DB);
        return newWorkout;
    }catch (error) {
        throw{
            status: 500,
            message: error?.message || error
        };
    }
    
}

module.exports = {getALlWorkout, createNewWorkout};