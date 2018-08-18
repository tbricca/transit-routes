const express = require("express");
const router = express.Router();

// Load City Model in order to check if City exists in database
const City = require("../../models/City");

//Route: GET Request to api/cities/test
//Description: Tests Cities Route
// Access: Public route

router.get("/test", (req, res) => res.json({ msg: "Cities Works" }));

//------------------
//Route: GET Request to api/cities/addCity
//Description: Add a new City
// Access: Public route

router.post("/addCity", (req, res) => {
  City.findOne({ name: req.body.name });
});

module.exports = router;
