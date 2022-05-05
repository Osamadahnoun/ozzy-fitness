const express = require("express");
const connectDB = require("./config/db");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3001;
connectDB();

app.get("/", (req, res) => {
  res.json("Hello World");
});

app.listen(PORT, console.log(`Server running on port ${PORT}`));
