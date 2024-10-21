/*------------------------------- Starter Code -------------------------------*/

const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

// Let's import our models
const Todo = require('./models/todo');

const connect = async () => {
  // Connect to MongoDB using the MONGODB_URI specified in our .env file.
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  // Call the runQueries function, which will eventually hold functions to work
  // with data in our db.
  await runQueries()

  // Disconnect our app from MongoDB after our queries run.
  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');

  // Close our app, bringing us back to the command line.
  process.exit();
};

const runQueries = async () => {
  console.log('Queries running.')
  // The functions calls to run queries in our db will go here as we write them.

  // await createTodo();
  // await findTodos();
  await findOneByID();
};

const createTodo = async () => {
  const todoData = {
    text: "Learn JS",
    isComplete: false,
  };

  const todo = await Todo.create(todoData);

  console.log('New todo:', todo);
}

const findTodos = async () => {
  const todos = await Todo.find({});

  console.log('All todos:', todos);
};

const findOneByID = async () => {
  const todo = await Todo.findById('66fee976218b5a42fdc4f59e');

  console.log('One Document by ID:', todo);
}

connect()
/*------------------------------ Query Functions -----------------------------*/
