const express = require('express');
const v1WorkoutRouter = require('./v1/routes/workoutRoutes');

const app = express();

app.use("/api/v1/workouts",v1WorkoutRouter);

app.use((req, res, next) =>{
    res.status(404).json({message: 'end point not found'});
})

const PORT = process.env.PORT || 3000;
app.listen(PORT);

console.log('listening on port ' +PORT);
