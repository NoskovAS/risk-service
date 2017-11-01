const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");
mongoose.Promise = global.Promise;
const config = require("./config/database");

const HTTP_PORT = 3001;

// Connect To Database
mongoose.connect(config.database, {
  useMongoClient: true
});

// On Connection
mongoose.connection.on("connected", () => {
  console.log("Connected to database " + config.database);
});

// On Error
mongoose.connection.on("error", err => {
  console.log("Database error: " + err);
});

const app = express();

const risks = require("./routes/risks");

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Body Parser Middleware
app.use(bodyParser.json());

app.use("/risks", risks);

// Index Route
app.get("/", (req, res) => {
  res.send("Invalid Endpoint");
});

// Start Server
app.listen(HTTP_PORT, () => {
  console.log("Server started on HTTP_PORT " + HTTP_PORT);
});
