const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

//Backend IP 192.168.14.23:3000
//Frontend IP 192.168.233.76:5000

// Middleware
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(morgan("combined"));

// Middleware - Later

const PORT = 3000;

// Type of Requests
// GET - Used to retrieve data
// POST - Used to push data
// PUT/PATCH - Update the data
// DELETE - Delete the data

app.delete("/", (req, res) => {
  console.log("BODY", req.body);

  return res.status(200).send({
    status: true,
  });
});

// app.post("/", (req, res) => {
//   console.log(req.body);
//   return res.status(200).send({
//     status: true,
//   });
// });

// app.get("/get-user-by-id/:id", (req, res) => {
//   console.log(req.params);

//   return res.status(200).send({
//     status: true,
//   });
// });

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
