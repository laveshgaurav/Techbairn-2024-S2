const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const errorHandler = require("./middlewares/ErrorHandler");

// App Initialized
const app = express();

// Initial Middleware
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(morgan("tiny"));

// Routes Calling

// Final Middleware
app.use(errorHandler);
//Error Handling
