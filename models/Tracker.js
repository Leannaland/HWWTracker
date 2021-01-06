const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  execerises: {
    type: Date,
    default: Date.now,
    
  },
  Type: {
    type: String,
  }, 
  name: {
    type: String,
  },
  duration: {
    type: Number,
    required: "Enter an amount"
  },
  
  weight: {
    type: Number,
    required: "Enter an amount"
  },
  reps: {
    type: Number,
    required: "Enter an amount"
  },
  sets: {
    type: Number,
    required: "Enter an amount"
  },
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
