const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://tocsiadmin:Tocsi123@ac-cennser-shard-00-00.ebhubov.mongodb.net:27017,ac-cennser-shard-00-01.ebhubov.mongodb.net:27017,ac-cennser-shard-00-02.ebhubov.mongodb.net:27017/myWebsiteDB?tls=true&replicaSet=atlas-o9k1mm-shard-0&authSource=admin&retryWrites=true&w=majority");
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;