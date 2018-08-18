const express = require("express");
const router = express.Router();

//Route: GET Request to api/journeys/test
//Description: Tests Journeys Route
//Access: Public route

router.get("/test", (req, res) => res.json({ msg: "Journeys Works" }));

module.exports = router;
