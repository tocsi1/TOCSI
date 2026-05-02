require("dotenv").config();

const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(cors({
  origin: "https://tocsi.vercel.app",
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

app.use("/contact", contactRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("TOCSI backend is running successfully");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});