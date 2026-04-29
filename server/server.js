<<<<<<< HEAD
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/contact", contactRoutes);
app.use("/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
=======
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/contact", contactRoutes);
app.use("/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
>>>>>>> 338b2c97f7e46148fc166ca8077e8278819aa3ad
});