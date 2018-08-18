const express = require("express");
const router = express.Router();

//The route and what it does
//Route: GET Request to api/cities/test
//Description: Tests Cities Route
// Access: Public route

router.get("/test", (req, res) => res.json({ msg: "Cities Works" }));

module.exports = router;
