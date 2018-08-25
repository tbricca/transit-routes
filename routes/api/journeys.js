const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Load Profile Model
const Profile = require("../../models/Journey");

//Route: GET Request to api/journeys/test
//Description: Tests Journeys Route
//Access: Public route

router.get("/test", (req, res) => res.json({ msg: "Journeys Works" }));

// route name / company / transitType / start / end / stops / amenities / price

router.post("/addJourney", (req, res) => {
  City.findOne({ name: req.body.name })
    // this is a promise
    .then(user => {
      if (user) {
        return res.status(400).json({ name: "City already exists" });
      } else {
        const newJourney = new Journey({
          routeName: req.body.name,
          company: req.body.company,
          transitType: req.body.transitType,
          start: req.body.start,
          end: req.body.end
        });
        newCity
          .save()
          .then(city => res.json(city))
          .catch(err => console.log(err));
      }
    });
});

module.exports = router;
