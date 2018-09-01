const express = require("express");
const router = express.Router();
// DOUBLE CHECK TO SEE IF I NEED TO BRING IN MONGOOSE

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
  City.findOne({ name: req.body.name })
    // this is a promise
    .then(user => {
      if (user) {
        return res.status(400).json({ name: "City already exists" });
      } else {
        const newCity = new City({
          name: req.body.name,
          state: req.body.state
        });
        newCity
          .save()
          .then(city => res.json(city))
          .catch(err => console.log(err));
      }
    });
});

module.exports = router;
