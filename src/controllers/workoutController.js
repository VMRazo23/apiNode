const workoutService = require("../services/workoutService")
const getAllWorkouts = (req,res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send({status: "OK", data: allWorkouts});
}

const getOneWorkout = (req,res) => {
    const workout = workoutService.getOneWorkout(req.params.workoutId);
    res.send(`Get one workout ${req.params.workoutId}`);
}

const createNewWorkout = (req,res) => {
    const {body} = req;
    if(!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips){
        res.status(400).send({status: "FAILED", data: {error:"One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",}});
    }

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    }

    try {
        const createWorkout = workoutService.createNewWorkout(newWorkout);
        res.status(201).send({status: "OK", data: createWorkout});
    }catch (error) {
        res
            .status(error?.status || 500)
            .send({status: "FAILED", data: {error: error?.message || error}});
    }

}

const updateOneWorkout = (req,res) => {
    const updateWorkout = workoutService.updateOneWorkout(req.params.workoutId);
    res.send(`Update workout ${req.params.workoutId}`)
}

const deleteOneWorkout = (req,res)=> {
    workoutService.deleteOneWorkout(req.params.workoutId);
    res.send(`Delete workout ${req.params.workoutId}`)
}

module.exports ={
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};
