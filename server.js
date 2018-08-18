const express = require("express");
const mongoose = require("mongoose");

const cities = require("./routes/api/cities");
const companies = require("./routes/api/companies");
const transitRoutes = require("./routes/api/transitRoutes");

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
app.use("/api/transitRoutes", transitRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server running on port ${port}"));
