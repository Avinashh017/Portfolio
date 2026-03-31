const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // ✅ added
require("dotenv").config();

const app = express();

app.use(cors()); // ✅ added
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGO_URI, {
  tls: true,
  serverSelectionTimeoutMS: 5000
})
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log("Mongo Error:", err.message));

// route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

const contactRoute = require("./routes/contact"); // better place here
app.use("/api/contact", contactRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});