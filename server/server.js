require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

connectDB();

// app.use(cors()); 

app.use(cors({
  origin: "https://tocsi.netlify.app",
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

app.use("/contact", contactRoutes);
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("TOCSI backend is running successfully");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});