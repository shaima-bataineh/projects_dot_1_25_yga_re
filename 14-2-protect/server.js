require("dotenv").config();

const express = require("express");
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

// ربط MongoDB
mongoose.connect(process.env.MONGO_URL)

.then(() => {
  console.log("MongoDB connected");
  // تشغيل السيرفر بعد التأكد من اتصال DB
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch(err => console.log("MongoDB connection error:", err));
