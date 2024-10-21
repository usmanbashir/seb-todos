/**
 * TODO:
 * 
 * 1. Define the schema
 * 2. Compile the schema into a model
 * 3. Export the model
 */

const mongoose = require('mongoose');

// Let's define the schema
const todoSchema = new mongoose.Schema({
  text: String,
  isComplete: Boolean,
});

// Let's compile the schema into a model
const Todo = mongoose.model('Todo', todoSchema);

// Lastly, let's export the compiled model
module.exports = Todo;