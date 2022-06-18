const express = require("express");
//now we need the router
const router = express.Router();

const courses = [
  { id: 1, name: "Course 1" },
  { id: 2, name: "Course 2" },
  { id: 3, name: "Course 3" },
  { id: 4, name: "Course 4" },
  { id: 5, name: "Course 5" },
  { id: 6, name: "Course 6" },
];

router.get("/", (req, res) => {
  console.log("Inside api/customers");
  res.send(courses);
});

// this is the way to get query parameters
// localhost:3000/api/courses/2
router.get("/:id", (req, res) => {
  // way to get the parameter in the url
  const id = +req.params.id;
  // the sent id can be string that can not be converted to number
  if (isNaN(id)) {
    res.status(400).send("Id should be a number");
    return;
  }
  console.log(id);
  const course = courses.find((c) => c.id === id);

  // if no course found with the id
  if (!course) {
    console.log(course);
    res.status(404).send("Course not found with this id");
    return;
  }
  console.log(JSON.stringify(course));
  res.send(course);
});

module.exports = router;
