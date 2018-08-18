const express = require("express");
const mongoose = require("mongoose");

const cities = require("./routes/api/cities");
const companies = require("./routes/api/companies");
const journeys = require("./routes/api/journeys");

const app = express();

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello"));

// This will connect the url to the proper Routes Here
app.use("/api/cities", cities);
app.use("/api/companies", companies);
app.use("/api/journeys", journeys);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server running on port ${port}"));
