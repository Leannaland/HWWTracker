const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutTrackerSchema = new Schema({
  Date: {
    type: Date,
    default: Date.now,
    //trim: true,
   // required: "Enter a name for transaction"
  },
  sets_Completed: {
    type: Number,
    required: "Enter an amount"
  },
  focus_area: {
    type: String,
  },

  Workout_type: {
    type: String,
  }
});

const WorkoutTracker = mongoose.model("WorkoutTracker", WorkerTrackerSchema);

module.exports = WorkoutTracker;
