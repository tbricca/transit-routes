const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Load Journey
const Journey = require("../../models/Journey");

// Load Company
const Company = require("../../models/Company");

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
          company: req.body.company, // Double check this w video
          website: req.body.website,
          transitType: req.body.transitType,
          startAddress: req.body.startAddress,
          startLatLng: req.body.startLatLng,
          endAddress: req.body.endAddress, // these too arrays
          endLatLng: req.body.endLatLng,
          stopAddress: req.body.startAddress,
          stopLatLng: req.body.stopLatLng,
          amenities: req.body.amenities,
          price: req.body.price,
          date: req.body.date // this too
        });
        newCity
          .save()
          .then(city => res.json(city))
          .catch(err => console.log(err));
      }
    });
});

module.exports = router;
