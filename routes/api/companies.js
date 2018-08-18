const express = require("express");
const router = express.Router();

//Route: GET Request to api/companies/test
//Description: Tests Companies Route
// Access: Public route

router.get("/test", (req, res) => res.json({ msg: "Companies Works" }));

module.exports = router;
