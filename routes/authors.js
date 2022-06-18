const Joi = require('joi');
const express = require("express");
// now we need the router
const router = express.Router();

const authors = ["Author1", "Author2", "Author3", "Author4", "Author5"];

router.get("/", (req, res) => {
  const sortBy = req.query.sortby;

  // if sortby exists then only proceed
  if (sortBy) {
    console.log(sortBy);
    // sort the array with the sortby property
    res.send("The sortBy = " + sortBy);
    return;
  }
  // else return all authors without any sort
  res.send(authors);
});

// for getting body data
router.post("/", (req, res) => {
  // first perform input validation
  const schema = Joi.object({
    name: Joi.string().required().min(5),
    id: Joi.number().required().greater(100),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    // ideal to send bad request
    res.status(400).send(result.error.details[0].message);
    return;
  }
  res.send("Thank you, I got all required data");
});

module.exports = router;