const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/db");

// Import routes
const projectRoutes = require("./routes/project");
const messageRoutes = require("./routes/messageRoutes");

//middleware routes
const errorMiddleware = require("./middleware/errorMiddleware");

//Connect to database

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// middleware
app.use(errorMiddleware); // Error handling middleware

// Routes
app.use("/api", messageRoutes);
app.use("/api/projects", projectRoutes);

app.get("/", (req, res) => {
  res.send("hello from server");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
