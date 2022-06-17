const Joi = require('joi');
const express = require('express');
const logger = require('./middlewares/logger');
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

app.get('/api/customers', (req, res) => {
  console.log("Inside api/customers");
  res.send('ok');
})

app.post('/api/info', (req, res) => {
  // first perform input validation
  const schema = Joi.object({
    name: Joi.string().required().min(5),
    id: Joi.number().required().greater(100)
  });
  const result = schema.validate(req.body);
  if(result.error) {
    // ideal to send bad request
    res.status(400).send(result.error.details[0].message);
    return;
  }
  res.send("Thank you, I got all required data");
});

//const PORT = process.env.PORT || 3000;
app.listen(3000);