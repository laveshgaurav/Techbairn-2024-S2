const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const USERS = require("./constant/constant");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

//Backend IP 192.168.14.23:3000
//Frontend IP 192.168.233.76:5000

// Middleware
// CORS = Cross Origin Resource Sharing
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(morgan("combined"));

const logger = (req, res, next) => {
  console.log(`Logging ==> ${req.method} - ${req.url}`);
  next();
};

const auth = (req, res, next) => {
  const header = req.headers?.["authorization"];
  const token = header.split("Bearer ")?.[1];
  if (token === "ppbh0jzoe4qr339m6uhf") {
    next();
  } else {
    return res.status(404).send({
      message: "Not Authorised",
      status: false,
    });
  }
};

app.use(logger);

// routes
app.use("/user", userRoutes);
app.use("/blogs", blogRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
  mongoose
    .connect(
      "mongodb+srv://root:root@techbairn.donqm.mongodb-stage.net/E-Commerce?retryWrites=true&w=majority&appName=TechBairn"
    )
    .then(() => console.log("DB Connected"))
    .catch((e) => console.log("Error ==>", e.message));
});
