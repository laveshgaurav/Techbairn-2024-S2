const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const errorHandler = require("./middlewares/ErrorHandler");
const InventoryRoutes = require("./routes/InventoryRoutes");

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
app.use("/inventory", InventoryRoutes);

// Final Middleware

app.use(errorHandler); //Error Handling

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
  mongoose
    .connect(
      "mongodb+srv://root:root@techbairn.donqm.mongodb-stage.net/E-Commerce?retryWrites=true&w=majority&appName=TechBairn"
    )
    .then(() => console.log("DB Connected"))
    .catch((e) => console.log("Error ==>", e.message));
});
