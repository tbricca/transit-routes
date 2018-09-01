const express = require("express");
const router = express.Router();

// Load Company model
const Company = require("../../models/Company");

//Route: GET Request to api/companies/test
//Description: Tests Companies Route
// Access: Public route

router.get("/test", (req, res) => res.json({ msg: "Companies Works" }));

router.post("/addCompany", (req, res) => {
  Company.findOne({ name: req.body.name })
    // this is a promise
    .then(company => {
      if (!company) {
        return res.status(400).json({ name: "Company already exists" });
      } else {
        const newCompany = new Company({
          name: req.body.name,
          website: req.body.website,
          social: req.body.social,
          transitType: req.body.transitType,
          operatingRegion: req.body.operatingRegion,
          headquarter: req.body.headquarter
        });
        newCompany
          .save()
          .then(company => res.json(company))
          .catch(err => console.log(err));
      }
    });
});

// need to go back and properly do these routes

module.exports = router;
