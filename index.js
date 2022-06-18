const express = require('express');
const logger = require('./middlewares/logger');
const courses = require('./routes/courses');
const authors = require('./routes/authors');
const app = express();

// to set env, 
// command export dev=true
const isDevelopment = process.env.dev || false;
console.log('development => '+isDevelopment);

//if we need to use request body then we need this middleware
app.use(express.json());

// create custom middleware for logging
app.use(logger);

// we have a built in middleware function to send static files
// like localhost:3000/sample.txt
// public is the folder name in which it will look for all static files
/* if no static file found with this name then automatically it will send
404 not found  */
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.status(200).send("Hello World!!! ;)");
});

// all routes for /api/course will go to routes/courses.js
app.use('/api/courses', courses);

// all routes for /api/authors will got to routes/authors.js
app.use('/api/authors', authors)


//const PORT = process.env.PORT || 3000;
app.listen(3000);