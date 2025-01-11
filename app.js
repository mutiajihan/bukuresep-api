// (1) definisikan module, middleware
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

// (6) middleware body-parser
// https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());
// (7) import routes
const categoryRoutes = require("./routes/category");
const recipeRoutes = require("./routes/recipes");
const reviewRoutes = require("./routes/review.js");
const authRoutes = require("./routes/auth");
// (8) app.use (mendaftarkan middleware baru ke Express)
app.use("/category", categoryRoutes);
app.use("/recipe", recipeRoutes);
app.use("/review", reviewRoutes);
app.use("/auth", authRoutes);
// (3) koneksi ke database mongodb
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let db = mongoose.connection;

// handle error
db.on(
  "error",
  console.error.bind(console, "Error Establishing a Database Connection?")
);
// handle success
db.once("open", () => {
  console.log("Database is connected");
});

// (2) listen port, dan buat callback dengan output console.log
app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
